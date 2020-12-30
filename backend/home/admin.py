from django.contrib import admin
from .models import Dosages, Indications, Medications

admin.site.register(Medications)
admin.site.register(Indications)
admin.site.register(Dosages)

# Register your models here.
