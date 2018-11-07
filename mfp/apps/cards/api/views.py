from apps.cards.models import CardData
from apps.cards.api.serializers import CardListSerializer, CardListCreateSerializer, CardDetailSerializer

from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, \
    IsAuthenticatedOrReadOnly  # for future configuration
from django.shortcuts import get_object_or_404


class CardList(generics.ListAPIView):
    serializer_class = CardListSerializer
    permission_classes = (IsAuthenticated,)
    parser_classes = [MultiPartParser, ]

    def get_queryset(self):
        """
        This view should return a list of all the cards
        for the currently authenticated user.
        """
        user = self.request.user
        return CardData.objects.filter(user=user)

class CategoryList(generics.ListAPIView):
    serializer_class = CardListSerializer

    def get_queryset(self):

        user = self.request.user
        category = self.kwargs['categories']
        return CardData.objects.filter(user=user, categories=category)

class CardListCreate(generics.ListCreateAPIView):
    serializer_class = CardListCreateSerializer
    permission_classes = (IsAuthenticated,)
    parser_classes = [MultiPartParser, ]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        """
        This view should return a list of all the cards
        for the currently authenticated user.
        """
        user = self.request.user
        return CardData.objects.filter(user=user)

class CardDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CardDetailSerializer
    permission_classes = (IsAuthenticated,)
    parser_classes = [MultiPartParser, ]

    def get_object(self):
        action_item = get_object_or_404(
            CardData,
            card_id=self.kwargs.get('card_id')
        )
        return action_item
