import contextlib
import html
import logging
from collections import defaultdict

import reversion
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.decorators import login_required
from django.core.mail import mail_managers
from django.db.models import Prefetch
from django.http import HttpResponseNotAllowed, JsonResponse
from django.utils.text import slugify
from django.views.decorators.cache import cache_page
from django.views.generic import DetailView

from repeatome.util import is_ajax, uncache_protein_page
from proteins.util.maintain import validate_node

from ..models import Organism, ProteinTF


def serialize_comparison(request):
    info = []
    slugs = request.session.get("comparison", [])
    for prot in ProteinTF.objects.filter(slug__in=slugs):
        d = {"gene": prot.gene, "slug": prot.slug}
        # d.update(
        #     {
        #         "color": prot.default_state.emhex or "#FFFFFF",
        #         "emMax": prot.default_state.em_max or "",
        #         "exMax": prot.default_state.ex_max or "",
        #         "ec": prot.default_state.ext_coeff or "",
        #         "qy": prot.default_state.qy or "",
        #         "spectra": prot.d3_spectra(),
        #     }
        # )
        info.append(d)
    return info


def update_comparison(request):
    if not is_ajax(request):
        return HttpResponseNotAllowed([])
    current = set(request.session.get("comparison", []))
    if request.POST.get("operation") == "add":
        current.add(request.POST.get("object"))
    elif request.POST.get("operation") == "remove":
        try:
            current.remove(request.POST.get("object"))
        except KeyError:
            pass
    elif request.POST.get("operation") == "clear":
        current.clear()
    request.session["comparison"] = list(current)
    return JsonResponse({"status": 200, "comparison_set": serialize_comparison(request)})


@login_required
def add_organism(request):
    if not is_ajax(request):
        return HttpResponseNotAllowed([])
    try:
        tax_id = request.POST.get("taxonomy_id", None)
        if not tax_id:
            raise Exception()
        org, created = Organism.objects.get_or_create(id=tax_id)
        if created:
            if request.user.is_authenticated:
                org.created_by = request.user
                org.save()
            if not request.user.is_staff:
                mail_managers(
                    "Organism Added",
                    f"User: {request.user.username}\nOrganism: {org}\n"
                    f"{request.build_absolute_uri(org.get_absolute_url())}",
                    fail_silently=True,
                )
        return JsonResponse(
            {
                "status": "success",
                "created": created,
                "org_id": org.id,
                "org_name": org.scientific_name,
            }
        )
    except Exception:
        return JsonResponse({"status": "failed"})


@staff_member_required
def approve_protein(request, slug=None):
    if not is_ajax(request):
        return HttpResponseNotAllowed([])

    try:
        p = ProteinTF.objects.get(slug=slug)
        if p.status != "pending":
            return JsonResponse({})

        # get rid of previous unapproved version
        with contextlib.suppress(Exception):
            if p.versions.first().field_dict["status"] == "pending":
                p.versions.first().delete()
        with reversion.create_revision():
            reversion.set_user(request.user)
            reversion.set_comment(f"{request.user} approved current version")
            p.status = "approved"
            p.save()
            with contextlib.suppress(Exception):
                uncache_protein_page(p.slug, request)
        return JsonResponse({})
    except Exception as e:
        logging.error(e)


def validate_proteinname(request):
    if not is_ajax(request):
        return HttpResponseNotAllowed([])

    name = request.POST.get("name", None)
    slug = request.POST.get("slug", None)
    try:
        prot = ProteinTF.objects.get(slug=slugify(name.replace(" ", "").replace("monomeric", "m")))
        if slug and prot.slug == slug:
            data = {"is_taken": False}
        else:
            data = {
                "is_taken": True,
                "id": prot.id,
                "url": prot.get_absolute_url(),
                "name": prot.name,
            }
    except ProteinTF.DoesNotExist:
        data = {"is_taken": False}
    return JsonResponse(data)


def recursive_node_to_dict(node, widths=None, rootseq=None, validate=False):
    if not widths:
        widths = defaultdict(int)
    widths[node.level] += 1

    result = {
        "name": html.unescape(node.protein.name),
        "mut": node.rootmut or str(node.mutation),
        # 'mut': node.display_mutation(maxwidth=10) or "null",
        "url": node.protein.get_absolute_url(),
        "bg": node.protein.em_svg,
        "slug": node.protein.slug,
        "ref": node.reference.citation if node.reference else "",
    }

    if rootseq:
        result["rootmut"] = str(rootseq.mutations_to(node.protein.seq))
        # if node.parent and node.parent.protein.seq:
        #     result['mut'] = str(node.mut_from_parent()),

    if validate:
        result["err"] = validate_node(node)

    children = []
    for c in node.get_children():
        child, widths = recursive_node_to_dict(c, widths, rootseq, validate)
        children.append(child)
    if children:
        result["children"] = children
    return result, widths

# class Widget(DetailView):
#     template_name = "widget.js"
#     queryset = Protein.visible.prefetch_related("states")

#     def get_context_data(self, **kwargs):
#         data = super().get_context_data(**kwargs)
#         print(self.request.build_absolute_uri())
#         return data
