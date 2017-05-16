---
title: onRequestChat
Keywords:
level1: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 240
permalink: consumer-experience-javascript-chat-onrequestchat.html

---

Triggered in response to [requestChat](consumer-experience-javascript-chat-startchatrequestchat.html){:target="_blank"}.

**Notes**:

- *See [onInfo](consumer-experience-javascript-chat-oninfo.html){:target="_blank"} and [onLine](consumer-experience-javascript-chat-online.html){:target="_blank"} to understand the data in this method.*
- *It is a best practice to listen to specific events that are a breakdown of this one: [onState](consumer-experience-javascript-chat-onstate.html){:target="_blank"}, [onInfo](consumer-experience-javascript-chat-oninfo.html){:target="_blank"} , [onLine](consumer-experience-javascript-chat-online.html){:target="_blank"} and [onStart](consumer-experience-javascript-chat-onstart.html){:target="_blank"} will provide the same information to deal with in more granular detail.*

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
