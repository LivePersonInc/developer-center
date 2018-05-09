---
title: Create a new conversation
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 60
indicator: both
permalink: create-conversation-example.html

---

This example illustrates how to create a conversation. To get an example of the accepted payloads used in this API's methods, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html) with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html).

This method expects a set of JSON payloads, each representing a different type of request to LiveEngage servers. The order of the payloads is important in order to create a new conversation.

First, the payload with the `type` _userprofile.SetUserProfile_ appears , second the payload with the `type` _cm.ConsumerRequestConversation_ appears , and optionally, last but not least the payload with the `type` _ms.PublishEvent_ appears.

### Create a new conversation

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**JSON payload**

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
