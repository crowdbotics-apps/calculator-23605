from django.contrib import admin
from .models import Indications, Medications

admin.site.register(Medications)
admin.site.register(Indications)

# Register your models here.
