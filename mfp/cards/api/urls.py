from django.conf.urls import url, include
from cards.api import views

urlpatterns = [
    url(r'^mycards/$', views.CardList.as_view(), name='card_list'),
    url(r'^mycards/(?P<card_id>\d+)/$', views.CardDetail.as_view(), name='card_detail'),
    url(r'^mycards/(?P<categories>.+)/$', views.CategoryList.as_view(), name='cat_list'),
    url(r'^newcard/$', views.CardListCreate.as_view(), name='card_new'),
    url(r'^locations/(?P<company>.+)/$', views.CompanyLocationsList.as_view(), name='loc_list'),
    url(r'^companies/$', views.CompanyList.as_view(), name='company_list'),

]