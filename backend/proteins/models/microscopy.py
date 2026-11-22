from django.contrib.postgres.fields import ArrayField
from django.db import models
from ..util.helpers import shortuuid


class Microscopy(models.Model):
    id = models.CharField(primary_key=True, max_length=22, default=shortuuid, editable=False)
    name = models.CharField(max_length=200, blank=True, null=True, unique=True)
    proteintf = models.ForeignKey(
        "ProteinTF",
        verbose_name="ProteinTF",
        on_delete=models.CASCADE
        # to_field='gene', 
        # db_column='gene'
    )
    local_tiff_file = models.TextField(blank=True, null=True)
    url = models.TextField(blank=False, null=False)
    cell_type = models.TextField(blank=False, null=False)
    pixel_size = models.TextField(blank=False, null=False)
    magnification = models.TextField(blank=False, null=False)
    channels = models.JSONField(default=dict, blank=False, null=False)
    expression = models.TextField(blank=False, null=False)
    microscopy = models.TextField(blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    display_name = models.TextField(blank=False, null=False)

    def channels_as_str(self):
        channel_str = ""
        if self.channels:
            sorted_channels = sorted(self.channels.keys())
            for c in sorted_channels:
                if channel_str:
                    channel_str += "<br/>"
                channel_str += f"{c}:{self.channels[c]}"
        return channel_str
    
    def __str__(self):
        return f"name={self.name}, gene=({self.proteintf.gene}), \
        cell_type={self.cell_type}, magnification={self.magnification}, \
            channels={self.channels}, expression={self.expression}, \
                microscopy={self.microscopy}, description={self.description}, \
                    url={self.url}"