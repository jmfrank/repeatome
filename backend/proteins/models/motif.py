import os

from django.db import models
from backend.fpseq.util import slugify
from ..util.helpers import shortuuid
from proteins.models.motif_repeat import MotifRepeat

class Motif(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    # Jaspar matrix id e.g. MA0001.1 
    motif_id = models.CharField(max_length=200, blank=True, null=True, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    # list of jaspar_matrix_id(s). jaspar_base_id is the first part of the jaspar_matrix_id before the dot. e.g. MA0001.1 -> MA0001
    # jaspar =  ArrayField(models.TextField(blank=True, null=True), blank=True, null=True)

    protein = models.ForeignKey(
        "ProteinTF",
        verbose_name="ProteinTF",
        related_name="motifs",
        on_delete=models.deletion.CASCADE,
        blank=True,
        null=True,
        help_text="ProteinTF associated with this motif",
    )

    repeats = models.ManyToManyField(
        "Repeat",
        blank=True,
        null=True,
        through="MotifRepeat"
    )
    
    def get_jaspar_base(self):
        return self.motif_id.split('.')[0]

    def save(self, *args, **kwargs):
        self.slug = slugify(self.motif_id)
        super().save(*args, **kwargs)

