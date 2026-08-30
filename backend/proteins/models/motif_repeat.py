import os

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse

from backend.fpseq.util import slugify
# from backend.proteins.models.proteinTF import ProteinTF
from ..util.helpers import shortuuid


class MotifRepeat(models.Model):
    motif = models.ForeignKey('Motif', on_delete=models.CASCADE, to_field='motif_id', db_column='motif_id')
    repeat = models.ForeignKey('Repeat', on_delete=models.CASCADE, to_field='name', db_column='name')
    motif_enrichment = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    motif_q_score = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)

    has_enr_or_q_score = models.BooleanField(default=False)

    class Meta:
        unique_together = ('motif', 'repeat')

    def save(self, *args, **kwargs):
        self.has_enr_or_q_score = self.motif_enrichment is not None or self.motif_q_score is not None
        super().save(*args, **kwargs)

    

