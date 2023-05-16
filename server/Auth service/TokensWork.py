from datetime import datetime, timedelta
from jose import jwt, JWTError
from config import ALGORITHM, TIME_DELTA_FOR_ACCESS, TIME_DELTA_FOR_REFRESH, SECRET_KEY, SYMBOLS_REFRESH_TOKEN
from DatabaseConnect import Database
import random
import string


def create_access_token(user_id: int):
    payload = {"user_id": user_id}

    expire = datetime.now() + timedelta(minutes=TIME_DELTA_FOR_ACCESS)
    payload.update({"exp": expire})
    encoded_jwt = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt


def create_refresh_token(database: Database, user_id: int):
    tokens_data = {}

    token = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(SYMBOLS_REFRESH_TOKEN))
    tokens_data.update({"refresh_token": token})
    tokens_data.update({"created_at": datetime.now()})

    expire = datetime.now() + timedelta(days=TIME_DELTA_FOR_REFRESH)
    tokens_data.update({"exp": expire})
    tokens_data.update({"user_id": user_id})

    database.set_token(tokens_data)

    return tokens_data.get("refresh_token")


def validate_access_token(token: str):
    try:
        jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return True
    except JWTError:
        return False