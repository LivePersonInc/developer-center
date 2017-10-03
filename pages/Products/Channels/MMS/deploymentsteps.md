---
title: Deployment Steps
level1: Solutions
level2: Channels
level3: LiveEngage MMS Viewer
permalink: products-channels-mms-deployment.html
order: 30
indicator:
---

1. Within your Twilio account, navigate to All Products and Services > Runtime > Functions. Keep track of the Your Domain field on this page.

2. Click through to Functions and Add New by clicking the Plus (+) button.

3. Start with the Hello SMS sample and click Create

![SMS Fuction](img/smsfunction.png)

{:start="4"}
4. Paste in the following Twilio Function, replacing MSGGW_DOMAIN, ACCOUNT_NUM, and NODE_APP_DOMAIN with the relevant values. This solution assumes your endpoint will be named /mmsInfo.

```javascript

exports.handler = function(context, event, callback) {
    const got = require('got');
    let twiml = new Twilio.twiml.MessagingResponse();
    const msggwDomain = 'https://MSGGW_DOMAIN/api/ACCOUNT_NUM/default/twilio';
    if (event.NumMedia !== '0') {
        var numMedia = parseInt(event.NumMedia);
        var mediaArray = [];
        var mediaReceivedTime = new Date().getTime();
        //Generate media objects in format expected by the server
        for (var i = 0; i < numMedia; i++) {
            mediaArray.push(JSON.stringify({
                'href': event['MediaUrl' + i],
                'format': event['MediaContentType' + i]
            }));
        }
        //Post to your mms webhook
        got.post('https://NODE_APP_DOMAIN/mmsInfo', {
            json: true,
            body: {
                'From': event.From,
                'To': event.To,
                'mmsUrls': mediaArray,
                'received': mediaReceivedTime
            }
        }).then(function(response) {
            console.log('Completed POST /mmsInfo');
            twiml.redirect(msggwDomain);
            callback(null, twiml);
        }).catch(function(error) {
            callback('Error: ' + error);
        });
    } else {
        twiml.redirect(msggwDomain);
        callback(null, twiml);
    }
};
```

{:start="5"}
5. Change the SMS webhook for your SMS number under the **Programmable SMS** configuration page to the Twilio function’s webhook.
6. Navigate to the [MMS Viewer code package](https://github.com/cjames1224/mmsviewerle){:target="_blank"} and pull the latest repository. Install the necessary dependencies with `npm install`.
7. Host the node package on your servers and expose the homepage /index from a secure domain (begins with **https://**)
8. Update the NODE_APP_DOMAIN in ./public/js/app.js to the URL from the previous step.
9. Add the homepage from step 7 to LiveEngage in the **Integration Widget** section of LiveEngage under Night Vision

![Night Vision Widget](img/widgetnight.png)
