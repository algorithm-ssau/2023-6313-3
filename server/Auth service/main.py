from fastapi import FastAPI
from DatabaseConnect import Database
from TokensWork import create_access_token, create_refresh_token, validate_access_token


app = FastAPI()

print('Started')


@app.post("/registration")
async def get_tokens(data: dict):
    db = Database()
    db.open_connection()

    user_id = int(db.set_new_user(data))
    r_t = create_refresh_token(db, user_id)

    db.close_connection()
    return {
        "access_token": create_access_token(user_id),
        "refresh_token": r_t
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
    access_token = create_access_token()
    refresh_token = create_refresh_token()
    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }


@app.post("/validate")
async def validate_token(token: dict):
    return {"success": validate_access_token(token.get("access_token"))}
