from decouple import config
import os
from datetime import timedelta

from dotenv import load_dotenv


load_dotenv()

BASE_DIR = os.path.dirname(os.path.realpath(__file__))


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "b9f82ab43272cfba1ea307171adc9a49c5d1be5c7e406e68eae99c9f1ee63a1cfa58a749")
    SQLALCHEMY_TRACK_MODIFICATIONS = os.getenv("SQLALCHEMY_TRACK_MODIFICATIONS", False)


class DevConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
    DEBUG = True
    # SQLALCHEMY_ECHO=True


class ProdConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

    DEBUG = os.getenv("DEBUG", False)
    SQLALCHEMY_ECHO = os.getenv("ECHO", False)
    SQLALCHEMY_TRACK_MODIFICATIONS = os.getenv("SQLALCHEMY_TRACK_MODIFICATIONS", False)


class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = "sqlite:///test.db"
    SQLALCHEMY_ECHO = False
    TESTING = True
