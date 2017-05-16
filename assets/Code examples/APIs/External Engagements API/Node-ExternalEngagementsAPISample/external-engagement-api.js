/*
    LivePerson LE 2.0 External Engagements API Example
    Author: Josh Espinosa - LivePerson

    Web call needed to discover baseURI needed to call External Engagements API for individual LiveEngage accounts for Accounts: 
    https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/smt/baseURI.json?version=1.0
    Expected response example:
    {
        "service":"smt",
        "account":ACCOUNT_NUMBER,
        "baseURI":"va.v.liveperson.net"
    }

    Install the node request module:
    'npm install request'
*/


var request = require('request');

var oauth = {
        consumer_key: 'your consumer key',
        consumer_secret: 'your consumer secret',
        token: 'your access token',
        token_secret: 'your access token secret'
    },
    url = 'https://{BASEURI}/api/account/{ACCOUNT_NUMBER}/external/engagement?v=1.0',
body = {
    "appType": "IVR"
};

request.post({
    url: url,
    oauth: oauth,
    body: body,
    method: 'POST',
    json: true,
    headers: {'content-Type': 'application/json'}
}, function (e, r, b) {
	if(e){
		console.log("Regular Error: " + e);
	} else {
		console.log("Other Error: " + JSON.stringify(b));
	}
});