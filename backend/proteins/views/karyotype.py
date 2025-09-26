from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

from repeatome.util import is_ajax

from ..util.blast import blast


def karyotype_view(request):
    return render(request, "proteins/karyotype_viewer.html")