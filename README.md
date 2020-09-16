# compliment-a-bot
Simple Twitter bot that tweets compliments for specified users.

# Run

## Requirements
Have python 3.X installed.

## Steps
- Add Twitter usernames of people you want to compliment to `users.txt` (separated by new line)
- Setup Twitter Bot and create a `.env` file with these values:
  ```
  BBB_API_KEY=<API key>
  BBB_API_SECRET_KEY=<API secret>
  BBB_ACCESS_TOKEN=<Authentication access token>
  BBB_ACCESS_TOKEN_SECRET=<Authentication secret>
  ```
- Run `pip install js2py python-dotenv requests requests_oauthlib`
- Run `python index.py`
