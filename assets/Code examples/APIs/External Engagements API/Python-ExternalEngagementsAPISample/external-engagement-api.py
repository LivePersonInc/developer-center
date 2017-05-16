# LivePerson LE 2.0 External Engagements API Example
# Author: Matthew Coles - LivePerson

# Web call needed to discover baseURI needed to call External Engagements API for individual LiveEngage accounts for Accounts: 
# https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/smt/baseURI.json?version=1.0
# Expected response example:
# {
#  "service": "smt",
#  "account": “ACCNO”,
#  "baseURI": "sy.v.liveperson.net"
# }

# Install the Python Requests library:
# `pip install requests`
# `pip install requests_oauthlib`


import requests
import json
from requests_oauthlib import OAuth1
from requests_oauthlib import OAuth1Session

# Plug in your Base URI, Account Number and OAuth Key Details below
baseURI = 'https://{YOUR BASE URI}/api/account/{YOUR ACCOUNT NUMBER}/external/engagement'
consumer_key = 'your consumer key'
consumer_secret = 'your consumer secret'
access_token = 'your access token'
access_token_secret = 'your token secret'


def send_request():
    client = requests.session()

    # Header information
    postheader = {'content-type': 'application/json'}
    urlparams={ "v": "1.0" }

    # OAuth authentication
    oauth = OAuth1(consumer_key,
           client_secret=consumer_secret,
           resource_owner_key=access_token,
           resource_owner_secret=access_token_secret,
           signature_method='HMAC-SHA1',
           signature_type='auth_header')

    # Attributes and skills (consumerSections) go here
    body={
        "appType": "IVR",
        "consumerSections": ["General"],
        "engagementAttributes": [
        {"type":"personal","personal":{"contacts":{"phone":"1001001001"}}}
        ],
        "externalWaitTimeSeconds":300
    }

    response = client.post(url=baseURI, headers=postheader, data=json.dumps(body), auth=oauth, params=urlparams)

    results = json.loads(response.content.decode())
    print(results)


send_request()
