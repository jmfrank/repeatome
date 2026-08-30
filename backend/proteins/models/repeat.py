import os

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse
import requests
from proteins.models.motif_repeat import MotifRepeat

from backend.fpseq.util import slugify
from ..util.helpers import shortuuid
import json

class Repeat(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    universal_id = models.CharField(max_length=22, blank=True, null=True)
    name = models.CharField(max_length=200, blank=True, null=True, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    aliases = ArrayField(
        models.TextField(blank=True, null=True),
        blank=True,
        null = True
    )
    dfam_id = models.CharField(max_length=100, blank=True, null=True)
    parent_repeat = models.ForeignKey(
        "self", 
        related_name='children',
        verbose_name='parental repeat',
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    parental_organism = models.ForeignKey(
        "Organism",
        # related_name="organism",
        verbose_name="Parental organism",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        help_text="Organism from which the protein was engineered",
    )

    references = models.TextField(blank=True, null=True)

    @property
    def filtered_motifs(self):
        """
        Returns Motif objects linked to this repeat where has_enr_or_q_score=True,
        reading strictly from prefetched memory.
        """
        # motifrepeat_set.all() accesses the pre-filtered cache from the view
        return [mr.motif for mr in self.motifrepeat_set.all()]


    def get_absolute_url(self):
        return reverse("proteins:repeatTable-detail", args=[self.slug])
    
    def aliases_as_str(self):
        # print(self.aliases)
        if self.aliases:
            return ", ".join(self.aliases)
        else:
            return ""

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def get_hmm(self):
        if self.dfam_id:
            hmm_url = f"https://dfam.org/api/families/{self.dfam_id}/hmm?format=logo"
            r = requests.get(hmm_url)
            if r.status_code != 200:
                # raise Exception(f"HMM not found for {self.dfam_id}")
                return None

            return r.text
        return None
    
    def karyoplot_exists(self):
        name_lower = self.repeat_lower()
        file_path = f"{settings.ROOT_DIR.parent}/frontend/static/karyoplot/human_{name_lower}_blocks.svg"
        if os.path.exists(file_path):
            # File or directory exists
            return True
        else:
            return False
        
    def karyotype_data_exists(self):
        print("KARYOTYPE DATA", self.name)
        if not self.parental_organism:
            return False
        # Case sensitive
        file_path = f"{settings.ROOT_DIR.parent}/frontend/static/karyotype_viewer/{self.parental_organism.id}/{self.name}_karyotype.bed"
        if os.path.exists(file_path):
            return True
        # Not case sensitive
        file_path = f"{settings.ROOT_DIR.parent}/frontend/static/karyotype_viewer/{self.parental_organism.id}/{self.repeat_lower()}_karyotype.bed"
        return os.path.exists(file_path)
        
    def repeat_lower(self):
        return self.name.lower()

        
        
