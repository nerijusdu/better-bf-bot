import js2py
from pathlib import Path

path = Path(__file__).parent / "./complimentGenerator.js"

jsGenerator = ''
getCompliment = None

with open(path, 'r') as file:
  jsGenerator = file.read()
  getCompliment = js2py.eval_js(jsGenerator)

def get():
  return getCompliment().capitalize()