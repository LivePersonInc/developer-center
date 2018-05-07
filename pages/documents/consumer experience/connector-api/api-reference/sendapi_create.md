---
title: CREATE
level1:
level2: Consumer Experience
level3: Connector API
level4: API Reference
order: 11
indicator: both
permalink: sendapi_create.html
search: exclude
---

The CREATE method is a batch-endpoint (this means that one payload can contain several payloads). It takes a set of at least two JSON payloads. The order of the array is important, as the example shows since LiveEngage expects to receive these payloads in that order. Returns an array of corresponding JSON payloads in the response.

### Request

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

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

For the JSON payload, please have a look at the [Messaging Window API](https://developers.liveperson.com/consumer-int-overview.html) with its integrated [Request Builder](https://developers.liveperson.com/consumer-int-msg-reqs.html) to get an example of the accepted payloads. This method expects a set of JSON payloads, each representing a different type of request to LiveEngage messaging service. The order of the payloads is important in order to create a new conversation.

First, the payload with the `type` _userprofile.SetUserProfile_ appears , second the payload with the `type` _cm.ConsumerRequestConversation_ appears , and optionally, last but not least the payload with the `type` _ms.PublishEvent_ appears.

**JSON Example**

{% raw %}
```json
[
  {
    "kind": "req",
    "id": "2,",
    "type": "userprofile.SetUserProfile",
    "body": {
      "firstName": "WEB UI USER",
      "lastName": "Test",
      "avatarUrl": "http://avatarurl.com",
      "role": "X",
      "backgndImgUri": "http://something.com",
      "description": "Test Description",
      "privateData": {
        "mobileNum": "1750345346",
        "mail": "test@gmail.com",
        "pushNotificationData": {
          "serviceName": "Service",
          "certName": "CertName",
          "token": "TOKEN"
        }
      }
    }
  },
  {
    "kind": "req",
    "id": "1,",
    "type": "cm.ConsumerRequestConversation",
    "body": {
      "ttrDefName": "CUSTOM",
      "campaignInfo": {
        "campaignId": "99999",
        "engagementId": "888888"
      }, "conversationContext": {
    "visitorId": "A3ZTY3Zjk1MDExZTczYTU4",
    "sessionId": "ys2wSqaSRSOJGki7VhEDKQ",
    "interactionContextId": "2",
    "type": "SharkContext",
    "lang": "en-US"
     },
      "channelType": "MESSAGING",
      "brandId": "{accountid}",
      "skillId": "-1"
    }
  },
  {
    "kind": "req",
    "id": "3",
    "type": "ms.PublishEvent",
    "body": {
      "event": {
        "type": "ContentEvent",
        "contentType": "text/plain",
        "message": "Hi from Example Happy Flow - Create & Send"
      }
    }
  }
]
```
{% endraw %}

Elements in the payload

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| brandId | LivePerson site ID | string |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Returns a new conversation ID. |
| 400 | The input was invalid, please check. |
| 401 | Unauthorized. Are the headers correct? |
| 429 | Too many requests, please try again later. |

**JSON Example**

HTTP Status Code 200

{% raw %}
```json
[
    {
        "code": "OK",
        "body": {
            "msg": "OK User Profile set successfully"
        },
        "reqId": "2,"
    },
    {
        "code": "OK",
        "body": {
            "conversationId": "8602832d-dce1-446b-8445-0d51f5926a42"
        },
        "reqId": "1,"
    },
    {
        "code": "OK",
        "body": {
            "sequence": 0
        },
        "reqId": "3"
    }
]
```
{% endraw %}

**Elements in the Response**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| conversationId | The conversationId needed for send messages.  | String |
