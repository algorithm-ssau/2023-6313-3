from flask import Flask, request
import json
import hashlib


app = Flask(__name__)

# Authentication method (client exists)
@app.route('/auth', methods=["POST"])
def auth():
    return "Awaiting Implementation"

# Verifying the signed JWT token
@app.route("/verify", methods=["POST"])
def verify():
    return "Awaiting Implementation"

# Here we set up the hashing algorithm to create a client_id and client_password for us for first time use
@app.route("/client", methods=["GET", "POST"])
def client():
    return "Awaiting Implementation"

if __name__ == '__main__':
    app.run()
