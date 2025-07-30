from dal import autocomplete

from ..models import ProteinTF, Repeat

# from django.contrib.postgres.search import TrigramSimilarity


class ProteinAutocomplete(autocomplete.Select2QuerySetView):
    def get_results(self, context):
        """Return data for the 'results' key of the response."""
        return [
            {
                "id": result.id,
                # 'slug': result.slug,
                "text": result.gene,
            }
            for result in context["object_list"]
        ]

    def get_queryset(self):
        qs = ProteinTF.objects.all()
        if self.q:
            qs = qs.filter(gene__icontains=self.q)
        return qs

class RepeatAutocomplete(autocomplete.Select2QuerySetView):
    def get_results(self, context):
        """Return data for the 'results' key of the response."""
        return [
            {
                "id": result.id,
                'slug': result.slug,
                "text": result.name,
            }
            for result in context["object_list"]
        ]

    def get_queryset(self):
        qs = Repeat.objects.all()
        if self.q:
            qs = qs.filter(name__icontains=self.q)
        return qs



# class FilterAutocomplete(autocomplete.Select2QuerySetView):
#     def get_queryset(self):
#         # Don't forget to filter out results depending on the visitor !
#         # if not self.request.user.is_authenticated:
#         #     return Filter.objects.none()
#         qs = Filter.objects.all()
#         if self.q:
#             # qs = Filter.objects.annotate(
#             #     similarity=TrigramSimilarity('part', self.q)) \
#             #     .filter(similarity__gt=0.3) \
#             #     .order_by('-similarity')
#             qs = qs.filter(name__icontains=self.q)
#         return qs
