---
title: Close a conversation
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 62
indicator: both
permalink: close-conversation-example.html

---

In order to close a conversation you simply use the same SEND API endpoint you use to send a message. However, the payload type is different i.e. not _ms.PublishEvent_ type but _cm.UpdateConversationField_ type. The conversation ID is passed in the Payload in this method as well.

### Close a conversation

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Json payload**

```json
{  
   "kind":"req",
   "id":1,
   "body":{  
      "conversationId":"{conversationId}",
      "conversationField":{  
         "field":"ConversationStateField",
         "conversationState":"CLOSE"
      }
   },
   "type":"cm.UpdateConversationField"
}
```
