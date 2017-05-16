var request = require('request');

var oauth = {
        consumer_key: 'YOUR API ID',
        consumer_secret: 'YOUR API SECRET',
        token: 'YOUR TOKEN ID',
        token_secret: 'YOUR TOKEN SECRET'
    },
    url = 'https://{YOUR BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset=0&limit=10',
qs = {
    "start": {
        "from": 1433140200000,
        "to": 1435645800000
    }
};

request.post({
    url: url,
    oauth: oauth,
    body: qs,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
}, function (e, r, b) {
    console.log(JSON.stringify(b));
});
