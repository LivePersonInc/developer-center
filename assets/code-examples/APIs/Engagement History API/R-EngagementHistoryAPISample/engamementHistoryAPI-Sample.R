library(httr)

# Web call needed to discover baseURI needed to call the Engagement History API for individual LiveEngage accounts for Accounts:
# https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/engHistDomain/baseURI.json?version=1.0
# Expected response example:
# {
#   "service":"engHistDomain",
#   "account":"56072331",
#   "baseURI":"va-a.enghist.liveperson.net"
# }

key <- '{YOUR API KEY}'
secret <- '{Your API Secret}'
tokenURL <- 'null'
accessTokenURL <- 'null'
authorizeURL <- 'null'

app <- oauth_app('LP',key,secret)

sig <- sign_oauth1.0(app,
                     token="{YOUR TOKEN}",
                     token_secret="{YOUR TOKEN SECRET}"
)

body <- '{"start":{"from":1433140200000,"to":1435645800000}}'
postRequest <- POST("https://{YOUR BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset=0&limit=10",sig, body = body,add_headers("Content-Type"="application/json"))
content(postRequest, "parsed")
chatRecords <- content(postRequest,"parsed")
chatRecords$interactionHistoryRecords