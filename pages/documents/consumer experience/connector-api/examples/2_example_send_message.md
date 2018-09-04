---
title: Send a message
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 61
indicator: messaging
permalink: send-message-example.html

---

This is an example of how to send a message to LiveEngage to an open conversation using the SEND API endpoint. The `conversation ID` is required to address the conversation and it is passed in the JSON payload.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Send a message

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

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
