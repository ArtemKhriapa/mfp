"""
Django settings for mfp project.

Generated by 'django-admin startproject' using Django 1.11.7.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'fy_5x@*!k&_3fg_&#gg8wj$o3@u7kgsj3wr(%n7aq-n!740e9^'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['spoofed-domain.com', '127.0.0.1', 'localhost'] #change etc/hosts to test


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    #'apps.mfp-auth',

    'social_django',
    'apps.auth',
    'apps.otc',
    'rest_framework',
    'cards',
    'taggit',
    'taggit_serializer',
    'django_google_maps',
    'djcelery_email',
    'gdstorage'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mfp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # 'social_django.context_processors.backends',
                # 'social_django.context_processors.login_redirect',
            ],
        },
    },
]
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')


LOGIN_URL = 'login'
LOGOUT_URL = 'logout'
LOGIN_REDIRECT_URL = 'home'

WSGI_APPLICATION = 'mfp.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


AUTHENTICATION_BACKENDS = (
    'social_core.backends.open_id.OpenIdAuth',
    'social_core.backends.google.GoogleOpenId',
    'social_core.backends.google.GoogleOAuth2',
    'social_core.backends.github.GithubOAuth2',
    'social_core.backends.facebook.FacebookOAuth2',
    'social_core.backends.linkedin.LinkedinOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_URL_NAMESPACE = 'social'

SOCIAL_AUTH_FACEBOOK_KEY = '1892256574142778'
SOCIAL_AUTH_FACEBOOK_SECRET = 'd32ac2e84e17044214e000286ced8e26'
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, name, email'
}

SOCIAL_AUTH_GITHUB_KEY = '24a2e8866af062e24d23'
SOCIAL_AUTH_GITHUB_SECRET = 'c2859ed4af23c6957e5273e4c9186f86fbc0c90a'
SOCIAL_AUTH_GITHUB_SCOPE = ['email']
SOCIAL_AUTH_GITHUB_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, name, email'
}

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '703030622248-kc2cc8cf3t6tgno958uvbmr6sfdfc6e6.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'RNeE5n4TUh-k1RlEwqRJdwE1'
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = ['email']
SOCIAL_AUTH_GOOGLE_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, name, email'
}

SOCIAL_AUTH_LINKEDIN_OAUTH2_KEY = '77dezkxrsz679b'
SOCIAL_AUTH_LINKEDIN_OAUTH2_SECRET = 'DbP6HIPDA82JoptR'
SOCIAL_AUTH_LINKEDIN_EXTRA_DATA = [('id', 'id'),
                                   ('firstName', 'first_name'),
                                   ('lastName', 'last_name'),
                                   ('emailAddress', 'email_address'),
                                   ('headline', 'headline'),
                                   ('industry', 'industry')]

GEOPOSITION_GOOGLE_MAPS_API_KEY = 'AIzaSyDQMPMBV6y-riLjZSZ46O6Bz5zz_Hr3BJ8'
GOOGLE_MAPS_API_KEY = 'AIzaSyDQMPMBV6y-riLjZSZ46O6Bz5zz_Hr3BJ8'

GOOGLE_DRIVE_STORAGE_JSON_KEY_FILE = 'drive_json-104afb2d1910.json'

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'


OTC_EXPIRE_DAYS = 3

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_COPY_EMAILS = []
EMAIL_COPY_EMAIL_REPLACE = ''

# Celery config (set your broker configuration - by default guest@127.0.0.1)
# CELERY_BROKER_URL = 'amqp://rabbit_celery:queue_celery@127.0.0.1/'

CELERY_EMAIL_TASK_CONFIG = {
    'name': 'djcelery_email_send',
    'ignore_result': True,
}
CELERY_EMAIL_QUEUE = False
if CELERY_EMAIL_QUEUE:
    EMAIL_BACKEND = 'djcelery_email.backends.CeleryEmailBackend'

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'mydevprojapps@gmail.com'
EMAIL_HOST_PASSWORD = 'lwonsaljahvgfhqe'
DEFAULT_FROM_EMAIL = "mfp@domain.com"

try:
    from local_settings import *
except ImportError:
    print("No local file")

MFP_IP = "127.0.0.1:8000"

