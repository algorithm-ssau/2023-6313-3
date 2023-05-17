from datetime import datetime
import mysql.connector
from fastapi import HTTPException
from config import HOST, USER, PASSWORD, DATABASE
from UsersWork import hide_password, validate_password


class Database(object):
    def __init__(self):
        self.connection = None

    def open_connection(self):
        try:
            self.connection = mysql.connector.connect(
                host=HOST,
                user=USER,
                password=PASSWORD,
                database=DATABASE
            )
            print("Connected to database.")
        except Exception:
            raise HTTPException(status_code=500, detail="No connection to database.")

    def close_connection(self):
        try:
            self.connection.close()
            print("Connection closed.")
        except Exception:
            raise HTTPException(status_code=500, detail="No database connected.")

    def set_new_user(self, data: dict):
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

        if validate_password(password):
            password = hide_password(password)
        else:
            raise HTTPException(status_code=400, detail="Password is not valid.")

        cursor = self.connection.cursor()

        if not self.check_existed_username(username):
            sql_request = "INSERT INTO users (email, login, password_hash, createdAt, updatedAt) VALUES (%s, %s, %s, %s, %s)"
            val = (email, username, password, datetime.now(), datetime.now())

            cursor.execute(sql_request, val)
            self.connection.commit()

            print("User has been added.")
            return self.get_user_id(username)
        else:
            raise HTTPException(status_code=400, detail="User exists in database.")

    def set_token(self, tokens_data: dict):
        token = tokens_data.get("refresh_token")
        created_at = tokens_data.get("created_at")
        expires_at = tokens_data.get("exp")
        user_id = tokens_data.get("user_id")

        cursor = self.connection.cursor()

        sql_request = "INSERT INTO `refresh-tokens` (value, createdAt, expiresAt, userId) VALUES (%s, %s, %s, %s)"
        val = (token, created_at, expires_at, user_id)

        cursor.execute(sql_request, val)
        self.connection.commit()

        print("Refresh token has been added.")

    def update_token(self, tokens_data: dict):
        token = tokens_data.get("refresh_token")
        created_at = tokens_data.get("created_at")
        expires_at = tokens_data.get("exp")
        user_id = tokens_data.get("user_id")

        cursor = self.connection.cursor()

        sql_request = "UPDATE `refresh-tokens` SET value = %s, createdAt = %s, expiresAt = %s WHERE userId = %s"
        val = (token, created_at, expires_at, user_id)

        cursor.execute(sql_request, val)
        self.connection.commit()

        print("Refresh token has been updated.")

    def check_exist_id(self, user_id: int):
        cursor = self.connection.cursor()

        cursor.execute("SELECT EXISTS(SELECT 1 FROM users WHERE id = %s)", (user_id,))
        result = cursor.fetchone()[0]

        return result

    def get_user_id(self, username):
        cursor = self.connection.cursor()

        sql_request = "SELECT id FROM users WHERE login = %s"
        cursor.execute(sql_request, (username,))

        return cursor.fetchone()[0]

    def check_existed_username(self, username):
        cursor = self.connection.cursor()

        cursor.execute("SELECT EXISTS(SELECT 1 FROM users WHERE login = %s)", (username,))
        result = cursor.fetchone()[0]

        return result

    def get_password(self, username):
        cursor = self.connection.cursor()

        sql_request = "SELECT password_hash FROM users WHERE login = %s"
        cursor.execute(sql_request, (username,))

        return cursor.fetchone()[0]

    def get_info_about_refresh(self, refresh_token: str):
        cursor = self.connection.cursor()

        sql_request = "SELECT userId, expiresAt FROM `refresh-tokens` WHERE value = %s"
        cursor.execute(sql_request, (refresh_token,))

        return cursor.fetchone()