from django.db import models
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from taggit.managers import TaggableManager

class Company(models.Model):
    company_id = models.PositiveIntegerField(primary_key=True)
    company_name = models.CharField(max_length=100, blank=True, null=True)
    occupation = models.CharField(max_length=100, blank=True, null=True)


class Category(models.Model):
    category_id = models.IntegerField()
    name = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)


class CardData(models.Model):
    user = models.ForeignKey(User)
    card_id = models.PositiveIntegerField(primary_key=True)
    card_name = models.CharField(max_length=50)
    company = models.ForeignKey(Company, null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(blank=True)
    category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.SET_NULL)
    timestamp = models.DateTimeField(auto_now_add=True)
    image_front = models.ImageField(upload_to='uploads/%Y/%m/%d/')
    image_back = models.ImageField(upload_to='uploads/%Y/%m/%d/')
    tags = TaggableManager()

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return " user: {}, card_id: {}, card_name: {}, category: {}, company: {}".format(self.user, self.card_id,
                                                                                         self.card_name, self.category,
                                                                                         self.company)
    def get_api_url(self):
        return reverse("cards-api:card_detail", kwargs={"card_id": self.card_id})


