from fastapi import FastAPI, status, HTTPException
from jose import JWTError, jwt
from pydantic import BaseModel
from datetime import datetime, timedelta


SECRET_KEY = "adbd35fdfb55f0f0a431b7788707256dbd1e69be93f26aafb1d69317e3a613ef"

ALGORITHM = "HS256"

class Token(BaseModel):
    access_token: str
    token_type: str

app = FastAPI()


# this function will create the token
# for particular data
def create_access_token(data: dict):
    to_encode = data.copy()

    # expire time of the token
    expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    # return the generated token
    return encoded_jwt


# the endpoint to get the token
@app.get("/get_token")
async def get_token():
    # data to be signed using token
    data = {
        'info': 'secret information',
        'from': 'GFG'
    }
    token = create_access_token(data=data)
    return {'token': token}


# the endpoint to verify the token
@app.post("/verify_token")
async def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )