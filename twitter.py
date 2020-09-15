import requests
from requests_oauthlib import OAuth1
import os
import json

url = 'https://api.twitter.com/1.1/statuses/update.json'

def tweet(text, user=None):
  auth = OAuth1(
    os.getenv('BBB_API_KEY'), 
    os.getenv('BBB_API_SECRET_KEY'), 
    os.getenv('BBB_ACCESS_TOKEN'), 
    os.getenv('BBB_ACCESS_TOKEN_SECRET'))
    
  r = requests.post(
    url, 
    data={ 'status': text },
    auth=auth)
  
  if r.ok:
    return True, ''
  
  data = r.json()
  return False, data['errors'][0]['message']
  
