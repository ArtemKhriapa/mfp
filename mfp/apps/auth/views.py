import logging
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.urls import reverse
from django.conf import settings
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import status

from apps.otc.models import OtcBase
from apps.auth.api.serializer import UserRegisterSerizalier, ConfirmRegisterSerializer
from apps.mailer.mailer import send_mail



logger = logging.getLogger(__name__)


class RegisterView(CreateAPIView):

    serializer_class = UserRegisterSerizalier

    def get_queryset(self):
        user_email = self.request.data['email']
        return User.objects.filter(email=user_email).first()
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
  
        if serializer.is_valid():
            if self.get_queryset():
                return Response({"result": "User witch such email  already exists"}, status=status.HTTP_400_BAD_REQUEST)
            user = serializer.save()
            url = self.get_activation_link(user)
       
            subject = "Activation email"
            
            render_kwargs = {"template_name": "confirmation_email.html", 
                             "context":{"user_name": user.username, "activation_link": url}}
            mail_kwargs = {
                           "subject": subject,
                           "message": '',
                           "fail_silently": True,
                           "recipient_list": [user.email,]
                         }
            send_mail(render_kwargs=render_kwargs, **mail_kwargs)
            
            return Response({"result": "Confirmation email has been sent to user - {}".format(user.email)
                            }, status=status.HTTP_201_CREATED)
        return Response({"result": "Wrong user data"}, status=status.HTTP_400_BAD_REQUEST)

    def get_activation_link(self, user):
        otc = OtcBase.objects.create(user=user)
        otc.save()
        key = otc.otc
        confirm_url = "http://{}{}".format(settings.MFP_IP, reverse('confirm_registration', kwargs={"otc": key}))
        return confirm_url
           

class ConfirmRegisterView(RetrieveAPIView):
    
    permission_class = []
    serializer_class = ConfirmRegisterSerializer
    
    def get(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=kwargs)
       
        if serializer.is_valid():
            # otc = self.get_queryset()
            otc = OtcBase.objects.filter(otc=self.kwargs['otc'], is_used=False).first()
            if otc:
                if otc.check_code():            
                    otc.apply_this()
                    otc.user.is_active = True
                    otc.user.save()
                    return Response({"User with email - {} has been registred".format(otc.user.email)}, status=status.HTTP_200_OK)
                return Response({"result": "Confirmation link for email {} is outdated".format(otc.user.email)}, status=status.HTTP_400_BAD_REQUEST)
            return Response({"result": "Requested key does not exist or has already used"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"result": "Wrong Data"}, status=status.HTTP_400_BAD_REQUEST)


class ResendRegistrationView(RegisterView):

    def post(self, request, *args, **kwargs):
        data = request.data
        user = User.objects.filter(email=data['email']).first()
        if user:
            url = self.get_activation_link(user)
            subject = "Activation email"

            render_kwargs = {
                             "template_name": "confirmation_email.html",
                             "context": {"user_name": user.username, "activation_link": url}
                            }
            mail_kwargs = {
                           "subject": subject,
                           "message": '',
                           "fail_silently": True,
                           "recipient_list": [user.email, ]
                          }
            send_mail(render_kwargs=render_kwargs, **mail_kwargs)
            return Response({"result": "Confirmation email has been resent to user - {}".format(user.username)}, status=status.HTTP_200_OK)
        return Response({"result": "Requested email does not exist"}, status=status.HTTP_404_NOT_FOUND)

