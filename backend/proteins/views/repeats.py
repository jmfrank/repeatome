from django.views.generic import CreateView, DetailView, ListView, UpdateView, base
from django.shortcuts import get_object_or_404, redirect, render
from ..models import Repeat, ProteinTF, ProteinRepeats
import requests

def RepeatTable(request):
    items = Repeat.objects.all()
    # print(items)
    return render(request, "repeatTable.html", {"repeats": items})

class RepeatDetailView(DetailView):
    """renders html for single protein page"""
    
    # slug_field = 'gene'
    model = Repeat
    context_object_name = 'repeat'   # name for the data that will be used by template
    queryset = Repeat.objects
    template_name = 'repeats/repeatPage.html'
    
    def get_object(self, query_set=None):
        # print(self.kwargs['slug'])
        if query_set is None:
            query_set = self.get_queryset()
        # print(self.kwargs['slug'].lower())
        # print(Repeat.objects.all()[2].slug)
        # print(Repeat.objects.get(slug=self.kwargs['slug']))
        obj = Repeat.objects.get(slug=self.kwargs['slug'].lower())
        # print(query_set.get(gene=self.kwargs['slug']))
        # obj = query_set.get(gene=self.kwargs['slug'])
        # obj = queryset.get(uuid=self.kwargs.get("slug", "").upper())
        return obj

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        # print(self.object)
        context = self.get_context_data(object=self.object)
        enrichment_datapoints = self.get_motif_chart_enrichment_data(self.object)
        qscore_datapoints = self.get_motif_chart_qscore_data(self.object)

        context["enrichment_datapoints"] = enrichment_datapoints
        context["qscore_datapoints"] = qscore_datapoints

        # protein_names = ProteinTF.objects.filter(repeats__id == context['repeat'].name)
        # print(context['protein'].satellite)
        # print(self.object.get_proteins())
        print(f"enrichment_datapoints = {enrichment_datapoints}")
        print(f"qscore_datapoints = {qscore_datapoints}")

        return render(request, 'repeats/repeatPage.html', context)
    
    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        return data
    
    def get_motif_chart_qscore_data(self, repeat):
        datapoints = []
        for obj in ProteinRepeats.objects.filter(repeat=repeat):
            if obj.motif_q_score:
                datapoints.append({
                    "label": obj.protein.gene,
                    "y": float(obj.motif_q_score * -1)
                    # "y": "-" + str(protein.motif_q_score * -1)
                })
        # return json.dumps(datapoints)
        return datapoints

    def get_motif_chart_enrichment_data(self, repeat):
        datapoints = []
        for obj in ProteinRepeats.objects.filter(repeat=repeat):
            if obj.motif_enrichment:
                datapoints.append({
                    "label": obj.protein.gene,
                    "y": float(obj.motif_enrichment)
                })
        # return json.dumps(datapoints)
        return datapoints


    

    

