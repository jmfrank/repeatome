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
    proteomics = models.TextField(blank=True, null=True)
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
        if not self.aliases or not self.aliases == "''":
            return "None"
        return ", ".join(self.aliases)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)
        
    def get_proteins(self):
        return self.proteintf_set.all()

    def get_motif_chart_q_score_data(self):
        datapoints = []
        for protein in self.get_proteins():
            if protein.motif_q_score:
                datapoints.append({
                    "label": protein.gene,
                    "y": float(protein.motif_q_score * -1)
                    # "y": "-" + str(protein.motif_q_score * -1)

                })
        # return json.dumps(datapoints)
        return datapoints

    def get_motif_chart_enrichment_data(self):
        datapoints = []
        for protein in self.get_proteins():
            if protein.motif_enrichment:
                datapoints.append({
                    "label": protein.gene,
                    "y": float(protein.motif_enrichment)
                })
        # return json.dumps(datapoints)
        return datapoints

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
