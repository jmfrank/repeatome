from django.conf import settings
from django.views.generic import CreateView, DetailView, ListView, UpdateView, base
from django.shortcuts import get_object_or_404, redirect, render
from ..models import Repeat, ProteinTF, ProteinRepeats
import os
import pandas as pd
from math import log2

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
        
    def get_proteomics_data(self, repeat):
        taxonomy = repeat.parental_organism.id
        repeat_name = repeat.name.lower()
        file = f"{settings.IMPORT_DATA_FOLDER}/proteomics_{taxonomy}_{repeat_name}.csv"
        if not os.path.exists(file):
            print(f"No proteomics data found for taxonomy={taxonomy} repeat={repeat_name}: {file}")
            return []
        
        df = pd.read_csv(file, dtype=str)
        datapoints = []
        data_format = 1
        for row in df.to_dict(orient='records'):
            col1 = self.get_float(row["WT ZF Area"], 0.0) + 1
            col2 = self.get_float(row["WT CT Area"], 0.0) + 1
            val = log2(col1/col2)
            significance = self.get_float(row["Significance"], 0.0)
            # data_format = 1 if significance > 20 else 2
            datapoints.append({
                "name": row["Accession"],
                "x": val,
                "y": significance,
                "f": data_format
            })
            data_format += 1
            if data_format > 5:
                data_format = 1
        
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


    

    

