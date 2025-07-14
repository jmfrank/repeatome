import algoliasearch_django as algoliasearch
from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register
from .models import Organism, ProteinTF, Repeat

# IMPORTANT: TO ADD DATA TO ALGOLIA MUST CALL 
# python backend/manage.py algolia_reindex IN POWERSHELL

@register(ProteinTF)
class ProteinIndex(AlgoliaIndex):
    fields = (
        "gene",
        "id",
        "aliases",
        "PDB",
        "ENSEMBL",
        "UNIPROT",
        "jaspar",
        # "_agg",
        # "img_url",
        # "switchType",
        # "url",
        # "date_published",
        # "created",
        # "rank",
        # "ga_views",
        # "n_faves",
        # "n_cols",
        # "get_repeats",
        "protein_sequence",
        'parent_organism',
        'primary_reference',
        # "parent_organism__scientific_name",
        # "primary_reference__year",
        # "primary_reference__author__family",
        "cofactor",
        # "color",
    )
    # should_index = "is_visible"
    # tags = "tags"
    
@register(Repeat)
class RepeatIndex(AlgoliaIndex):
    fields = (
        "id",
        "name",
        "aliases",
        "dfam_id",
        "parental_organism"
    )
    # should_index = "is_visible"
    # tags = "tags"

@register(Organism)
class OrganismIndex(AlgoliaIndex):
    fields = ("scientific_name", "division", "common_name") # "url"?
