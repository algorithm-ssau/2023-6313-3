import os
import json
import jwt

import psycopg2

from dotenv import load_dotenv
load_dotenv()

import jwt


# Environment variables
DBNAME = os.getenv('DBNAME')
DBUSER = os.getenv('DBUSER')
DBPASSWORD = os.getenv("DBPASSWORD")
AUTHSECRET = os.getenv("AUTHSECRET")
EXPIRESSECONDS = os.getenv('EXPIRESSECONDS')

def authenticate(clientId, clientSecret):
    return "Awaiting Implementation"

def verify(token):
    return "Awaiting Implementation"