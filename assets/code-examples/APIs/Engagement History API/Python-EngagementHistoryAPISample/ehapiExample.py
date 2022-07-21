import requests
import json
from requests_oauthlib import OAuth1
from requests_oauthlib import OAuth1Session
import time

# This code was built using Python 3.5

start_time = time.time()

baseURI = 'https://{YOUR BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset=0&limit=10'
consumer_key = 'your consumer key'
consumer_secret = 'your consumer secret'
access_token = 'your access token'
access_token_secret = 'your token secret'

client = requests.session()
postheader = {'content-type': 'application/json'}
params={'offset':'0'}
body={'start':{'from':'1433140200000','to':'1435645800000'}}
oauth = OAuth1(consumer_key,
			   client_secret=consumer_secret,
			   resource_owner_key=access_token,
			   resource_owner_secret=access_token_secret,
			   signature_method='HMAC-SHA1',
			   signature_type='auth_header')
response = client.post(url=baseURI, headers=postheader, data=json.dumps(body), auth=oauth, params=params)
results = json.loads(response.content.decode())

# For older versions of python you might need to use this line
#results = json.loads(response.content.decode('utf-8'))

outfile = 'test.txt'
#headers
header = ["stime", "etime", "dur", "vID", "eID", "inter", "agent", "skill", "chan", "startR", "endR"]

#open outfile
file = open(outfile, 'w')
file.write(','.join(header)+ '\n')

#create list of chat text and append to outfile    
result=[]
for line in results["interactionHistoryRecords"]:
	for x in ["info"]:
		temp_list=[]
		temp_list.append(line["info"]["startTime"])
		temp_list.append(line["info"]["endTime"])
		temp_list.append(str(line["info"]["duration"]))
		temp_list.append(line["info"]["visitorId"])
		temp_list.append(line["info"]["engagementId"])
		temp_list.append(str(line["info"]["isInteractive"]))
		temp_list.append(line["info"]["agentId"])
		temp_list.append(str(line["info"]["skillId"]))
		temp_list.append(str(line["info"]["channel"]))
		temp_list.append(line["info"]["startReason"])
		temp_list.append(line["info"]["endReason"])
		result.append(temp_list)

for i in range(0,len(result)):
	file.write(','.join(result[i]) + '\n')

file.close()

#print time it took to complete
print("--- %s seconds ---" % (time.time() - start_time))








