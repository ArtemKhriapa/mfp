from rest_framework import serializers
from django.contrib.auth.models import User
from apps.otc.models import OtcBase
class UserRegisterSerizalier(serializers.ModelSerializer):
   
    class Meta:

        model = User
        fields = (
            'username', 'password', 'email'
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data): 
        user = User(
                email=validated_data['email'],
                username=validated_data['username'])
        user.set_password(validated_data['password']) 
        user.is_active = False
        user.save()
        return user
    
class ConfirmRegisterSerializer(serializers.ModelSerializer):
  
    class Meta:
        
        model = OtcBase
        fields = (
            'otc',
        )
