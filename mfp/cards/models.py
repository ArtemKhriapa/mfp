from django.db import models
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from taggit.managers import TaggableManager





class Company(models.Model):
    company_id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=100, blank=True, null=True)
    occupation = models.CharField(max_length=100, blank=True, null=True)


class CardData(models.Model):

    BUSINESS = 'Business'
    DISCOUNT = 'Discount'
    FLYER = 'Flyer'

    CATEGORIES = (
        (BUSINESS, 'Business'),
        (DISCOUNT, 'Discount'),
        (FLYER, 'Flyer'),

    )

    user = models.ForeignKey(User)
    card_id = models.AutoField(primary_key=True)
    card_name = models.CharField(max_length=50)
    categories = models.CharField(max_length=8, choices=CATEGORIES, default=DISCOUNT)
    company = models.ForeignKey(Company, null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    image_front = models.ImageField(upload_to='uploads/%Y/%m/%d/')
    image_back = models.ImageField(upload_to='uploads/%Y/%m/%d/')
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


