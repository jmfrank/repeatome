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

    # Get all unique taxonomy ids from master_proteins and repeats sheets
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins')
    taxonomy_ids = df['parent_organism'].dropna().unique().tolist()

    # Get all unique taxonomy ids from repeats sheets
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')
    taxonomy_ids.extend(df['taxonomy_id'].dropna().unique().tolist())

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


def import_repeat_families():
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

    parent_repeats_dict = import_repeat_families()

    for child, parent in parent_repeats_dict.items():
        child_obj = get_obj_if_exists(Repeat, name=child)
        if child_obj.parent_repeat:
            continue
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


def is_valid_repeat_name(name):
    if '?' in name or 'unknown' in name.lower() or not name:
        return False
    return True

def import_repeat():

    # Get repeat names from parent_name and children in repeats sheet
    repeat_df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')

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
    parent_repeats_dict = import_repeat_families()

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


def create_protein_repeats(protein_obj, satellite_str):
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
        if get_obj_if_exists(ProteinRepeats, protein=protein_obj, repeat=repeat_obj):
            print(f"Protein {protein_obj.gene} already has repeat {repeat_obj.name}. Skipped.")
        else:
            print(f"Creating ProteinRepeats: satellite = {satellite}, protein = {row['gene']}")
            protein_repeat_obj = ProteinRepeats(protein=protein_obj, repeat=repeat_obj)
            protein_repeat_obj.save()


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
    jasper_ids = get_jaspar_ids(gene, tax_group='vertebrates', use_cache=True)

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

    protein_obj = ProteinTF.objects.get(gene=gene)

    # Create many-to-many between ProteinTF and Reference based on references column
    create_protein_references(protein_obj, row['references'])

    # Create many-to-many between ProteinTF and Repeat based on satellite column
    create_protein_repeats(protein_obj, row['satellite'])


def validate_protein_data(row):
    
    # TODO: VALIDATE COLUMNS

    gene = row['gene']
    if not gene:
        raise Exception("Missing gene name")


def import_protein():

    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)
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
        print(f"Processing row {count} out of {num_rows}: protein = {gene}")

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

def update_proteinrepeats_enrichment(key, gene, repeat, value):
    protein_repeat_obj = get_obj_if_exists(ProteinRepeats, protein__gene=gene, repeat__name=repeat)
    if protein_repeat_obj:
        protein_repeat_obj.motif_enrichment = value
        print(f"Updating ProteinRepeat enrichment: {key} = {value}")
        protein_repeat_obj.save()
    else:
        print(f"ProteinRepeat not found for gene: {gene}, repeat: {repeat}. Skipping enrichment update.")


# Add enrichment and q score data from other files
def update_proteinrepeats_old():

    lookup = dict()

    # Load enrichment data from other files and update the lookup dictionary
    for org in Organism.objects.all():
        file_name = settings.IMPORT_ENRICHMENT_FOLDER + '/' + str(org.id) + '_mean_ENR.csv'
        print(f"Loading enrichment data from {file_name}")
        en_df = pd.read_csv(file_name)
        en_df.rename(columns={"Unnamed: 0": "Gene"}, inplace=True)
        en_df = en_df.where(pd.notnull(en_df), None)

        for row in en_df.to_dict(orient="records"):
            gene = row["Gene"].strip()
            for repeat, value in row.items():
                if repeat == 'Gene':
                    continue
                key = f"{gene.lower()},{repeat.lower()}"
                if lookup.get(key):
                    lookup[key]['enrichment'] = value
                else:
                    lookup[key] = {'gene': gene, 'repeat':  repeat, 'enrichment': value, 'q_score': None}

    # Load q score data from other files and update the lookup dictionary
    for org in Organism.objects.all():
        file_name = settings.IMPORT_QSCORE_FOLDER + '/' + str(org.id) + '_mean_Qscore.csv'
        print(f"Loading q score data from {file_name}")
        qs_df = pd.read_csv(file_name)
        qs_df.rename(columns={"Unnamed: 0": "Gene"}, inplace=True)
        qs_df = qs_df.where(pd.notnull(qs_df), None)

        for row in qs_df.to_dict(orient="records"):
            gene = row["Gene"].strip()
            for repeat, value in row.items():
                if repeat == 'Gene':
                    continue
                key = f"{gene.lower()},{repeat.lower()}"
                if lookup.get(key):
                    lookup[key]['q_score'] = value
                else:
                    lookup[key] = {'gene': gene, 'repeat':  repeat, 'enrichment': None, 'q_score': value}

    # Need to get all ProteinRepeats objects in the database
    # so that we can construct a lookup by lowercase gene and repeat names. 
    # This is because the spreadsheet sometimes contains names in different cases than the database.
    objs = ProteinRepeats.objects.all()
    existing_protein_repeat_lookup = dict()
    for obj in objs:
        existing_key = f"{obj.protein.gene.lower()},{obj.repeat.name.lower()}"
        existing_protein_repeat_lookup[existing_key] = obj

    for key, item in lookup.items():
        gene = item['gene']
        repeat = item['repeat']
        enrichment = item['enrichment']
        q_score = item['q_score']
        
        # Lookup ProteinRepeats object with lowercase gene and repeat names. 
        # This is because the spreadsheet sometimes contains names in different cases than the database.
        protein_repeat_obj = existing_protein_repeat_lookup.get(key)

        # If the protein_repeat_obj does not exist, then create a new one
        if protein_repeat_obj:
            protein_repeat_obj.motif_enrichment = enrichment
            protein_repeat_obj.motif_q_score = q_score
            print(f"""Updating ProteinRepeat - 
                  protein:{protein_repeat_obj.protein.gene}, 
                  repeat:{protein_repeat_obj.repeat.name}, 
                  key:{key}, 
                  motif_enrichment:{protein_repeat_obj.motif_enrichment}, 
                  motif_q_score:{protein_repeat_obj.motif_q_score}""")
            protein_repeat_obj.save()
        else:
            # Find existing protein using case-sensitive gene name
            protein_objs = ProteinTF.objects.filter(gene=gene)
            
            # Find existing repeat using case-sensitive repeat name
            repeat_objs = Repeat.objects.filter(name=repeat)

            # Associate the protein and repeat with a new ProteinRepeats object
            if protein_objs and repeat_objs:
                protein_obj = protein_objs[0]
                repeat_obj = repeat_objs[0]
                protein_repeat_obj = ProteinRepeats(protein=protein_obj, 
                                                    repeat=repeat_obj, 
                                                    motif_enrichment=enrichment, 
                                                    motif_q_score=q_score)
                print(f"""Creating ProteinRepeat - 
                    protein:{protein_repeat_obj.protein.gene}, 
                    repeat:{protein_repeat_obj.repeat.name}, 
                    key:{key}, 
                    motif_enrichment:{protein_repeat_obj.motif_enrichment}, 
                    motif_q_score:{protein_repeat_obj.motif_q_score}""")
                protein_repeat_obj.save()
                existing_protein_repeat_lookup[key] = protein_repeat_obj


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
        new_results = get_uniprot_to_pdb_mapping_results(job_id)
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
    lookup = get_uniprot_to_pdb_mapping(uniprot_ids, use_cache=True)

    print(f"Got {len(lookup)} unique uniprot ids with PDB mappings")

    saved_count = 0
    for protein in protein_objs:
        if protein.PDB:
            print(f"Protein {protein.gene} already has PDB id {protein.PDB}. Skipped.")
            continue
        result = lookup.get(protein.UNIPROT)
        if not result or not result.get('to'):
            print(f"No PDB mapping found for protein {protein.gene} with uniprot id {protein.UNIPROT}")
            continue
        pdb_id = result['to']
        print(f"Updating protein {protein.gene} with unipro = {protein.UNIPROT}: set PDB to {pdb_id}")
        protein.PDB = pdb_id
        protein.save()
        saved_count += 1

    print(f"Updated {saved_count} proteins with PDB ids")


def update_microscopy():
    print(f"Updating microscopy data from {settings.IMPORT_MICROSCOPY}")
    raw_df = pd.read_csv(settings.IMPORT_MICROSCOPY, dtype=str)

    raw_df = raw_df.where(pd.notnull(raw_df), None)
    # Filter rows where protein is not null
    df = raw_df[raw_df['protein'].notnull()]
    print(f"Found {len(df)} microscopy records to process")

    for row in df.to_dict(orient='records'):
        print(f"Processing microscopy for protein {row['protein']}")
        if len(ProteinTF.objects.filter(UNIPROT = row['protein'])) == 0:
            print(f"Protein with UNIPROT {row['protein']} does not exist. Skipped.")
            continue
        uniprot = row['protein']
        channels    = json.loads(row['channels'])

        url = row['url'].strip()

        # Unique key for the microscopy record is the name, which is derived from the url
        name = url.split('/')[-1].split('.')[0]
        # This is used to display in dropdown menu
        display_name = name

        # The protein column in the spreadsheet contains the uniprot id                                
        protein_obj = ProteinTF.objects.get(UNIPROT=uniprot)
        gene = protein_obj.gene

        if not protein_obj:
            print("Protein {gene} does not exist. Skipped.")
            continue

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

def update():
    print("ORGANISMS")
    import_organisms()
    print("GENE FAMILY")
    import_gene_family()
    print("REPEAT + FAMILIES")
    import_repeat()
    update_repeat_families()
    print("PROTEIN")
    import_protein()
    update_PDB_from_uniprot()
    print("PROTEIN REPEATS")
    update_proteinrepeats()
    print("PROTEOMICS")
    import_proteomics()
    print("NETWORK DATA")
    for org in Organism.objects.all():
        GetNetworkData(org.id)
    GetNetworkDataAll()
    print("MICROSCOPY")
    update_microscopy()
    print("GENOME REFS")
    import_genome_references()


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
            GetNetworkData(org.id)
        GetNetworkDataAll()
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

