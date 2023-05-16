import os
import hashlib
from fastapi import HTTPException
from config import ENCODING, SALT_RANDOM_BYTES


def hide_password(password: str):
    salt = os.urandom(SALT_RANDOM_BYTES).hex()
    key = hashlib.sha256(salt.encode(ENCODING) + password.encode(ENCODING)).hexdigest() + ':' + salt

    return key


def check_password(hashed_password, user_password):
    password, salt = hashed_password.split(':')

    return password == hashlib.sha256(salt.encode() + user_password.encode()).hexdigest()


def validate_password(password: str):
    result = True

    if len(password) < 8:
        result = False
    else:
        for char in password:
            if not ((48 <= ord(char) <= 57) or (65 <= ord(char) <= 90) or (97 <= ord(char) <= 122)):
                result = False
                break

    return result
