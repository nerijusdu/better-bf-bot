import requests
from requests_oauthlib import OAuth1
import os

url = 'https://api.twitter.com/1.1/statuses/update.json'

auth = OAuth1(
  os.getenv('API_KEY'), 
  os.getenv('API_SECRET_KEY'), 
  os.getenv('ACCESS_TOKEN'), 
  os.getenv('ACCESS_TOKEN_SECRET'))

r = requests.post(
  url, 
  data={ 'status': 'This is a test tweet made with Python' },
  auth=auth)

print(r.status_code)
print(r.json())