from rest_framework import serializers

from ..models import ProteinTF
from ._tweaks import ModelSerializer

class ProteinSerializer(ModelSerializer):
    # url = serializers.CharField(source='get_absolute_url', read_only=True)
    # states = serializers.SlugRelatedField(many=True, read_only=True, slug_field="slug")
    # transitions = serializers.IntegerField(source="transitions.count", read_only=True)
    doi = serializers.SlugRelatedField(source="primary_reference", slug_field="doi", read_only=True)

    class Meta:
        model = ProteinTF
        fields = (
            # 'url',
            "uuid",
            "gene",
            "slug",
            "seq",
            "UNIPROT",
            "ENSEMBL",
            "PDB",
            "AF3",
            "agg",
            "doi",
        )
        on_demand_fields = ()


class ProteinSerializer2(ModelSerializer):
    # states = serializers.SlugRelatedField(many=True, read_only=True, slug_field="slug")
    # transitions = serializers.IntegerField(source="transitions.count", read_only=True)
    doi = serializers.SlugRelatedField(source="primary_reference", slug_field="doi", read_only=True)

    class Meta:
        model = ProteinTF
        fields = (
            "gene",
            "slug",
            "seq",
            # "agg",
            "doi",
            # "states",
            "PDB",
            # "switch_type",
            "ENSEMBL",
            "UNIPROT",
            "AF3",
            # "transitions",
        )
        on_demand_fields = (
            "PDB",
            # "switch_type",
            "ENSEMBL",
            "UNIPROT",
            # "ipg_id",
            "seq",
            # "transitions",
        )


# NOT DRY
# TODO: figure out how to combine this with above
class BasicProteinSerializer(ModelSerializer, serializers.HyperlinkedModelSerializer):
    # states = StateSerializer(many=True, read_only=True)
    url = serializers.CharField(source="get_absolute_url", read_only=True)
    ex_max = serializers.IntegerField(source="default_state.ex_max", read_only=True)
    em_max = serializers.IntegerField(source="default_state.em_max", read_only=True)
    ex_spectrum = serializers.CharField(source="default_state.ex_spectrum", read_only=True)
    em_spectrum = serializers.CharField(source="default_state.em_spectrum", read_only=True)
    ext_coeff = serializers.FloatField(source="default_state.ext_coeff", read_only=True)
    qy = serializers.FloatField(source="default_state.qy", read_only=True)
    brightness = serializers.FloatField(source="default_state.brightness", read_only=True)
    bleach = serializers.FloatField(source="rate", read_only=True)
    maturation = serializers.FloatField(source="default_state.maturation", read_only=True)
    lifetime = serializers.FloatField(source="default_state.lifetime", read_only=True)
    pka = serializers.FloatField(source="default_state.pka", read_only=True)
    stokes = serializers.FloatField(source="default_state.stokes", read_only=True)

    class Meta:
        model = ProteinTF
        fields = (
            "url",
            "uuid",
            "name",
            "stokes",
            "slug",
            "ipg_id",
            "agg",
            "ex_max",
            "ex_spectrum",
            "em_max",
            "em_spectrum",
            "ext_coeff",
            "qy",
            "pka",
            "brightness",
            "bleach",
            "maturation",
            "lifetime",
            "cofactor",
        )
        on_demand_fields = ("uuid", "ex_spectrum", "em_spectrum")
