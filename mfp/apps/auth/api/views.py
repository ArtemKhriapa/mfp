from __future__ import absolute_import, unicode_literals

from typing import Any, Tuple
from django.contrib.auth import login,authenticate, logout
from django.http import HttpResponseRedirect, Http404, HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils import timezone
from django.core.mail import send_mail
from apps.mailer.mailer import *
from django.conf import settings
from django.template import loader

from rest_framework import generics
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.utils import json

from apps.otc.models import OtcBase
from apps.mailer.mailer import *

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token


from .serializers import UserSerializer, ResetPasswordSerializer, NewPassCreateSerializer

#_________________________________________
#added just to make frontend work

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        serializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user': serializer.data})

#_____________________________________________




class LoginView(generics.RetrieveAPIView):

    permission_classes = []

    def get(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
        else:
            return HttpResponse("User not found", status=404)
        return HttpResponseRedirect('/')

class FakeLoginView(generics.RetrieveAPIView):

    permission_classes = []

    def get(self, request, *args, **kwargs):
        user = authenticate(
            username=request.query_params.get('username'),
            password=request.query_params.get('password')
        )
        print(user)
        if not user:
            return HttpResponse("User not found", status=404)
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        return HttpResponseRedirect('/')


class LogoutView(generics.DestroyAPIView):

    permission_classes = [IsAuthenticated,]
    def delete(self, request, *args, **kwargs):
        logout(request)
        return Response({}, status=status.HTTP_204_NO_CONTENT)


class UserSelfView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = UserSerializer
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    def get_object(self):
        return self.request.user


class ResetPasswordView(generics.CreateAPIView):
    permission_classes = []
    serializer_class = ResetPasswordSerializer
    model = User
    
    def post(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get("email")
            user = User.objects.filter(email=email).first()
            if user:
                url = self.get_activation_link(user)
                context = {'reset_password_link': url}
                send_mail('Subject here', 'Here is the message.', settings.EMAIL_HOST_USER,
                      ['originalugg2@gmail.com'], fail_silently=False,
                      render_kwargs ={'template_name': 'password_reset_email.html', 'context': context})
            if not user:
                return HttpResponse("User not found", status=404)
            return Response("Change password letter was sent to your e-mail.", status=status.HTTP_200_OK)
        return Response (status=status.HTTP_404_NOT_FOUND)

    def get_activation_link(self, user):
        otc = OtcBase.objects.create(user=user)
        otc.save()
        token = otc.otc
        confirm_url = "http://{}{}".format(settings.MFP_IP, reverse('api_new-pass', kwargs={"token": token}))
        return confirm_url

class NewPassCreateView(generics.RetrieveAPIView):
    
    permission_classes = []
    serializer_class = NewPassCreateSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        token = kwargs['token']
        token = get_object_or_404(OtcBase, otc=token)
        user = token.user
        if token:
            if user:
                if token.created_in < timezone.now():
                    if token.is_used == False:
                        token.apply_this()
                    else:
                        return Response ({"result":"OTC was used before."}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response({"result": "OTC's time isn't valid."}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response ({"result":"User with this OTC doesn't exist."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response ({"result":"OTC doesn't exist."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)

    def put(self, request, *args, **kwargs):

        serializer_class = NewPassCreateSerializer
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            token = kwargs['token']
            token = get_object_or_404(OtcBase, otc=token)
            user = token.user
            new_password_1 = serializer.data.get("new_password_1")
            new_password_2 = serializer.data.get("new_password_2")
            if new_password_1 != new_password_2:
                return Response({"result": ["Passwords aren't equal"]}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user.set_password(new_password_1)
                user.save()
                context = {'username': user}
                send_mail('New password', 'Here is the message.', settings.EMAIL_HOST_USER,
                          ['originalugg2@gmail.com'], fail_silently=False,
                          render_kwargs={'template_name': 'new_pass_email.html', 'context': context})
        return Response({"result":"Password has been reset. Your username and new password was sent to email address"},
                        status=status.HTTP_200_OK)