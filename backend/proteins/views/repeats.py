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
import hashlib

# High contrast colors for bar charts
bar_chart_colors = [x.strip() for x in """
#cc2222, #225ecc, #3bcc22, #cc22b5, #cc9022, #22ccc1, #7b22cc, #9bcc22, #2294cc, #cc2253, #2fcc22, #cc5d22, #22ccc8, #4722cc, #ccbc22, #228ecc, #cc224b, #37cc22, #cc6722, #22cccf, #4d22cc, #cca722, #2284cc, #cc223e, #40cc22, #cc7222, #22cbd3, #5422cc, #cc9222, #2279cc, #cc2232, #49cc22, #cc7e22, #22ccd8, #5c22cc, #cc8322, #226fcc, #cc2226, #53cc22, #cc8922, #22c7dc, #6422cc, #cc7322, #2264cc, #cc2a22, #5ccc22, #cc9422, #22c2e0, #6d22cc, #cc6322, #2259cc, #cc3622, #66cc22, #cc9f22, #22bde4, #7622cc, #cc5322, #224ecc, #cc4322, #6fcc22, #ccaa22, #22b8e8, #7f22cc, #cc4222, #2242cc, #cc4f22, #78cc22, #ccb522, #22b3ec, #8922cc, #cc3222, #2237cc, #cc5c22, #81cc22, #ccc122, #22adf1, #9322cc, #cc2222, #222ccc, #cc6922, #8acc22, #ccbc22, #22a7f5, #9d22cc, #cc222d, #2222cc, #cc7622, #94cc22, #ccc722, #22a2f9, #a722cc, #cc2239, #2c22cc, #cc8422, #9ecc22, #cccf22, #229cfd, #b222cc, #cc2245, #3822cc, #cc9222, #a7cc22, #ccc222, #2296ff, #bc22cc, #cc2250, #4522cc, #cc9f22, #b1cc22, #ccb422, #228fff, #c722cc, #cc225c, #5122cc, #ccad22, #bacc22, #cca622, #2288ff, #cc22be, #cc2268, #5e22cc, #ccba22, #c3cc22, #cc9922, #2281ff, #cc22b2, #cc2274, #6a22cc, #ccc822, #ccce22, #cc8b22, #2279ff, #cc22a6, #cc2280, #7722cc, #ccce22, #ccbc22, #cc7e22, #2271ff, #cc2299, #cc228c, #8422cc, #ccc222, #ccab22, #cc7022, #2268ff, #cc228d, #cc2298, #9122cc, #ccb422, #cc9922, #cc6322, #225fff, #cc2281, #cc22a4, #9d22cc, #cca622, #cc8722, #cc5522, #2255ff, #cc2275, #cc22b0, #aa22cc, #cc9822, #cc7622, #cc4822, #224cff, #cc2268, #cc22bd, #b722cc, #cc8a22, #cc6422, #cc3b22, #2242ff, #cc225c, #cc22c9, #c422cc, #cc7c22, #cc5222, #cc2d22, #2237ff, #cc2250, #cc22d5, #cc22be, #cc6e22, #cc4122, #cc2222, #222dff, #cc2243, #cc22e2, #cc22b2, #cc5f22, #cc2f22, #cc2c22, #2222ff, #cc2237, #cc22ee, #cc22a5, #cc5122, #cc2222, #cc3922, #2e22ff, #cc222b, #cc22fb, #cc2299, #cc4322, #cc2233, #cc4722, #3b22ff
""".split(",")]
 

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
        obj = Repeat.objects.filter(slug=self.kwargs['slug'].lower())[0]
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
        # taxonomy = repeat.parental_organism.id
        repeat_name = repeat.name.lower()
        # print(repeat)
        prot_obj = get_proteomics(repeat.name)
        # print(prot_obj)

        if prot_obj:
            prot_file = prot_obj.id + '_proteomics.json'
            file_path = Path(__file__).parent.parent.parent.parent / 'frontend' / 'static' / 'proteomics' / prot_file
        
            with open(file_path, 'r') as file:
                datapoints = json.load(file)
        
            return datapoints

        return None

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

        return render(request, 'repeats/repeatPage.html', context)
    
    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        return data
    
    def string_to_hex_color(self, text):
        # Create a hash of the string (MD5 or SHA256)
        hash_object = hashlib.md5(text.encode('utf-8'))
        hex_hash = hash_object.hexdigest()
        # Use the first 6 characters of the hash for the hex color
        return "#" + hex_hash[:6]
    
    def get_color_and_update_cache(self, color_lookup, color_key):
        if color_key in color_lookup:
            return color_lookup[color_key]

        index = len(color_lookup)
        if index < len(bar_chart_colors):
            color_lookup[color_key] = bar_chart_colors[index]
        else:
            color_lookup[color_key] = self.string_to_hex_color(index, color_key)
        return color_lookup[color_key]

    def get_motif_chart_qscore_data(self, repeat):
        datapoints = []
        color_lookup = dict()
        for obj in ProteinRepeats.objects.filter(repeat=repeat):
            if obj.motif_q_score:
                color_key = obj.protein.gene_family.id if obj.protein.gene_family else obj.protein.id
                color = self.get_color_and_update_cache(color_lookup, color_key)
                datapoints.append({
                    "label": obj.protein.gene, # + ':' + obj.protein.gene_family.gene_family if obj.protein.gene_family else '',
                    "y": float(obj.motif_q_score * -1),
                    "color": color
                })
        # Want to sort datapoints by y value (enrichment score) so that the chart colors are consistent
        sorted_datapoints = sorted(datapoints, key=lambda d: d['y'])
        max_datapoints = settings.ENRICHMENT_QSCORE_CHART_MAX_DISPLAY_DATAPOINTS
        if len(sorted_datapoints) <= max_datapoints:
            return sorted_datapoints
        else:
            first_index = len(sorted_datapoints) - max_datapoints
            return sorted_datapoints[first_index:first_index + max_datapoints]
    

    def get_motif_chart_enrichment_data(self, repeat):
        datapoints = []
        color_lookup = dict()
        for obj in ProteinRepeats.objects.filter(repeat=repeat):
            if obj.motif_enrichment:
                color_key = obj.protein.gene_family.id if obj.protein.gene_family else obj.protein.id
                color = self.get_color_and_update_cache(color_lookup, color_key)
                datapoints.append({
                "label": obj.protein.gene, # + ':' + obj.protein.gene_family.gene_family if obj.protein.gene_family else '',
                "y": float(obj.motif_enrichment),
                "color": color
            })
        # Want to sort datapoints by y value (enrichment score) so that the chart colors are consistent
        sorted_datapoints = sorted(datapoints, key=lambda d: d['y'])

        max_datapoints = settings.ENRICHMENT_QSCORE_CHART_MAX_DISPLAY_DATAPOINTS
        if len(sorted_datapoints) <= max_datapoints:
            return sorted_datapoints
        else:
            first_index = len(sorted_datapoints) - max_datapoints
            return sorted_datapoints[first_index:first_index + max_datapoints]


    

    

