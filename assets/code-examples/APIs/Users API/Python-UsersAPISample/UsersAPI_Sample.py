import requests
import json
from requests_oauthlib import OAuth1
from requests_oauthlib import OAuth1Session

# This code was built using Python 3.5

# Web call needed to discover baseURI needed to call Users API for individual LiveEngage accounts for Accounts:
# This URL is for app keys that have Read/Write enabled on the API
# https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadWrite/baseURI.json?version=1.0
# This URL is for app keys that have Read Only enabled on the API 
# https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadOnly/baseURI.json?version=1.0
# Expected response example:
#{
# "service":"accountConfigReadOnly",
# "account":"56072331",
# "baseURI":"va-a.acr.liveperson.net"
#}

# Install the Python Requests library:
# `pip install requests`
# `pip install requests_oauthlib`

baseURI = 'your base uri'
app_key = 'your app key'
app_secret = 'your app secret'
access_token = 'your access token'
access_token_secret = 'your access token secret'
account_number = 'your account number'

client = requests.session()
postheader = {'content-type': 'application/json'}
oauth = OAuth1(app_key,
			   client_secret=app_secret,
			   resource_owner_key=access_token,
			   resource_owner_secret=access_token_secret,
			   signature_method='HMAC-SHA1',
			   signature_type='auth_header')

# Get a list of all the users
# Example URL: https://va-a.ac.liveperson.net/api/account/56072331/configuration/le-users/users?v=1
url = 'https://'+baseURI+'/api/account/'+account_number+'/configuration/le-users/users?v=1'
response = client.get(url=url, headers=postheader, auth=oauth)
results = json.loads(response.content.decode())
# For older versions of python you might need to use this line
#results = json.loads(response.content.decode('utf-8'))
print(results)

# Get all of the information for a single user
# Example URL: https://va-a.ac.liveperson.net/api/account/56072331/configuration/le-users/users/597110910?v=1
url = 'https://'+baseURI+'/api/account/'+account_number+'/configuration/le-users/users/{YOUR USER ID}?v=1'
response = client.get(url=url, headers=postheader, auth=oauth)
results = json.loads(response.content.decode())
# For older versions of python you might need to use this line
#results = json.loads(response.content.decode('utf-8'))
print(results)







