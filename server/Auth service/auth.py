from flask import Flask, request
import json
import hashlib


app = Flask(__name__)

@app.route('/auth', methods=["POST"])
def auth():
    return "Awaiting Implementation"

@app.route("/verify", methods=["POST"])
def verify():
    return "Awaiting Implementation"

@app.route("/blacklist", methods=["GET", "POST"])
def blacklist():
    return "Awaiting Implementation"

@app.route("/logout", methods=["POST"])
def logout():
    return "Awaiting Implementation"

@app.route("/client", methods=["GET", "POST"])
def client():
    return "Awaiting Implementation"

if __name__ == '__main__':
    app.run()
