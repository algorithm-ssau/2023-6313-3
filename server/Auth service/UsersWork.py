import os
import hashlib
from config import ENCODING, SALT_RANDOM_BYTES


def hide_password(password: str):
    salt = os.urandom(SALT_RANDOM_BYTES).hex()
    key = hashlib.sha256(salt.encode(ENCODING) + password.encode(ENCODING)).hexdigest() + ':' + salt

    return key


def verify_password(password: str):
    # SELECT password FROM database
    key = "password from db"

    return key == hide_password(password)