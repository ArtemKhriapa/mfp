# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from rest_framework import serializers
from apps.auth.models import *

class UserSerializer(serializers.ModelSerializer):
    """
    User accounts serializer
    """

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name','is_active')
        read_only_fields = ('username', 'auth_token')

class ResetPasswordSerializer(serializers.Serializer):

        email = serializers.EmailField(required=True)


class NewPassCreateSerializer(serializers.Serializer):


    new_password_1 = serializers.CharField(required=True)
    new_password_2 = serializers.CharField(required=True)
