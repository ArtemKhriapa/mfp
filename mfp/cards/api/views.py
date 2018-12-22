
from cards.models import CardData, CompanyLocations, Company
from cards.api.serializers import CardListSerializer, CardCreateSerializer, CardDetailSerializer, \
    CompanyLocationsListSerializer, CompanyDetailSerializer

from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, \
    IsAuthenticatedOrReadOnly  # for future configuration
from django.shortcuts import get_object_or_404


class CardList(generics.ListAPIView):

    serializer_class = CardDetailSerializer
    permission_classes = (IsAuthenticated,)

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


class CardListCreate(generics.CreateAPIView):
    serializer_class = CardCreateSerializer
    permission_classes = (IsAuthenticated,)

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

    def get_object(self):
        action_item = get_object_or_404(
            CardData,
            card_id=self.kwargs.get('card_id')
        )
        return action_item


class CompanyLocationsList(generics.ListAPIView):
    serializer_class = CompanyLocationsListSerializer
    permission_classes = (IsAdminUser,)

    def get_queryset(self):
        company = self.kwargs['company']
        return CompanyLocations.objects.filter(company=company)

class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanyDetailSerializer
    permission_classes = (IsAdminUser, )
