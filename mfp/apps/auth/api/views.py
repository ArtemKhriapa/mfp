from __future__ import absolute_import, unicode_literals

from typing import Any, Tuple

from django.http import HttpResponseRedirect, Http404, HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.utils import timezone

from rest_framework import generics
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from apps.otc.models import OtcBase
from rest_framework.utils import json

from .serializers import UserSerializer, ResetPasswordSerializer, NewPassCreateSerializer
from django.core.mail import send_mail

class ResetPasswordView(generics.CreateAPIView):
    permission_classes = []
    serializer_class = ResetPasswordSerializer
    model = User
    
    def post(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get("email")
            user = User.objects.filter(email=email).first()
            if not user:
                return HttpResponse("User not found", status=404)
        #send_mail(
        #    'Восстановление пароля',
        #    'Пройдите по ссылке для восстановления пароля',
        #    'from@example.com',
        #    ['to@example.com'],
        #    fail_silently=False,
        #)
            return Response("Change password letter was sent to your e-mail.", status=status.HTTP_200_OK)
        return Response (status=status.HTTP_404_NOT_FOUND)

class NewPassCreateView(generics.UpdateAPIView):
    
    permission_classes = []
    serializer_class = NewPassCreateSerializer
    model = User

    def get_object(self, request, *args, **kwargs):
        data = request.data
        token = kwargs['otc']
        user = kwargs['user']
        if OtcBase.objects.filter(otc=token).exist:
            if user == OtcBase.objects.filter(user=user):
                if OtcBase.otc.created_in < timezone.now():
                    if OtcBase.otc.is_used == False:
                        OtcBase.apply_this()
                else:
                    return Response ({"result":"OTC isn't valid."}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response ({"result":"User with this OTC doesn't exist."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response ({"result":"OTC doesn't exist."}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)


    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            new_password_1 = serializer.data.get("new_password_1")
            new_password_2 = serializer.data.get("new_password_2")
            if new_password_1 != new_password_2:
                return Response({"result": ["Passwords aren't equal"]}, status=status.HTTP_400_BAD_REQUEST)
            else:
                self.object.set_password(serializer.data.get("new_password_1"))
                self.object.save()
                return Response({"result":"Password has been reset."}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)