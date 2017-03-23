__author__ = 'ylwoi'

# Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
# Also, the URL is missing a crutial component, find out what it is and insert it too!

url = "https//www.reddit.com/r/nevertellmethebots"

# inserts ':' character into the string
url = url[:5] + ':' + url[5:len(url)]

# changes string to an entered text between two indexes
url = url.replace(url[len(url)-4:len(url)], "odds")

print(url)
