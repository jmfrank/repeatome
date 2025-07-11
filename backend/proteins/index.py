from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register

from .models import Organism, ProteinTF, Repeat


@register(Protein)
class ProteinIndex(AlgoliaIndex):
    fields = (
        "gene",
        "id",
        "aliases",
        "PDB",
        "ENSEMBL",
        "UNIPROT",
        # "ipg_id",
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
        "parent_organism",
        "primary_reference",
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

@register(Organism)
class OrganismIndex(AlgoliaIndex):
    fields = ("scientific_name", "division", "common_name")
