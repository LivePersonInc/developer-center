# written by https://github.com/WildYorkies
# python=3.5
import json
import requests
from requests_oauthlib import OAuth1
from requests_oauthlib import OAuth1Session
import time
import pandas

#########################
### BoilerPlate Code ####
#########################

# Grab the time when the script starts.
start_time_epoch = time.time()

# LiveEngage Account Number
accountNum = 'xxx'

# Get these from the LiveEngage API management area
consumer_key = 'xxxxxx'
consumer_secret = 'xxx'
access_token = 'xxxxxx'
access_token_secret = 'xxx'

oauth = OAuth1(consumer_key,
			   client_secret=consumer_secret,
			   resource_owner_key=access_token,
			   resource_owner_secret=access_token_secret,
			   signature_method='HMAC-SHA1',
			   signature_type='auth_header')

client = requests.session()
postheader = {'content-type': 'application/json'}
# Customize the body for what you want 
body={
	'interactive':'true',
	'ended':'true',
	'start':{
		# http://www.epochconverter.com/ - grab the millisecond version
		'from':'1468814400000', #2016 july 18 00:00:00 ET
		'to':'1469246399000' #2016 july 22 23:59:59 ET
	},
}

domainReq = requests.get('https://api.liveperson.net/api/account/' + accountNum + '/service/engHistDomain/baseURI.json?version=1.0')
if not domainReq.ok:
	print('There was an issue with your Real Time base URI')
domain = domainReq.json()['baseURI']
engHistoryURI = 'https://' + domain + '/interaction_history/api/account/' + accountNum + '/interactions/search?'

# Construct our dataframe
df_ = pandas.DataFrame(columns=["startTime", "endTime", "skillName", "agentLoginName", "chatStartUrl", "sdes", "transcript"])

count = 1 # Count is the total num of records in the response
offset = 0 # offset is to keep track of the amount difference between what we've pulled so far and what the total is.
limit = 100 # max chats to be recieved in one response
numRecords = 0

#########################
###     Grab Data    ####
#########################

while(offset <= count): # Grab the data incrementally because can only pull 100 at a time.
	
	# Complete the Requests.session POST
	params={'offset':offset, 'limit':limit, 'start':'des'} # Prob shouldn't change offset and limit 
	engHistoryResponse = client.post(url=engHistoryURI, headers=postheader, data=json.dumps(body), auth=oauth, params=params)
	if not engHistoryResponse.ok:
		print(engHistoryResponse.status_code)
	engHistoryResults = engHistoryResponse.json()

	# Fill our dataframe 
	for record in engHistoryResults['interactionHistoryRecords']:
		# Update numRecords
		numRecords += 1
		engagementId = record['info']['engagementId']
		df_.set_value(engagementId, "startTime", record['info']['startTime'])
		df_.set_value(engagementId, "endTime", record['info']['endTime'])
		df_.set_value(engagementId, "skillName", record['info']['skillName'])
		df_.set_value(engagementId, "agentLoginName", record['info']['agentLoginName'])
		
		# Get the transcript lines in a readable format
		transcript = ""
		for line in record['transcript']['lines']:
			transcript += line['time'] + '\t From: ' + line['source'] + '\n' + line['text'] + '\n'
		df_.set_value(engagementId, "transcript", transcript)

		# This is a good way to grab a value that may not exist
		try:
			df_.set_value(engagementId, "chatStartUrl", record['info']['chatStartUrl'])
		except KeyError: 
			df_.set_value(engagementId, "chatStartUrl", "N/A")
		try:
			df_.set_value(engagementId, "sdes", record['sdes']['events'])
		except KeyError:
			df_.set_value(engagementId, "sdes", "N/A")
	
	# Update count, offset
	count = engHistoryResults['_metadata']['count']
	offset += limit
	# print the status of the aggregation 
	print(str(offset) + "<=" + str(count))	   

print("num records processed = " + str(numRecords))

#########################
### Output DataFrame ####
#########################

# Construct our output file name
timestr = time.strftime("%Y%m%d-%H%M%S")
outfile = 'LiveEngage_EH_output_' + timestr + '.csv'

with open(outfile, 'w', encoding='utf-8') as f:
    df_.to_csv(f, sep=',', encoding='utf-8')

print("Output file: " + outfile)
print("--- %s seconds to complete script." % (time.time() - start_time_epoch))