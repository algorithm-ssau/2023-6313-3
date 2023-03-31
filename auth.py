from flask import Flask, request
import json
import hashlib

import  authModel

app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello guys'


if __name__ == '__main__':
    app.run()
