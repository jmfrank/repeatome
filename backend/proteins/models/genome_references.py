from django.contrib.postgres.fields import ArrayField
from django.db import models
from ..util.helpers import shortuuid
from proteins.models.organism import Organism

class GenomeReferences(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    reference = models.SlugField(max_length=200, blank=True, null=True, unique=True)
    aliases = ArrayField(
        models.TextField(blank=True, null=True),
        blank=True,
        null=True
    )
    source = models.TextField(max_length=200, blank=True, null=True)

    organism = models.ForeignKey(
           Organism,
           verbose_name="Reference Organism",
           blank=True,
           null=True,
           on_delete=models.deletion.CASCADE,
           help_text="Organism from which the gene family was derived",
       )
