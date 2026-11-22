"""
Isabel settings for Repeatome project.

- Run in Debug mode

- Use console backend for emails

- Add Django Debug Toolbar
- Add django-extensions as app
"""

from .base import *  # noqa
import os

# Data to import
# ------------------------------------------------------------------------------
IMPORT_DATA_FOLDER = "/data/repeatome_data"
IMPORT_DATA_FILE = f"{IMPORT_DATA_FOLDER}/satellite_binders_database.xlsx"
IMPORT_ENRICHMENT_FOLDER = f"{IMPORT_DATA_FOLDER}/Enrichment_Qscore"
IMPORT_QSCORE_FOLDER = f"{IMPORT_DATA_FOLDER}/Enrichment_Qscore"
IMPORT_MICROSCOPY = f"{IMPORT_DATA_FOLDER}/repeatome_subimages_only_with_urls.csv"
IMPORT_FAMILY_DATA = f"{IMPORT_DATA_FOLDER}/satellite_families.csv"

ENRICHMENT_QSCORE_CHART_MAX_DISPLAY_DATAPOINTS = 30


# DATABASE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#databases
# Uses django-environ to accept uri format
# See: https://django-environ.readthedocs.io/en/latest/#supported-types
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'repeatome',  # Replace with your database name
        'USER': 'postgres',      # Replace with your database username
        # 'PASSWORD': 'mypassword', # Replace with your database password
        'HOST': 'localhost',   # Typically 'localhost' for local development
        'PORT': '5432',        # Default PostgreSQL port
    }
}

DATABASES["default"]["ATOMIC_REQUESTS"] = True

STATICFILES_DIRS = [
    str(ROOT_DIR.parent / "frontend" / "dist"),
    str(ROOT_DIR.parent / "frontend" / "static"),
    os.path.join(os.environ['CONDA_PREFIX'], 'lib', 'python3.13', 'site-packages', 'django', 'contrib', 'admin', 'static'),
]

# DEBUG
# ------------------------------------------------------------------------------
DEBUG = env.bool("DJANGO_DEBUG", default=True)
TEMPLATES[0]["OPTIONS"]["debug"] = DEBUG

CRISPY_FAIL_SILENTLY = not DEBUG

# CSRF_COOKIE_HTTPONLY = True

# SECRET CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# Note: This random key only used for development and testing, not on live site.
SECRET_KEY = env("DJANGO_SECRET_KEY", default="w)CU)uzJ<JMlkGTrfz?:)W>]EG!PFngIvQZq#9.r=sfHUmCPIe")

# Mail settings
# ------------------------------------------------------------------------------

EMAIL_PORT = 1025

EMAIL_HOST = "localhost"
EMAIL_BACKEND = env("DJANGO_EMAIL_BACKEND", default="django.core.mail.backends.console.EmailBackend")

if env("MAILGUN_API_KEY", default=False) and env("MAILGUN_DOMAIN", default=False):
    INSTALLED_APPS += [
        "anymail",
    ]
    ANYMAIL = {
        "MAILGUN_API_KEY": env("MAILGUN_API_KEY"),
        "MAILGUN_SENDER_DOMAIN": env("MAILGUN_DOMAIN"),
    }
    EMAIL_BACKEND = "anymail.backends.mailgun.EmailBackend"


ALLOWED_HOSTS = [
        "*",
        "127.0.0.1",
        "172.31.21.8",
        "13.222.167.56",
        "repeatome-dev2-load-balancer-1437249466.us-east-1.elb.amazonaws.com",
        "135.180.58.132",
        "www.askperkins.com"
]

# CACHING
# ------------------------------------------------------------------------------
CACHES = {
    "default": {
        #'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        "BACKEND": "django.core.cache.backends.dummy.DummyCache",  # don't actually cache
        "LOCATION": "",
    }
}


# django-debug-toolbar
# ------------------------------------------------------------------------------
MIDDLEWARE += [
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]
INSTALLED_APPS += [
    "debug_toolbar",
]

INTERNAL_IPS = [
    "127.0.0.1",
    "10.0.2.2",
]

DEBUG_TOOLBAR_CONFIG = {
    "DISABLE_PANELS": [
        "debug_toolbar.panels.redirects.RedirectsPanel",
    ],
    "SHOW_TEMPLATE_CONTEXT": True,
}

# django-extensions
# ------------------------------------------------------------------------------
INSTALLED_APPS += [
    "django_extensions",
]

# TESTING
# ------------------------------------------------------------------------------
TEST_RUNNER = "django.test.runner.DiscoverRunner"

# SITE_ID = None


SHELL_PLUS_POST_IMPORTS = [
    ("proteins.util.helpers", ("getprot", "getmut", "showalign")),
    ("proteins.util", ("maintain", "_local")),
    (
        "fpseq",
        ("FPSeq", "from_fpbase", "MutationSet", "get_mutations", "mutate_sequence"),
    ),
]

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "DEBUG",
        }
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": os.getenv("DJANGO_LOG_LEVEL", "INFO"),
        },
    },
}

if os.getenv("DESKTOP_LOG"):
    LOGGING["handlers"]["file"] = {
        "level": "DEBUG",
        "class": "logging.FileHandler",
        "filename": str(Path.home() / "Desktop/fpbase.log"),
    }
    LOGGING["loggers"].update(
        {
            "django.template": {
                "handlers": ["file"],
                "level": "INFO",
                "propagate": True,
            },
            "django.utils": {
                "handlers": ["file"],
                "level": "INFO",
                "propagate": True,
            },
        }
    )
    LOGGING["loggers"]["django"]["handlers"].append("file")

X_FRAME_OPTIONS = "ALLOW-FROM http://0.0.0.0:8000"


PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
    "django.contrib.auth.hashers.BCryptPasswordHasher",
]

# PASSWORD VALIDATION
# https://docs.djangoproject.com/en/dev/ref/settings/#auth-password-validators
# ------------------------------------------------------------------------------

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# AUTHENTICATION CONFIGURATION
# ------------------------------------------------------------------------------
AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
]

# ACCOUNT_AUTHENTICATION_METHOD is depreciated. Use ACCOUNT_LOGIN_METHODS instead
ACCOUNT_AUTHENTICATION_METHOD = "username"
ACCOUNT_LOGIN_METHODS = {'username'}

# ACCOUNT_EMAIL_REQUIRED is depreciated in favor of ACCOUNT_SIGNUP_FIELDS instead
#ACCOUNT_EMAIL_REQUIRED = False
ACCOUNT_SIGNUP_FIELDS = ['email', 'username*', 'password1*', 'password2*']

# ACCOUNT_EMAIL_REQUIRED = True
# ACCOUNT_EMAIL_VERIFICATION = "mandatory"
ACCOUNT_EMAIL_VERIFICATION = "none"


# Set env: export DJANGO_ACCOUNT_ALLOW_REGISTRATION=FALSE if we want to disable signup.
ACCOUNT_ALLOW_REGISTRATION = env.bool("DJANGO_ACCOUNT_ALLOW_REGISTRATION", True)
ACCOUNT_ADAPTER = "repeatome.users.adapters.AccountAdapter"
SOCIALACCOUNT_ADAPTER = "repeatome.users.adapters.SocialAccountAdapter"
SOCIALACCOUNT_AUTO_SIGNUP = False

ACCOUNT_FORMS = {"signup": "repeatome.forms.CustomSignupForm"}

# Custom user app defaults
# Select the correct user model
AUTH_USER_MODEL = "users.User"
LOGIN_REDIRECT_URL = "users:redirect"
LOGIN_URL = "account_login"
SIGNUP_URL = "account_signup"


# SLUGLIFIER
AUTOSLUG_SLUGIFY_FUNCTION = "slugify.slugify"

# django-rest-framework
# -------------------------------------------------------------------------------
# django-rest-framework - https://www.django-rest-framework.org/api-guide/settings/
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.TokenAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
}

# By Default swagger ui is available only to admin user(s). You can change permission classes to change that
# See more configuration options at https://drf-spectacular.readthedocs.io/en/latest/settings.html#settings
SPECTACULAR_SETTINGS = {
    "TITLE": "Repeatome API",
    "DESCRIPTION": "Documentation of API endpoints of repeatome",
    "VERSION": "1.0.0",
    "SERVE_PERMISSIONS": ["rest_framework.permissions.IsAdminUser"],
}

# django-compressor
# ------------------------------------------------------------------------------
# INSTALLED_APPS += ['compressor']
# STATICFILES_FINDERS += ['compressor.finders.CompressorFinder']

# Location of root django.contrib.admin URL, use {% url 'admin:index' %}
ADMIN_URL = r"^admin/"

# See: https://docs.djangoproject.com/en/dev/ref/settings/#site-id
SITE_ID = 1
# CANONICAL_URL = env('CANONICAL_URL', default='https://www.fpbase.org')
CANONICAL_URL = env("CANONICAL_URL", default=None)


# AVATAR CONFIGURATION
# ------------------------------------------------------------------------------

AVATAR_AUTO_GENERATE_SIZES = (80, 36)
AVATAR_CACHE_ENABLED = True
AVATAR_GRAVATAR_DEFAULT = "identicon"
AVATAR_CLEANUP_DELETED = True
AVATAR_MAX_AVATARS_PER_USER = 8

# Your common stuff: Below this line define 3rd party library settings
# ------------------------------------------------------------------------------

MODERATION_MODERATORS = ("talley.lambert+fpbase@gmail.com",)

# v3 API for django-recaptcha
RECAPTCHA_PUBLIC_KEY = env("RECAPTCHA_V3_PUBLIC_KEY", default="")
RECAPTCHA_PRIVATE_KEY = env("RECAPTCHA_V3_PRIVATE_KEY", default="")
# NOCAPTCHA = True

GOOGLE_API_PRIVATE_KEY = env("GOOGLE_API_PRIVATE_KEY", default="").replace("#", "\n")
GOOGLE_API_CLIENT_EMAIL = env("GOOGLE_API_CLIENT_EMAIL", default="")
GOOGLE_API_PRIVATE_KEY_ID = env("GOOGLE_API_PRIVATE_KEY_ID", default="")

MAXMIND_API_KEY = env("MAXMIND_API_KEY", default="")

# ALGOLIA_SUFFIX = "dev" if (DEBUG or ("staging" in env("SENTRY_PROJECT", default=""))) else "prod"
# ALGOLIA_PUBLIC_KEY = "16eb3452bff9e69bb3d4942c25bf8c9c"
# # ALGOLIA = {
# #     "APPLICATION_ID": "9WAWQMVNTB",
# #     "API_KEY": env("ALGOLIA_API_KEY", default=""),
# #     "INDEX_SUFFIX": ALGOLIA_SUFFIX,
# # }
# ALGOLIA = {
#   'APPLICATION_ID': 'XSSHY1QSOB',
#   'API_KEY': 'ec5b5984639b89c7c5fd3cfe1bb4ebdd', # Your Write API Key
#   "INDEX_SUFFIX": ALGOLIA_SUFFIX,
# }

# if ALGOLIA["API_KEY"]:
#     INSTALLED_APPS += ["algoliasearch_django"]

REDIS_URL = env("REDIS_URL", default="redis://localhost/")
if REDIS_URL.startswith("rediss://"):
    REDIS_URL += "?ssl_cert_reqs=none"
CELERY_BROKER_URL = REDIS_URL
CELERY_RESULT_BACKEND = REDIS_URL

CSRF_TRUSTED_ORIGINS = [
    "https://www.askperkins.com",
    # Add other trusted origins as needed
]

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")

