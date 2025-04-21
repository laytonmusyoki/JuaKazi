from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(ProviderProfile)
admin.site.register(SeekerProfile)
admin.site.register(CustomUser)