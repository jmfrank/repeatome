from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

from repeatome.util import is_ajax
from django.templatetags.static import static
from proteins.models.organism import Organism

from ..util.blast import blast

def get_network_list():
    return Organism.objects.all()

def network_app(request):
    networks_list = []

    for org in Organism.objects.all().order_by("scientific_name"):
        networks_list.append({
            "id": org.id,
            "scientific_name": org.scientific_name,
            "network_url": static(f"network/repeat_network_db_{org.id}.json"),
        })
    
    return render(request, "proteins/network_app.html", {
        "networks_list": networks_list,
    })