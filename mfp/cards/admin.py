from django.contrib import admin
from cards.models import Company, CardData
# Register your models here.
admin.site.register(Company)
admin.site.register(CardData)

class CardDataAdmin(admin.ModelAdmin):
    pass
