from django.contrib import admin
from .models import Dosages, Indications, Medications, Parameters

admin.site.register(Medications)
admin.site.register(Indications)
admin.site.register(Dosages)
admin.site.register(Parameters)

# Register your models here.
