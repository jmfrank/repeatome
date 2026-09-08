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
from proteins.models import Motif, MotifRepeat
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

    jaspar_group_map = {
        7227: "Insecta",
        8355: "Vertebrata",
        9031: "Vertebrata",
        9606: "Vertebrata",
        9986: "Vertebrata",
        10090: "Vertebrata",
        10116: "Vertebrata",
        10117: "Vertebrata",
    }

    # Get all unique taxonomy ids from master_proteins, repeats sheets, ENR file, Qscore file, and proteomics sheet

    # Get all unique taxonomy ids from master_proteins and repeats sheets
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)
    print(f"Loading taxonomy ids from master_proteins sheet in {settings.IMPORT_DATA_FILE}")
    taxonomy_ids = set(df['parent_organism'].dropna().unique().tolist())
    print(f"Found taxonomy ids {sorted(set(taxonomy_ids))}")

    # Get all unique taxonomy ids from repeats sheets
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats', dtype=str)
    print(f"Loading taxonomy ids from repeats sheet in {settings.IMPORT_DATA_FILE}")
    for raw_tax_id in df['taxonomy_id'].dropna().unique().tolist():
        for tax_id in raw_tax_id.strip().split(':'):
            clean_tax_id = tax_id.strip()
            if clean_tax_id and clean_tax_id not in taxonomy_ids:
                print(f"Found new taxonomy id {clean_tax_id}")
                taxonomy_ids.add(clean_tax_id)

    # Get all unique taxonomy ids from proteomics sheet
    print(f"Loading taxonomy ids from {settings.IMPORT_PROTEOMICS_FILE}")
    df = load_dataframe_from_excel(settings.IMPORT_PROTEOMICS_FILE, sheet_name='Sheet1', dtype=str)
    df = df.where(pd.notnull(df), None)
    for raw_tax_id in df['Parent organism'].dropna().unique().tolist():
        for tax_id in raw_tax_id.strip().split(':'):
            clean_tax_id = tax_id.strip()
            if clean_tax_id and clean_tax_id not in taxonomy_ids:
                print(f"Found new taxonomy id {clean_tax_id}")
                taxonomy_ids.add(clean_tax_id)

    # Get taxonomy ids from ENR and QScore files
    for file_name in [settings.IMPORT_ENRICHMENT_FILE, settings.IMPORT_QSCORE_FILE]:
        print(f"Loading taxonomy ids from {file_name}")
        df =  pd.read_csv(file_name, dtype=str)
        df = df.where(pd.notnull(df), None)
        for raw_tax_id in df['tax_id'].dropna().unique().tolist():
            for tax_id in raw_tax_id.strip().split(':'):
                clean_tax_id = tax_id.strip()
                if clean_tax_id and clean_tax_id not in taxonomy_ids:
                    print(f"Found new taxonomy id {clean_tax_id}")
                    taxonomy_ids.add(clean_tax_id)

    # Remove duplicates
    taxonomy_ids = set(taxonomy_ids)

    #-----------------------------------------
    # Validation: Check if taxonomy ids are valid integers
    for taxonomy_id in taxonomy_ids:
        if not str(taxonomy_id).isdigit():
            raise Exception(f"Invalid taxonomy id: {taxonomy_id}. Taxonomy ids must be integers.")
    #-----------------------------------------

    for taxonomy_id in taxonomy_ids:
        # Organism attribute will be loaded in the save() method of the Organism model 
        # using the Entrez API, so we only need to save the taxonomy id here
        existing_obj = get_obj_if_exists(Organism, id=taxonomy_id)
        if existing_obj:
            print(f"Organism taxonomy {taxonomy_id} already exists. Skipped.")
        else:
            taxonomy_group = jaspar_group_map[taxonomy_id]
            item = Organism(id=taxonomy_id, taxonomy_group=taxonomy_group)
            print(f"Saving organism taxonomy {taxonomy_id} to db.")
            item.save()


def get_obj_if_exists(model, **kwargs):
    try:
        obj = model.objects.get(**kwargs)
    except model.DoesNotExist:
        obj = None
    return obj


def fix_organisms():
    jaspar_group_map = {
        7227: "insects",
        8355: "vertebrates",
        9031: "vertebrates",
        9606: "vertebrates",
        9986: "vertebrates",
        10090: "vertebrates",
        10116: "vertebrates",
        10117: "vertebrates",
    }
    for org in Organism.objects.all():
        taxonomy_group = jaspar_group_map[org.id]
        print(f"Updating Organism.taxonomy_group to {taxonomy_group}")
        org.taxonomy_group = taxonomy_group
        org.save()


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


    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)
    df = df.where(pd.notnull(df), None)
    #----------------------------------------
    # Data validations
    # Do not allow typos like these to coexist: "CCAAT/ENHANCER-binding protein" and "CCAAT/enhancer-binding protein"
    # Get unique gene families
    gene_family_df = df[df['gene_family'].notnull()].drop_duplicates()
    gene_family_df['gene_family_key'] = gene_family_df['gene_family'].apply(lambda x: x.lower())

    g = gene_family_df.groupby('gene_family_key')
    g_df = g.first()
    g_df['variations'] = g['gene_family'].unique()
    g_df['count'] = g['gene_family'].nunique()

    if len(g_df[g_df['count'] > 1]) > 0:
        print("Warning: There are gene families that differ only by case. This may cause issues with duplicates. Gene families:")
        for index, row in g_df.iterrows():
            if row['count'] > 1:
                print(f"gene_family: {row['gene_family']}, count: {row['count']}, variations: {row['variations']}")
        raise Exception("There are gene families that differ only by case. Please fix the input data to ensure there are no duplicates before running the import.")
    #----------------------------------------

    print(f"Found {len(gene_family_df)} unique gene families to process")

    for row in gene_family_df.to_dict(orient='records'):
        gene_family = row['gene_family']
        existing_obj = get_obj_if_exists(GeneFamily, gene_family=gene_family)
        if existing_obj:
            print(f"Gene family {gene_family} already exists. Skipped.")
        else:
            parent_organism_id = row['parent_organism']
            print(f"gene_family={gene_family}, parent_organism_id={parent_organism_id}")
            parent_organism_obj = get_organism_obj(parent_organism_id)
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


def load_parent_repeat_lookup_by_child_repeat():

    df = load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')

    raw_names = set()

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
                raw_names.add(parent)
                raw_names.add(child)

    raw_names_lower = set([x.lower() for x in raw_names])


    return parent_repeats_dict


def update_repeat_families():

    print("update_repeat_families")

    # A lookup for parent Repeat object for a given child Repeat
    parent_repeats_dict = load_parent_repeat_lookup_by_child_repeat()

    for child_name, parent_name in parent_repeats_dict.items():
        child_obj = get_obj_if_exists(Repeat, name=child_name)
        if child_obj.parent_repeat:
            continue
        repeat_obj = get_obj_if_exists(Repeat, name=parent_name)
        if not child_obj:
            print(f"Child repeat {child_name} does not exist")
            continue
        if not repeat_obj:
            print(f"Parent repeat {parent_name} does not exist")
            continue

        print(f"Updating repeat {child_name} to have parent {parent_name}")
        child_obj.parent_repeat = repeat_obj
        child_obj.parental_organism = repeat_obj.parental_organism
        child_obj.save()


def update_protein_repeat_from_repeat_families():

    # A lookup for parent Repeat object for a given child Repeat
    parent_repeats_dict = load_parent_repeat_lookup_by_child_repeat()

    for child_name, parent_name in parent_repeats_dict.items():
        child_obj = get_obj_if_exists(Repeat, name=child_name)
        if not child_obj:
            print(f"Child repeat {child_name} does not exist")
            continue
        
        repeat_obj = child_obj.parent_repeat
        if not repeat_obj:
            print(f"Parent repeat {parent_name} does not exist")
            continue

        child_proteins = child_obj.get_protein_lst()
        for protein_obj in child_proteins:
            protein_repeat_obj = get_or_create_protein_repeat(protein_obj, repeat_obj)


def is_valid_repeat_name(name):
    if not name or '?' in name or 'unknown' in name.lower():
        return False
    return True

def import_repeat():

    # Get repeat names from parent_name and children in repeats sheet
    repeat_df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')
    repeat_df = repeat_df.where(pd.notnull(repeat_df), None)
    repeat_df = repeat_df[repeat_df['parent_name'].notnull() & repeat_df['organism'].notnull() & repeat_df['taxonomy_id'].notnull()]

   # Get repeat names from satellite column in master_proteins sheet
    protein_df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, 'master_proteins')
    protein_df = protein_df[protein_df['satellite'].notnull() 
                            & (protein_df['satellite'] != '') 
                            & (protein_df['satellite'] != '?') 
                            & (protein_df['satellite'] != 'unknown')]

    # Get a mapping of child repeat name to parent repeat name from the repeats sheet.
    #  We will use this later to set the parent_repeat field of the Repeat objects after 
    # we create them all since we may have cases where the parent repeat is listed 
    # after the child repeat in the input data.
    # A lookup for parent Repeat object for a given child Repeat
    parent_repeats_dict = load_parent_repeat_lookup_by_child_repeat()

    #----------------------------------
    # Data validations
    # Get unique repeats from parent_name column in repeats sheet
    satellite_names = set(repeat_df['parent_name'].dropna().unique().tolist())
    for name in satellite_names:
        if not is_valid_repeat_name(name):
            raise Exception(f"Invalid satellite name in parent_name column in repeats sheet: {name}.")
    # For now, do not allow nested repeats (no grand-children allowed)
    parents = set(parent_repeats_dict.values())
    for parent in parents:
        if parent in parent_repeats_dict.keys():
            raise Exception(f"Nested repeats are not allowed. Repeat {parent} is both a parent and a child. Please fix the input data to ensure there are no nested repeats before running the import.")

    # Get unique repeats from children column in repeats sheet
    for row in repeat_df['children'].dropna().unique().tolist():
        children = set([x.strip() for x in row.split(',')])
        for name in children:
            if not is_valid_repeat_name(name):
                raise Exception(f"Invalid satellite name in children column in repeats sheet: {name}.")
        satellite_names.update(children)

    # Get unique repeats from satellite column in master_proteins sheet
    protein_satellites = set(protein_df['satellite'].dropna().unique().tolist())
    for name in protein_satellites:
        if not is_valid_repeat_name(name):
            raise Exception(f"Invalid satellite name in satellite column in master_proteins sheet: {name}.")
    satellite_names.update()

    # Make sure it is unique by case-insensitive
    test_df = pd.DataFrame(satellite_names, columns=['name'])
    test_df['key'] = test_df['name'].apply(lambda x: x.lower())
    g = test_df.groupby('key')
    g_df = g.first()
    g_df['variations'] = g['name'].unique()
    g_df['count'] = g['name'].nunique()
    if len(g_df[g_df['count'] > 1]) > 0:
        print("Warning: There are repeat family names that differ only by case. This may cause issues with duplicates. Repeat family names:")
        for index, row in g_df.iterrows():
            if row['count'] > 1:
                print(f"name: {row['name']}, count: {row['count']}, variations: {row['variations']}")
        raise Exception("There are repeat family names that differ only by case. Please fix the input data to ensure there are no duplicates before running the import.")
    
    # END Data validations
    #----------------------------------

    # First create repeat that is a parent of other repeats
    for row in repeat_df.to_dict(orient="records"):
        name = row['parent_name']
        if not is_valid_repeat_name(name):
            raise Exception(f"Invalid satellite name in parent_name column in repeats sheet: {name}.")
        aliases = parse_array(row['aliases'])
        parent_organism_id = row['taxonomy_id']
        parent_organism_obj = get_organism_obj(parent_organism_id)

        print(f"Processing repeat parent_name: {name}, taxonomy_id: {parent_organism_id}")

        # Check if this repeat is a child of another repeat
        # If so, then get the parent object. 
        # Do not expect this to happen
        parent_repeat_obj = None
        if name in parent_repeats_dict.keys():
            parent_repeat_obj = get_obj_if_exists(Repeat, name=parent_repeats_dict[name])
            if parent_repeat_obj:
                raise Exception(f"Repeat {name} is listed as a child repeat but also has its own entry as a parent repeat.")

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

    unique_satellites = set()
    for row in protein_df[['gene', 'satellite']].to_dict(orient='records'):
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
   
    for child, parent in parent_repeats_dict.items():
        child_obj = get_obj_if_exists(Repeat, name=child)
        if child_obj:
            if child_obj.parent_repeat is not None:
                print(f"Child repeat {child} already has a parent repeat {child_obj.parent_repeat.name}. Skipping setting parent_repeat for this child.")
                continue

        parent_obj = get_obj_if_exists(Repeat, name=parent)
        if not parent_obj:
            raise Exception(f"Parent repeat {parent} does not exist for child repeat {child}. Skipping setting parent_repeat for this child.")

        parent_organism_obj = get_organism_obj(parent_organism_id)
        print('Adding Child Repeat: ', child, parent)
        child = Repeat(name=child, parent_repeat=parent_obj, parental_organism=parent_organism_obj)
        child.save()


# Raise an exception if Repeats that appear in the ENR and QScore files do not exist 
# (not in the repeats sheet or master_proteins sheet)
def validate_repeats_in_enr_and_qscore_files():

    existing_repeat_lookup = get_repeat_lookup_by_name_or_alias()

    missing_repeat_names = set()

    for file_name in [settings.IMPORT_ENRICHMENT_FILE, settings.IMPORT_QSCORE_FILE]:
        print(f"Loading repeats from {file_name}")
        df = pd.read_csv(file_name, dtype=str)
        df = df.where(pd.notnull(df), None)
        for col in df.columns:
            if col in ['motif_id', 'gene', 'tax_id', 'uniprot_ids']:
                continue

            # Check if Repeat by this col name exists. Look for name and aliases
            repeat_name = col
            repeat_obj = existing_repeat_lookup.get(repeat_name.lower())
            if not repeat_obj:
                print(f"Found Repeat {col} in {file_name} but not found in database.")
                missing_repeat_names.add(repeat_name)
        
    if missing_repeat_names:
        raise Exception(f"The following repeats appear in the ENR and QScore files but do not exist in the database: {missing_repeat_names}. Please add them to the repeats sheet or master_proteins sheet before running the import.")


# 
BASE_URL_ORTHO = "https://v9-1.orthodb.org"

def get_og_for_gene(gene_query: str, level: int = 2759):
    """
    Search OrthoDB for a gene and return its best matching OG id.
    gene_query: gene name, UniProt accession, Ensembl ID, etc.
    level: NCBI taxon ID for orthology level (default: Eukaryota)
    """
    resp = requests.get(f"{BASE_URL_ORTHO}/search", params={
        "query": gene_query,
        "level": level,
        "limit": 1,
    })
    resp.raise_for_status()
    data = resp.json()
    
    if data.get("status") != "ok" or not data.get("data"):
        return None
    
    # data["data"] is a list of OG ids like ["2at2759", "15at2759", ...]
    return data["data"][0]

def get_ortholog_gene_ids(og_id: str) -> list[str]:
    """
    Given an OG id, return all gene IDs (across all species) in that group.
    Returns OrthoDB internal gene ids like "9606_0:001234"
    """
    resp = requests.get(f"{BASE_URL_ORTHO}/orthologs", params={"id": og_id})
    resp.raise_for_status()
    data = resp.json()
    
    if data.get("status") != "ok":
        return []
    
    gene_ids = []
    for entry in data.get("data", []):
        # Each entry has "gene_id" dict with "param" being the gene id string
        gene_ids.append(entry["gene_id"]["param"])
    return gene_ids


def connect_repeats(level: int = 2759):
    og_to_uuid: dict[str, str] = {}
    
    for repeat in Repeat.objects.all():
        if not repeat.name:
            continue
            
        og_id = get_og_for_gene(repeat.name, level=level)
        # time.sleep(0.5)
        
        if og_id is None:
            print(f"No OG found for: {repeat.name}")
            continue
        
        if og_id not in og_to_uuid:
            og_to_uuid[og_id] = shortuuid()
        
        repeat.universal_id = og_to_uuid[og_id]
        repeat.save()
        print(f"Assigned {repeat.universal_id} to {repeat.name} (OG: {og_id})")


def connect_proteins(level: int = 2759):
    og_to_uuid: dict[str, str] = {}
    
    for protein in ProteinTF.objects.all():
        if not protein.gene:
            continue
            
        og_id = get_og_for_gene(protein.UNIPROT, level=level)
        # time.sleep(0.5)
        
        if og_id is None:
            print(f"No OG found for: {protein.UNIPROT}")
            continue
        
        if og_id not in og_to_uuid:
            og_to_uuid[og_id] = shortuuid() 
        
        protein.universal_id = og_to_uuid[og_id]
        protein.save()
        print(f"Assigned {protein.universal_id} to {protein.UNIPROT} - {protein.gene} (OG: {og_id})")
    

    # show organism from repeat when hover + add legend of color for each organism

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
            # print(gene.strip(), tax_id)
            # print(motif_data)
            # print(motif_data.name)
            if not motif_data is None and len(motif_data.species) > 0 and motif_data.species[0] != '':
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
        
        print(f"get_jaspar_ids: gene={gene}, tax_group={tax_group}")
       
        cache_folder = '.cache'

        jaspar_json = None
        # If use_cache then try to load from cache first
        # If not found in cache then try loading from the url
        if use_cache:
            # cache_file = f"{cache_folder}/jaspar/{slugify(gene)}.json"
            cache_file = f"{cache_folder}/jaspar/{slugify(f"{tax_group}-{gene}")}.json"
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


def load_pubmed_data(ref_doi, use_cache=True):

    cache_folder = '.cache/pubmed/'

    pubmed_json = None
    # If use_cache then try to load from cache first
    # If not found in cache then try loading from the url
    cache_file = f"{cache_folder}/{slugify(ref_doi)}.json"
    if use_cache:
        if os.path.exists(cache_file):
            print(f"Loading pubmed data from cache")
            with open(cache_file, 'r') as stream:
                pubmed_json = json.load(stream)

    if not pubmed_json:
        if not os.path.exists(cache_folder):
            os.makedirs(cache_folder)
        print(f"Loading pubmed data from url")
        pubmed_json = Entrez.read(Entrez.esearch(db="pubmed", term=ref_doi))
        with open(cache_file, 'w') as stream:
            json.dump(pubmed_json, stream, indent=2)

    return pubmed_json


def get_or_create_reference(ref_str):
    if not ref_str:
        return None
    
    if ref_str.startswith('10.'):
        ref_doi = ref_str
    elif ref_str.startswith('https://doi.org/'):
        ref_doi = ref_str.replace('https://doi.org/', '')
    else:
        return None
    
    ref_doi = ref_doi.lower()
    ref_doi_obj = get_obj_if_exists(Reference, doi=ref_doi)
    if ref_doi_obj:
        print(f"Reference with doi {ref_doi} already exists. Returning existing object.")
        return ref_doi_obj

    print(f"Loading reference data: ref_doi = {ref_doi}")
    pubmed_record = load_pubmed_data(ref_doi)

    pubmed_id = pubmed_record['IdList'][0] if len(pubmed_record['IdList']) > 0 else None

    if pubmed_id:
        ref = Reference.objects.filter(pmid=pubmed_id).first()
        if ref:
            # Optional: populate missing DOI
            if not ref.doi:
                ref.doi = ref_doi
                ref.save(update_fields=["doi"])
            return ref

    prim_ref_obj = Reference(
        id = uuid.uuid4().int % 100000,
        created = datetime.now(),   
        modified = datetime.now(),
        doi = ref_doi,
        pmid = pubmed_id)
    prim_ref_obj.save()

    return prim_ref_obj


def create_protein_references(protein_obj, refs):

    if not refs:
        return
    
    # For other references in the references column, 
    # create a many-to-many relationship between this protein and the reference
    for ref_str in refs.split(','):
        print(f"Processing reference {ref_str} for protein {protein_obj.gene}")
        ref_obj = get_or_create_reference(ref_str.strip())
        if not ref_obj:
            print(f"Invalid reference {ref_str} for protein {protein_obj.gene}. Skipped.")
            continue 
        # Create a many-to-many relationship between this protein and the reference
        protein_ref_obj = ProteinReferences(protein = protein_obj, reference = ref_obj)
        protein_ref_obj.save()


def create_protein_repeats_for_satellite(protein_obj, satellite_str):
    if not satellite_str:
        return
    satellites = [x.strip() for x in satellite_str.split(',')]
    for satellite in satellites:
        # TODO: In the future, reject these in the validation step
        if satellite == 'unknown' or '?' in satellite:
            print(f"Skipping invalid satellite {satellite} for protein {protein_obj.gene}. Skipped.")
            continue
        print(f"Processing satellite {satellite} for protein {protein_obj.gene}")
        repeat_obj = Repeat.objects.filter(name=satellite)[0]
        protein_repeat_obj = get_or_create_protein_repeat(protein_obj, repeat_obj)


def get_protein_tf(uniprot, gene):
    if not uniprot or not gene:
        return None 
    slug = slugify(uniprot+ '-' + gene)
    return ProteinTF.objects.get(slug=slug)


# Create ProteinTF object for a row in the master_proteins sheet. 
# This function assumes the data has already been validated 
# and will raise an error if required fields are missing 
# or if there are invalid values.
def create_protein_tf(row):

    gene = row['gene']
    gene_family_obj = None
    if row['gene_family']:
        gene_family_obj = get_obj_if_exists(GeneFamily, gene_family=row['gene_family'])

    parent_organism_obj = None
    parent_organism = row['parent_organism']
    if parent_organism:
        parent_organism = int(parent_organism)
        parent_organism_obj = get_organism_obj(parent_organism)

    # Get list of jaspar matrix_ids either from local .cache folder or from url
    # TODO: This should move to Motif
    jasper_ids = get_jaspar_ids(gene, tax_group=parent_organism_obj.taxonomy_group, use_cache=True)

    # Get References
    prim_ref = row['primary_reference']
    prim_ref_obj = get_or_create_reference(prim_ref)

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
        ENSEMBL=row['ensembl'],
        UNIPROT=row['uniprot'],
        PDB=row['PDB'],
        micro_url=row['micro_url'],
        AF3=row['AF3'],
        proteomics_url=row['proteomics_url'],
        rna_url=row['rna_url'],
        jaspar=jasper_ids,
        protein_sequence=row['protein_sequence'],
        molecular_weight=row['molecular_weight'],
        cofactor=parse_array(row['cofactor']),
        oligomerization=row['oligomerization'] if row['oligomerization'] else None,
        gene_family=gene_family_obj,
        parent_organism=parent_organism_obj,
        primary_reference = prim_ref_obj
    )
    print(f"Creating ProteinTF: ENSEMBL: {obj.ENSEMBL}, GENE: {obj.gene}")
    obj.save()

    protein_obj = get_protein_tf(row['uniprot'], gene)

    # Create many-to-many between ProteinTF and Reference based on references column
    if row.get('references'):
        create_protein_references(protein_obj, row['references'])


def validate_protein_data(row):
    
    # TODO: VALIDATE COLUMNS

    gene = row['gene']
    if not gene:
        raise Exception("Missing gene name")


def import_protein_from_enr_and_qscore_files():
            
    count = 0

    complex_protein_rows = []
    protein_tf_rows = []

    file_name = settings.IMPORT_ENRICHMENT_FILE
    df = pd.read_csv(file_name, dtype=str)
    df = df.where(pd.notnull(df), None)
    df = df[df['gene'].notnull()]
    num_rows = len(df)

    # df['motif_main_id'] = df['motif_id'].apply(lambda x: x.split('.')[0] if x else None)
    # g = df.groupby('gene')
    # g_df = g.first()
    # g_df['num_motifs'] = g['motif_main_id'].nunique()
    # g_df['motif_main_ids'] = g['motif_main_id'].unique()
    # g_df = g_df.reset_index()

    # test_df = g_df[g_df['num_motifs'] > 1][['gene', 'num_motifs', 'motif_main_ids']]
    # print(test_df)
    # print(len(test_df))

    for raw_row in df.to_dict(orient='records'):
        components = []
        
        gene_name = raw_row['gene'].strip().upper()

        tax_id = raw_row['tax_id'].strip() if raw_row['tax_id'] else None
        uniprot_ids = [x.strip().upper() for x in raw_row['uniprot_ids'].strip().split(',')]
        gene_type = 'tf'

        if len(uniprot_ids) > 1:
            if '::' in gene_name:
                genes = gene_name.split('::')
                gene_type = 'complex'
            elif '-' in gene_name:
                genes = gene_name.split('-')
                gene_type = 'fusion'
            else:
                genes = [gene_name]
        else:
            genes = [gene_name]

        if len(genes) != len(uniprot_ids):
            raise Exception(f"Number of genes ({genes}) does not match number of uniprot_ids ({uniprot_ids}) for gene {gene_name}.")

        i = 0
        for gene in genes:
            single_protein_tf = {
                "gene": gene,
                "gene_type": gene_type,
                "tax_id": tax_id,
                "uniprot_id": uniprot_ids[i]
            }
            components.append(single_protein_tf)
            protein_tf_rows.append(single_protein_tf)
            i += 1

        if len(components) > 1:
            complex_protein_rows.append({
                "gene": gene_name,
                "gene_type": gene_type,
                "tax_id": tax_id,
                "components": components
            })

    debug_rows = []
    # First create ProteinTF objects for simple proteins
    for raw_row in protein_tf_rows:
        gene = raw_row['gene']
        parent_organism_id = raw_row['tax_id'].split(':')[0]
        uniprot_id = raw_row['uniprot_id']
        # print(f"""Processing row {count} out of {num_rows}: protein = {gene}, 
        #     parent_organism_id = {parent_organism_id}, 
        #     uniprot_id = {uniprot_id}""")

        existing_obj = get_obj_if_exists(ProteinTF, UNIPROT=uniprot_id, gene=gene)
        print(f"Checking if ProteinTF exists: UNIPROT={uniprot_id}, gene: {gene} --> existing_obj:{existing_obj}")
        if existing_obj:
            print(f"Protein gene: {gene}, UNIPROT: {uniprot_id} already exists. Skipped.")
            continue

        # Use uniprot-id-mapper instead. It calls the API
        ensembl, aliases = get_ensemble_id_and_aliases(gene, uniprot_id)
        if not ensembl:
            print(f"ERROR: No ENSEMBL ID found for gene {gene} with uniprot ids {uniprot_id} and parent organism id {parent_organism_id}. This protein will be created with ensembl = NONE. Please check if this is correct.")

        debug_rows.append(
            {
                "gene": gene,
                "uniprot": uniprot_id,
                "ensembl": ensembl,
                "aliases": aliases
                }
        )

        if not ensembl:
            ensembl = 'NONE'
        # if not uniprot_id:
        #     uniprot_id = "NONE" 
        if not aliases:
            aliases = None

        print(f"""Creating ProteinTF: protein = {gene}, 
            parent_organism_id = {parent_organism_id}, 
            ensembl = {ensembl},
            aliases = {aliases},
            uniprot_id = {uniprot_id}""")
        

        protein_tf_data = {
            "gene": gene,
            "gene_family": None,
            "parent_organism": parent_organism_id,
            "aliases": aliases if aliases else None,
            "gene_type": "TF", 
            "dna_binding_domain": None,
            "signaling_pathway": None,
            "validation_grade": None,
            "prediction_method": None,
            "microscopy_result": None,
            "motif_enrichment": None,
            "motif_q_score": None, 
            "existing_images": None,
            "existing_images_link": None,
            "existing_fusion": None,
            "cloned_fusion": None,
            "imaging_results": None,
            "notes": None,
            "ensembl": ensembl,
            "uniprot": uniprot_id,
            "satellite": None,
            "PDB": None, # We will populate this later in update_PDB_from_uniprot()
            "micro_url": None,
            "AF3": None,
            "proteomics_url": None,
            "rna_url": None,
            "protein_sequence": None,
            "molecular_weight": None,
            "cofactor": None,
            "oligomerization": None,
            "primary_reference": None,
            "references": None
        }
        print(f"Creating protein {gene}")
        create_protein_tf(protein_tf_data)

    # Create Complex or Fusion proteins that have multiple genes in the gene column (e.g. gene1::gene2 or gene1-gene2)
    # Create the individual gene components if not already exist
    for raw_row in complex_protein_rows:
        gene = raw_row['gene']
        tax_id = raw_row['tax_id']
        components = raw_row['components']

    debug_df = pd.DataFrame(debug_rows)
    debug_df.to_csv("./debug_gene_uniprot_ensembl.csv", index=False)


def import_protein_from_satellite_binders_database():

    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)
    df = df.where(pd.notnull(df), None)
    df['gene'] = df['gene'].apply(lambda x: x.upper() if x else x)
    df = df[df['gene'].notnull()]

    #----------------------------------
    # Data validations
    for row in df.to_dict(orient='records'):
        validate_protein_data(row)  
    #----------------------------------

    num_rows = len(df)

    count = 0

    for row in df.to_dict(orient='records'):

        count += 1

        gene = row['gene']

        gene_type = row['gene_type'].lower() if row['gene_type'] else None
        if gene_type and ('fusion' in gene_type or 'complex' in gene_type):
            print(f"Skipping row {count} out of {num_rows}: protein = {gene}, gene_type = {gene_type}")
            continue

        print(f"Processing row {count} out of {num_rows}: protein = {gene}, gene_type = {gene_type}")

        existing_obj = get_obj_if_exists(ProteinTF, gene=row['gene'])
        if existing_obj:
            print(f"Protein {gene} already exists. Skipped.")
        else:
            print(f"Creating protein {gene}")
            create_protein_tf(row)


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
        prim_ref_obj = get_or_create_reference(prim_ref)
        protein_obj.primary_reference = prim_ref_obj
        protein_obj.save()

        refs = row['references']
        create_protein_references(protein_obj, refs)


def TO_DELETE__create_protein_repeat(protein_obj, repeat_obj):
    repeat_organism_id = repeat_obj.parental_organism.id if repeat_obj.parental_organism else None
    protein_organism_id = protein_obj.parent_organism.id if protein_obj.parent_organism else None
    if repeat_organism_id and protein_organism_id and (repeat_organism_id != protein_organism_id):
        print(f"""Organisim mismatch between protein and repeat. Skip creating ProteinRepeats: 
              repeat = {repeat_obj.name}, 
              repeat.parental_organism = {repeat_organism_id}, 
              protein = {protein_obj.gene}, 
              protein.parent_organism = {protein_organism_id}""")
        return None

    print(f"""Creating ProteinRepeats: 
            repeat = {repeat_obj.name}, 
            repeat.parental_organism = {repeat_organism_id}, 
            protein = {protein_obj.gene}, 
            protein.parent_organism = {protein_organism_id}""")
    protein_repeat_obj = ProteinRepeats(protein=protein_obj, repeat=repeat_obj)
    protein_repeat_obj.save()
    return protein_repeat_obj

def TO_DELETE_get_or_create_protein_repeat(protein_obj, repeat_obj):
    protein_repeat_obj = get_obj_if_exists(ProteinRepeats, protein=protein_obj, repeat=repeat_obj)
    # Create a new ProteinRepeats object if it does not exist
    if protein_repeat_obj:
        print(f"get_or_create_protein_repeat: Skipped creating ProteinRepeat: protein={protein_obj.gene}, repeat={repeat_obj.name}. Already exists.")
    else:
        print(f"get_or_create_protein_repeat: Creating ProteinRepeat: protein={protein_obj.gene}, repeat={repeat_obj.name}.")
        protein_repeat_obj =_create_protein_repeat(protein_obj, repeat_obj)

    return protein_repeat_obj


def _create_motif_repeat(motif_obj, repeat_obj):
    repeat_organism_id = repeat_obj.parental_organism.id if repeat_obj.parental_organism else None
    protein_organism_id = motif_obj.protein.parent_organism.id if motif_obj.protein.parent_organism else None
    # This is allowed
    # if repeat_organism_id and protein_organism_id and (repeat_organism_id != protein_organism_id):
    #     print(f"""Organisim mismatch between protein and repeat. Skip creating MotifRepeat: 
    #           repeat = {repeat_obj.name}, 
    #           repeat.parental_organism = {repeat_organism_id}, 
    #           motif = {motif_obj.motif_id}, 
    #           protein.uniprot = {motif_obj.protein.UNIPROT},
    #           protein.gene = {motif_obj.protein.gene},
    #           protein.parent_organism = {protein_organism_id}""")
    #     return None

    print(f"""Creating MotifRepeat: 
            repeat = {repeat_obj.name}, 
            repeat.parental_organism = {repeat_organism_id}, 
            motif = {motif_obj.motif_id}, 
            protein.uniprot = {motif_obj.protein.UNIPROT},
            protein.gene = {motif_obj.protein.gene},
            protein.parent_organism = {protein_organism_id}""")
    motif_repeat_obj = MotifRepeat(motif=motif_obj, repeat=repeat_obj)
    motif_repeat_obj.save()
    return motif_repeat_obj


def get_or_create_motif_repeat(motif_obj, repeat_obj):
    motif_repeat_obj = get_obj_if_exists(MotifRepeat, motif=motif_obj, repeat=repeat_obj)
    # Create a new ProteinRepeats object if it does not exist
    if motif_repeat_obj:
        print(f"get_or_create_motif_repeat: Skipped creating MotifRepeat: motif={motif_obj.motif_id}, repeat={repeat_obj.name}. Already exists.")
    else:
        print(f"get_or_create_motif_repeat: Creating MotifRepeat: motif={motif_obj.motif_id}, repeat={repeat_obj.name}.")
        motif_repeat_obj = _create_motif_repeat(motif_obj, repeat_obj)

    return motif_repeat_obj


def get_protein_lookup_by_gene_or_alias():
    existing_proteins = ProteinTF.objects.all()
    existing_protein_lookup = dict()
    for obj in existing_proteins:
        existing_protein_lookup[obj.gene.lower()] = obj
        if obj.aliases:
            for alias in obj.aliases:
                if alias:
                    existing_protein_lookup[alias.lower()] = obj
    return existing_protein_lookup


# Case insensitive lookup of Repeat objects by name or alias.
def get_repeat_lookup_by_name_or_alias():
    existing_repeats = Repeat.objects.all()
    existing_repeat_lookup = dict()
    for obj in existing_repeats:
        existing_repeat_lookup[obj.name.lower()] = obj 
        if obj.aliases:
            for alias in obj.aliases:
                if alias:
                    existing_repeat_lookup[alias.lower()] = obj
    return existing_repeat_lookup


def update_motif_repeats():

    print("update_motif_repeats: deleting all objetcs")
    MotifRepeat.objects.all().delete()
    print("update_motif_repeats: done deleting all objetcs")

    existing_repeat_lookup = get_repeat_lookup_by_name_or_alias()

    motif_repeats = dict()

    en_df = pd.read_csv(settings.IMPORT_ENRICHMENT_FILE)
    en_df = en_df.where(pd.notnull(en_df), None)
    for row in en_df.to_dict(orient='records'):
        # This could be gene name or alias, so we need to look it up in 
        # the existing_protein_lookup dictionary
        motif_id = row["motif_id"].strip()
        # gene = row["gene"].strip()
        # tax_id = row["tax_id"].strip()
        uniprot_ids = row["uniprot_ids"].strip().split(',')

        # TODO Skip for now
        if len(uniprot_ids) > 1:
            continue

        # Lookup the protein object by gene name or alias, case-insensitively
        motif_obj = get_obj_if_exists(Motif, motif_id=motif_id)
        if motif_obj is None:
            raise Exception(f"Missing motif {motif_id}")

        for raw_repeat, value in row.items():
            if raw_repeat in ['motif_id', 'gene', 'tax_id', 'uniprot_ids']:
                continue
            # Lookup the repeat object by name or alias, case-insensitively
            repeat_name_lower = raw_repeat.lower()
            repeat_obj = existing_repeat_lookup.get(repeat_name_lower)
            if not repeat_obj:
                raise Exception(f"Missing repeat obj {raw_repeat}")
            
            key = motif_id, repeat_name_lower
            if motif_repeats.get(key):
                raise Exception(f"Found duplicate motif_id in ENR file: motif_id={motif_id}, repeat={repeat_name_lower}")

            # Create a new ProteinRepeats object if it does not exist, otherwise update the existing one
            motif_repeat_obj = get_or_create_motif_repeat(motif_obj, repeat_obj)
            
            if not motif_repeat_obj:
                raise Exception(f"Failed to get or create MotifRepeat: motif={motif_id}, repeat={raw_repeat}")

            motif_repeats[key] = motif_repeat_obj    

    # Load enrichment data from other files and update the lookup dictionary
    for data_type, file_name in [('ENR', settings.IMPORT_ENRICHMENT_FILE), ('Qscore', settings.IMPORT_QSCORE_FILE)]: 
        print(f"Loading enrichment data from {file_name}")
        df = pd.read_csv(file_name)
        df = df.where(pd.notnull(df), None)

        for row in df.to_dict(orient="records"):
            # This could be gene name or alias, so we need to look it up in 
            # the existing_protein_lookup dictionary
            motif_id = row["motif_id"].strip()

            for raw_repeat, value in row.items():
                if raw_repeat in ['motif_id', 'gene', 'tax_id', 'uniprot_ids']:
                    continue

                # Ignore if no data
                if value is None:
                    continue

                # ENR and Qscore should be numeric values, so we will try to convert them to float
                value_float = None
                try:
                    value_float = float(value)
                except ValueError:
                    pass

                if math.isnan(value_float):
                    value_float = None

                # Lookup the repeat object by name or alias, case-insensitively
                repeat_name_lower = raw_repeat.lower()

                key = motif_id,repeat_name_lower
                motif_repeat_obj = motif_repeats.get(key)
                if not motif_repeat_obj:
                    # These are complex protein
                    print(f"Skip missing MotifRepeat obj: data_type={data_type}, motif_id={motif_id}, repeat={repeat_name_lower}")
                    continue
                
                if data_type == 'ENR':
                    if value_float is not None and value_float < 0.00001:
                        continue
                    motif_repeat_obj.motif_enrichment = value_float
                else:
                    motif_repeat_obj.motif_q_score = value_float

                print(f"value_float type = {type(value_float)}, value_float = {value_float}")
                print(f"""Updating MotifRepeat - 
                    data_type: {data_type},
                    motif_obj:{motif_obj.motif_id}, 
                    UNIPROT: {motif_obj.protein.UNIPROT},
                    gene: {motif_obj.protein.gene},
                    organisim: {motif_obj.protein.parent_organism.id},
                    repeat_obj:{repeat_obj.name}, 
                    motif_enrichment:{motif_repeat_obj.motif_enrichment}, 
                    motif_q_score:{motif_repeat_obj.motif_q_score}""")
                motif_repeat_obj.save()


def update_motif_repeat_has_enr_or_qscore():
    objs = MotifRepeat.objects.all()
    for obj in objs:
        obj.has_enr_or_q_score = obj.motif_enrichment is not None \
            or obj.motif_q_score is not None
        obj.save()


def get_proteomic_data(mapper, uniprot_id):
    print(f"get_proteomic_data: uniprot_id = {uniprot_id}")
    proteomics_cache_folder = '.cache/proteomics'
    cache_file = f"{proteomics_cache_folder}/{uniprot_id}.csv"
    if os.path.exists(cache_file):
        print(f"get_proteomic_data: loading proteomic data from cache: {cache_file}")
        result_df = pd.read_csv(cache_file, dtype=str)
        result_df = result_df.where(pd.notnull(result_df), None)
        if len(result_df) > 0:
            return result_df, []
   
    print(f"get_proteomic_data: loading proteomic data using ProtMapper for {uniprot_id}")
    if not os.path.exists(proteomics_cache_folder):
        os.makedirs(proteomics_cache_folder)
    # Use ProtMapper to get the data
    try:
        result_df, failed = mapper.get(ids=[uniprot_id], fields=['gene_primary', 'gene_names', 'xref_ensembl'])
        print(f"ProtMapper returned type(failed) = {type(failed)}, failed = {failed}")
        print(result_df)
        result_df.to_csv(cache_file, index=False)
        return result_df, failed
    except Exception as e:
        print(f"ERROR ProtMapper failed: {e}")

    return None, None

def get_ensemble_id_and_aliases(gene, uniprot_id):

    # Get it from cache
    if not uniprot_id:
        return None, None

    mapper = ProtMapper()
    print(f"get_ensemble_id_and_aliases: gene = {gene}, uniprot_id = {uniprot_id}")
    result_df, failed = get_proteomic_data(mapper, uniprot_id)
    if result_df is None:
        return None, None
    # result_df['Ensembl'] = result_df['Ensembl'].apply(lambda x: x.split(' ')[0].split('.')[0] if pd.notnull(x) and x != '' else None)
    result_df = result_df.where(pd.notnull(result_df), None)
    if len(result_df) == 0:
        return None, None
    
    print(f"get_proteomic_data returned {len(result_df)} results:")
    print(result_df)
    for row in result_df.to_dict(orient='records'):
        primary_gene = row['Gene Names (primary)']
        if primary_gene.lower() != gene.lower():
            print(f"Gene name mismatch for uniprot_id {uniprot_id}: gene from spreadsheet = {gene}, gene from proteomics data = {row['Gene Names (primary)']}. Skipping this uniprot_id.")
            continue
        aliases = [x.strip() for x in row['Gene Names'].split(' ') if x.strip()]
        ensembl = None
        raw_ensembl = row['Ensembl']
        if raw_ensembl:
            ensembl = raw_ensembl.split(' ')[0].split('.')[0]

        print(f"Raw ensembl: {raw_ensembl}, parsed ensembl: {ensembl}, aliases = {aliases}")
        return ensembl, ','.join(aliases)
    
    return None, None


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
                    protein_repeat_obj = get_or_create_protein_repeat(protein_obj, repeat_obj)

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
    file = f"{settings.IMPORT_DATA_FOLDER}/proteomics_data/proteomics_datasets.xlsx"
    print(f"Loading proteomics data from {file}")
    pr_df = load_dataframe_from_excel(file, 'Sheet1')
    pr_df = pr_df.where(pd.notnull(pr_df), None)

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
        if not protein_obj:
            print(f"Protein {protein_target} not found in database. Skipped importing this proteomics data.")
            continue
        repeat_target = target_list['repeat']
        repeat_obj = get_obj_if_exists(Repeat, name=repeat_target)
        if not repeat_obj:
            print(f"Repeat {repeat_target} not found in database. Skipped importing this proteomics data.")
            continue
        print(repeat_target, repeat_obj.name)
        method = row['Method']
        desc = row['Description']
        citation = row['Citation']
        date_generated = row['Date generated/published'] # YYYY-MM-DD
        x_axis_name = row['X-axis']
        y_axis_name = row['Y-axis']
        threshold = row['Threshold [ y, x]']
       
        if not parent_organism_obj:
            print("Adding Organism")
            org_obj = Organism(id=int(parent_organism_ncbi))
            org_obj.save()
        else:
            print(f"Found parent Organism: {parent_organism_ncbi}")

        if not repeat_obj:
            print("Adding Repeat")
            repeat_obj = Repeat(name=repeat_target, parental_organism = parent_organism_obj)
            repeat_obj.save()
        else:
            print(f"Found parent Repeat: {repeat_obj.name}")

        if not protein_obj: # get uniprot to fill in information?
            print("Adding Target Protein")
            protein_obj = ProteinTF(gene=protein_target, parent_organism = parent_organism_obj, ENSEMBL = "none")
            protein_obj.save()
        else:
            print(f"Found ProteinTF: {protein_obj.gene}")

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
                else: # SIGNIFICANT (red)
                    data_format = 1
                    # Import with UNIPROT
                    uniprot_arr = row[df.keys()[0]]
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
                            protein_repeat_obj = get_or_create_protein_repeat(protein_obj, repeat_obj)

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
        print("Data Saved")


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


# def update_jaspar():
#     df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)


#     for gene in sorted(set(df[df['gene'].notnull()]['gene'].values)):
#         if not gene:
#             continue


#         print(f"\n***Updating protein {gene}")
#         # Get list of jaspar matrix_ids
#         jasper_ids = get_jaspar_ids(gene, tax_group='vertebrates', use_cache=True)
#         if jasper_ids:
#             protein_obj = ProteinTF.objects.get(gene=gene)
#             protein_obj.jaspar = jasper_ids
#             print(f"Updating protein: {protein_obj}")
#             protein_obj.save()


def save_proteins():
    for protein in ProteinTF.objects.all():
        protein.save()


def submit_uniprot_to_ensembl_mapping(uniprot_ids):
    return submit_uniprot_to_pdb_or_ensembl_mapping(uniprot_ids, mapping_type="Ensembl")

def submit_uniprot_to_pdb_mapping(uniprot_ids):
    return submit_uniprot_to_pdb_or_ensembl_mapping(uniprot_ids, mapping_type="PDB")

def submit_uniprot_to_pdb_or_ensembl_mapping(uniprot_ids, mapping_type):
    # The data you want to send as a Python dictionary
    uniprot_ids_str = ','.join(uniprot_ids)
    payload = {
        "from": "UniProtKB_AC-ID",
        "to": mapping_type,
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


def get_uniprot_to_pdb_or_ensembl_mapping_results(job_id):
    url = f'https://rest.uniprot.org/idmapping/status/{job_id}'
    max_tries = 5
    wait_time = 5


    all_results = []
    while url:

        tries = 0
        got_result = False
        while not got_result and tries < max_tries:

            try:

                print(f"\nCalling URL {url}")
                response = requests.get(url)
                print(f"Returned: {response.status_code}")
                # Raise an HTTPError for bad responses (4xx or 5xx)
                response.raise_for_status()
                got_result = True
                break

            except requests.exceptions.HTTPError as e:
                print(f"{tries}/{max_tries}: {e.response.status_code} {e.response.text}. Wait {wait_time} seconds and retrying...")
                tries += 1
                time.sleep(wait_time)

        if not got_result:
            print(f"Failed to get results after {max_tries} tries. Exiting.")
            break

        # Get the JSON response from the server
        response_data = response.json()
        results = response_data.get('results', [])
        if results:
            all_results.extend(results)


        print(f'Got {len(results)} results: {results}')
        print(f"Failed IDs: {response_data.get('failedIds')}")
        print(f"Response headers: {response.headers}")

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

def get_uniprot_to_ensembl_mapping(uniprot_ids, use_cache=True):

    cache_folder = '.cache/uniprot'

    lookup = dict()

    uniprot_ids_to_fetch = []
    if use_cache:
        if not os.path.exists(cache_folder):
            os.makedirs(cache_folder)
        for uniprot_id in uniprot_ids:
            cache_file = f"{cache_folder}/{uniprot_id}_ensembl.json"
            if os.path.exists(cache_file):
                print(f"Loading UniProt to Ensembl mapping from cache: {cache_file}")
                with open(cache_file, 'r') as stream:
                    uniprot_json = json.load(stream)
                    lookup[uniprot_id] = uniprot_json
            else:
                uniprot_ids_to_fetch.append(uniprot_id)
    else:
        uniprot_ids_to_fetch = uniprot_ids

    if uniprot_ids_to_fetch:
        print(f"Fetching UniProt to Ensembl mapping for {len(uniprot_ids_to_fetch)} uniprot ids")
        job_id = submit_uniprot_to_ensembl_mapping(uniprot_ids_to_fetch)
        time.sleep(5) # wait for the job to start processing
        new_results = get_uniprot_to_pdb_or_ensembl_mapping_results(job_id)
        for result in new_results:
            unipro_id = result['from']
            cache_file = f"{cache_folder}/{unipro_id}_ensembl.json"
            with open(cache_file, 'w') as stream:
                json.dump(result, stream, indent=2)
            lookup[unipro_id] = result
    
    return lookup


def get_uniprot_to_pdb_mapping(uniprot_ids, use_cache=True):

    cache_folder = '.cache/uniprot'

    lookup = dict()

    uniprot_ids_to_fetch = []
    if use_cache:
        if not os.path.exists(cache_folder):
            os.makedirs(cache_folder)
        for uniprot_id in uniprot_ids:
            cache_file = f"{cache_folder}/{uniprot_id}.json"
            if os.path.exists(cache_file):
                print(f"Loading UniProt to PDB mapping from cache: {cache_file}")
                with open(cache_file, 'r') as stream:
                    uniprot_json = json.load(stream)
                    lookup[uniprot_id] = uniprot_json
            else:
                uniprot_ids_to_fetch.append(uniprot_id)
    else:
        uniprot_ids_to_fetch = uniprot_ids

    if uniprot_ids_to_fetch:
        print(f"Fetching UniProt to PDB mapping for {len(uniprot_ids_to_fetch)} uniprot ids")
        job_id = submit_uniprot_to_pdb_mapping(uniprot_ids_to_fetch)
        time.sleep(5) # wait for the job to start processing
        new_results = get_uniprot_to_pdb_or_ensembl_mapping_results(job_id)
        for result in new_results:
            unipro_id = result['from']
            cache_file = f"{cache_folder}/{unipro_id}.json"
            with open(cache_file, 'w') as stream:
                json.dump(result, stream, indent=2)
            lookup[unipro_id] = result
    
    return lookup


def update_PDB_from_uniprot():


    protein_objs = ProteinTF.objects.all()

    uniprot_ids = []
    for protein in protein_objs:
        if not protein.PDB and protein.UNIPROT and protein.UNIPROT.lower() != 'none':
            uniprot_ids.append(protein.UNIPROT)

    if not uniprot_ids:
        print("All proteins already have PDB ids. No update needed.")
        return
    
    print(f"Searching PDB for {len(uniprot_ids)} unique uniprot ids")

    # Get uniport to PDB mapping for the given uniprot ids, using cache if available
    pdb_lookup = get_uniprot_to_pdb_mapping(uniprot_ids, use_cache=True)

    print(f"Got {len(pdb_lookup)} unique uniprot ids with PDB mappings")

    saved_count = 0
    for protein in protein_objs:
        if protein.PDB:
            print(f"Protein {protein.gene} already has PDB id {protein.PDB}. Skipped.")
            continue

        result = pdb_lookup.get(protein.UNIPROT)
        if not result or not result.get('to'):
            print(f"No PDB mapping found for protein {protein.gene} with uniprot id {protein.UNIPROT}")
            continue
        pdb_id = result['to']
        print(f"Updating protein {protein.gene} with uniprot = {protein.UNIPROT}: set PDB to {pdb_id}")
        protein.PDB = pdb_id
        protein.save()
        saved_count += 1

    print(f"Updated {saved_count} proteins with PDB ids")


def update_microscopy():
    print(f"Updating microscopy data from {settings.IMPORT_MICROSCOPY}")
    raw_df = pd.read_csv(settings.IMPORT_MICROSCOPY, dtype=str)

    raw_df = raw_df.where(pd.notnull(raw_df), None)
    # Filter rows where protein is not null
    all_df = raw_df[raw_df['protein'].notnull() & raw_df['protein_name'].notnull()]
    print(f"Found {len(all_df)} microscopy records to process")

    uniprot_gene_mapping = all_df[['protein', 'protein_name']].drop_duplicates()

    unique_proteins = set(all_df['protein'].values)
    print(f"Unique proteins in microscopy data: {len(unique_proteins)}")

    for uniprot, gene in uniprot_gene_mapping.to_dict(orient='records'):
        df = all_df[(all_df['protein'] == uniprot) & (all_df['protein_name'] == gene)].copy(deep=True)
        cell_index_lookup = dict()
        for row in df.to_dict(orient='records'):
            print(f"Processing microscopy for : uniprot = {row['protein']}, gene = {row['gene']}")
            if len(ProteinTF.objects.filter(UNIPROT = row['protein'])) == 0:
                print(f"Protein with UNIPROT {row['protein']} does not exist. Skipped.")
                continue

            uniprot = row['protein']
            gene = row['gene']

            channels    = json.loads(row['channels'])

            channel_key = ""
            for channel_index, channel_name in channels.items():
                if channel_name:
                    if channel_key:
                        channel_key += ', '
                    channel_key += channel_name
            
            if channel_key in cell_index_lookup:
                cell_index_lookup[channel_key] += 1
            else:
                cell_index_lookup[channel_key] = 1

            # This is used to display in dropdown menu
            display_name = f"Cell {cell_index_lookup[channel_key]}: {channel_key}"   

            url = row['url'].strip()

            # Unique key for the microscopy record is the name, which is derived from the url
            name = url.split('/')[-1].split('.')[0]

            # The protein column in the spreadsheet contains the uniprot id  
            protein_obj = get_protein_tf(uniprot, gene)

            if not protein_obj:
                print("Protein: uniprot = {uniprot}, gene = {gene} does not exist. Skipped.")
                continue

            gene = protein_obj.gene

            local_tiff_file = row['local_img_file'].strip() if row['local_img_file'] else None
            cell_type = row['cell_type'].strip() if row['cell_type'] else None
            pixel_size = row['pixel_size'].strip() if row['pixel_size'] else None
            magnification = row['magnification'].strip() if row['magnification'] else None
            expression = row['expression'].strip() if row['expression'] else None
            microscopy = row['microscopy'].strip() if row['microscopy'] else None
            description = row['description'].strip() if row['description'] else 'N/A'

            existing_microscopy = Microscopy.objects.filter(proteintf=protein_obj, name=name, url=url).first()
            if existing_microscopy:
                print(f"Microscopy with name {name} and url {url} already exists for protein {gene}. Skipped.")
                continue

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
    print(f"Importing {len(df)} rows of genome references from {settings.IMPORT_DATA_FILE}")

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

        source = row['source']
        if source == 'genbank':
           source = 'https://www.ncbi.nlm.nih.gov/datasets/genome/' + row['reference']

        if len(GenomeReferences.objects.filter(organism=parent_organism_obj, reference=row['reference'])) > 0:
            print(f"Genome reference for organism {parent_organism} with reference {row['reference']} already exists. Skipped.")
            continue

        print(f"Creating GenomeReferences for organism {parent_organism} with reference {row['reference']}")
        obj = GenomeReferences(
            id = shortuuid(),
            organism = parent_organism_obj,
            reference = row['reference'],
            aliases = alias_lst,
            source = source
        )
        obj.save()


def create_or_update_motif_from_jaspar():
            
    proteins = ProteinTF.objects.all()
    for protein in proteins:
        jaspars = protein.jaspar
        for jaspar_id in jaspars:
            if not get_obj_if_exists(Motif, motif_id=jaspar_id):
                print(f"Creating motif: motif_id={jaspar_id}, gene={protein.gene}")
                motif = Motif(motif_id=jaspar_id, protein=protein)
                motif.save()


def create_or_update_motif_from_enr_file():
    # motif_gene_mapping = dict()
    enr_df = pd.read_csv(settings.IMPORT_ENRICHMENT_FILE, dtype=str)
    enr_df = enr_df.where(pd.notnull(enr_df), None)
    for row in enr_df[enr_df['motif_id'].notnull()].to_dict(orient='records'):
        motif_id = row['motif_id']
        if get_obj_if_exists(Motif, motif_id=motif_id):
            continue
       
        motif_id = row['motif_id']
        gene_name = row['gene']
        tax_id = row['tax_id'].strip() if row['tax_id'] else None
        uniprot_ids = [x.strip().upper() for x in row['uniprot_ids'].strip().split(',')]
        gene_type = 'tf'

        # TODO: Skip complex protein for now
        if len(uniprot_ids) > 1:
            continue
        
        uniprot_id = uniprot_ids[0]
        protein_obj = get_protein_tf(uniprot=uniprot_id, gene=gene_name)
        print(f"Creating motif: motif_id={motif_id}, uniprot={gene_name}, gene={gene_name}")
        motif = Motif(motif_id=motif_id, protein=protein_obj)
        motif.save()

        # TODO: Create Motif for complex protein
        # if len(uniprot_ids) > 1:
        #     if '::' in gene_name:
        #         genes = gene_name.split('::')
        #         gene_type = 'complex'
        #     elif '-' in gene_name:
        #         genes = gene_name.split('-')
        #         gene_type = 'fusion'
        #     else:
        #         genes = [gene_name]
        # else:
        #     genes = [gene_name]

        # if len(genes) != len(uniprot_ids):
        #     raise Exception(f"Number of genes ({genes}) does not match number of uniprot_ids ({uniprot_ids}) for gene {gene_name}.")
        # index = 0
        # for uniprot_id in uniprot_ids:
        #     gene = genes[index]
        #     # Assume that protein has been created
        #     protein_obj = get_protein_tf(uniprot=uniprot_id, gene=gene)
        #     print(f"Creating motif: motif_id={motif_id}, uniprot={gene}, gene={gene}")
        #     motif = Motif(motif_id=motif_id, protein=protein_obj)
        #     motif.save()
        #     index += 1        
    

def fix_protein_jaspars():
    proteins = ProteinTF.objects.all()
    for protein in proteins:
        # Taxonomy id
        tax_group = protein.parent_organism.taxonomy_group
        if tax_group != 'vertebrates':
            jasper_ids = get_jaspar_ids(protein.gene, tax_group=tax_group, use_cache=True)
            protein.jaspar = jasper_ids
            protein.save()


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


def import_protein():
    import_protein_from_satellite_binders_database()
    import_protein_from_enr_and_qscore_files()


def delete_all_records():
    # Delete all records in all tables
    print("DELETING ALL OBJECTS")
    Microscopy.objects.all().delete()
    Reference.objects.all().delete()
    ProteinReferences.objects.all().delete()
    ProteinRepeats.objects.all().delete()
    ProteinTF.objects.all().delete()
    Repeat.objects.all().delete()
    Proteomics.objects.all().delete()
    GenomeReferences.objects.all().delete()
    GeneFamily.objects.all().delete()
    Organism.objects.all().delete()
    print("FINISHED DELETING")

################################################
'''
We should be able to indepently create the following records in phases:

STEP 1: 
- Organism
- Author
- GenomeReferences (What for??)

STEP 2:
- Reference
- GeneFamily (Organism)
- Satellite??

STEP 3:
- ProteinTF (Organism, GeneFamily, Reference)
- Repeat (Organism, Satellite)

STEP 4:
- ProteinReference (Reference, ProteinTF)
- ProteinComplex (ProteinTF)
- Motif (ProteinTF, ProteinComplex)
- Proteomic (ProteinTF, Repeat, Organism)
- Microscopy (ProteinTF)

STEP 5:
- ProteinRepeat (ProteinTF, Repeat)
- MotifRepeat (Motif, Repeat)
'''
################################################
def update():

    # STEP 1: Import Organisms
    print("ORGANISMS")
    import_organisms()

    # print("GENOME REFS")
    import_genome_references()

    # # STEP 2: Import Gene Families
    print("GENE FAMILY")
    import_gene_family()

    # # STEP 3: ProteinTF and Repeat
    print("REPEAT")
    import_repeat()

    # validate_repeats_in_enr_and_qscore_files()

    print("PROTEIN")
    import_protein()
    import_protein_from_satellite_binders_database()
    import_protein_from_enr_and_qscore_files()
    update_PDB_from_uniprot()

    # STEP 4: ProteinReference, ProteinComplex, Motif, Proteomics, Microscopy
    print("PROTEOMICS")
    import_proteomics()
    print("NETWORK DATA")
    for org in Organism.objects.all():
        GetNetworkData(org.id, 0.1)
    # Don't call this
    ## GetNetworkDataAll()
    print("MICROSCOPY")
    update_microscopy()

    # For each existing Uniprot/gene, get all associated jaspaer (motif)
    # create_or_update_motif_from_jaspar()
    # Get motif/uniprot from enr file
    print("MOTIF_REPEATS")
    create_or_update_motif_from_enr_file()

    # STEP 5: MotifRepeat
    # validate_repeats_in_enr_and_qscore_files()
    update_protein_repeat_from_repeat_families()
    update_motif_repeats()


if __name__ == "__main__":


    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")


    command = 'unknown'
    if len(sys.argv) > 1:
        command = sys.argv[1]


    if command == 'reset':
        delete_all_records()
        update()

    elif command == 'update':
        update()

    elif command == 'import_repeat':
        import_repeat()
        update_repeat_families()
    
    elif command == 'connect_repeats':
        connect_repeats(2759)
    
    elif command == 'connect_proteins':
        connect_proteins(2759)
   
    elif command == 'import_protein':
        import_protein()


    elif command == 'import_refs':
        import_refs()
   
    elif command == 'import_genome_references':
        import_genome_references()
   
    # elif command == 'update_jaspar':
    #     update_jaspar()


    elif command == 'update_motif_repeats':
        update_motif_repeats()
     
    # elif command == 'update_proteomics':
    #     update_proteomics()
   
    # elif command == 'get_proteomics_without_proteins':
    #     get_proteomics_without_proteins()    


    elif command == 'import_proteomics':
        import_proteomics()


    elif command == 'update_microscopy':
        # Download google sheet from https://docs.google.com/spreadsheets/d/1HOvL2E9wabhGQOcfUvCHYIz5tjmqXsIJ1N1cv5CBky0/edit?gid=0#gid=0
        # Save it to local folder and set IMPORT_MICROSCOPY in settings file
        # Before running this command delete existing microscopy records
        Microscopy.objects.all().delete()
        update_microscopy()


    elif command == 'update_repeat_families':
        update_repeat_families()


    elif command == 'save_proteins':
        save_proteins()
       
    elif command == 'network_data':
        for org in Organism.objects.all():
            GetNetworkData(org.id, 3)
        GetNetworkDataAll(3)
    elif command == 'test_jaspar':
        load_jaspar_from_url('TCF7', 'vertebrates')


    elif command == 'update_PDB_from_uniprot':
        update_PDB_from_uniprot()


    elif command == 'create_user':
        if len(sys.argv) != 5:
            print("Usage: python backend/import_data.py create_user <username> <email> <password>")
            sys.exit(1)
        username = sys.argv[2]
        email = sys.argv[3]
        password = sys.argv[4]
        create_user(username, email, password, is_staff=False, is_superuser=False)


    # highlighht paths on hover
    # add gene family nodes

    else:
        print(f"Usage: python backend/import_data.py <command>")
        print("Command:")        
        print("- reset to delete existing records and repopulate tables")        
        print("- import_repeat to import repeat data")
        print("- import_protein to import protein data from table")
        print("- update_proteomics to update proteomics data in Proteomics table")
        print("- update_jaspar to download jaspar data and update jaspar column in Proteintf table")
        print("- update_motif_repeats to download enirchmend and motif data in MotifReoeat table")
        print("- update_microscopy overwrite microscopy table")
        print("- get_proteomics_without_proteins to import proteomics data without creating new ProteinTF objects")
        print("- create_user <username> <email> <password> to create a new user with the least privileges")
        print("- network_data to update network data")

