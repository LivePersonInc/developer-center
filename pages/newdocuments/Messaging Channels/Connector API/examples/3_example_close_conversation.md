---
pagename: Close a conversation
redirect_from:
  - close-conversation-example.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Examples
order: 62
indicator: messaging
permalink: connector-api-examples-close-a-conversation.html

---

In order to close a conversation you simply use the same SEND API endpoint you use to send a message. However, the payload type is different i.e. not _ms.PublishEvent_ type but _cm.UpdateConversationField_ type. The conversation ID is passed in the Payload in this method as well.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### Close a conversation

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html)) |

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
