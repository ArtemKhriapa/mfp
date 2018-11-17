from cards.models import CardData, Company, CompanyLocations
from rest_framework import serializers
from django.contrib.auth import get_user_model
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

User = get_user_model()


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
        ]




class CardListSerializer(serializers.ModelSerializer):
    image_front_url = serializers.SerializerMethodField()
    user = UserDetailSerializer(read_only=True)
    class Meta:
        model = CardData
        fields = (

            'user', 'card_id', 'card_name', 'company', 'categories', 'image_front','image_front_url', #tags? , delete user

        )

    def get_image_front_url(self, obj):
        try:
            image_front = obj.image_front.url
        except:
            image_front = None
        return image_front


class CardListCreateSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_api_url', read_only=True)
    image_front_url = serializers.SerializerMethodField()
    image_back_url = serializers.SerializerMethodField()
    tags = TagListSerializerField()

    class Meta:
        model = CardData
        fields = (

             'card_id', 'url', 'card_name', 'company', 'categories',  'description', 'image_front', 'image_back', 'image_front_url', 'image_back_url', 'tags',
        )
        extra_kwargs = {'owner': {'read_only': True}}

    def get_image_front_url(self, obj):
        try:
            image_front = obj.image_front.url
        except:
            image_front = None
        return image_front

    def get_image_back_url(self, obj):
        try:
            image_back = obj.image_back.url
        except:
            image_back = None
        return image_back




class CardDetailSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_api_url', read_only=True)
    image_front_url = serializers.SerializerMethodField()
    image_back_url = serializers.SerializerMethodField()
    user = UserDetailSerializer(read_only=True)
    tags = TagListSerializerField()

    class Meta:
        model = CardData
        fields = (

            'user', 'card_id', 'url', 'card_name', 'company', 'categories',  'description', 'image_front', 'image_back', 'image_front_url', 'image_back_url', 'tags',
        )

    def get_image_front_url(self, obj):
        try:
            image_front = obj.image_front.url
        except:
            image_front = None
        return image_front

    def get_image_back_url(self, obj):
        try:
            image_back = obj.image_back.url
        except:
            image_back = None
        return image_back

class CompanyDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = ('company_id', 'company_name',

        )

class CompanyLocationsListSerializer(serializers.ModelSerializer):
    company = CompanyDetailSerializer()
    class Meta:
        model = CompanyLocations
        fields = (
            'company', 'address', 'geolocation', 'point_name',
        )