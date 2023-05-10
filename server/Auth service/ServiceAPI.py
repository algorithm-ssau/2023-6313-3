from fastapi import FastAPI
from TokensWork import create_access_token, create_refresh_token, validate_access_token
from UsersWork import hide_password


app = FastAPI()


@app.post("/registration")
async def get_tokens(data: dict):
    # username = data.get("username")
    # password = hide_password(data.get("password"))
    # email = data.get("email")
    # INSERT INTO database. Needs database.
    return {
        "access_token": create_access_token(data=data),
        "refresh_token": create_refresh_token()
    }


@app.post("/auth")
async def authorization(data: dict):
    # username = data.get("username")
    # password = data.get("password")
    # Checking in database...
    return {"hello": "привет"}


@app.post("/refresh")
async def get_new_tokens(tokens: dict):
    # access_token = tokens.get("access_token")
    # refresh_token = tokens.get("refresh_token")
    # Here some validation for input tokens. Needs database.
    access_token = create_access_token(data=tokens)
    refresh_token = create_refresh_token()
    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }


@app.post("/validate")
async def validate_token(token: dict):
    return {"success": validate_access_token(token.get("access_token"))}
