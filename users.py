from pathlib import Path

path = Path(__file__).parent / "./users.txt"

def get():
  with open(path) as f:
      content = f.readlines()
  content = [x.strip() for x in content] 
  return content
