from django.conf.urls import url, include

urlpatterns = [
     #all url, who work for REST
      url(r'^auth/',
        include('apps.auth.api.urls')),
]
