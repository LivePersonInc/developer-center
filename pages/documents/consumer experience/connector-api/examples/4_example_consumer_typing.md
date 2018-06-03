---
title: Send Chat State Events
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 63
indicator: both
permalink: send-chat-state-example.html

---

This example illustrates how to send LiveEngage the presence/typing events (chat-state), specifically the "Consumer is Typing" chat-state (`COMPOSING`).

In order to send an indication that the consumer is typing, the connector will send a payload of _ms.PublishEvent_ type. The payload body includes an event of _ChatStateEvent_ and we are passing `COMPOSING` as the **chatState** value.


### Send Chat State Events - "Consumer is typing"

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation/send?v=3 |

**Example Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ChatStateEvent",
         "chatState":"COMPOSING"
      }
   }
}
```

**Notes**:

In order to show that the consumer has stopped typing it is not sufficient to send another text message. Instead you need to send another payload as above with the _ChatStateEvent_ value in the "type" key. In addition, you will need to pass any other state which is different than `COMPOSING` (it doesn't matter which value you choose, as long as it is not `COMPOSING`) i.e: `ACTIVE` , `INACTIVE`, `GONE`, `PAUSE`.
