---
title: Close a conversation
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 62
indicator: messaging
permalink: close-conversation-example.html

---

In order to close a conversation you simply use the same SEND API endpoint you use to send a message. However, the payload type is different i.e. not _ms.PublishEvent_ type but _cm.UpdateConversationField_ type. The conversation ID is passed in the Payload in this method as well.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Close a conversation

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Example Request Body - JSON Payload**

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
