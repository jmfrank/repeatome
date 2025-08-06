import os

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse
import requests

from backend.fpseq.util import slugify
from ..util.helpers import shortuuid
import json

class Repeat(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    name = models.CharField(max_length=200, blank=True, null=True, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True)
    aliases = ArrayField(
        models.TextField(blank=True, null=True),
        blank=True,
        null = True
    )
    motif = models.TextField(blank=True, null=True)
    dfam_id = models.CharField(max_length=100, blank=True, null=True)
    parental_organism = models.ForeignKey(
        "Organism",
        # related_name="organism",
        verbose_name="Parental organism",
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        help_text="Organism from which the protein was engineered",
    )
    # references = models.ForeignKey(
    #     "Reference",
    #     related_name="reference",
    #     verbose_name="Reference",
    #     on_delete=models.SET_NULL,
    #     blank=True,
    #     null=True,
    #     help_text="References for repeats",
    # ),
    references = models.TextField(blank=True, null=True)

    def get_absolute_url(self):
        return reverse("proteins:repeatTable-detail", args=[self.slug])
    
    def aliases_as_str(self):
        # print(self.aliases)
        if self.aliases:
            return ", ".join(self.aliases)
        else:
            return "None"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)
        
    def get_proteins(self):
        return self.proteintf_set.all()
    
    def get_protein_lst(self):
        return list(self.proteintf_set.all())


    # def get_HMM(self):
    #     with pyhmmer.plan7.HMMFile("data/hmms/txt/PKSI-AT.hmm") as hmm_file:
    #         hmm = hmm_file.read()
    
    def get_hmm(self):
        if self.dfam_id:
            hmm_url = f"https://dfam.org/api/families/{self.dfam_id}/hmm?format=logo"
            r = requests.get(hmm_url)
            if r.status_code != 200:
                raise Exception(f"HMM not found for {self.dfam_id}")

            return r.text
        return None
    
    def karyoplot_exists(self):
        name_lower = self.repeat_lower()
        file_path = f"{settings.ROOT_DIR.parent}/frontend/static/karyoplot/human_{name_lower}_blocks.svg"  # Replace with your actual path
        if os.path.exists(file_path):
            # File or directory exists
            return True
        else:
            return False
        
    def repeat_lower(self):
        return self.name.lower()

        
        
