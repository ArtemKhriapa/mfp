from django.contrib import admin
from apps.otc.models import OtcBase

class OtcBaseAdmin(admin.ModelAdmin):
    fields = ('otc', 'user', 'created_in', 'is_used')
    list_display = ('otc', 'user', 'created_in', 'is_used')
admin.site.register(OtcBase, OtcBaseAdmin)


