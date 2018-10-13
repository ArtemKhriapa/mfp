from cards.models import CardData
from rest_framework import serializers


class CardListSerializer(serializers.ModelSerializer):
    image_front = serializers.SerializerMethodField()

    class Meta:
        model = CardData
        fields = (

            'card_id', 'card_name', 'company', 'category', 'image_front',

        )

    def get_image_front(self, obj):
        try:
            image_front = obj.image_front.url
        except:
            image_front = None
        return image_front


class CardDetailSerializer(serializers.ModelSerializer):
    url = serializers.CharField(source='get_api_url', read_only=True)
    image_front = serializers.SerializerMethodField()
    image_back = serializers.SerializerMethodField()

    class Meta:
        model = CardData
        fields = (

            'card_id', 'card_name', 'company', 'description', 'image_front', 'image_front',
        )

    def get_image_front(self, obj):
        try:
            image_front = obj.image_front.url
        except:
            image_front = None
        return image_front

    def get_image_back(self, obj):
        try:
            image_back = obj.image_back.url
        except:
            image_back = None
        return image_back


