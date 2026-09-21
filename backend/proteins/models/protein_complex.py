import os

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse

from backend.fpseq.util import slugify
from ..util.helpers import shortuuid


class ComplexComponent(models.Model):
    complex = models.ForeignKey('ProteinComplex', on_delete=models.CASCADE, to_field='complex_name', db_column='complex_name')
    # component = models.ForeignKey('ProteinTF', on_delete=models.CASCADE, to_field='gene', db_column='gene')
    component = models.ForeignKey('ProteinTF', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('complex', 'component')


class ProteinComplex(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    # Example ARNT::HIF1A
    complex_name = models.CharField(max_length=200, blank=True, null=True, unique=True)
    # Complex or Fusion. Complex type has :: in the name, e.g. ARNT::HIF1A
    # Fusion type has - in the name, e.g. BCR-ABL1
    protein_type = models.CharField(max_length=200, blank=True, null=True)

    # List of ProteinTF objects that are components of this complex. 
    # This is a many-to-many relationship through the ComplexComponent model.
    components = models.ManyToManyField(
        "ProteinTF",
        blank=True,
        null=True,
        through=ComplexComponent
    )