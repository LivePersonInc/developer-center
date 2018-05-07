---
title: Close a conversation
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 62
indicator: both
permalink: close_conversation_example.html
search: include
---

To close the conversation you simply use the same endpoint you use to send a message. But the payload type is different i.e. not _PublishEvent_ type but _UpdateConversationField_ type. Also here the conversation ID is passed in the Payload.

### Close a conversation

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation/send?v=3 |

**Json payload**

{% raw %}
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
{% endraw %}
