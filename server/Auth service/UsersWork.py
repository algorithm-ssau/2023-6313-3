import os
import hashlib
from config import ALGORITHM, ENCODING, HASH_ITERATIONS, SALT_RANDOM_BYTES


def hide_password(password: str):
    salt = os.urandom(SALT_RANDOM_BYTES)
    key = hashlib.pbkdf2_hmac(ALGORITHM, password.encode(ENCODING), salt, HASH_ITERATIONS)

    return salt + key


def verify_password(password: str):
    # SELECT password FROM database
    key = "password from db"

    return key == hide_password(password)