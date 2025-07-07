from backend.proteins.models import Repeat

for obj in Repeat.objects.all():
    obj.save()

