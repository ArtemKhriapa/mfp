from cards.models import CardData, Company, CompanyLocations
from rest_framework import serializers
from django.contrib.auth import get_user_model
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from drf_extra_fields.fields import Base64ImageField

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







class CompanyLocationsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyLocations
        fields = (
             'address', 'geolocation', 'point_name',
        )

class CompanyDetailSerializer(serializers.ModelSerializer):
    #locations = serializers.SerializerMethodField()
    class Meta:
        model = Company
        fields = ('company_name',

        )

    def get_locations(self, obj):
        return CompanyLocationsListSerializer(obj.locations.all(), many=True).data


class CardCreateSerializer(serializers.ModelSerializer):
    # url = serializers.CharField(source='get_api_url', read_only=True)
    # image_front_url = serializers.SerializerMethodField()
    # image_back_url = serializers.SerializerMethodField()
    #tags = TagListSerializerField()
    image_front = Base64ImageField(required=False)

    class Meta:
        model = CardData
        fields = (

            'card_id', 'card_name', 'company', 'categories', 'description', 'image_front', #'tags',
        )
        extra_kwargs = {'owner': {'read_only': True}}

''' 
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

'''
class CardListSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_api_url', read_only=True)
    image_front_url = serializers.SerializerMethodField()
    image_back_url = serializers.SerializerMethodField()
    user = UserDetailSerializer(read_only=True)
    tags = TagListSerializerField()
    company = CompanyDetailSerializer()
    class Meta:
        model = CardData
        fields = (

            'user', 'card_id', 'url', 'card_name', 'company', 'categories',  'description', 'image_front', 'image_back', 'image_front_url', 'image_back_url', 'tags',
        )



class CardDetailSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_api_url', read_only=True)
    image_front = Base64ImageField(required=False)
    #user = UserDetailSerializer(read_only=True)
    #tags = TagListSerializerField()
    #company = CompanyDetailSerializer()
    class Meta:
        model = CardData
        fields = (

            'card_id', 'url', 'card_name', 'categories',  'description', 'image_front',
        )
