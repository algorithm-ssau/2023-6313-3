from datetime import datetime

import mysql.connector
from fastapi import HTTPException

from config import HOST, PORT, USER, PASSWORD, DATABASE
from UsersWork import hide_password, validate_password


class Database(object):
    def __init__(self):
        self.connection = None

    def open_connection(self):
        try:
            self.connection = mysql.connector.connect(
                host=HOST,
                port=PORT,
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

        if not self.check_existed_username(cursor, username):
            sql_request = "INSERT INTO users (email, login, password_hash, createdAt, updatedAt) VALUES (%s, %s, %s, %s, %s)"
            val = (email, username, password, datetime.now(), datetime.now())
            cursor.execute(sql_request, val)
            self.connection.commit()
            print("User has been added.")
            return self.get_user_id(cursor, username)
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

    @staticmethod
    def get_user_id(cursor, username):
        sql_request = "SELECT id FROM users WHERE login = %s"
        cursor.execute(sql_request, (username,))

        return cursor.fetchone()[0]

    @staticmethod
    def check_existed_username(cursor, username):
        user_exists = False
        cursor.execute("SELECT login FROM users")
        rows = cursor.fetchall()

        for row in rows:
            if row[0] == username:
                user_exists = True
                break

        return user_exists

