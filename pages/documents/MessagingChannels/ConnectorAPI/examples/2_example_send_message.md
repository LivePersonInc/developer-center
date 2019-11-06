---
pagename: Send a message
redirect_from:
  - send-message-example.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Examples
order: 61
indicator: messaging
permalink: connector-api-examples-send-a-message.html

---

This is an example of how to send a message to LiveEngage to an open conversation using the SEND API endpoint. The `conversation ID` is required to address the conversation and it is passed in the JSON payload.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### Send a message

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html)) |

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
