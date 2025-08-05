from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse
import requests

from backend.fpseq.util import slugify

from ..util.helpers import shortuuid
from proteins.models.repeat import Repeat
from proteins.models.organism import Organism
from references.models import User
from model_utils.models import TimeStampedModel

def get_proteomics(repeat):
    objs = Proteomics.objects.filter(target__name=repeat)
    if len(objs) == 0:
        return None
    return objs[0]

class Proteomics(TimeStampedModel):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    cell_type = models.TextField(blank=True, null=True)
    cell_line_name = models.TextField(blank=True, null=True)
    method = models.TextField(blank = True, null = True)
    description = models.TextField(blank = True, null = True)
    date_generated = models.DateField(blank = True, null = True)
    x_label = models.TextField(blank=True, null=True)
    y_label = models.TextField(blank=True, null=True)
    significance = models.JSONField(default=dict, blank=True, null=True)
    log2vals = models.JSONField(default=dict, blank=True, null=True)
    thresholds = ArrayField(
        models.DecimalField(decimal_places=2, max_digits=5, blank=True, null=True),
        blank=True, null = True
    )
    target = models.ForeignKey(
        Repeat,
        blank=True, null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Repeat target for this experiment",
    )
    parent_organism = models.ForeignKey(
        Organism,
        related_name='proteomics',
        verbose_name="Parent organism",
        blank=True,
        null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Parent organism of the gene",
    )
   
    created_by = models.ForeignKey(
        User,
        related_name="proteomics_author",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    updated_by = models.ForeignKey(
        User,
        related_name="proteomics_modifier",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        

