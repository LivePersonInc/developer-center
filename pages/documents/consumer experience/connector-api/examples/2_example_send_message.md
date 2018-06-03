---
title: Send a message
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 61
indicator: both
permalink: send-message-example.html

---

This is an example of how to send a message to LiveEngage to an open conversation using the SEND API endpoint. The `conversation ID` is required to address the conversation and it is passed in the JSON payload.

### Send a message

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ContentEvent",
         "contentType":"text/plain",
         "message":"Hi from Send Message only - SendLine"
      }
   }
}
```
