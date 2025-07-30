from django import forms
from django.contrib import admin
from django.db.models import Count, Prefetch
from django.forms import TextInput
from django.urls import reverse
from django.utils.safestring import mark_safe
from mptt.admin import MPTTModelAdmin
from reversion.admin import VersionAdmin
from reversion_compare.admin import CompareVersionAdmin

from repeatome.util import uncache_protein_page
from proteins.models import (
    Excerpt,
    Organism,
    ProteinCollection,
    ProteinTF,
    Repeat,
    GeneFamily,
    Proteomics
)
from proteins.util.maintain import validate_node

############### MODELS ################

@admin.register(Proteomics)
class Proteomics(VersionAdmin):
    model = Proteomics

@admin.register(GeneFamily)
class GeneFamily(VersionAdmin):
    model = GeneFamily

@admin.register(Repeat)
class Repeat(VersionAdmin):
    model = Repeat

@admin.register(Organism)
class OrganismAdmin(CompareVersionAdmin):
    # list_select_related = ("created_by", "updated_by")
    list_display = (
        "scientific_name",
        "id",
        # "created",
        # "created_by",
        # "modified",
        # "updated_by",
    )
    # list_filter = ("created", "modified")
    search_fields = (
        "scientific_name",
        "common_name",
        "id",
        # "created_by__username",
        # "created_by__first_name",
        # "created_by__last_name",
    )

    fieldsets = [
        (
            "Organism",
            {
                "fields": (
                    "id",
                    "scientific_name",
                    "common_name",
                    "rank",
                    "division",
                    "genus",
                    "species",
                )
            },
        ),
        # (
        #     "Change History",
        #     {
        #         "classes": ("collapse",),
        #         "fields": ("created", "created_by", "modified", "updated_by"),
        #     },
        # ),
    ]
    readonly_fields = (
        "scientific_name",
        "common_name",
        "division",
        "rank",
        "genus",
        "species",
        # "created",
        # "created_by",
        # "modified",
        # "updated_by",
    )

    # def save_model(self, request, obj, form, change):
    #     if not obj.created_by:
    #         obj.created_by = request.user
    #     obj.updated_by = request.user
    #     obj.save()


@admin.action(description="Mark selected proteins as approved")
def approve_protein(modeladmin, request, queryset):
    # note, this will fail if the list is ordered by numproteins
    queryset.update(status=ProteinTF.STATUS.approved)


@admin.register(ProteinTF)
class ProteinAdmin(CompareVersionAdmin):
    autocomplete_fields = ("parent_organism", "references", "primary_reference")
    list_display = (
        "__str__",
        "created",
        "modified",
        "created_by",
        "updated_by",
        # "nstates",
    )
    list_filter = ("status", "created", "modified")
    list_select_related = ("created_by", "updated_by")
    search_fields = (
        "gene",
        "aliases",
        "slug",
        # "ipg_id",
        "created_by__username",
        "created_by__first_name",
        "created_by__last_name",
    )
    prepopulated_fields = {"slug": ("gene",)}
    actions = [approve_protein]
    fieldsets = [
        (
            None,
            {
                "fields": (
                    ("uuid", "name", "slug"),
                    ("aliases"),
                    ("seq", "seq_validated", "seq_comment"),
                    ("UNIPROT", "ENSEMBL", "PDB", "AF3"),
                    ("parent_organism"),
                    # ("agg", "mw"),
                    # "blurb",
                )
            },
        ),
        (None, {"fields": (("primary_reference", 
                            # "references",
                           ))}),
        (
            "Change History",
            {
                "classes": ("collapse",),
                "fields": (("created", "created_by"), ("modified", "updated_by")),
            },
        ),
    ]
    readonly_fields = (
        "created",
        "created_by",
        "modified",
        "updated_by",
        # "uuid",
    )

    def nstates(self, obj):
        if obj:
            return obj.states.all().count()
        else:
            return 0

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.prefetch_related("states")

    def get_form(self, request, obj=None, **kwargs):
        request.object = obj
        return super().get_form(request, obj, **kwargs)

    def save_model(self, request, obj, form, change):
        if not obj.created_by:
            obj.created_by = request.user
        obj.updated_by = request.user
        # obj.status = 'approved'
        obj.save()
        uncache_protein_page(obj.slug, request)

    def save_formset(self, request, form, formset, change):
        instances = formset.save(commit=False)
        for instance in instances:
            if not instance.created_by:
                instance.created_by = request.user
            instance.updated_by = request.user
            instance.save()
        formset.save()

@admin.action(description="Mark selected collections as private")
def make_private(modeladmin, request, queryset):
    # note, this will fail if the list is ordered by numproteins
    queryset.update(private=True)


@admin.register(ProteinCollection)
class ProteinCollectionAdmin(admin.ModelAdmin):
    model = ProteinCollection
    list_display = ("__str__", "owner_link", "created", "private", "numproteins")
    list_filter = ("created", "private")
    readonly_fields = ("numproteins", "owner_link")
    list_select_related = ("owner",)
    autocomplete_fields = ("proteins",)
    search_fields = ("name", "proteins__gene")
    actions = [make_private]

    @admin.display(description="Owner")
    def owner_link(self, obj):
        url = reverse("admin:users_user_change", args=([obj.owner.pk]))
        return mark_safe(f'<a href="{url}">{obj.owner}</a>')

    @admin.display(ordering="proteins_count")
    def numproteins(self, obj):
        return obj.proteins.count()

    def get_queryset(self, request):
        qs = super().get_queryset(request).annotate(proteins_count=Count("proteins"))
        return qs.prefetch_related("proteins")


@admin.register(Excerpt)
class ExcerptAdmin(VersionAdmin):
    model = Excerpt
    list_display = ("id", "reference", "content", "created_by", "created")
    list_filter = ("status",)
    list_select_related = ("reference", "created_by")
    autocomplete_fields = ("proteins", "reference", "created_by", "updated_by")

