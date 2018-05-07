---
title: Send Chat State Events
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 63
indicator: both
permalink: send_chat_states_example.html
search: include
---

This example illustrates how to send LiveEngage the presence/typing events (chat-state), in specific "Consumer is Typing" chat-state (**COMPOSING**).

In order to send an indication that the consumer is typing we are sending a message of _PublishEvent_ type that its body includes an event of _ChatStateEvent_ and we are passing **COMPOSING** as the **chatState** value.


### Send Chat State Events - "Consumer is typing"

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation/send?v=3 |

**Json payload**

{% raw %}
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
{% endraw %}

<span style="text-decoration:underline">Notes:</span>

In order to show that the consumer has stopped typing it is not sufficient to send another text message but you need to send another _ChatStateEvent_ and pass any other state which is different than **COMPOSING** i.e: **ACTIVE** , **INACTIVE**, **GONE**, **PAUSE**
