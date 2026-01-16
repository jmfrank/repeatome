import json
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse
import requests

from backend.fpseq.util import slugify

from ..util.helpers import shortuuid
from proteins.models.repeat import Repeat
from proteins.models.organism import Organism
from proteins.models.proteinTF import ProteinTF
from references.models import User
from model_utils.models import TimeStampedModel

def get_proteomics(repeat):
    print(repeat)
    # repeat_obj = Repeat.objects.get(name=repeat)
    # print(repeat_obj)
    objs = Proteomics.objects.filter(target_repeat__name=repeat)
    print(objs)
    if len(objs) == 0:
        return None
    return objs[0]

def get_proteomics_list(repeat):
    objs = Proteomics.objects.filter(target_repeat__name=repeat)
    if len(objs) == 0:
        return None
    return objs

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
    target_repeat = models.ForeignKey(
        Repeat,
        blank=True, null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Repeat target for this experiment",
    )
    target_protein = models.ForeignKey(
        ProteinTF,
        blank=True, null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Protein target for this experiment",
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
    
    def get_data(self):
        taxonomy = self.target_repeat.parental_organism.id
        repeat_name = self.target_repeat.name.lower()
    
        # df = pd.read_csv(file, dtype=str)
        datapoints = []
        data_format = 1
        # for row in df.to_dict(orient='records'):
        if not self == None:
            LOG_THRESHOLD = self.thresholds[0]
            if len(self.thresholds) > 1:
                SIG_THRESHOLD = self.thresholds[1]
            for key in self.significance.keys():
                protein_objs = ProteinTF.objects.filter(UNIPROT=key)
                if len(protein_objs) > 0:
                    if float(self.significance[key]) < SIG_THRESHOLD or float(self.log2vals[key]) < LOG_THRESHOLD:
                        data_format = 0
                    else:
                        data_format = 1

                    datapoints.append({
                        "name": protein_objs[0].gene,
                        "x": self.log2vals[key],
                        "y": self.significance[key],
                        "slug": protein_objs[0].slug,
                        "f": data_format
                    })
                    # data_format += 1
                    # if data_format > 5:
                    #     data_format = 1
                else:
                    if float(self.significance[key]) < SIG_THRESHOLD:
                        data_format = 0
                    else:
                        data_format = 1

                    datapoints.append({
                        "name": key.split('|')[0],
                        "x": self.log2vals[key],
                        "y": self.significance[key],
                        "slug": 'none',
                        "f": data_format
                    })
        
        return json.dumps(datapoints)

