from django.contrib import admin
from cards.models import Company, Category, CardData
# Register your models here.
admin.site.register(Company)
admin.site.register(Category)
admin.site.register(CardData) 

