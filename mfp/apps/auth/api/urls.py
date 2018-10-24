from django.conf.urls import url

from apps.auth.api.views import ResetPasswordView, NewPassCreateView, FakeLoginView, LogoutView
'''
LogoutView, UserSelfView, ForgotPasswordCreate, \
    ForgotPasswordDetails, PasswordResetRetrieve, FakeLogin
'''


urlpatterns = [
    #url(r'^self/$',
    #    UserSelfView.as_view(), name='api_user_self'),
    url(r'^fake/$',  # WAAAARNINGGG! Remove before production deployment!
        FakeLoginView.as_view(), name='api_auth_fake_login'),
    url(r'$',
        ResetPasswordView.as_view(), name='api_reset-pass'),
    url(r'^new_password/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        NewPassCreateView.as_view(), name='api_new-pass'),
  #  url(r'^(?P<slug>[^\.]+)/(?P<tips>tips)/$', Someview.as_view(), name="someview")
    url(r'^logout/$',
        LogoutView.as_view(), name='api_auth_logout'),

]
