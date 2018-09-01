---
pagename: OnInit
redirect_from:
  - consumer-experience-javascript-chat-oninit.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Javascript Chat SDK
subfoldername: Events

order: 193
permalink: javascript-chat-sdk-events-oninit.html

indicator: chat
---

Triggers when you can request some information about the chat. The following methods are supported after this event has triggered:

- [getEstimatedWaitTime](consumer-experience-javascript-chat-getestimatedwaittime.html)
- [getPreChatSurvey](consumer-experience-javascript-chat-getprechatsurvey.html)
- [getOfflineSurvey](consumer-experience-javascript-chat-getofflinesurvey.html)
- [submitOfflineSurvey](consumer-experience-javascript-chat-submitofflinesurvey.html)
- [requestChat](consumer-experience-javascript-chat-requestchat.html)

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