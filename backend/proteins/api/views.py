from django.db.models import F, Max
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django_filters import rest_framework as filters
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.settings import api_settings
from rest_framework_csv import renderers as r

from ..filters import ProteinFilter
from ..models import ProteinTF
from .serializers import (
    BasicProteinSerializer,
    ProteinSerializer,
    ProteinSerializer2,
)

class ProteinListAPIView2(ListAPIView):
    # queryset = ProteinTF.objects.all().prefetch_related("states", "transitions")
    queryset = ProteinTF.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = ProteinSerializer2
    lookup_field = "slug"  # Don't use Protein.id!
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProteinFilter
    renderer_classes = [r.CSVRenderer, *api_settings.DEFAULT_RENDERER_CLASSES]

    @method_decorator(cache_page(60 * 10))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class ProteinListAPIView(ListAPIView):
    # queryset = ProteinTF.objects.all().prefetch_related("states", "transitions").select_related("default_state")
    queryset = ProteinTF.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = ProteinSerializer
    lookup_field = "slug"  # Don't use Protein.id!
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProteinFilter
    renderer_classes = [r.CSVRenderer, *api_settings.DEFAULT_RENDERER_CLASSES]

    @method_decorator(cache_page(60 * 10))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


class BasicProteinListAPIView(ProteinListAPIView):
    queryset = (
        ProteinTF.objects.filter()
        # .select_related("default_state")
        # .annotate(rate=Max(F("default_state__bleach_measurements__rate")))
    )
    permission_classes = (AllowAny,)
    serializer_class = BasicProteinSerializer


class ProteinRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = ProteinTF.objects.all()
    permission_classes = (IsAdminUser,)
    serializer_class = ProteinSerializer
    lookup_field = "slug"  # Don't use Protein.id


class ProteinRetrieveAPIView(RetrieveAPIView):
    queryset = ProteinTF.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = ProteinSerializer
    lookup_field = "slug"  # Don't use Protein.id
