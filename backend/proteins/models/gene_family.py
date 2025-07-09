from django.db import models
from ..util.helpers import shortuuid
from proteins.models.organism import Organism


class GeneFamily(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    gene_family = models.SlugField(max_length=200, blank=True, null=True, unique=True)

    parent_organism = models.ForeignKey(
        Organism,
        verbose_name="Parent organism",
        blank=True,
        null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Organism from which the gene family was derived",
    )
   