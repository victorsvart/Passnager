from random import choice
import string
import sys


valores = string.ascii_letters + string.digits + string.punctuation
password = ""
for i in range(0, 21):
    random = choice(valores)
    password += random
print(password)
sys.stdout.flush()
