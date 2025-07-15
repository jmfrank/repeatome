#!/usr/bin/env python
import django

# Must call setup before improrting any Django models
django.setup()

from django.conf import settings
from proteins.models import Organism, GeneFamily, Repeat, ProteinTF, ProteinRepeats
from proteins.util.helpers import shortuuid
import os
import pandas as pd


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

    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, 'master_proteins')

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


def import_repeat():

    # (1) From repeats sheet we have name, dfam_id and parent organism id
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='repeats')

    for row in df.to_dict(orient="records"):
        name = row['parent_name']
        aliases = parse_array(row['aliases'])
        parent_organism_id = row['taxonomy_id']
        parent_organism_obj = get_organism_obj(parent_organism_id)

        existing_obj = get_obj_if_exists(Repeat, name=name)
        if not existing_obj:
            obj = Repeat(
                name=name, 
                aliases=aliases, 
                dfam_id=row["dfam_id"],
                motif=row["dfam_id"],
                proteomics="more info",
                parental_organism=parent_organism_obj
            )
            obj.save()

    # (2) From master_proteins sheet we only have name
    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, 'master_proteins')
    df = df[df['satellite'].notnull() & (df['satellite'] != '') & (df['satellite'] != '?')]
    # print(f"Num rows = {len(df)}")

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
            obj = Repeat(
                name=name, 
                proteomics="more info"
            )
            obj.save()
        
def import_protein():

    df =  load_dataframe_from_excel(settings.IMPORT_DATA_FILE, sheet_name='master_proteins', dtype=str)

    for row in df.to_dict(orient='records'):
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
            articles=row['articles'],
            ENSEMBL=row['ensembl'],
            UNIPROT=row['uniprot'],
            PDB=row['PDB'],
            micro_url=row['micro_url'],
            AF3=row['AF3'],
            proteomics_url=row['proteomics_url'],
            rna_url=row['rna_url'],
            jaspar=parse_array(row['jaspar']),
            protein_sequence=row['protein_sequence'],
            molecular_weight=row['molecular_weight'],
            cofactor=parse_array(row['cofactor']),
            oligomerization=row['oligomerization'] if row['oligomerization'] else None,
            gene_family=gene_family_obj,
            parent_organism=parent_organism_obj
        )
        obj.save()

        protein_obj = ProteinTF.objects.get(gene=gene)

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


def delete_all_records():
    # Delete all records in all tables
    ProteinTF.objects.all().delete()
    Repeat.objects.all().delete()
    GeneFamily.objects.all().delete()
    Organism.objects.all().delete()


if __name__ == "__main__":

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")

    delete_all_records()

    import_organisms()
    import_gene_family()
    import_repeat()
    import_protein()