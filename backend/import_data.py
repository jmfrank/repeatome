from datetime import datetime
import math
import django
import time
import uuid
from Bio import Entrez
import numpy as np


Entrez.email = 'carissapenn123@gmail.com'

# Must call setup before improrting any Django models
django.setup()

from django.conf import settings
from references.models import Reference
from proteins.models import Organism, GeneFamily, Repeat, ProteinTF, ProteinRepeats, ProteinReferences, Proteomics, Microscopy, GenomeReferences
from proteins.util.helpers import shortuuid
from proteins.util.repeat_network_data import GetNetworkData, GetNetworkDataAll
import json
import requests
import os
import pandas as pd
import sys
import unicodedata
import re
from UniProtMapper import ProtMapper
from pyjaspar import jaspardb
from django.contrib.auth import get_user_model


def slugify(value, allow_unicode=False):
    """
    Convert to ASCII if 'allow_unicode' is False. Convert spaces to hyphens.
    Remove characters that aren't alphanumerics, underscores, or hyphens.
    Convert to lowercase. Also strip leading and trailing whitespace.
    """
    value = str(value)
    if allow_unicode:
        value = unicodedata.normalize("NFKC", value)
    else:
        value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii")
    value = re.sub(r"[^\w\s-]", "", value).strip().lower()
    return re.sub(r"[-\s]+", "-", value)

def parse_array(x):
    if x is None:
        return None
    return [a.strip() for a in x.strip().split(',')]


def load_dataframe_from_excel(file, sheet_name, dtype=None):
    if not file:
        raise Exception("Missing IMPORT_DATA_FILE in settings file")
    if not os.path.exists(file):
        raise Exception(f"File {file} does not exist.")

    if dtype:
        df = pd.read_excel(file, sheet_name=sheet_name, dtype=dtype)
    else:
        df = pd.read_excel(file, sheet_name=sheet_name)
    # Set None or NaN values to None
    df = df.where(pd.notnull(df), None)
    return df


def import_organisms():
    taxonomy_ids = ['9606', '10090', '7227']

    for taxonomy_id in taxonomy_ids:
        item = Organism(id=taxonomy_id)
        print(f"Saving organism taxonomy {taxonomy_id} to db.")
        item.save() 


def get_obj_if_exists(model, **kwargs):
    try:
        obj = model.objects.get(**kwargs)
    except model.DoesNotExist: 
        obj = None
    return obj


# Will raise an exception if obj does not exist
def get_organism_obj(taxonomy_id: str):
    if not taxonomy_id:
        return None
    return Organism.objects.get(id=taxonomy_id)


# Will raise an exception if obj does not exist
def get_gene_family_obj(gene_family: str):
    if not gene_family:
        return None
    return GeneFamily.objects.get(id=gene_family)


def import_gene_family():

    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins')

    # Get unique gene families
    gene_family_df = df[df['gene_family'].notnull()].drop_duplicates()
    print(f"Found {len(gene_family_df)} unique gene families to save")
    for row in gene_family_df.to_dict(orient='records'):
        gene_family = row['gene_family']
        parent_organism_id = row['parent_organism']
        print(f"gene_family={gene_family}, parent_organism_id={parent_organism_id}")
        parent_organism_obj = get_organism_obj(parent_organism_id)
        existing_obj = get_obj_if_exists(GeneFamily, gene_family=gene_family)
        if existing_obj:
            print(f"Gene family {gene_family} already exists. Skipped.")
        else:
            print(f"Saving gene family {gene_family} to db.")
            item = GeneFamily(gene_family=gene_family, parent_organism=parent_organism_obj)
            item.save()


def parse_microscopy_result(x):
    if x is None:
        return None

    x = x.strip(',').strip()
    
    if '(cytoplasm, activation?)' in x:
        x = x.replace('(cytoplasm, activation?)', '(cytoplasm activation?)')
    obj = dict()
    parts = x.split(',')
    for part in parts:
        pair = part.split('=')
        key = pair[0].strip()
        val = pair[1].strip()
        obj[key] = val
    return obj

def import_repeat_families():
    df = load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')

    parent_repeats_dict = {}
    for row in df.to_dict(orient="records"):
        parent = row['parent_name']
        child_arr = row['children']
        if pd.notna(child_arr):
            # print(child_arr)
            child_arr = [x.strip() for x in child_arr.strip(' ').split(',')]
            for child in child_arr:
                # print(f"Mapping child {child} to parent {parent}")
                parent_repeats_dict[child] = parent

    return parent_repeats_dict

def update_repeat_families():
    parent_repeats_dict = import_repeat_families()

    for child, parent in parent_repeats_dict.items():
        child_obj = get_obj_if_exists(Repeat, name=child)
        parent_obj = get_obj_if_exists(Repeat, name=parent)
        if child_obj and parent_obj:
            print(f"Updating repeat {child} to have parent {parent}")
            child_obj.parent_repeat = parent_obj
            child_obj.save()
            child_proteins = child_obj.get_protein_lst()
            for protein in child_proteins:
                if not get_obj_if_exists(ProteinRepeats, repeat=parent_obj, protein=protein):
                    print('new pairing', parent_obj.name, protein.gene)
                    protein_repeat_obj = ProteinRepeats(protein=protein, repeat=parent_obj)
                    protein_repeat_obj.save()
        else:
            if not child_obj:
                print(f"Child repeat {child} does not exist")
            if not parent_obj:
                print(f"Parent repeat {parent} does not exist")


def import_repeat():
    # (1) From repeats sheet we have name, dfam_id and parent organism id
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')

    parent_repeats_dict = import_repeat_families()

    for row in df.to_dict(orient="records"):
        name = row['parent_name']
        aliases = parse_array(row['aliases'])
        parent_organism_id = row['taxonomy_id']
        parent_organism_obj = get_organism_obj(parent_organism_id)

        parent_repeat_obj = None
        if name in parent_repeats_dict.keys():
            parent_repeat_obj = get_obj_if_exists(Repeat, name=parent_repeats_dict[name])

        existing_obj = get_obj_if_exists(Repeat, name=name)
        if not existing_obj:
            obj = Repeat(
                name=name, 
                aliases=aliases, 
                dfam_id=row["dfam_id"],
                motif=row["dfam_id"],
                parent_repeat=parent_repeat_obj,
                parental_organism=parent_organism_obj
            )
            obj.save()

    # (2) From master_proteins sheet we only have name
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, 'master_proteins')
    df = df[df['satellite'].notnull() & (df['satellite'] != '') & (df['satellite'] != '?')]
    # print(f"Num rows = {len(df)})

    unique_satellites = set()
    for row in df[['gene', 'satellite']].to_dict(orient='records'):
        satellite_str = row['satellite']
        if not satellite_str:
            continue
        satellites = [x.strip() for x in satellite_str.split(',')]
        for satellite in satellites:
            unique_satellites.add(satellite)

    for name in unique_satellites:
        existing_obj = get_obj_if_exists(Repeat, name=name)
        if not existing_obj:
            parent_repeat_obj = None
            if name in parent_repeats_dict.keys():
                parent_repeat_obj = get_obj_if_exists(Repeat, name=parent_repeats_dict[name])
            obj = Repeat(
                name=name, 
                parent_repeat=parent_repeat_obj
            )
            obj.save()
    
    # print(parent_repeats_dict)
    for child, parent in parent_repeats_dict.items():
        # print(child, parent)
        child_obj = get_obj_if_exists(Repeat, name=child)
        parent_obj = get_obj_if_exists(Repeat, name=parent)
        parent_organism_obj = get_organism_obj(parent_organism_id)
        if parent_obj and not child_obj:
            print('Adding Child Repeat: ', child, parent)
            child = Repeat(name=child, parent_repeat=parent_obj, parental_organism=parent_organism_obj)
            child.save()

def load_jaspar_from_url(gene, tax_group, tax_id=9606):
        base_url = "https://jaspar.genereg.net/api/v1/matrix/"
        headers = {"Accept": "application/json"}
        jaspar_ids = []
        # print(gene_name)
        params = {
            "search": gene.strip(),
            "tax_group": tax_group,
            "format": "json"
        }
        response = requests.get(base_url, headers=headers, params=params)
        # print(response.json())
        # result_lst = response.json()['results']
        # fixed_results = []
        # for result in result_lst:
        #     if result['name'] == gene.strip():
        #         fixed_results.append(result)
        # fixed_response = response.json()
        # fixed_response['results'] = fixed_results

        fixed_response = response.json()
        fixed_results = []
        for result in response.json()['results']:
            jdb_obj = jaspardb()
            motif_data = jdb_obj.fetch_motif_by_id(result['base_id'] + '.' + result['version'])
            if motif_data and motif_data.name and motif_data.species:
                # print(gene.strip(), tax_id)
                print(motif_data.name, motif_data.species)
                if len(motif_data.species) > 0 and motif_data.species[0] != '':
                    if motif_data.name == gene.strip() and int(motif_data.species[0]) == tax_id:
                        fixed_results.append(result)
        fixed_response['results'] = fixed_results

        # print(response.json())
        # print(fixed_response)
        if response.status_code == 200:
            return fixed_response
        else:
            print(f"Failed to get data for {gene}: HTTP {response.status_code}")
            return {
                'count': 0, 
                'error_code': response.status_code, 
                'error_msg': response.txt, 
                'next': None,
                'previous': None, 
                'results': []
            }


def get_jaspar_ids(gene, tax_group, use_cache):
        
        cache_folder = '.cache'

        jaspar_json = None
        # If use_cache then try to load from cache first
        # If not found in cache then try loading from the url
        if use_cache:
            cache_file = f"{cache_folder}/jaspar/{slugify(gene)}.json"
            if os.path.exists(cache_file):
                print(f"Loading jaspar data from cache")
                with open(cache_file, 'r') as stream:
                    jaspar_json = json.load(stream)

        if jaspar_json is None:
            if not os.path.exists(cache_folder):
                os.makedirs(cache_folder)
            print(f"Loading jaspar data from url")
            jaspar_json = load_jaspar_from_url(gene, tax_group)
            with open(cache_file, 'w') as stream:
                json.dump(jaspar_json, stream, indent=2)

        jaspar_ids = [entry['matrix_id'] for entry in jaspar_json.get('results', [])]
        return jaspar_ids


def import_protein():
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)

    for row in df.to_dict(orient='records'):
        if len(ProteinTF.objects.filter(gene = row['gene'])) == 0:
            gene = row['gene']
            if not gene:
                continue
            gene_family_obj = None
            if row['gene_family']:
                gene_family_obj = get_obj_if_exists(GeneFamily, gene_family=row['gene_family'])

            parent_organism_obj = None
            parent_organism = row['parent_organism']
            if parent_organism:
                parent_organism = int(parent_organism)
                parent_organism_obj = get_organism_obj(parent_organism)

            # Get list of jaspar matrix_ids either from local .cache folder or from url
            jasper_ids = get_jaspar_ids(gene, tax_group='vertebrates', use_cache=True)

            # TODO: Remove this once Cassisa fixes the issues with duplicate doi key
            skip_reference = True

            if skip_reference:
                prim_ref_obj = None
            else:
                # Get References
                prim_ref = row['primary_reference']
                if not (prim_ref == '') and not prim_ref == None:
                    ref_doi = prim_ref
                    if ref_doi.find('doi.org') >= 0:
                        ref_doi = prim_ref[ref_doi.find('doi.org') + 2:]
                    print(ref_doi)
                    pubmed_record = Entrez.read(Entrez.esearch(db="pubmed", term=ref_doi))
                    if len(Reference.objects.filter(doi=ref_doi)) == 0:
                        if len(pubmed_record['IdList']) > 0:
                            pmid = pubmed_record['IdList'][0]
                        else:
                            pmid = None
                        prim_ref_obj = Reference(
                            # id = shortuuid(),
                            id = uuid.uuid4().int % 100000,
                            created = datetime.now(),
                            modified = datetime.now(),
                            doi = prim_ref,
                            pmid = pmid)
                        prim_ref_obj.save()
                    else:
                        prim_ref_obj = Reference.objects.filter(doi=prim_ref)[0]
                else: 
                    prim_ref_obj = None

            obj = ProteinTF(
                gene=gene,
                aliases=parse_array(row['aliases']),
                gene_type=parse_array(row['gene_type']),
                dna_binding_domain=row['dna_binding_domain'], 
                signaling_pathway=row['signaling_pathway'],
                validation_grade=row['validation_grade'],
                prediction_method=row['prediction_method'],
                microscopy_result=parse_microscopy_result(row['microscopy_result']),
                # TODO: Remove these 2 fields
                motif_enrichment=row['motif_enrichment'],
                motif_q_score=row['motif_q_score'],
                existing_images=row['existing_images'],
                existing_images_link=row['existing_images_link'],
                existing_fusion=row['existing_fusion'],
                cloned_fusion=row['cloned_fusion'],
                imaging_results=row['imaging_results'],
                notes=row['notes'],
                # articles=row['articles'],
                ENSEMBL=row['ensembl'],
                UNIPROT=row['uniprot'],
                PDB=row['PDB'],
                micro_url=row['micro_url'],
                AF3=row['AF3'],
                proteomics_url=row['proteomics_url'],
                rna_url=row['rna_url'],
                # jaspar=parse_array(row['jaspar']),
                jaspar=jasper_ids,
                protein_sequence=row['protein_sequence'],
                molecular_weight=row['molecular_weight'],
                cofactor=parse_array(row['cofactor']),
                oligomerization=row['oligomerization'] if row['oligomerization'] else None,
                gene_family=gene_family_obj,
                parent_organism=parent_organism_obj,
                primary_reference = prim_ref_obj
            )
            print(type(obj))
            print(f"ENSEMBL: {obj.ENSEMBL}, GENE: {obj.gene}")
            obj.save()

            protein_obj = ProteinTF.objects.get(gene=gene)
            protein_obj.save()
            print(obj.gene, obj.slug, obj)
            print(protein_obj.gene, protein_obj.slug, protein_obj)
            
            refs = row['references']
            if refs:
                for ref in refs.split(','):
                    #                 10.1152/ajpcell.00339.2013
                    # https://doi.org/10.1152/ajpcell.00339.2013
                    # 1234567890123456789012345678901234567890123456789   
                    pubmed_record = Entrez.read(Entrez.esearch(db="pubmed", term=ref))
                    ref_no_prefix = ref.replace('https://doi.org/', '').strip()
                    print(f"ref = {ref}, ref_no_prefix = {ref_no_prefix}")
                    existing_refs = Reference.objects.filter(doi=ref_no_prefix)
                    if not existing_refs:
                        print(f"Adding reference with doi {ref}")
                        if len(pubmed_record['IdList']) > 0:
                            pmid = pubmed_record['IdList'][0]
                        else:
                            pmid = None
                        ref_record_id = uuid.uuid4().int % 100000
                        print(f"Creating Reference object with doi {ref}, pmid {pmid}, id = {ref_record_id}")
                        ref_obj = Reference(id = ref_record_id,
                            created = datetime.now(),
                            modified = datetime.now(),
                            doi = ref,
                            pmid = pmid)
                        ref_obj.save()
                        protein_ref_obj = ProteinReferences(protein = protein_obj, reference = ref_obj)
                        protein_ref_obj.save()
                    else:
                        protein_ref_obj = ProteinReferences(protein = protein_obj, reference = existing_refs[0])
                        protein_ref_obj.save()

            satellite_str = row['satellite']
            # motif_q_score = row['motif_q_score']
            # motif_enrichment = row['motif_enrichment']
            if satellite_str:
                satellites = [x.strip() for x in satellite_str.split(',')]
                # motif_q_scores = [x.strip() for x in motif_q_score.split(',')]
                # motif_enrichments = [x.strip() for x in motif_enrichment.split(',')]
                # if len(motif_q_scores) != len(motif_enrichments):
                #     raise Exception(f"Length of motif_q_score is not the same as motif_enrichment")
                index = 0
                for satellite in satellites:
                    repeat_obj = Repeat.objects.get(name=satellite)
                    protein_repeat_obj = ProteinRepeats(protein=protein_obj, repeat=repeat_obj)
                    # protein_repeat_obj = ProteinRepeats(protein=protein_obj, repeat=repeat_obj, motif_q_score=motif_q_scores[i], motif_enrichment=motif_enrichments[i])
                    protein_repeat_obj.save()
                    # index += 1


def import_refs():
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)

    for row in df.to_dict(orient='records'):
        gene = row['gene']
        if not gene:
            continue
        parent_organism_obj = None
        parent_organism = row['parent_organism']
        if parent_organism:
            parent_organism = int(parent_organism)
            parent_organism_obj = get_organism_obj(parent_organism)

        protein_obj = get_obj_if_exists(ProteinTF, gene=gene)

        # Get References
        prim_ref = row['primary_reference']
        if not (prim_ref == '') and not prim_ref == None:
            print("PRIMARY REFERENCE")
            ref_doi = prim_ref
            if ref_doi.find('doi.org') >= 0:
                ref_doi = prim_ref[ref_doi.find('doi.org') + 8:]
            print(ref_doi)
            pubmed_record = Entrez.read(Entrez.esearch(db="pubmed", term=ref_doi))
            print(Reference.objects.filter(doi=ref_doi))
            if len(Reference.objects.filter(doi=ref_doi)) == 0:
                pubmed = None
                if len(pubmed_record['IdList']) > 0:
                    pubmed = pubmed_record['IdList'][0]
                print(pubmed)
                prim_ref_obj = Reference(
                    # id = shortuuid(),
                    id = uuid.uuid4().int % 100000,
                    created = datetime.now(),
                    modified = datetime.now(),
                    doi = ref_doi,
                    pmid = pubmed
                )
                try:
                    prim_ref_obj.save()
                except:
                    print("couldn't save")

        refs = row['references']
        if not refs == None:
            for ref in refs.split(','):
                print("REFERENCES")
                ref_doi = ref
                if ref_doi.find('doi.org') >= 0:
                    ref_doi = ref[ref_doi.find('doi.org') + 8:]
                print(ref_doi)
                pubmed_record = Entrez.read(Entrez.esearch(db="pubmed", term=ref))
                print(Reference.objects.filter(doi=ref_doi))
                if len(Reference.objects.filter(doi=ref_doi)) == 0:
                    pubmed = None
                    if len(pubmed_record['IdList']) > 0:
                        pubmed = pubmed_record['IdList'][0]
                    print(pubmed)
                    ref_obj = Reference(id = uuid.uuid4().int % 100000,
                        created = datetime.now(),
                        modified = datetime.now(),
                        doi = ref_doi,
                        pmid = pubmed
                    )
                    ref_obj.save()
                    protein_ref_obj = ProteinReferences(protein = protein_obj, reference = ref_obj)
                    protein_ref_obj.save()
                else:
                    if len(ProteinReferences.objects.filter(protein=protein_obj, reference=Reference.objects.filter(doi=ref_doi)[0])) == 0:
                        protein_ref_obj = ProteinReferences(protein = protein_obj, reference = Reference.objects.filter(doi=ref_doi)[0])
                        protein_ref_obj.save()

def update_proteinrepeats():
    en_df = pd.read_csv(settings.IMPORT_ENRICHMENT_FILE)
    en_df.rename(columns={"Unnamed: 0": "Gene"}, inplace=True)
    en_df = en_df.where(pd.notnull(en_df), None)

    enrich_lookup = dict()
    for row in en_df.to_dict(orient="records"):
        gene = row["Gene"]
        
        for key, value in row.items():
            if key != 'Gene':
                lookup_key = gene,key.lower()
                enrich_lookup[lookup_key] = value
                

    qs_df = pd.read_csv(settings.IMPORT_QSCORE_FILE)
    qs_df.rename(columns={"Unnamed: 0": "Gene"}, inplace=True)
    qs_df = qs_df.where(pd.notnull(qs_df), None)

    qscore_lookup = dict()
    for row in qs_df.to_dict(orient="records"):
        gene = row["Gene"]
       

        for key, value in row.items():
            if key != 'Gene':
                lookup_key = gene,key.lower()
                qscore_lookup[lookup_key] = value
               


    objs = ProteinRepeats.objects.all()
    for obj in objs:
        
        lookup_key = obj.protein.gene, obj.repeat.name.lower()
        enrichment = enrich_lookup.get(lookup_key)
        # print(f"enrichment:{enrichment}, lookup_key:{lookup_key},  enrichment:{len(enrich_lookup)}")
        q_score = qscore_lookup.get(lookup_key)
        # print(f"qscore:{q_score}, lookup_key:{lookup_key}, q_score:{len(qscore_lookup)}")
        obj.motif_enrichment = enrichment if enrichment else None
        obj.motif_q_score = q_score if q_score else None
        print(f"saving protein:{obj.protein.gene}, repeat:{obj.repeat.name}, motif_enrichment:{obj.motif_enrichment}, motif_q_score:{obj.motif_q_score}")
        obj.save()


def get_proteomic_data(mapper, uniprot_id):
    proteomics_cache_folder = '.cache/proteomics'
    cache_file = f"{proteomics_cache_folder}/{uniprot_id}.csv"
    if os.path.exists(cache_file):
        print(f"Loading proteomic data from cache: {cache_file}")
        result_df = pd.read_csv(cache_file)
        return result_df, []
    
    print(f"Loading proteomic data using ProtMapper for {uniprot_id}")
    if not os.path.exists(proteomics_cache_folder):
        os.makedirs(proteomics_cache_folder)
    # Use ProtMapper to get the data
    result_df, failed = mapper.get(ids=[uniprot_id], fields=['gene_primary', 'gene_names', 'xref_ensembl'])
    print(f"***type failed = {type(failed)}, failed = {failed}")
    print(result_df)
    result_df.to_csv(cache_file, index=False)
    return result_df, failed

def update_proteomics():
    file = input("Enter file: ")
    # file = "C:/Users/caris/Documents/CAMPS + INTERNSHIPS/2025 Summer - GRIPS Internship/repeatome_colab/repeatome_data/HSat3_epithelial_2.csv"
    # file = settings.IMPORT_PROTEOMICS
    df = pd.read_csv(file, dtype=str)
    
    # Get other data
    repeat_name = input("Enter repeat: ") # HSat3
    parent_organism = input("Enter parent organism taxonomy id: ") # 9606
    date_string = input("Enter date data was generated (Month Day, Year): ") # Aug 30th, 2021
    cell_type_str = input("Enter cell type: ") # breast epithelial
    cell_line_name_str = input("Enter cell line name: ") # MCF10A
    method_str = input("Enter method: ") # turboID targeting HSat3 using ZF-hsat3-3xHA-turboID
    description_str = input("Enter description of how samples were generated, controls, mass spec machine details, etc: ")
    thresholds = input("Enter thresholds comma separated: ")
    
    parent_organism_obj = None
    if parent_organism:
        parent_organism = int(parent_organism)
        parent_organism_obj = get_organism_obj(parent_organism)
        if parent_organism_obj == None:
            print("Adding Organism")
            org_obj = Organism(id=int(parent_organism))
            org_obj.save()
        else:
            print(str(parent_organism) + " Object Found")

    repeat_obj = get_obj_if_exists(Repeat, name=repeat_name)
    if repeat_obj == None:
        print("Adding Repeat")
        repeat_obj = Repeat(name=repeat_name, parental_organism = parent_organism_obj)
        repeat_obj.save()
    else:
        print(repeat_obj.name + " Object Found")

    log2C_vals = {}
    significance = {}

    mapper = ProtMapper()

    count = 0
    print(f"Processing {len(df)} rows from {file} for repeat {repeat_name}")
    for row in df.to_dict(orient='records'):
        print(ProteinTF.objects.filter(UNIPROT = row[df.keys()[0]]))
        if (len(ProteinTF.objects.filter(UNIPROT = row[df.keys()[0]])) == 0):
            uniprot_arr = row[df.keys()[0]].split('|')
            uniprot = uniprot_arr[0]
            # TODO: Add aliases for uniprots
            print(uniprot_arr, uniprot)
            mapper = ProtMapper()
            result, failed = get_proteomic_data(mapper, uniprot)
            print(result)
            if len(result) != 0:
                alias_lst = result['Gene Names'].values[0].split(' ')
                alias_lst = str(alias_lst[1:])
                alias_lst = alias_lst.strip("'")
                alias_lst = '{' + alias_lst[1:len(alias_lst) - 1] + '}'
                if len(result['Gene Names'].values[0].split(' ')) <= 1:
                    alias_lst = ['null']
                print(alias_lst)
                print(result['Ensembl'], result['Ensembl'].values)
                if result['Ensembl'].values[0] == '' or str(result['Ensembl'].values[0]) == 'nan':
                    ensembl_str = 'none'
                else:
                    ensembl_str = str(result['Ensembl'].values[0])
                    print(ensembl_str)
                    if ensembl_str != 'nan':
                        ensembl_str = 'E' + ensembl_str.split('E')[1].split(' ')[0].strip(';')
                print(ensembl_str)
                if result['Gene Names (primary)'].values[0] != '' and type(result['Gene Names (primary)'].values[0]) != np.float64 and len(ProteinTF.objects.filter(gene = result['Gene Names (primary)'].values[0])) == 0:
                    protein_obj = ProteinTF(
                        gene=str(result['Gene Names (primary)'].values[0]), 
                        aliases = alias_lst, 
                        UNIPROT = row[df.keys()[0]], 
                        ENSEMBL = ensembl_str, 
                        parent_organism = parent_organism_obj,
                        # gene_type = '{"TF"}' # for testing
                    )
                    protein_obj.save()
                    protein_repeat_obj = ProteinRepeats(protein=protein_obj, repeat=repeat_obj)
                    protein_repeat_obj.save()
            # print(obj.gene)
            # print(obj.aliases)
            # print(obj.ENSEMBL.values[0].split(' ')[0])
        log2C_vals[row[df.keys()[0]]] = row[df.keys()[2]]
        significance[row[df.keys()[0]]] = row[df.keys()[1]]

    if len(Proteomics.objects.filter(target=repeat_obj)) == 0:
        print("Adding Proteomics")
        if date_string == "None" or date_string == "NA":
            date_obj = datetime.now()
        else:
            cleaned_date = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', date_string)
            date_obj = datetime.strptime(cleaned_date, "%b %d, %Y")
        obj = Proteomics(
            id = shortuuid(),
            cell_type = cell_type_str,
            cell_line_name = cell_line_name_str,
            target = repeat_obj,
            method = method_str,
            description = description_str,
            date_generated = date_obj.date(),
            parent_organism = parent_organism_obj,
            significance = significance,
            log2vals = log2C_vals,
            # UNIPROT = df.keys()[0],
            x_label = df.keys()[1],
            y_label = df.keys()[2],
            thresholds = '{' + thresholds + '}',
        )
        obj.save()
    else:
        print("Proteomics Object Found")
        # TODO: change it so the id isn't satellite name? that way can have multiple expirements

def get_proteomics_without_proteins():
    file = input("Enter file: ")
    # file = "C:/Users/caris/Documents/CAMPS + INTERNSHIPS/2025 Summer - GRIPS Internship/repeatome_colab/repeatome_data/HSat3_epithelial_2.csv"
    df = pd.read_csv(file, dtype=str)
    
    # Get other data
    repeat_name = input("Enter repeat: ") # HSat3
    parent_organism = input("Enter parent organism taxonomy id: ") # 9606
    date_string = input("Enter date data was generated (Month Day, Year): ") # Aug 30th, 2021
    cell_type_str = input("Enter cell type: ") # breast epithelial
    cell_line_name_str = input("Enter cell line name: ") # MCF10A
    method_str = input("Enter method: ") # turboID targeting HSat3 using ZF-hsat3-3xHA-turboID
    description_str = input("Enter description of how samples were generated, controls, mass spec machine details, etc: ")
    thresholds = input("Enter thresholds comma separated: ")
    
    parent_organism_obj = None
    if parent_organism:
        parent_organism = int(parent_organism)
        parent_organism_obj = get_organism_obj(parent_organism)
        if parent_organism_obj == None:
            print("Adding Organism")
            org_obj = Organism(id=int(parent_organism))
            org_obj.save()
        else:
            print(str(parent_organism) + " Object Found")

    repeat_obj = get_obj_if_exists(Repeat, name=repeat_name)
    if repeat_obj == None:
        print("Adding Repeat")
        repeat_obj = Repeat(name=repeat_name, parental_organism = parent_organism_obj)
        repeat_obj.save()
    else:
        print(repeat_obj.name + " Object Found")

    log2C_vals = {}
    significance = {}

    for row in df.to_dict(orient='records'):
        log2C_vals[row[df.keys()[0]]] = row[df.keys()[2]]
        significance[row[df.keys()[0]]] = row[df.keys()[1]]

    if len(Proteomics.objects.filter(target=repeat_obj)) == 0:
        print("Adding Proteomics")
        if date_string == "None" or date_string == "NA":
            date_obj = datetime.now()
        else:
            cleaned_date = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', date_string)
            date_obj = datetime.strptime(cleaned_date, "%b %d, %Y")
        obj = Proteomics(
            id = shortuuid(),
            cell_type = cell_type_str,
            cell_line_name = cell_line_name_str,
            target = repeat_obj,
            method = method_str,
            description = description_str,
            date_generated = date_obj.date(),
            parent_organism = parent_organism_obj,
            significance = significance,
            log2vals = log2C_vals,
            # UNIPROT = df.keys()[0],
            x_label = df.keys()[1],
            y_label = df.keys()[2],
            thresholds = '{' + thresholds + '}'
        )
        obj.save()

def import_proteomics():
    pr_df = load_dataframe_from_excel(f"{settings.IMPORT_DATA_FOLDER}/proteomics_data/proteomics_datasets.xlsx", 'Sheet1')
    pr_df = pr_df.where(pd.notnull(pr_df), None)

    # print(pr_df.to_dict(orient='records'))
    # print(pr_df)

    log2C_vals = {}
    significance = {}

    for row in pr_df.to_dict(orient='records'):
        new_id = shortuuid()
        pr_path = row['Path']
        parent_organism_ncbi = row["Parent organism"]
        parent_organism_obj = get_obj_if_exists(Organism, id=int(parent_organism_ncbi))
        cell_type = row['Cell type']
        cell_line = row['Cell line']
        target_list = json.loads(row['Target'])
        # print(target_list)
        protein_target = target_list['protein']
        protein_obj = get_obj_if_exists(ProteinTF, gene=protein_target)
        repeat_target = target_list['repeat']
        repeat_obj = get_obj_if_exists(Repeat, name=repeat_target)
        print(repeat_target, repeat_obj.name)
        method = row['Method']
        desc = row['Description']
        citation = row['Citation']
        date_generated = row['Date generated/published'] # YYYY-MM-DD
        x_axis_name = row['X-axis']
        y_axis_name = row['Y-axis']
        threshold = row['Threshold [ y, x]']
        
        if parent_organism_obj == None:
            print("Adding Organism")
            org_obj = Organism(id=int(parent_organism_ncbi))
            org_obj.save()
        else:
            print(str(parent_organism_ncbi) + " Object Found")

        if repeat_obj == None:
            print("Adding Repeat")
            repeat_obj = Repeat(name=repeat_target, parental_organism = parent_organism_obj)
            repeat_obj.save()
        else:
            print(repeat_obj.name + " Object Found")

        if protein_obj == None: # get uniprot to fill in information?
            print("Adding Target Protein")
            protein_obj = ProteinTF(gene=protein_target, parent_organism = parent_organism_obj, ENSEMBL = "none")
            protein_obj.save()
        else:
            print(protein_obj.gene + " Object Found")

        # log2C_vals = {}
        # significance = {}

        df = pd.read_csv(f"{settings.IMPORT_DATA_FOLDER}/proteomics_data/{pr_path}", dtype=str)

        datapoints = []
        data_format = 1
        
        threshold_lst = threshold[1:len(threshold) - 1].split(',')
        LOG_THRESHOLD = float(threshold_lst[0])
        if len(threshold_lst) > 1:
            SIG_THRESHOLD = float(threshold_lst[1])
        
        for row in df.to_dict(orient='records'):
            # log2C_vals[row[df.keys()[0]]] = row[df.keys()[3]]
            # significance[row[df.keys()[0]]] = row[df.keys()[1]]
            protein_objs = ProteinTF.objects.filter(UNIPROT=row[df.keys()[0]])
            if len(protein_objs) > 0:
                if float(row[df.keys()[1]]) < SIG_THRESHOLD or float(row[df.keys()[3]]) < LOG_THRESHOLD:
                    data_format = 0
                else:
                    data_format = 1

                datapoints.append({
                    "name": protein_objs[0].gene,
                    "x": row[df.keys()[1]],
                    "y": row[df.keys()[3]],
                    "slug": protein_objs[0].slug,
                    "f": data_format
                })
                # data_format += 1
                # if data_format > 5:
                #     data_format = 1
            else:
                if float(row[df.keys()[1]]) < SIG_THRESHOLD or float(row[df.keys()[3]]) < LOG_THRESHOLD:
                    data_format = 0
                else:
                    data_format = 1

                datapoints.append({
                    "name": str(row[df.keys()[0]]).split('|')[0],
                    "x": row[df.keys()[1]],
                    "y": row[df.keys()[3]],
                    "slug": 'none',
                    "f": data_format
                })
            
            file_str = 'frontend/static/proteomics/' + new_id + '_proteomics.json'
            with open(file_str, 'w', encoding='utf-8') as json_file:
                json.dump(datapoints, json_file, indent=4, ensure_ascii=False)

        if len(Proteomics.objects.filter(target_repeat=repeat_obj, cell_type=cell_type)) == 0:
            print("Adding Proteomics")
            if date_generated == "None" or date_generated == "NA":
                date_obj = datetime.now()
            else:
                # print(date_generated)
                cleaned_date = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', str(date_generated))[0:10]
                # print(cleaned_date)
                date_obj = datetime.strptime(cleaned_date, "%Y-%m-%d")
            
            print('{' + threshold[1:len(threshold)-1] + '}')
            # print(log2C_vals)
            # print(significance)
            obj = Proteomics(
                id = new_id,
                cell_type = cell_type,
                cell_line_name = cell_line,
                target_repeat = repeat_obj,
                target_protein = protein_obj,
                method = method,
                description = desc,
                date_generated = date_obj.date(),
                parent_organism = parent_organism_obj,
                significance = significance,
                log2vals = log2C_vals,
                # UNIPROT = df.keys()[0],
                x_label = x_axis_name,
                y_label = y_axis_name,
                thresholds = '{' + threshold[1:len(threshold)-1] + '}'
            )
            obj.save()

def update_jaspar():
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)

    for gene in sorted(set(df[df['gene'].notnull()]['gene'].values)):
        if not gene:
            continue

        print(f"\n***Updating protein {gene}")
        # Get list of jaspar matrix_ids
        jasper_ids = get_jaspar_ids(gene, tax_group='vertebrates', use_cache=True)
        if jasper_ids:
            protein_obj = ProteinTF.objects.get(gene=gene)
            protein_obj.jaspar = jasper_ids
            print(f"Updating protein: {protein_obj}")
            protein_obj.save()

def save_proteins():
    for protein in ProteinTF.objects.all():
        protein.save()


def submit_uniprot_to_pdb_mapping(uniprot_ids):
    # The data you want to send as a Python dictionary
    uniprot_ids_str = ','.join(uniprot_ids)
    payload = {
        "from": "UniProtKB_AC-ID",
        "to": "PDB",
        "ids": uniprot_ids_str
    }
    print(f"Payload: {json.dumps(payload, indent=2)}")
    url = 'https://rest.uniprot.org/idmapping/run'
    # Send the POST request with the 'json' parameter
    #response = requests.post(url, json=payload, headers={"accept": "application/json", "Content-Type": "application/json"})
    response = requests.post(url, data=payload, headers={"accept": "application/json"})
    print(f"\n{url} returned: {response.status_code}: {response.text}")

    # Raise an HTTPError for bad responses (4xx or 5xx)
    response.raise_for_status()

    # Get the JSON response from the server
    response_data = response.json()
    print(json.dumps(response_data, indent=2))

    job_id = response_data.get("jobId")
    print("Job id: {job_id}")
    print(job_id)
    return job_id


def get_uniprot_to_pdb_mapping_results(job_id):
    url = f"https://rest.uniprot.org/idmapping/status/{job_id}"

    all_results = []
    while url:
        print(f"\nCalling URL {url}")
        response = requests.get(url)
        print(f"Returned: {response.status_code}")

        # Raise an HTTPError for bad responses (4xx or 5xx)
        response.raise_for_status()

        # Get the JSON response from the server
        response_data = response.json()
        results = response_data.get('results', [])
        if results:
            all_results.extend(results)

        print(f'Got {len(results)} results')

        link = response.headers.get('link')
        if not link:
            break

        parts = link.split(';')
        if len(parts) == 2:
            next_url = parts[0].split('<')[1].strip().strip('>')
            rel = parts[1].strip()
            if rel == 'rel="next"':
                url = next_url

    print(f"Got total {len(all_results)} results")
    return all_results


def update_PDB_from_uniprot():

    protein_objs = ProteinTF.objects.all()
    uniprot_ids = [obj.UNIPROT for obj in protein_objs if obj.UNIPROT]

    # Submit the job
    job_id = submit_uniprot_to_pdb_mapping(uniprot_ids)

    # Get results for the given job id
    results = get_uniprot_to_pdb_mapping_results(job_id)

    test = set()
    for result in results:
        test.add(result['from'])
    
    print(f"Got {len(test)} unique uniprot ids with PDB mappings")

    num = ProteinTF.objects.filter(PDB__isnull=False).count()
    print(f"Before updating, there are {num} proteins with PDB ids. We will skip these.")    

    saved = dict()
    for item in results:
        print(f"UniProt: {item['from']}, PDB: {item['to']}")
        uniprot_id = item['from']
        pdb_id = item['to']
        if uniprot_id in saved:
            # Done it already
            continue
        # Get protein object for the given uniprot id
        protein_objs = ProteinTF.objects.filter(UNIPROT=uniprot_id)
        if len(protein_objs) == 0:
            continue

        if len(protein_objs) > 1:
            print(f"WARNING: Found multiple protein objects for uniprot id {uniprot_id}. Using the first one.")

        protein_obj = protein_objs[0]
        if not protein_obj.PDB:
            protein_obj.PDB = pdb_id
            protein_obj.save()
            # Also track in saved dict
            saved[uniprot_id] = pdb_id

    print(f"Updated {len(saved)} proteins with PDB ids")


def update_microscopy():
    raw_df =  load_dataframe_from_excel(settings.IMPORT_MICROSCOPY, sheet_name='Sheet1', dtype=str)
    raw_df = raw_df.where(pd.notnull(raw_df), None)
    # Filter rows where protein is not null
    df = raw_df[raw_df['protein'].notnull()]
    print(f"Found {len(df)} microscopy records to process")
    for row in df.to_dict(orient='records'):
        print(f"\n***Processing microscopy for protein {row['protein']}")
        if len(ProteinTF.objects.filter(UNIPROT = row['protein'])) == 0:
            print(f"Protein with UNIPROT {row['protein']} does not exist. Skipped.")
            continue
        uniprot = row['protein']
        channels	= json.loads(row['channels'])
        # Placeholder if name is empty
        print(f"Channels: {channels}")
        # Do we need this?
        name = f"{uniprot}:{channels['1']}|{channels['2']}"
        # This is used to display in dropdown menu
        display_name = f"{channels['1']}|{channels['2']}"

        # The protein column in the spreadsheet contains the uniprot id      							
        protein_obj = ProteinTF.objects.get(UNIPROT=uniprot)
        gene = protein_obj.gene

        if not protein_obj:
            print("Protein {gene} does not exist. Skipped.")
            continue

        print(f"Adding Microscopy to protein: {gene}, uniprot: {uniprot}")

        display_name = name
        local_tiff_file	= row['local_tiff_file'].strip() if row['local_tiff_file'] else None
        cell_type = row['cell_type'].strip() if row['cell_type'] else None
        pixel_size = row['pixel_size'].strip() if row['pixel_size'] else None
        magnification = row['magnification'].strip() if row['magnification'] else None
        expression = row['expression'].strip() if row['expression'] else None
        microscopy = row['microscopy'].strip() if row['microscopy'] else None
        description	= row['description'].strip() if row['description'] else None
        url	= row['url'].strip()
        obj = Microscopy(
            id = shortuuid(),
            proteintf = protein_obj,
            name = name,
            display_name = display_name,
            url = url,
            local_tiff_file = local_tiff_file,
            cell_type = cell_type,
            pixel_size = pixel_size,
            magnification = magnification,
            channels = channels,
            expression = expression,
            microscopy = microscopy,
            description = description
        )
        print(f"Adding Microscopy: {obj}")
        obj.save()

def import_genome_references():
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='reference_genomes', dtype=str)
    print(df)
    for row in df.to_dict(orient='records'):
        parent_organism = row['taxonomy_id']
        parent_organism_obj = None
        if parent_organism:
            parent_organism = int(parent_organism)
            parent_organism_obj = get_organism_obj(parent_organism)
            if parent_organism_obj == None:
                print("Adding Organism")
                org_obj = Organism(id=int(parent_organism))
                org_obj.save()
            else:
                print(str(parent_organism) + " Object Found")

        alias_lst = df['aliases'].values[0].split(' ')
        alias_lst = str(alias_lst)
        alias_lst = alias_lst.strip("'")
        alias_lst = '{' + alias_lst[1:len(alias_lst)-1] + '}'
        if len(df['aliases'].values[0].split(' ')) == 0:
            alias_lst = ['null']
        print(alias_lst)

        obj = GenomeReferences(
            id = shortuuid(),
            organism = parent_organism_obj,
            reference = row['reference'],
            aliases = alias_lst,
            source = row['source']
        )
        obj.save()

def create_user(username, email, password, is_staff=False, is_superuser=False):

    User = get_user_model()
    if User.objects.filter(username=username).exists():
        print(f"User '{username}' already exists.")
        return

    try:
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            is_staff=is_staff,
            is_superuser=is_superuser
        )
        print(f"User '{username}' created successfully.")
        return user
    except Exception as e:
        print(f"Error creating user '{username}': {e}")
        return None


def delete_all_records():
    # Delete all records in all tables
    print("DELETING ALL OBJECTS")
    Microscopy.objects.all().delete()
    ProteinReferences.objects.all().delete()
    ProteinRepeats.objects.all().delete()
    ProteinTF.objects.all().delete()
    Repeat.objects.all().delete()
    Proteomics.objects.all().delete()
    GeneFamily.objects.all().delete()
    Organism.objects.all().delete()
    print("FINISHED DELETING")


if __name__ == "__main__":

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")

    command = 'unknown'
    if len(sys.argv) > 1:
        command = sys.argv[1]

    if command == 'reset': 
        delete_all_records()
        import_organisms()
        import_gene_family()
        import_repeat()
        import_protein()
        update_proteinrepeats()
        import_proteomics()
        for org in Organism.objects.all():
            GetNetworkData(org.id)
        GetNetworkDataAll()
        update_PDB_from_uniprot()
        update_microscopy()
    elif command == 'import_repeat':
        import_repeat()
        update_repeat_families()
    
    elif command == 'import_protein':
        import_protein()

    elif command == 'import_refs':
        import_refs()
    
    elif command == 'import_genome_references':
        import_genome_references()
    
    elif command == 'update_jaspar':
        update_jaspar()

    elif command == 'update_proteinrepeats':
        update_proteinrepeats()
     
    elif command == 'update_proteomics':
        update_proteomics()

    elif command == 'update_microscopy':
        # Download google sheet from https://docs.google.com/spreadsheets/d/1HOvL2E9wabhGQOcfUvCHYIz5tjmqXsIJ1N1cv5CBky0/edit?gid=0#gid=0
        # Save it to local folder and set IMPORT_MICROSCOPY in settings file
        # Before running this command delete existing microscopy records
        Microscopy.objects.all().delete()
        update_microscopy()

    elif command == 'update_repeat_families':
        update_repeat_families()

    elif command == 'get_proteomics_without_proteins':
        get_proteomics_without_proteins()
        
    elif command == 'save_proteins':
        save_proteins()
        
    elif command == 'network_data':
        for org in Organism.objects.all():
            GetNetworkData(org.id)
        GetNetworkDataAll()
    elif command == 'test_jaspar':
        load_jaspar_from_url('TCF7', 'vertebrates')

    elif command == 'update_PDB_from_uniprot':
        update_PDB_from_uniprot()
    elif command == 'import_proteomics':
        import_proteomics()

    elif command == 'create_user':
        if len(sys.argv) != 5:
            print("Usage: python backend/import_data.py create_user <username> <email> <password>")
            sys.exit(1)
        username = sys.argv[2]
        email = sys.argv[3]
        password = sys.argv[4]
        create_user(username, email, password, is_staff=False, is_superuser=False)

    else:
        print(f"Usage: python backend/import_data.py <command>")
        print("Command:")        
        print("- reset to delete existing records and repopulate tables")        
        print("- import_repeat to import repeat data")
        print("- import_protein to import protein data from table")
        print("- update_proteomics to update proteomics data in Proteomics table")
        print("- update_jaspar to download jaspar data and update jaspar column in Proteintf table")
        print("- update_proteinrepeats to download enirchmend and motif data in ProteinRepeats table")
        print("- update_microscopy overwrite microscopy table")
        print("- get_proteomics_without_proteins to import proteomics data without creating new ProteinTF objects")
        print("- create_user <username> <email> <password> to create a new user with the least privileges")
        print("- network_data to update network data")