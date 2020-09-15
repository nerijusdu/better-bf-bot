import requests

url = 'https://complimentr.com/api'

def get():
  r = requests.get(url)
  if r.ok:
    return True, r.json()['compliment'].capitalize()
  return False, 'Request failed'