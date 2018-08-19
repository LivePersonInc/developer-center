---
title: OnInit
redirect_from:
  - consumer-experience-javascript-chat-oninit.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 193
permalink: javascript-chat-sdk-events-oninit.html

indicator: chat
---

Triggers when you can request some information about the chat. The following methods are supported after this event has triggered:

- [getEstimatedWaitTime](consumer-experience-javascript-chat-getestimatedwaittime.html){:target="_blank"}
- [getPreChatSurvey](consumer-experience-javascript-chat-getprechatsurvey.html){:target="_blank"}
- [getOfflineSurvey](consumer-experience-javascript-chat-getofflinesurvey.html){:target="_blank"}
- [submitOfflineSurvey](consumer-experience-javascript-chat-submitofflinesurvey.html){:target="_blank"}
- [requestChat](consumer-experience-javascript-chat-requestchat.html){:target="_blank"}

**Response Properties**

| Property | Description                          | Type    |
|----------|--------------------------------------|---------|
| account  | The LivePerson account number.       | string  |
| domain   | The domain for this account.         | string  |
| init     | If the session has been initialized. | Boolean |

**Sample Response**

```json
{
    "account": "12345678",
    "domain": "dev.liveperson.net",
    "init": true
}
```