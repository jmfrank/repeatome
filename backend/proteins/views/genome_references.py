from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

from repeatome.util import is_ajax
from ..models import GenomeReferences
from ..util.blast import blast


def genome_reference(request):
    items = GenomeReferences.objects.all()
    print(items)
    return render(request, "proteins/genome_references.html", {"refs": items})