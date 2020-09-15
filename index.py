import twitter
import settings

success, err = twitter.tweet('Hello world from Python')

if not success:
  print(err)
else:
  print('Successfully tweeted')