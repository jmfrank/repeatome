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
from proteins.models.motif import Motif
from references.models import Reference

class ProteinRepeats(models.Model):
    # protein = models.ForeignKey('ProteinTF', on_delete=models.CASCADE, to_field='gene', db_column='gene')
    protein = models.ForeignKey('ProteinTF', on_delete=models.CASCADE)
    repeat = models.ForeignKey(Repeat, on_delete=models.CASCADE, to_field='name', db_column='name')
    motif_enrichment = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    motif_q_score = models.DecimalField(decimal_places=5, max_digits=10, blank=True, null=True)
    # date_published = models.DateField() # Example of an extra field

    class Meta:
        unique_together = ('protein', 'repeat')
    

class ProteinReferences(models.Model):
    # protein = models.ForeignKey('ProteinTF', on_delete=models.CASCADE, to_field='gene', db_column='gene')
    protein = models.ForeignKey('ProteinTF', on_delete=models.CASCADE)
    reference = models.ForeignKey(Reference, on_delete=models.CASCADE, to_field='doi', db_column='doi')
    # date_published = models.DateField() # Example of an extra field

    class Meta:
        unique_together = ('protein', 'reference')

class ProteinTF(Authorable, StatusModel, TimeStampedModel):
    STATUS = Choices("pending", "approved", "hidden")
    
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    universal_id = models.CharField(max_length=22, blank=True, null=True)
    gene = models.CharField(max_length=200, blank=True, null=True, unique=False)
    # EMBL-gene (i.e. uniprot and gene)
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
    # repeats = models.ManyToManyField(
    #     Repeat,
    #     blank=True,
    #     null=True,
    #     through=ProteinRepeats
    # )

    @property
    def filtered_repeats(self):
        """
        Extracts unique Repeat objects from prefetched MotifRepeats
        without triggering additional database hits.
        """
        repeats = {}
        for motif in self.motifs.all():
            # Reading motifrepeat_set.all() stays in prefetched memory
            for mr in motif.motifrepeat_set.all():
                repeats[mr.repeat.name] = mr.repeat
        return repeats.values()
    
    # Meta
    class Meta:
        ordering = ["gene"]
    
    def save(self, *args, **kwargs):
        # print(self.ENSEMBL + '-' + self.gene)
        # Cannot use ENSEMBL since many are null
        # self.slug = slugify(self.ENSEMBL + '-' + self.gene)
        self.slug = slugify(self.UNIPROT + '-' + self.gene)
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
        return 0
    
    def get_jaspar_base(self):
        if not self.jaspar == None and not len(self.jaspar) == 0:
            indx = self.jaspar[0].find('.')
            return self.jaspar[0][:indx]
        return ""

    def get_microscopies(self):
        microscopies = self.microscopy_set.all()
        print(f"Found {len(microscopies)} microscopies for protein {self.gene}")
        for m in microscopies:
            print(m)
        return microscopies
    
    def history(self, ignoreKeys=()):
        from proteins.util.history import get_history

        return get_history(self, ignoreKeys)

    def get_motifs(self):
        return self.motifs.all()
    
    def get_jaspar_base_ids(self):
        jaspar_base_ids = set()
        for motif in self.motifs.all():
            jaspar_base_ids.add(motif.get_jaspar_base())
        return sorted(jaspar_base_ids)
    