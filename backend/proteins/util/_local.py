import csv
import json
import os
import re
import traceback

import pandas as pd
import requests
import tablib
from django.utils.text import slugify

from repeatome.users.models import User
from references.models import Reference

from .. import forms
from ..forms import SpectrumForm
from proteins.models import (
    Organism,
    ProteinTFTF,
    ProteinTFCollection,
)
from ..util.helpers import getprot, zip_wave_data
from ..util.importers import import_chroma_spectra, text_to_spectra
from ..util.spectra_import import import_spectral_data
from ..validators import protein_sequence_validator

try:
    SUPERUSER = User.objects.filter(is_superuser=True).first()
except Exception:
    SUPERUSER = None


BASEDIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))


def get_nonan(obj, item):
    val = obj.get(item, None)
    if val is not None:
        if pd.isna(val):
            return None
    return val


def add_ref_to_prot(protein, doi, showexisting=False):
    ref, created = Reference.objects.get_or_create(doi=doi.strip())
    rf = 1 if created else 0
    protein.references.add(ref)
    if not protein.primary_reference:
        protein.primary_reference = ref
    protein.save()
    return rf


def importCSV(file=None):
    """
    mainly intended as an import function for the proteins in the NIC table
    """
    if file is None:
        url = "https://raw.githubusercontent.com/FPvisualization/fpvisualization.github.io/master/FPs.csv"
        df = pd.read_csv(url)
    else:
        df = pd.read_csv(file)

    ps = 0
    st = 0
    rf = 0
    for _i, prot in df.iterrows():
        if not ProteinTFTF.objects.filter(slug=slugify(prot.Name)).exists():
            print(f"importing {prot.Name}...")
            p = ProteinTFTF(
                gene=prot.Name,
                created_by=SUPERUSER,
            )
            p.save()
            ps += 1

        else:
            print(f"{prot.Name} already in database...")
            p = ProteinTFTF.objects.get(slug=slugify(prot.Name))

        try:
            if pd.isna(prot.DOI) or not prot.DOI.startswith("10"):
                continue
            for doi in prot.DOI.split(" "):
                if not (doi and doi.startswith("10")):
                    continue
                rf += add_ref_to_prot(p, doi)
        except Exception as e:
            # traceback.print_exc()
            print(f"error importing reference: {e}")

    print(f"{ps} ProteinTFs, {st} States, and {rf} References imported")

def importSeqs(file=None):
    if file is None:
        basedir = os.path.dirname(os.path.dirname(__file__))
        url = os.path.join(basedir, "_data/FPseqs.csv")
        df = pd.read_csv(url)
    else:
        df = pd.read_csv(file)

    rf = 0
    sq = 0
    for _i, prot in df.iterrows():
        if ProteinTFTF.objects.filter(name__icontains=prot.Name).count() == 1:
            p = ProteinTFTF.objects.get(name__icontains=prot.Name)
            if p.seq is None:
                p.seq = prot.AminoAcidSequence
                p.save()
                print(f"Added sequence to {prot.Name}")
                sq += 1
            else:
                seq = prot.AminoAcidSequence.upper()
                seq = "".join(seq.split())
                if p.seq.upper() != seq:
                    print(f"Non-matching sequence found for {prot.Name}!")
            try:
                if "dx.doi" in prot.Source:
                    doi = re.sub(r"^https?://(dx\.)?doi.org/", "", prot.Source)
                    rf += add_ref_to_prot(p, doi)
            except Exception as e:
                # traceback.print_exc()
                print(f"Error importing reference: {e}")

    print(f"{sq} Sequences added; {rf} References imported")


def create_collection(name="FPvis Collection", desc="ProteinTFs selected by Kurt Thorn at fpvis.org"):
    url = "https://raw.githubusercontent.com/FPvisualization/fpvisualization.github.io/master/FPs.csv"
    df = pd.read_csv(url)
    col = ProteinTFCollection.objects.create(name=name, description=desc, owner=SUPERUSER)
    col.save()
    for n in df["Name"]:
        try:
            p = ProteinTFTF.objects.get(gene=n)
            col.proteins.add(p)
        except Exception:
            print(f"{n} failed")
            pass


def parensplit(st):
    return st.strip(")").replace("(", "").split()


def import_fpd(file=None, overwrite=True):
    if file and os.path.isfile(os.path.join(BASEDIR, "_data", file)):
        file = os.path.join(BASEDIR, "_data", file)
    if not file:
        file = os.path.join(BASEDIR, "_data/FPD.csv")
    data = tablib.Dataset().load(open(file).read())

    errors = []
    for rownum, row in enumerate(data.dict):
        try:
            for k, v in row.items():
                row[k] = v.strip()
            print(row["name"])

            # just remove bad sequences
            try:
                protein_sequence_validator(row.get("seq"))
            except Exception:
                row["seq"] = None
            row["agg"] = row["agg"].strip()

            if row.get("pdb", False):
                row["pdb"] = [i.strip() for i in row["pdb"].split(",") if i.strip()]
            else:
                row["pdb"] = []

            if row.get("aliases", False):
                row["aliases"] = [i.strip() for i in row["aliases"].split(",") if i.strip()]
            else:
                row["aliases"] = []

            org = None
            if row.get("parent_organism"):
                org, ocreated = Organism.objects.get_or_create(id=row["parent_organism"])
                if ocreated:
                    print(f"created organism {org}")
            row["parent_organism"] = org.pk if org else None

            # look for photoswitching in naming
            row["name"], switch = name_check(row["name"])

            namemismatch = False  # will be true if something already has this sequence with a diff name

            # check if protein already exists a variety of ways
            if ProteinTF.objects.filter(slug=slugify(row.get("name"))).exists():
                p = ProteinTF.objects.get(slug=slugify(row.get("name")))
                if ProteinTF.objects.filter(seq=row.get("seq")).exists():
                    p2 = ProteinTF.objects.get(seq=row.get("seq"))
                    if p2 != p:
                        row["seq"] = None
                        errors.append("cannot assign {} sequence, {} already has it".format(row.get("name"), p2.name))
            elif row.get("seq") and ProteinTF.objects.filter(seq=row.get("seq")).exists():
                p = ProteinTF.objects.get(seq=row.get("seq"))
            elif ProteinTF.objects.filter(genbank=row["genbank"]).exists():
                p = ProteinTF.objects.get(genbank=row["genbank"])
            else:
                p = None

            # don't overwrite existing values hack...
            if p:
                if p.genbank:
                    if row["genbank"]:
                        if not p.genbank == row["genbank"]:
                            pass
                            # errors.append('GenBank mismatch between {} and {}'.format(p.name, row.get('name')))
                    else:
                        row["genbank"] = p.genbank
                if p.uniprot:
                    if row["uniprot"]:
                        if not p.uniprot == row["uniprot"]:
                            pass
                            # errors.append('UniProt mismatch between {} and {}'.format(p.name, row.get('name')))
                    else:
                        row["uniprot"] = p.uniprot

                if not p.name == row.get("name", None):
                    print('ProteinTF "{}" already has the same sequence as {}... skipping'.format(p.name, row["name"]))
                    continue
                    # namemismatch = True
                    # errors.append('same sequence name mismatch between {} and {}'.format(p.name, row.get('name')))
                    # row['aliases'].append(row.get('name'))
                    # row['name'] = p.name

            # create the protein form and validate/sve
            ref = None
            pform = forms.ProteinTFForm(row, instance=p) if p else forms.ProteinTFForm(row)
            if pform.is_valid():
                p = pform.save() if overwrite else pform.save_new_only()
                doi = pform.cleaned_data.get("reference_doi")
                if pform.cleaned_data.get("reference_doi"):
                    ref, created = Reference.objects.get_or_create(doi=doi)
                    if created:
                        print(f"created Reference {ref}")
                    ref.proteins.add(p)
                    if not p.primary_reference:
                        p.primary_reference = ref
                        p = pform.save() if overwrite else pform.save_new_only()
                if row["additional_refs"]:
                    for doi in row["additional_refs"].split(","):
                        ref, created = Reference.objects.get_or_create(doi=doi.strip())
                        ref.proteins.add(p)
                        if created:
                            print(f"created Reference {ref}")
            else:
                errors.append(
                    "name: {}, row: {}, {}".format(data.dict[rownum]["name"], rownum, pform.errors.as_text())
                )

            # if we still don't have a protein instance, just move on
            if not p:
                print("STILL NO PROTEIN")
                continue

            if switch:
                states = [row.copy(), row.copy()]
                states[0]["name"] = "before"
                states[1]["name"] = "after"
                for col in ("ex_max", "em_max", "qy", "ext_coeff", "pka"):
                    if row[col]:
                        vals = parensplit(row[col])
                        for i, v in enumerate(vals):
                            try:
                                states[i][col] = float(v) if col in ("qy", "pka") else int(v)
                            except Exception:
                                states[i][col] = None
                    else:
                        states[0][col] = None
                        states[1][col] = None

                if switch == "pa" and not states[0]["em_max"]:
                    transwave = states[0]["em_max"]
                    states[0]["ex_max"] = None
                    states[0]["em_max"] = None
                    states[0]["is_dark"] = True
                else:
                    transwave = None
            else:
                states = [row.copy()]
                if not namemismatch:
                    states[0]["name"] = "default"

            sinstances = []
            for snum, state in enumerate(states):
                if not state.get("is_dark", 0) and not (state.get("ex_max", 0) and state.get("em_max", 0)):
                    continue
                try:
                    if State.objects.filter(
                        protein=p,
                        ex_max=state["ex_max"],
                        em_max=state["em_max"],
                        ext_coeff=state["ext_coeff"],
                        qy=state["qy"],
                    ).count():
                        print(f"skipping already imported state on {p.name}")
                        continue
                except Exception:
                    pass
                state["protein"] = p.pk
                sform = forms.StateForm(state)
                if sform.is_valid():
                    sinstances.append(sform.save())
                else:
                    errors.append(
                        "name: {}, state: {}, {}".format(data.dict[rownum]["name"], snum, sform.errors.as_text())
                    )

            # if switch and len(sinstances) > 1:
            #     try:
            #         StateTransition.objects.create(
            #             protein=p,
            #             from_state=sinstances[0],
            #             to_state=sinstances[1],
            #             transwave=transwave if transwave else None,
            #         )
            #         if switch == "ps":
            #             StateTransition.objects.create(protein=p, from_state=sinstances[1], to_state=sinstances[0])
            #     except Exception:
            #         print("failed to link states")

            # if row["bleach"]:
                # state = sinstances[-1] if len(sinstances) else None
                # bm = BleachMeasurement(rate=float(row["bleach"]), reference=ref, state=state)
                # bm.save()

            p = pform.save() if overwrite else pform.save_new_only()  # register states

        except KeyboardInterrupt:
            raise
        except Exception as ex:
            print(ex)

    return errors


def importMutations():
    from proteins.validators import validate_mutation

    file = os.path.join(BASEDIR, "_data/merged.csv")

    data = tablib.Dataset().load(open(file).read())
    mutOut = tablib.Dataset()
    mutOut.headers = ["name", "parent", "mutations", "seq", "doi"]

    for n, row in enumerate(data.dict):
        if row["mutation"]:
            mut = [m.strip() for m in row["mutation"].split("/") if m]
            name = row["name"]
            parent = ""
            try:
                for i, m in enumerate(mut):
                    try:
                        validate_mutation(m)
                    except Exception:
                        if i == 0:
                            parent = mut.pop(0)
                        else:
                            raise
            except Exception:
                print(i, n)
                print("Failed:              ", name)
            mutOut.append((name, parent, "/".join(mut), row["seq"], row["reference_doi"]))


def import_organisms():
    with open("_data/species.json") as f:
        D = json.load(f)
    for k in D.keys():
        o = Organism(id=k)
        o.save()


ORGLOOKUP = {
    "Acanthastrea sp. ": None,
    "Acropora aculeus": 287157,
    "Acropora digitifera": 70779,
    "Acropora eurostoma": 526283,
    "Acropora hyacinthus": 55974,
    "Acropora millepora": 45264,
    "Acropora nobilis": 70781,
    "Acropora pulchra": 140239,
    "Acropora sp.": None,
    "Acropora tenuis": 70783,
    "Actinia equina": 6106,
    "Actinia equina ": 6106,
    "Aequorea Victoria": 6100,
    "Aequorea Victoria ": 6100,
    "Aequorea Victoria  ": 6100,
    "Aequorea coerulescens": 210840,
    "Aequorea coerulescens ": 210840,
    "Aequorea macrodactyla": 147615,
    "Aequorea victoria": 6100,
    "Aequorea victoria ": 6100,
    "Aequorea victoria  ": 6100,
    "Aequoria victoria": 6100,
    "Agaricia agaricites": 89882,
    "Agaricia fragilis": 165097,
    "Anemonia majano": 105399,
    "Anemonia rustica": 444856,
    "Anemonia sulcata": 6108,
    "Anemonia sulcata ": 6108,
    "Anthomedusae": 406427,
    "Anthomedusae sp. ": None,
    "Anthomedusae sp. DC-2005": 328397,
    "Astrangia lajollaensis": 262533,
    "Branchiostoma floridae": 7739,
    "Branchiostoma floridae ": 7739,
    "Branchiostoma lanceolatum": 7740,
    "Catalaphyllia jardinei": 46748,
    "Ceriantharia": 37512,
    "Cerianthus membranaceus": 208460,
    "Cerianthus sp.": 51771,
    "Chiridius poppei": 286301,
    "Clavularia sp.": 86521,
    "Clavularia sp. ": 86521,
    "Clytia gregaria": 27801,
    "Clytia hemisphaerica": 252671,
    "Cnidopus japonicus": 58804,
    "Condylactis gigantea": 47073,
    "Condylactis gigantea ": 47073,
    "Condylactis passiflora ": 175772,
    "Corynactis californica": 44298,
    "Cyphastrea microphthalma": 570133,
    "Danafungia horrida": 486202,
    "Dendronephthya sp.": 51110,
    "Dendronephthya sp. ": 51110,
    "Discosoma": 86599,
    "Discosoma sp": 86600,
    "Discosoma sp.": 86600,
    "Discosoma sp. ": 86600,
    "Discosoma sp. .": 86600,
    "Discosoma sp. 3": 86600,
    "Discosoma sp. LW-2004": 301246,
    "Discosoma sp.1": 86600,
    "Discosoma sp.2": 86600,
    "Discosoma striata": 105400,
    "Echinophyllia  ": 126651,
    "Echinophyllia echinata": 351729,
    "Echinophyllia sp.": None,
    "Echinophyllia sp. SC22": 301887,
    "Echinopora Sp. ": None,
    "Echinopora forskaliana": 526284,
    "Echinopora sp. ": None,
    "Entacmaea quadricolor": 6118,
    "Eusmilia fastigiata": 214972,
    "Favia favus": 102203,
    "Favia favus ": 102203,
    "Favites abdita": 126655,
    "Favites complanata": 498483,
    "Fungia concinna": 496660,
    "Galaxea fascicularis": 46745,
    "Geniopora djiboutiensis": 351727,
    "Goniopora tenuidens": 75301,
    "Herbaspirillum frisingense": 92645,
    "Heteractis Crispa": 175771,
    "Heteractis crispa": 175771,
    "Heteractis crispa ": 175771,
    "Heteractis magnifica ": 38281,
    "Hydnophora rigida": 46740,
    "Labidocera aestiva ": 163467,
    "Lobactis scutaria": 46714,
    "Lobophyllia hemprichii": 46758,
    "Lobophyllia hemprichii ": 46758,
    "Lobophyllia hemprichii  ": 46758,
    "Meandrina meandrites": 51056,
    "Merulina sp. ": None,
    "Monastraea cavernosa": 63558,
    "Montastraea annularis": 48500,
    "Montastraea cavernosa": 63558,
    "Montastraea faveolata": 48498,
    "Montastrea cavernosa": 63558,
    "Montipora efflorescens": 105610,
    "Montipora efflorescens ": 105610,
    "Montipora millepora": 351731,
    "Montipora sp.": None,
    "Montipora sp. ": None,
    "Montipora sp.  ": None,
    "Mycedium elephantotus": 51060,
    "Obelia sp.": 70918,
    "Pectiniidae": 46733,
    "Pectiniidae ": 46733,
    "Pectiniidae sp.  ": None,
    "Phialidium sp.": 1955689,
    "Phialidium sp. ": 1955689,
    "Platygira lamellina ": 242771,
    "Pocillopora damicornis": 46731,
    "Pontella meadi": 239965,
    "Pontella meadi ": 239965,
    "Pontella mimocerami": 661578,
    "Pontellidae sp.": None,
    "Pontellina plumata ": 239963,
    "Porites porites": 104760,
    "Psammocora sp.": None,
    "Psammocora superficialis": 371657,
    "Ptilosarcus sp.": None,
    "Renilla Reniformis": 6136,
    "Renilla muelleri": 37510,
    "Renilla reniformis": 6136,
    "Ricordea florida": 165100,
    "Sarcophyton sp.": None,
    "Sarcophyton sp. ": None,
    "Scleractinia sp. ": 1913369,
    "Scolymia cubensis": 165099,
    "Sphingomonas sp.": 28214,
    "Stylocoeniella sp. ": None,
    "Stylophora pistillata": 50429,
    "Symphyllia sp.": None,
    "Synthetic Construct": 32630,
    "Trachyphyllia geoffroyi": 196280,
    "Verrillofungia concinna": 496660,
    "Verrillofungia concinna  ": 496660,
    "Verrillofungia concinna  (Fungia concinna)": 496660,
    "Verrillofungia concinna (Fungia concinna)": 496660,
    "Zoanthus sp.": 105402,
    "Zoanthus sp. ": 105402,
    "Zoanthus sp.2": 105402,
    "Anthomedusae sp.": 406427,
    "Acanthastrea sp.": 406427,
}

def get_gb_data(file):
    with open(file) as handle:
        text = handle.read()
    q = ("DEFINITION", "ACCESSION", "VERSION", "KEYWORDS", "SOURCE")
    pat = ""
    for i in range(len(q) - 1):
        pat += r"(?=.*{} (?P<{}>.+){})?".format(q[i], q[i].lower().replace(" ", ""), q[i + 1])
    pat += r"(?=.*COMMENT (?P<comment>.+)FEAT)?"
    pat += r"(?=.*PUBMED\s+(?P<pub>.+)REF)?"
    pat += r'(?=.*/translation="(?P<seq>.+)")?'
    D = re.search(pat, text, re.DOTALL).groupdict()
    for k, v in D.items():
        if v:
            D[k] = v.replace("\n", "").replace("  ", "").strip()
    D["seq"] = D.get("seq", "").replace(" ", "")
    D["name"] = os.path.basename(file).strip(".gb")
    return D

