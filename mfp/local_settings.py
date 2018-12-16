DATABASES = {
    'default': {
	'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'mfp',
        'USER': 'alexk',
        'PASSWORD': 'from_hell1',
        'HOST': 'localhost',
        'PORT': '',
    }
}


CELERY_BROKER_URL = 'redis://localhost:8889/0'
CELERY_BROKER_TRANSPORT_OPTIONS = {'visibility_timeout': 3600}
CELERY_EMAIL_TASK_CONFIG = {
    'name': 'djcelery_email_send',
    'ignore_result': True,
}
# OTC config 

OTC_EXPIRE_DAYS = 3

# SMTP config

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'a6apmot@gmail.com'
EMAIL_HOST_PASSWORD = 'relzsveijvnkynvy'
EMAIL_BACKEND = 'djcelery_email.backends.CeleryEmailBackend'
DEFAULT_FROM_EMAIL = "mfp@domain.com"

# Mailer Config
EMAIL_COPY_EMAILS = ''
EMAIL_COPY_EMAIL_REPLACE = ''


