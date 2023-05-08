from fastapi import FastAPI
from TokensWork import create_access_token, create_refresh_token, validate_access_token

data = {
    'username': 'user',
    'password': 'password',
    'email': 'smth@gmail.com'
}

app = FastAPI()


@app.post("/refresh")
async def get_token(data: dict):
    token = create_access_token(data=data)
    refresh_token = create_refresh_token()
    return {
        "access_token": token,
        "refresh_token": refresh_token
    }


@app.post("/validate")
async def validate_token(token: dict):
    return {"success": validate_access_token(token.get("access_token"))}
