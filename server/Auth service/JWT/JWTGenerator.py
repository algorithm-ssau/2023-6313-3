from fastapi import FastAPI, status, HTTPException
from jose import JWTError, jwt
from datetime import datetime, timedelta


SECRET_KEY = "adbd35fdfb55f0f0a431b7788707256dbd1e69be93f26aafb1d69317e3a613ef"
ALGORITHM = "HS256"
TIME_DELTA = 15
data = {
    'username': 'user',
    'password': 'password',
    'email': 'smth@gmail.com'
}

app = FastAPI()

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=TIME_DELTA)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt

@app.post("/refresh")
async def get_token(data: dict):
    token = create_access_token(data=data)
    return {'access-token': token}


@app.post("/checking")
async def verify_token(token: str):
    try:
        jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return {'success': 'true'}
    except JWTError:
        return {'success': 'false'}
