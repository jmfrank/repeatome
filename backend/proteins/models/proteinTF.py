from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.urls import reverse
import requests

from backend.fpseq.util import slugify
from proteins.models.mixins import Authorable
from model_utils import Choices
from model_utils.models import StatusModel, TimeStampedModel

from ..util.helpers import shortuuid
from references.models import Reference
from proteins.models.gene_family import GeneFamily
from proteins.models.organism import Organism
from proteins.models.repeat import Repeat
from references.models import Reference

class ProteinRepeats(models.Model):
    protein = models.ForeignKey('ProteinTF', on_delete=models.CASCADE, to_field='gene', db_column='gene')
    repeat = models.ForeignKey(Repeat, on_delete=models.CASCADE, to_field='name', db_column='name')
    motif_enrichment = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    motif_q_score = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    # date_published = models.DateField() # Example of an extra field

    class Meta:
        unique_together = ('protein', 'repeat')
    

class ProteinReferences(models.Model):
    protein = models.ForeignKey('ProteinTF', on_delete=models.CASCADE, to_field='gene', db_column='gene')
    reference = models.ForeignKey(Reference, on_delete=models.CASCADE, to_field='doi', db_column='doi')
    # date_published = models.DateField() # Example of an extra field

    class Meta:
        unique_together = ('protein', 'reference')

class ProteinTF(Authorable, StatusModel, TimeStampedModel):
    STATUS = Choices("pending", "approved", "hidden")
    
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    gene = models.CharField(max_length=200, blank=True, null=True, unique=True)
    slug = models.SlugField(max_length=200, blank=True, null=True, unique=True)
    aliases = ArrayField(
        models.TextField(blank=True, null=True),
        blank=True,
        null=True
    )
    gene_type = ArrayField(
        models.TextField(blank=True, null=True),
        blank=True,
        null = True
    )
    dna_binding_domain = models.TextField(blank=True, null=True)
    signaling_pathway = models.TextField(blank=True, null=True)
    validation_grade = models.TextField(blank=True, null=True)
    prediction_method = models.TextField(blank=True, null=True)
    microscopy_result = models.JSONField(default=dict, blank=True, null=True)
    motif_enrichment = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    motif_q_score = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    existing_images = models.TextField(blank=True, null=True)
    existing_images_link = models.TextField(blank=True, null=True)
    existing_fusion = models.TextField(blank=True, null=True)
    cloned_fusion = models.TextField(blank=True, null=True)
    imaging_results = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    articles = models.TextField(blank=True, null=True)
    ENSEMBL = models.TextField(blank=True, null=True)
    UNIPROT = models.TextField(blank=True, null=True)
    UNIPROT_aliases = ArrayField(models.TextField(blank=True, null=True), blank=True, null=True)
    PDB = models.TextField(blank=True, null=True)
    micro_url = models.TextField(blank=True, null=True)
    AF3 = models.TextField(blank=True, null=True)
    proteomics_url = models.TextField(blank=True, null=True)
    rna_url = models.TextField(blank=True, null=True)
    jaspar =  ArrayField(models.TextField(blank=True, null=True), blank=True, null=True)
    # slug = models.SlugField(max_length=200, blank=True, null=True) # for link to specific protein
    protein_sequence = models.TextField(blank=True, null=True)
    molecular_weight = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    cofactor = ArrayField(
        models.TextField(),
        blank=True, null=True
    )
    oligomerization = models.TextField(blank=True, null=True)
    gene_family = models.ForeignKey(
        GeneFamily,
        verbose_name="Gene family",
        blank=True,
        null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Gene family to which the gene belongs",
        to_field="gene_family"
        )
    parent_organism = models.ForeignKey(
        Organism,
        related_name='proteinTF',
        verbose_name="Parent organism",
        blank=True,
        null=True,
        on_delete=models.deletion.CASCADE,
        help_text="Parent organism of the gene",
    )
    primary_reference = models.ForeignKey(
        Reference,
        help_text='Preferably the publication that introduced the protein',
        related_name="primary_proteins",
        verbose_name="Primary Reference",
        on_delete=models.deletion.CASCADE,
        blank=True,
        null=True,
        # to_field='doi',
    )
    references = models.ManyToManyField(
        Reference,
        blank=True,
        null=True,
        through=ProteinReferences
    )
    repeats = models.ManyToManyField(
        Repeat,
        blank=True,
        null=True,
        through=ProteinRepeats
    )
    
    # Meta
    class Meta:
        ordering = ["gene"]
    
    def save(self, *args, **kwargs):
        # print(self.ENSEMBL + '-' + self.gene)
        self.slug = slugify(self.ENSEMBL + '-' + self.gene)
        # print(self.gene + ": " + self.slug)
        super().save(*args, **kwargs)
    
    def get_absolute_url(self):
        return reverse("proteins:proteinTable-detail", args=[self.slug])
    
    def gene_type_as_str(self):
        if not self.gene_type:
            return ""
        return ", ".join(self.gene_type)

    def aliases_as_str(self):
        if not self.aliases:
            return ""
        return ", ".join(self.aliases)
    
    def gene_type_as_str(self):
        if not self.gene_type:
            return ""
        return ", ".join(self.gene_type)

    def cofactor_as_str(self):
        if not self.cofactor:
            return ""
        return ", ".join(self.cofactor)

    def molecular_weight_str(self):
        if not self.molecular_weight:
            return ""
        return f"{self.molecular_weight:.1f} kDa"

    def PDB_lower(self):
        if not self.PDB:
            return ""
        pdb = self.PDB.strip(' ')
        return pdb.lower()
    
    def PDB_as_string(self):
        if not self.PDB:
            return ""
        return self.PDB

    def get_references(self):
        return self.reference_set.all()

    def jaspars_length(self):
      if not self.jaspars:
         return 0
      return len(self.jaspars)
    
    def repeats_length(self):
        if not self.repeats:
            return 0
        return len(self.repeats)

    def get_repeats(self):
        return [p.name for p in self.repeats.all()]
    
    def get_jaspar_base(self):
        if not self.jaspar == None and not len(self.jaspar) == 0:
            indx = self.jaspar[0].find('.')
            return self.jaspar[0][:indx]
        return ""
