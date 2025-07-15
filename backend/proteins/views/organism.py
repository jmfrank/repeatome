from django.views.generic import CreateView, DetailView, ListView, UpdateView, base
from django.shortcuts import get_object_or_404, redirect, render
from ..models import Organism
from django.db.models import Count
import requests

def OrganismTable(request):
    items = Organism.objects.all()
    # print(items)
    return render(request, "organismTable.html", {"organisms": items})

class OrganismListView(ListView):
    """renders html for single reference page"""

    queryset = Organism.objects.annotate(num_prot=Count("proteinTF", distinct=True), num_repeat=Count("repeat", distinct=True))
    template_name = "organismTable.html"

class OrganismDetailView(DetailView):
    """renders html for single reference page"""

    queryset = Organism.objects.all().prefetch_related("proteins__repeats")
    template_name = "organisms/organismPage.html"

# class RepeatDetailView(DetailView):
#     """renders html for single protein page"""
    
#     # slug_field = 'gene'
#     model = Repeat
#     context_object_name = 'repeat'   # name for the data that will be used by template
#     queryset = Repeat.objects
#     template_name = 'repeats/repeatPage.html'
    
#     def get_object(self, query_set=None):
#         # print(self.kwargs['slug'])
#         if query_set is None:
#             query_set = self.get_queryset()
#         # print(self.kwargs['slug'].lower())
#         # print(Repeat.objects.all()[2].slug)
#         # print(Repeat.objects.get(slug=self.kwargs['slug']))
#         obj = Repeat.objects.get(slug=self.kwargs['slug'].lower())
#         # print(query_set.get(gene=self.kwargs['slug']))
#         # obj = query_set.get(gene=self.kwargs['slug'])
#         # obj = queryset.get(uuid=self.kwargs.get("slug", "").upper())
#         return obj

#     def get(self, request, *args, **kwargs):
#         self.object = self.get_object()
#         # print(self.object)
#         context = self.get_context_data(object=self.object)
#         # protein_names = ProteinTF.objects.filter(repeats__id == context['repeat'].name)
#         # print(context['protein'].satellite)
#         # print(self.object.get_proteins())
        
#         return render(request, 'repeats/repeatPage.html', context)
    
#     def get_context_data(self, **kwargs):
#         data = super().get_context_data(**kwargs)
#         return data
    
