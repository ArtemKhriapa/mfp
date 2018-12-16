from cards.models import CardData, Company, CompanyLocations
from rest_framework import serializers
from django.contrib.auth import get_user_model
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

User = get_user_model()

class Base64ImageField(serializers.ImageField):
    """
    A Django REST framework field for handling image-uploads through raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension


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



class CompanyLocationsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyLocations
        fields = (
             'address', 'geolocation', 'point_name',
        )

class CompanyDetailSerializer(serializers.ModelSerializer):
    locations = serializers.SerializerMethodField()
    class Meta:
        model = Company
        fields = ('company_id', 'company_name','locations',

        )

    def get_locations(self, obj):
        return CompanyLocationsListSerializer(obj.locations.all(), many=True).data


class CardListCreateSerializer(serializers.ModelSerializer):
    # url = serializers.CharField(source='get_api_url', read_only=True)
    # image_front_url = serializers.SerializerMethodField()
    # image_back_url = serializers.SerializerMethodField()
    #tags = TagListSerializerField()
    company = CompanyDetailSerializer()
    image_front = Base64ImageField(max_length=None, use_url=True,)

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

class CardDetailSerializer(serializers.ModelSerializer):
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
