---
title: SEND
redirect_from:
  - sendapi-send.html
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: API Reference
order: 12
indicator: messaging
permalink: connector-api-api-reference-send.html
search: exclude
---

The SEND method allows you to send a JSON payload to LiveEngage. This method is used mainly to send a message from the consumer to the agent or to close a conversation. The connector can use this method for one action at a time as it is not a batch endpoint like the CONVERSATION endpoint. Use this method to send a text message, close a conversation, send metadata, set user profile (send SDEs) and send chat-state events (e.g. consumer is typing).

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Request URI

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Path Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| accountid | LivePerson site ID | string |

**Query Parameter**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| v | The API version | numeric |  

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Body**

| Description | Content-Type |
| :--- | :--- |
| The JSON Payload | application/json |

**Notes**:

For the JSON payload, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html) with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html) to get an example of the accepted payloads. This payload would normally have the _ms.PublishEvent_ type or the _cm.UpdateConversationField_ type.

**Example Request Body - Send A Message - JSON Payload**

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
         "message":"Hi from Send Message only - Send a line"
      }
   }
}
```

#### ms.PublishEvent Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| dialogId | The **conversationId** created by CONVERSATION request | "8602832d-dce1-446b-8445-0d51f5926a42" | string | true | Can be found in the response of [CONVERSATION endpoint](sendapi-create.html#response){:target="_blank"} |
| type | The messaging event type | ContentEvent | string | true | ContentEvent will be used for sending a text message or a file |
| contentType | Which content is sent | "text/plain" for text message | string | true | For sending a file use "hosted/file" value. Refer [here](share-image-example.html){:target="_blank"} for more details. |
| message | Text message | "Hello, I need your support" | string | true | In case of sending a file the message would be an Array of properties (caption, relative path, file type and preview data) describing the file - Refer [here](share-image-example.html){:target="_blank"} for more details. |


**Example Request Body - Consumer is Typing - JSON Payload**

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

#### ms.PublishEvent Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| dialogId | The **conversationId** created by CONVERSATION request | "8602832d-dce1-446b-8445-0d51f5926a42" | string | true | Can be found in the response of [CONVERSATION endpoint](sendapi-create.html#response){:target="_blank"} |
| type | The messaging event type | ChatStateEvent | string | true |
| ChatState | Chat Status of the consumer | "COMPOSING" - Consumer is typing | String | true | Possible values: **"ACTIVE"** (user is in the chat), **"INACTIVE"** (e.g Consumer navigated away but application is still open), **"GONE"** (e.g Consumer closed the chat application), **"COMPOSING"** (Consumer is typing), **"PAUSE"** (Consumer has stopped typing) |

**Note**: After sending **"chatState":"COMPOSING"**, In order to send an indication that the consumer has stopped typing, an additional message has to be sent with a different **"chatState"** value than **"COMPOSING"**. Otherwise it will keep indicating on the Agent side that the consumer is typing.  


**Example Request Body - Consumer has accepted the message**

```json
{  
  "kind":"req",
	"id": "0",
	"type": "ms.PublishEvent",
	"body": {
		"dialogId": "{conversationId}",
		"event": {
			"type": "AcceptStatusEvent",
			"status": "ACCEPT",
			"sequenceList": [1,2]
		}
	}
}
```

#### ms.PublishEvent Properties

| Property | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| dialogId | The **conversationId** created by CONVERSATION request | "8602832d-dce1-446b-8445-0d51f5926a42" | string | true | Can be found in the response of [CONVERSATION endpoint](sendapi-create.html#response){:target="_blank"} |
| type | The messaging event type | "AcceptStatusEvent" | string | true |
| status | Acceptance status of the message sent by the Agent to the Consumer | "ACCEPT" | string | true | Possible values: **"ACCEPT"** (message was accepted by the consumer), **"READ"** (message was read by the consumer), **"ACCESS"** (Consumer has accessed the file), **"NACK"** (message not received), **"ACTION"** (used in conjunction with metadata to reply on structured content sent by the Agent) |
| sequenceList | List of **sequence** values | [2,3] | Array of integers | true |  See [example](webhooks-examples.html#agent-sent-a-text-messages){:target="_blank"}. You can mention more than one sequence number hence the sequence list |   

**Note**: LiveEngage assigns a number to every message. That number controls where that message appears in the sequence. In order to refer to a specific message or group of messages, you need to pass their sequence IDs. For example, if you want to "ACCEPT" the first and second message, you will pass the sequenceList as above.


### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | OK |


**Entity Example**

HTTP Status Code 200

```json
{
    "reqId": "1",
    "code": "OK",
    "body": {
        "sequence": 0
    }
}
```
