---
title: Create a new conversation
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 60
indicator: both
permalink: create_conversation_example.html
search: include
---

This examples illustrates how to create a conversation. For the JSON payload, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html) with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html) to get an example of the accepted payloads. The API batch endpoint expects an set of JSON payloads, each represents a different type of request to UMS. The order of payload is important in order to create a new conversation.

First, the _SetUserProfile_ payload, second the _ConsumerRequestConversation_ payload, and optionally, last but not least the _PublishEvent_ payload. These payloads are only required once to open a conversation.

**Note** - In the future we are planning to change it and not to require this in order to create a conversation, i.e. to make the _SetUserProfile_ also optional).


### Create a new conversation

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation?v=3 |

**Json payload**

{% raw %}
```json
[
  {
    "kind": "req",
    "id": "2,",
    "type": "userprofile.SetUserProfile",
    "body": {
      "firstName": "WEB UI USER",
      "lastName": "Test",
      "avatarUrl": "http://avatarurl.com",
      "role": "X",
      "backgndImgUri": "http://something.com",
      "description": "Test Description",
      "privateData": {
        "mobileNum": "1750345346",
        "mail": "test@gmail.com",
        "pushNotificationData": {
          "serviceName": "Service",
          "certName": "CertName",
          "token": "TOKEN"
        }
      }
    }
  },
  {
    "kind": "req",
    "id": "1,",
    "type": "cm.ConsumerRequestConversation",
    "body": {
      "ttrDefName": "CUSTOM",
      "campaignInfo": {
        "campaignId": "99999",
        "engagementId": "888888"
      }, "conversationContext": {
    "visitorId": "A3ZTY3Zjk1MDExZTczYTU4",
    "sessionId": "ys2wSqaSRSOJGki7VhEDKQ",
    "interactionContextId": "2",
    "type": "SharkContext",
    "lang": "en-US"
     },
      "channelType": "MESSAGING",
      "brandId": "{accountid}",
      "skillId": "-1"
    }
  },
  {
    "kind": "req",
    "id": "3",
    "type": "ms.PublishEvent",
    "body": {
      "event": {
        "type": "ContentEvent",
        "contentType": "text/plain",
        "message": "Hi from Example Happy Flow - Create & Send"
      }
    }
  }
]
```
{% endraw %}
