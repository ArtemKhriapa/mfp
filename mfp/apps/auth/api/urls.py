from django.conf.urls import url, include
from rest_framework import routers
from apps.auth.api.views import LoginView, ResetPasswordView, NewPassCreateView, FakeLoginView, LogoutView, UserSelfView, CustomObtainAuthToken, UserViewSet
'''
LogoutView, UserSelfView, ForgotPasswordCreate, \
    ForgotPasswordDetails, PasswordResetRetrieve, FakeLogin
'''
#fe
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^self/$',
        UserSelfView.as_view(), name='api_user_self'),
    url(r'^fake/$',  # WAAAARNINGGG! Remove before production deployment!
        FakeLoginView.as_view(), name='api_auth_fake_login'),
    url(r'reset-pass/$',
        ResetPasswordView.as_view(), name='api_reset-pass'),
    url(r'^new_password/(?P<token>[0-9A-Za-z_\-]+)/$',
        NewPassCreateView.as_view(), name='api_new-pass'),
    #url(r'^new_password/(?P<token>[0-9A-Za-z_\-]+)/$', 596e2e68-0b0a-4f02-b42b-b4fea655d4af' [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}
    #(?P<token>[0-9a-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}/$'
    url(r'^login/$',
        LoginView.as_view(), name='api_auth_login'),
    url(r'^logout/$',
        LogoutView.as_view(), name='api_auth_logout'),

    url(r'^authenticate/$',
        CustomObtainAuthToken.as_view(), name='api_auth_token_auth'),


]
