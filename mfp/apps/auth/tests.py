import json
from datetime import timedelta
from django.conf import settings
from django.utils import timezone
from django.test import TestCase
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.test import APIClient
from apps.otc.models import OtcBase



class RegistrationAPITest(TestCase):

    def setUp(self):
        self.c = APIClient()
        self.user = User.objects.create(**{
            'username': 'test_user_inDb',
            'password': '111',
            'email': 'test_fake@fake.com'
        })
        self.otc = OtcBase.objects.create(user=self.user)
        self.otc2 = OtcBase.objects.create(user=self.user)
        self.otc2.created_in = timezone.now() - timedelta(days=4)
        self.otc2.save() 

    def test_user_registration(self):
        response = self.c.post('/api/registration',
                                data = {
                                   "username": "test_user",
                                   "email": "fake@fake.com",
                                   "password": "test_week_password"
                                })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertContains(
            response, b"Confirmation email has been sent to user - test_user", status_code=status.HTTP_201_CREATED)

    def test_user_email_exist(self):
        response = self.c.post('/api/registration',
                                data={
                                    "username": "test_user",
                                    "email": "test_fake@fake.com",
                                    "password": "test_week_password"
                                })
        self.assertContains(
             response, b"User witch such email  already exists", status_code=status.HTTP_400_BAD_REQUEST)

    def test_confirm_user_registration(self):
        response = self.c.get('/api/confirm_registration/{}'.format(self.otc.otc))
        self.assertContains(
            response, b"User with email - test_fake@fake.com has been registred", status_code=status.HTTP_200_OK
        )

    def test_confirm_user_missed_token(self):
        response = self.c.get(
            '/api/confirm_registration/581f3fd9-bd51-4ae6-8f2b-7703000bc26b')
        self.assertContains(
            response, b"Requested key does not exist", status_code=status.HTTP_404_NOT_FOUND
        )

    def test_confirm_user_expired_code(self):
        response = self.c.get(
            '/api/confirm_registration/{}'.format(self.otc2.otc))
        self.assertContains(
            response, b"Confirmation link for email test_fake@fake.com is outdated", status_code=status.HTTP_400_BAD_REQUEST
        )

    def test_resend_user_registration(self):
        response = self.c.post('/api/resend_registration',
                                data={       
                                    "email": "test_fake@fake.com",
                                })
        self.assertContains(
            response, b"Confirmation email has been resent to user - test_user", status_code=status.HTTP_200_OK)

    def test_resend_user_missed_email(self):
        response = self.c.post('/api/resend_registration',
                                data={
                                    "email": "missed_email@fake.com",
                                })
        self.assertContains(
            response, b"Requested email does not exist", status_code=status.HTTP_404_NOT_FOUND)
