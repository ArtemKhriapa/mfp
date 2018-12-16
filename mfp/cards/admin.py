from django.contrib import admin
from apps.cards.models import Company, CardData, CompanyLocations
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields

# Register your models here.


class CompanyLocationsInline(admin.TabularInline):
    model = CompanyLocations


class CompanyAdmin(admin.ModelAdmin):
    inlines = [
        CompanyLocationsInline,
    ]

class CompanyLocationsAdmin(admin.ModelAdmin):
    formfield_overrides = {
        map_fields.AddressField: {'widget': map_widgets.GoogleMapsAddressWidget},
    }

admin.site.register(Company, CompanyAdmin)
admin.site.register(CardData)
admin.site.register(CompanyLocations, CompanyLocationsAdmin)
