from os import environ as env
from dotenv import load_dotenv

load_dotenv()

ALGORITHM = env['ALGORITHM']
ENCODING = 'UTF-8'
HASH_ITERATIONS = 100000
TIME_DELTA_FOR_ACCESS = 15
TIME_DELTA_FOR_REFRESH = 30
SALT_RANDOM_BYTES = 16
SECRET_KEY = env['SECRET_KEY']
SYMBOLS_REFRESH_TOKEN = 16
# DATABASE INFO
HOST = "127.0.0.1"
USER = "root"
PASSWORD = "sppn3003FIIT"
DATABASE = "auto.ru"