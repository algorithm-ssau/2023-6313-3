import jwt

def main():
    payload_data = {
        "name": "Maksim Khrestinin",
        "nickname": "Moon"
    }

    my_secret = 'my_super_secret'

    token = jwt.encode(
        payload=payload_data,
        key=my_secret
    )
    print(token)