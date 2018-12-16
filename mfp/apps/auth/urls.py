from django.conf.urls import url, include

urlpatterns = [
   #Auth
    url(r'^reset-pass/',
        include('apps.auth.api.urls')),
]
