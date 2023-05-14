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

        except Exception as ex:
            print("No connection to database.")

    def close_connection(self):
        try:
            self.connection.close()
            print("Connection closed.")

        except Exception as ex:
            print("There is no connected database.")

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
            sql_request = "INSERT INTO users (email, login, password_hash) VALUES (%s, %s, %s)"
            val = (email, username, password)
            cursor.execute(sql_request, val)
            self.connection.commit()
            print("User has been added.")
        else:
            raise HTTPException(status_code=400, detail="User exists in database.")

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

