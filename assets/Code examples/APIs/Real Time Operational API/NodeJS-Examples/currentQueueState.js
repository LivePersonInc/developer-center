/*
 Web call needed to discover baseURI needed to call Real Time Operational API for individual LiveEngage accounts for Accounts:
 https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/leDataReporting/baseURI.json?version=1.0
 Expected response example:
{
 "service":"leDataReporting",
 "account":"56072331",
 "baseURI":"va-a.data.liveperson.net"
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
// Example URL: https://va-a.data.liveperson.net/operations/api/account/56072331/queuestate?timeframe=1440&v=1
var url = 'https://{YOUR BASE URI}/operations/api/account/{YOUR ACCOUNT NUMBER}/queuestate?timeframe=1440&v=1';

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