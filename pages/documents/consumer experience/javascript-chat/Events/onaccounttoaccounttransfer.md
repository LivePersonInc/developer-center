---
pagename: onAccountToAccountTransfer
redirect_from:
  - consumer-experience-javascript-chat-onaccounttoaccounttransfer.html
Keywords:
sitesection: Documents
categoryname: Consumer Experience
documentname: Javascript Chat SDK
subfoldername: Events

order: 320
permalink: javascript-chat-sdk-events-onaccounttoaccounttransfer.html

indicator: chat
---

Triggered in response to the agent transferring the chat to another account.

In case of this event you need to create a new instance of the chat API for that account with the parameters you receive in the event (domain and remoteSiteId).

You then need to request a chat with the chatRequestParameters part of the request.

**Parameters in event**

| Name                  | Description                                                                                                                           | Type   |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------|--------|
| chatRequestParameters | An object with all the parameters you need to pass to the chat request in the new site. These parameters link the two chats together. | object |
| domain                | The domain of the site you need to create a chat in.                                                                                  | string |
| remoteSiteId          | The identifier of the site you need to create a chat in.                                                                              | string |

**Event Format Code Sample**

```json
{
    "chatRequestParameters": {
        "a2aEventId": 467,
        "a2aSourceSessionId": 8396550,
        "a2aSourceSiteId": 81992017,
        "skill": "test"
    },
    "domain": "base.liveperson.net",
    "remoteSiteId": 70648893
}
```