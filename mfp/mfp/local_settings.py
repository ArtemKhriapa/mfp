from .settings import *


EMAIL_USE_TLS = True
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'originalugg2@gmail.com'
EMAIL_HOST_PASSWORD = 'impossibleisnothing12'
EMAIL_PORT = 587
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER