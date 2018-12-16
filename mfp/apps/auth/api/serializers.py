# -*- coding: utf-8 -*-
from django.contrib.auth.models import User
from rest_framework import serializers
from apps.auth.models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'is_active')
        extra_kwargs = {'password' : {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class ResetPasswordSerializer(serializers.Serializer):

        email = serializers.EmailField(required=True)


class NewPassCreateSerializer(serializers.Serializer):


    new_password_1 = serializers.CharField(required=True)
    new_password_2 = serializers.CharField(required=True)
