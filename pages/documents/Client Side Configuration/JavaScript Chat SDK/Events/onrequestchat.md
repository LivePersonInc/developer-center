---
pagename: onRequestChat
redirect_from:
  - consumer-experience-javascript-chat-onrequestchat.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Events

order: 240
permalink: javascript-chat-sdk-events-onrequestchat.html

indicator: chat
---

Triggered in response to [requestChat](consumer-experience-javascript-chat-startchatrequestchat.html).

**Notes**:

- *See [onInfo](consumer-experience-javascript-chat-oninfo.html) and [onLine](consumer-experience-javascript-chat-online.html) to understand the data in this method.*
- *It is a best practice to listen to specific events that are a breakdown of this one: [onState](consumer-experience-javascript-chat-onstate.html), [onInfo](consumer-experience-javascript-chat-oninfo.html) , [onLine](consumer-experience-javascript-chat-online.html) and [onStart](consumer-experience-javascript-chat-onstart.html) will provide the same information to deal with in more granular detail.*

**Sample Response**

```json
{
    "events": {
        "event": [
            {
                "time": "2013-05-23T20:00:05.182-04:00",
                "@type": "state",
                "state": "waiting",
                "@id": "0"
            },
            {
                "text": "Please wait for a site operator to respond.",
                "time": "2013-05-23T20:00:05.183-04:00",
                "source": "system",
                "subType": "REGULAR",
                "@type": "line",
                "by": "info",
                "textType": "plain",
                "@id": "1",
                "systemMessageId": 4
            }
        ]
    },
    "info": {
        "visitorTyping": "not-typing",
        "visitorName": "you",
        "skillName": "testSkill",
        "lastUpdate": "2013-05-23T20:00:05.356-04:00",
        "state": "waiting",
        "startTime": "2013-05-23T20:00:05.183-04:00",
        "duration": 0,
        "visitorId": 12345678910,
        "agentTyping": "not-typing",
        "chatSessionKey": "H123345578-123456789096534324243",
        "rtSessionId": 12345678910,
        "chatTimeout": 40
    }
}
```
