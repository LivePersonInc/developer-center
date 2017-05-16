library(httr)

# Web call needed to discover baseURI needed to call Users API for individual LiveEngage accounts for Accounts:
#   This URL is for app keys that have Read/Write enabled on the API
# https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadWrite/baseURI.json?version=1.0
# Expected response example:
# {
#   "service":"accountConfigReadWrite",
#   "account":"56072331",
#   "baseURI":"va-a.ac.liveperson.net"
# }

key <- '{YOUR API KEY}'
secret <- '{Your API Secret}'
tokenURL <- 'null'
accessTokenURL <- 'null'
authorizeURL <- 'null'

app <- oauth_app('LP',key,secret)

sig <- sign_oauth1.0(app,
                     token="{YOUR API SECRET}",
                     token_secret="{YOUR TOKEN SECRET}"
)

# Example URL: https://va-a.ac.liveperson.net/api/account/56072331/configuration/le-users/skills?v=1
getRequest <- GET("https://{YOUR BASE URI}/api/account/{YOUR ACCOUNT NUMBER}/configuration/le-users/skills?v=1",sig,add_headers("Content-Type"="application/json"))
content(getRequest, "parsed")
skillList <- content(getRequest,"parsed")
skillList