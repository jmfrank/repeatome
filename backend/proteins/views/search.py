import json

from django.contrib.postgres.search import TrigramSimilarity
from django.db.models import Count, Prefetch, Q
from django.shortcuts import redirect, render

from proteins.util.helpers import getprot
from references.models import Author, Reference

from ..filters import ProteinFilter
from ..models import Organism, ProteinTF, Repeat


def protein_search(request):
    """renders html for protein search page"""

    if request.GET: # request: /search/?q=___
        if set(request.GET.keys()) == {"q"}: # checks the request is q
            query = request.GET.get("q").strip() # get the __ part
            print("QUERY: ", query)
            page = None
            try:
                print("protein name")
                page = getprot(query, visible=False)
                print(page)
                return redirect(page) # redirects to protein page
            except ProteinTF.DoesNotExist:
                pass
            try:
                print('protein IDs')
                page = ProteinTF.objects.get(
                    Q(ENSEMBL__iexact=query)
                    | Q(UNIPROT__iexact=query)
                    | Q(PDB__iexact=query.upper())
                    | Q(id__iexact=query.upper())
                )
                print(page)
                return redirect(page)
            except ProteinTF.DoesNotExist:
                pass
            try:
                print("repeat name")
                page = Repeat.objects.get(name=query)
                print(page)
                return redirect(page) # redirects to protein page
            except Repeat.DoesNotExist:
                pass
            try:
                print("repeat aliases")
                page = Repeat.objects.get(aliases__contains=[query])
                print(page)
                return redirect(page) # redirects to protein page
            except Repeat.DoesNotExist:
                pass
            try:
                # filter objects to get authors with similar names
                # .annotate --> add field with number of publications
                # .order_by --> order by number of publications
                print('author name')
                # TODO: right now only works with last_name or last_name ____
                page = Author.objects.filter(family__iexact=query.split(' ')[0]).annotate(nr=Count("publications")).order_by("-nr")
                print(page)
                if page:
                    return redirect(page.first())
            except Author.DoesNotExist:
                pass
            try:
                print('reference doi')
                page = Reference.objects.get(doi=query.lower())
                print(page)
                return redirect(page)
            except Reference.DoesNotExist:
                pass
            
            # TODO: add check for common name
            if len(query) > 5: # very long name, maybe scientific name of organism
                try:
                    print('organism name')
                    page = (
                        Organism.objects.filter(scientific_name__istartswith=query)
                        .annotate(np=Count("proteins"))
                        .order_by("-np")
                    )
                    print(page)
                    if page.exists():
                        return redirect(page.first()) # redirect to best fit page
                except Organism.DoesNotExist:
                    pass

            request.GET._mutable = True
            request.GET["gene__icontains"] = query # try new request if contains gene name
            del request.GET["q"]
            print('searching contains')
            return redirect("/search/?gene__icontains=" + query) # redirect to search page

        # stateprefetch = Prefetch("states", queryset=State.objects.order_by("-is_dark", "em_max"))
        f = ProteinFilter(
            request.GET,
            # queryset = ProteinTF.objects.all()
            queryset=ProteinTF.objects.annotate(nrepeats=Count("repeats"))
            .order_by("-nrepeats"),
            # .select_related("default_state") # select_related only works with ForeignKeys
            # .prefetch_related(stateprefetch)
        )
        print(f.qs)

        # if no hits, but gene was provided... try trigram search
        # if len(f.qs) == 0:
        #     print('no hits')
        #     name = None
        #     if "gene__icontains" in f.form.data:
        #         name = f.form.data["gene__icontains"]
        #     elif "gene__iexact" in f.form.data:
        #         name = f.form.data["gene__iexact"]
        #     if name:
        #         f.recs = (
        #             ProteinTF.objects.annotate(similarity=TrigramSimilarity("gene", name))
        #             .filter(similarity__gt=0.2)
        #             .order_by("-similarity")
        #         )
        
        # Only one hit, redirect to that page
        if len(f.qs) == 1:
            print('one hit', f.qs.first())
            return redirect(f.qs.first())
    else:
        # No results, will just be empty page
        print('no results')
        f = ProteinFilter(request.GET, queryset=ProteinTF.objects.none())
    
    # If many or no results, go to search page and show list of possible results
    print('rendering')
    # print(f.recs)
    return render(
        request,
        "proteins/protein_search.html",
        {
            "filter": f,
            "filter_fields": json.dumps(f.Meta.form_fields),
            "filter_operators": json.dumps(f.Meta.operators),
            "filter_labels": json.dumps(f.Meta.labels),
        },
    )
