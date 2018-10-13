from django.conf.urls import url, include
from cards.api import views

urlpatterns = [
    url(r'^mycards/$', views.CardList.as_view(), name='card_list'),
    url(r'^newcard/$', views.CardListCreate.as_view(), name='card_new'),
    url(r'^(?P<card_id>\d+)/$', views.CardDetail.as_view(), name='card_detail'),



]