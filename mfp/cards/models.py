from django.db import models
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from taggit.managers import TaggableManager
from django_google_maps import fields as map_fields


from gdstorage.storage import GoogleDriveStorage

gd_storage = GoogleDriveStorage()

class Company(models.Model):
    company_id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=100, blank=True, null=True)
    occupation = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return " {}".format(self.company_name)

class CompanyLocations(models.Model):
    company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, related_name='locations')
    address = map_fields.AddressField(max_length=200, null=True)
    geolocation = map_fields.GeoLocationField(max_length=100, null=True)
    point_name = models.CharField(max_length=50, null=True)


    def __str__(self):
        return " company: {}, location: {} ".format(self.company, self.geolocation)

class CardData(models.Model):

    BUSINESS = 'Business'
    DISCOUNT = 'Discount'
    FLYER = 'Flyer'

    CATEGORIES = (
        (BUSINESS, 'Business'),
        (DISCOUNT, 'Discount'),
        (FLYER, 'Flyer'),

    )

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    card_id = models.AutoField(primary_key=True)
    card_name = models.CharField(max_length=50)
    categories = models.CharField(max_length=8, choices=CATEGORIES, default=DISCOUNT)
    company = models.ForeignKey(Company, null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    image_front = models.ImageField(
        upload_to='uploads/%Y/%m/%d/', storage=gd_storage)
    image_back = models.ImageField(
        upload_to='uploads/%Y/%m/%d/', storage=gd_storage)
    tags = TaggableManager()

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return " user: {}, card_id: {}, card_name: {}, category: {}, company: {}".format(self.user, self.card_id,
                                                                                         self.card_name, self.categories,
                                                                                         self.company)
    def get_api_url(self):
        return reverse("cards-api:card_detail", kwargs={"card_id": self.card_id})

    def pre_save(self, obj):
        obj.user = self.request.user


