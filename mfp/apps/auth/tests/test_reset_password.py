from django.conf import settings
from django.test import TestCase
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework import status
from rest_framework.test import APIClient

#from utils.helpers_for_tests import dump, login_user, create_user


class ResetPasswordAPITest(TestCase):

    def setUp(self):
        print('in setup')
        self.c = APIClient()
        self.user = User.objects.create(**{
            'username': 'test.user',
            'password': make_password('111'),
            'email': 'test.user@tt.com'
        })


    def test_reset_password(self):
        response = self.c.get(
            '/api/auth/reset-pass/'
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
#        self.assertEqual(response.content, b"Enter your login")



    def test_new_password(self):
        response = self.c.get(
            '/api/auth/reset-pass/new/'
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
 #       self.assertEqual(response.content, b"Enter new password")