import uuid
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.urls import reverse
from django.core.mail import send_mail # TODO: delete after adding our wn mailer 
from django.conf import settings
from rest_framework.generics import CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import status
# from apps.mailer.mailer import send_mail
from apps.otc.models import OtcBase
# Create your views here.

class RegisterView(CreateAPIView):

    permission_classes = []
       
    def post(self, request, *args, **kwargs):
        data = request.data
        if User.objects.filter(email=data['email']).exists():
            return Response({"result": "User witch such email  already exists"}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create(username=data["username"],
                                   email=data["email"],
                                   password=make_password(data["password"]),
                                   is_active=False
                                   )
        user.save()
        url = self.get_activation_link(user)
        # TODO: add mailer functionality
        subject = "Activation email"
        context = "To activate  your account click activation link or past it to your browser - {}".format(url)
        
        send_mail(
            subject,
            context,
            'mfp@domain.com',
            [user.email,],
            fail_silently=True
        )
        
        return Response({"result": "Confirmation email has been sent to user - {}".format(data["username"])
                        }, status=status.HTTP_201_CREATED)
    

    def get_activation_link(self, user):
        otc = OtcBase.objects.create(user=user)
        otc.save()
        key = otc.otc
        confirm_url = "http://{}{}".format(settings.MFP_IP, reverse('confirm_registration', kwargs={"key": key}))
        return confirm_url
           

class ConfirmRegisterView(RetrieveAPIView):
        
        permission_class = []

        def get(self, request, *args, **kwargs):
            key = kwargs["key"]
            otc = OtcBase.objects.filter(otc=key).first()
            if otc:
                if otc.check_code():            
                    otc.apply_this()
                    otc.user.is_active = True
                    otc.user.save()
                    return Response({"result": "User with email - {} has been registred".format(otc.user.email)}, status=status.HTTP_200_OK)
                return Response({"result": "Confirmation link for email {} is outdated".format(otc.user.email)}, status=status.HTTP_400_BAD_REQUEST)
            return Response({"result": "Requested key does not exist"}, status=status.HTTP_404_NOT_FOUND)


class ResendRegistrationView(RegisterView):

    def post(self, request, *args, **kwargs):
        data = request.data
        user = User.objects.filter(email=data['email']).first()
        if user:
            url = self.get_activation_link(user)
            # TODO: add mailer functionality
            subject = "Activation email"
            context = "To activate  your account click activation link or past it to your browser - {}".format(
                url)

            send_mail(
                subject,
                context,
                'mfp@domain.com',
                [user.email, ],
                fail_silently=True
            )
            return Response({"result": "Confirmation email has been resent to user - {}".format(user.username)}, status=status.HTTP_200_OK)
        return Response({"result": "Requested email does not exist"}, status=status.HTTP_404_NOT_FOUND)

