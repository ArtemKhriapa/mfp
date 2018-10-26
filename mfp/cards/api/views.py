from cards.models import CardData
from cards.api.serializers import CardListSerializer, CardDetailSerializer

from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, \
    IsAuthenticatedOrReadOnly  # for future configuration
from django.shortcuts import get_object_or_404


class CardList(generics.ListAPIView):
    queryset = CardData.objects.all()
    serializer_class = CardListSerializer
    permission_classes = (IsAuthenticated,)


class CardListCreate(generics.ListCreateAPIView):
    queryset = CardData.objects.all()
    serializer_class = CardListSerializer
    permission_classes = (IsAuthenticated,)


class CardDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CardDetailSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        action_item = get_object_or_404(
            CardData,
            card_id=self.kwargs.get('card_id')
        )
        return action_item
