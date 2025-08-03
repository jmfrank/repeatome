"""
AWS settings for Repeatome project.

- Run in Debug mode

- Use console backend for emails

- Add Django Debug Toolbar
- Add django-extensions as app
"""

from .base import *  # noqa
import os

# Data to import
# ------------------------------------------------------------------------------
IMPORT_DATA_FOLDER = "/home/ubuntu/repeatome_data"
IMPORT_DATA_FILE = f"{IMPORT_DATA_FOLDER}/satellite_binders_database_master.xlsx"
IMPORT_ENRICHMENT_FILE = f"{IMPORT_DATA_FOLDER}/TFs_summary_ENR.csv"
IMPORT_QSCORE_FILE = f"{IMPORT_DATA_FOLDER}/TFs_summary_Qscore.csv"
IMPORT_PROTEOMICS = f"{IMPORT_DATA_FOLDER}/HSat3_epithelial.csv"


# DATABASE CONFIGURATION
# ------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#databases
# Uses django-environ to accept uri format
# See: https://django-environ.readthedocs.io/en/latest/#supported-types
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'repeatome',  # Replace with your database name
        'USER': 'admin',      # Replace with your database username
        'PASSWORD': 'repeatome', # Replace with your database password
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

# ALLOWED_HOSTS = env.list(
#     "DJANGO_ALLOWED_HOSTS",
#     default=["fpbase.org", "localhost", "testserver", "10.0.2.2", "127.0.0.1", ".elasticbeanstalk.com", "*"],
# )

ALLOWED_HOSTS = ["98.86.143.107", "localhost"]

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
