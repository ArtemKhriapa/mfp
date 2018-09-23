from django.conf.urls import url, include

urlpatterns = [
     #all url, who work for REST
      url(r'^reset-pass/',
        include('apps.reset_pass.api.urls')),
]
