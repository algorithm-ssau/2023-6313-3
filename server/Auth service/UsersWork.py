import os
import hashlib
from config import ENCODING, SALT_RANDOM_BYTES


def hide_password(password: str):
    salt = os.urandom(SALT_RANDOM_BYTES).hex()
    key = hashlib.sha256(salt.encode(ENCODING) + password.encode(ENCODING)).hexdigest() + ':' + salt

    return key


def check_password(hashed_password, user_password):
    password, salt = hashed_password.split(':')

    return password == hashlib.sha256(salt.encode(ENCODING) + user_password.encode(ENCODING)).hexdigest()


def validate_password(password: str):
    count_digits = 0
    count_chars = 0

    if len(password) >= 8:
        for char in password:
            if 48 <= ord(char) <= 57:
                count_digits += 1
            elif (65 <= ord(char) <= 90) or (97 <= ord(char) <= 122):
                count_chars += 1

    return count_chars != 0 and count_digits != 0 and count_digits + count_chars == len(password)
