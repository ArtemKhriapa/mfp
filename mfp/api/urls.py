from django.conf.urls import url, include
from apps.auth.views import RegisterView, ConfirmRegisterView, ResendRegistrationView

urlpatterns = [
    url(r'^registration', 
        RegisterView.as_view(), name='registration'),
    url(r'^confirm_registration/(?P<key>[-:\w]+)',
        ConfirmRegisterView.as_view(), name='confirm_registration'),
    url(r'^resend_registration', 
       ResendRegistrationView.as_view(), name='resend_registration')
     #all url, who work for REST
]
