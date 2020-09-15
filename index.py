import twitter
import compliment
import users
import settings

def main():
  for u in users.get():
    comp = compliment.get()
    success, err = twitter.tweet(comp, u)
    if not success:
      print(f'Failed to send tweet: {err}')
      continue

    print(f'Tweeted compliment: {comp}. For user: {u}')

if __name__ == '__main__':
  main()