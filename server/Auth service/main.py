from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from DatabaseConnect import Database
from TokensWork import create_access_token, set_refresh_token, validate_access_token, update_refresh_token, \
    check_refresh_token
from UsersWork import check_password


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print('Started')


@app.post("/api/users/registration")
async def get_tokens(data: dict):
    db = Database()
    try:
        db.open_connection()

        user_id = int(db.set_new_user(data))
        r_t = set_refresh_token(db, user_id)
    finally:
        db.close_connection()

    return {
        "access_token": create_access_token(user_id),
        "refresh_token": r_t
    }


@app.post("/api/users/auth")
async def authorization(data: dict):
    db = Database()
    try:
        db.open_connection()

        if db.check_existed_username(username=data.get("username")) == 1:
            print('User exists in database.')
        else:
            raise HTTPException(status_code=400, detail="User with this username doesn't exist.")

        input_password = data.get("password")

        if not check_password(db.get_password(data.get("username")), input_password):
            raise HTTPException(status_code=400, detail="Wrong password.")

        user_id = db.get_user_id(data.get("username"))
        refresh_token = update_refresh_token(db, user_id)
    finally:
        db.close_connection()

    return {
        "access_token": create_access_token(user_id),
        "refresh_token": refresh_token
    }


@app.post("/api/users/refresh")
async def get_new_tokens(tokens: dict):
    user_id = check_refresh_token(tokens)

    if user_id is None:
        raise HTTPException(status_code=400, detail="The token is corrupted.")

    db = Database()
    try:
        db.open_connection()

        refresh_token = update_refresh_token(db, user_id)
    finally:
        db.close_connection()

    return {
        "access_token": create_access_token(user_id),
        "refresh_token": refresh_token
    }


@app.post("/api/users/validate")
async def validate_token(token: dict):
    return {"success": validate_access_token(token.get("access_token"))}
