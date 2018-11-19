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


# OTC config 

OTC_EXPIRE_DAYS = 3

# SMTP config

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'a6apmot@gmail.com'
EMAIL_HOST_PASSWORD = 'relzsveijvnkynvy'


