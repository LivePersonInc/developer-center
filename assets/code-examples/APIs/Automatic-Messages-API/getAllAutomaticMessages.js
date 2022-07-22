/*
    LivePerson LE 2.0 Automatic Messages API Example
    Author: Scott Westover - LivePerson
    Web call needed to discover baseURI needed to call Automatic Messages API for individual LiveEngage accounts for Accounts:
    https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/accountConfigReadWrite/baseURI.json?version=1.0
    Expected response example:
    {
     "service":"accountConfigReadWrite",
     "account":"56072331",
     "baseURI":"va-a.ac.liveperson.net"
    }
*/

// To run this example, you will need to install the Request module. 
// run -  npm install request

var request = require('request');

var oauth = {
        consumer_key: 'your app key',
        consumer_secret: 'your app secret',
        token: 'your access token',
        token_secret: 'your access token secret'
    };

// Query the API
// Example URL: https://va-a.ac.liveperson.net/api/account/56072331/configuration/engagement-window/auto-messages?v=1
var url = 'https://{YOUR BASE URI}/api/account/{YOUR ACCOUNT NUMBER}/configuration/engagement-window/auto-messages/139321310?v=1';

request.get({
    url: url,
    oauth: oauth,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
}, function (e, r, b) {
    if (!e && r.statusCode == 200) {
        console.log(JSON.stringify(b));
    }
    else {
        console.log(e);
    }
});
