from django.conf.urls import url

from apps.reset_pass.api.views import ResetPasswordView
'''
LogoutView, UserSelfView, ForgotPasswordCreate, \
    ForgotPasswordDetails, PasswordResetRetrieve, FakeLogin
'''


urlpatterns = [
    #url(r'^self/$',
    #    UserSelfView.as_view(), name='api_user_self'),    
    url(r'^reset_pass/$',  # WAAAARNINGGG! Remove before production deployment!
        ResetPasswordView.as_view(), name='api_reset-pass'),

    #url(r'^logout/$',
    #    LogoutView.as_view(), name='api_auth_logout'),

]
