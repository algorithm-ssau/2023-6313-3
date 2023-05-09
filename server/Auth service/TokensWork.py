from datetime import datetime, timedelta
from jose import jwt, JWTError
from config import ALGORITHM, TIME_DELTA_FOR_ACCESS, TIME_DELTA_FOR_REFRESH, SECRET_KEY, SYMBOLS_REFRESH_TOKEN
import random
import string


def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=TIME_DELTA_FOR_ACCESS)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt


def create_refresh_token():
    to_encode = {}

    token = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(SYMBOLS_REFRESH_TOKEN))
    to_encode.update({"refresh_token": token})

    expire = datetime.utcnow() + timedelta(days=TIME_DELTA_FOR_REFRESH)
    to_encode.update({"exp": expire})

    return to_encode.get("refresh_token")


def validate_access_token(token: str):
    try:
        jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return True
    except JWTError:
        return False