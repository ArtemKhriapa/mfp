from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegisterSerizalier(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(required=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
    