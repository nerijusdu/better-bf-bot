import twitter
import compliment
import settings

def main():
  success, comp = compliment.get()
  if not success:
    print('Failed to fetch compliment')
    return
  
  success, err = twitter.tweet(comp)
  if not success:
    print(f'Failed to send tweet: {err}')
  
  print(f'Tweeted compliment: {comp}')

if __name__ == '__main__':
  main()