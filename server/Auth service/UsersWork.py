import os
import hashlib
from config import ENCODING, SALT_RANDOM_BYTES


def hide_password(password: str):
    salt = os.urandom(SALT_RANDOM_BYTES).hex()
    key = hashlib.sha256(salt.encode(ENCODING) + password.encode(ENCODING)).hexdigest() + ':' + salt

    return key


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


def verify_password(password: str):
    # SELECT password FROM database
    key = "password from db"

    return key == hide_password(password)
