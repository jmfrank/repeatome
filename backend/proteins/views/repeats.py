import json
from pathlib import Path
from django.conf import settings
from django.views.generic import CreateView, DetailView, ListView, UpdateView, base
from django.shortcuts import get_object_or_404, redirect, render
from ..models import Repeat, ProteinTF, ProteinRepeats, Proteomics
from proteins.models.proteomics import get_proteomics, get_proteomics_list
import os
import pandas as pd
from math import log2
from django.http import JsonResponse

def RepeatTable(request):
    items = Repeat.objects.all()
    repeat_lst = []
    for item in items:
        if item.parent_repeat == None:
            repeat_lst.append(item)
    # print(items)
    return render(request, "repeatTable.html", {"repeats": repeat_lst})

def proteomics_json(request, pk):
    obj = get_object_or_404(Proteomics, pk=pk)

    # get_data might be a method
    raw = obj.get_data() if callable(getattr(obj, "get_data", None)) else obj.get_data

    # If raw is already a Python list/dict -> return it directly
    if isinstance(raw, (list, dict)):
        return JsonResponse(raw, safe=isinstance(raw, list) is False)

    # If raw is a JSON string -> parse it
    if isinstance(raw, str):
        raw = raw.strip()
        try:
            parsed = json.loads(raw)
        except json.JSONDecodeError:
            # fallback: return as text so you can see it
            return JsonResponse({"error": "Invalid JSON in get_data"}, status=500)

        # If it was double-encoded, parse again
        if isinstance(parsed, str):
            parsed = json.loads(parsed)

        return JsonResponse(parsed, safe=False)

    return JsonResponse({"error": f"Unexpected get_data type: {type(raw)}"}, status=500)

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
    
    def get_int(self, str_val, def_val):
        try:
            return int(str_val)
        except (ValueError, TypeError): 
            return def_val

    def get_float(self, str_val, def_val):
        try:
            return float(str_val)
        except (ValueError, TypeError): 
            return def_val
        
    def get_proteomics_obj(self, repeat):
        # repeat_name = repeat.name.lower()
        prot_obj = get_proteomics(repeat.name)

        return prot_obj
    
    def get_proteomics_objs(self, repeat):
        # repeat_name = repeat.name.lower()
        prot_objs = get_proteomics_list(repeat.name)
        # for obj in prot_objs:
        #     print(obj.name)
        return prot_objs
        
    def get_proteomics_data(self, repeat):
        taxonomy = repeat.parental_organism.id
        repeat_name = repeat.name.lower()
        # print(repeat)
        prot_obj = get_proteomics(repeat.name)
        # print(prot_obj)

        prot_file = prot_obj.id + '_proteomics.json'
        file_path = Path(__file__).parent.parent.parent.parent / 'frontend' / 'static' / 'proteomics' / prot_file
    
        with open(file_path, 'r') as file:
            datapoints = json.load(file)
        
        return datapoints

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        # print(self.object)
        context = self.get_context_data(object=self.object)
        enrichment_datapoints = self.get_motif_chart_enrichment_data(self.object)
        qscore_datapoints = self.get_motif_chart_qscore_data(self.object)

        context["enrichment_datapoints"] = enrichment_datapoints
        context["qscore_datapoints"] = qscore_datapoints
        context["proteomics_datapoints"] = self.get_proteomics_data(self.object)
        proteomics_objs = self.get_proteomics_objs(self.object)
        context["proteomics_list"] = proteomics_objs
        if (proteomics_objs != None and len(proteomics_objs) > 0):
            context["proteomics_first_obj"] = proteomics_objs[0]
        # print(self.get_proteomics_obj(self.object))
        if get_proteomics(self.object.name) != None:
            threshold_lst = list(get_proteomics(self.object.name).thresholds)
            for i in range(len(threshold_lst)):
                threshold_lst[i] = float(threshold_lst[i])
            context["threshold"] = threshold_lst
        context['subrepeats'] = self.object.children.all()
        # print(context['proteomics_datapoints'])
        # print(context['threshold'])
        # proteomics_datapoints = [
        #     {"name": "aa", "x": 1, "y": 10, "f": 1},
        #     {"name": "bb", "x": 2, "y": 20, "f": 2},
        #     {"name": "cc", "x": 3, "y": 30, "f": 3},
        #     {"name": "dd", "x": 4, "y": 40, "f": 4},
        #     {"name": "ee", "x": 5, "y": 50, "f": 5},
        #     {"name": "ff", "x": 6, "y": 60, "f": 1},
        #     {"name": "gg", "x": 7, "y": 70, "f": 2},
        #     {"name": "hh", "x": 8, "y": 80, "f": 3},
        #     {"name": "ii", "x": 9, "y": 90, "f": 4},
        #     {"name": "jj", "x": 10, "y": 100, "f": 5}
        # ]
        # context["proteomics_datapoints"] = proteomics_datapoints

        # protein_names = ProteinTF.objects.filter(repeats__id == context['repeat'].name)
        # print(context['protein'].satellite)
        # print(self.object.get_proteins())
        # print(f"enrichment_datapoints = {enrichment_datapoints}")
        # print(f"qscore_datapoints = {qscore_datapoints}")
        # print(f"proteomics_datapoints = {proteomics_datapoints}")

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


    

    

