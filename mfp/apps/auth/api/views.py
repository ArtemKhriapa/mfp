from __future__ import absolute_import, unicode_literals

from typing import Any, Tuple

from django.contrib.auth import login,authenticate, logout
from django.http import HttpResponseRedirect, Http404, HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.core.mail import send_mail

from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.utils import json

from apps.otc.models import OtcBase

from .serializers import UserSerializer, ResetPasswordSerializer, NewPassCreateSerializer



class FakeLoginView(generics.RetrieveAPIView):

    permission_classes = []

    def get(self, request, *args, **kwargs):
        '''
        username = request.query_params.get('username')
        user = User.objects.filter(username=username).first()
        if not user:
            return HttpResponse("User not found", status=404)
        '''
        print('in fake')
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

    permission_classes = [IsAuthenticated, ]

    def delete(self, request, *args, **kwargs):
        logout(request)

        return Response({}, status=status.HTTP_204_NO_CONTENT)

'''
class UserSelfView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = UserProfileSerializer
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
    def get_object(self):
        return self.request.user.userprofile
'''


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