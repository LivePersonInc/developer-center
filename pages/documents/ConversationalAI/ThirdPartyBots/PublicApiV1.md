---
pagename: Public API (V1)
redirect_from:
  - bot-connectors-public-api-v1.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-public-api-v1.html
indicator:
---

### Introduction

The following documentation outlines the Public API feature. This enhancement allows brands to takes actions directly on active conversations using provided API to give enriched experience for their customers.

<div class="important">
Refer to the <a href="https://www.liveperson.com/policies/apitou">API Terms of Use</a>, if you haven't already done so.<br>
</div>

### Calling Flow for Public API

#### Step 1. Identify the Domain via Domain API

#### Step 1. Get Bearer Token

Before using the our Public APIs user must get a valid bearer token otherwise the request will be rejected. For this reason you need to perform an authorization Request which in return will give you valid access token that will be used with the calling

#### Step 2. Call API

Currently user is allowed to carry out following actions using our Public API

<ul>
    <li><a href='/third-party-bots-public-api-v1.html#send-messages'>Sending Messages</a></li>
    <li><a href='/third-party-bots-public-api-v1.html#transfer-conversation'>Transfer Conversation</a></li>
    <li><a href='/third-party-bots-public-api-v1.html#close-conversation'>Close Conversation</a></li>
    <li><a href='/third-party-bots-public-api-v1.html#set-sdes'>Set SDEs</a></li>
    <li><a href='/third-party-bots-public-api-v1.html#set-time-to-response-ttr'>Set Time to Response (TTR)</a></li>    
</ul>

### Send Messages

#### Request

| Method | URL                                                                                              |
| :----- | :----------------------------------------------------------------------------------------------- |
| PUT    | https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationID}>/messages?ttl={ttl} |

**Path Parameters**

| Parameter      | Description            | Type   | Required | Notes                                                                      |
| :------------- | :--------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bot domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID             | string | Required |                                                                            |
| conversationID | LP Conversation ID     | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header       | Description      |
| :----------- | :--------------- |
| Content-Type | application/json |

**Body**

Example payload of the request with Simple text, delay, structured content and a Quick Replies (quick replies only supported in messaging conversations) messages with context information.

```javascript
{
  "context": {
    "intentId": "testId",
    "intentName": "test",
    "confidenceScore": 1
  },
  "messages": [
    "Hi i am text Message",
    {
      "delay": 4,
      "typing": true
    },
    {
      "structuredContent": {
        "quickReplies": {
          "type": "quickReplies",
          "itemsPerRow": 8,
          "replies": [
            {
              "type": "button",
              "tooltip": "yes i do",
              "title": "yes",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "yep"
                  }
                ]
              }
            },
            {
              "type": "button",
              "tooltip": "No!",
              "title": "No!",
              "click": {
                "actions": [
                  {
                    "type": "publishText",
                    "text": "No!"
                  }
                ],
                "metadata": [
                  {
                    "type": "ExternalId",
                    "id": "No-4321"
                  }
                ]
              }
            }
          ]
        },
        "message": "message to be send"
      },
      "metadata": [
        {
          "type": "ExternalId",
          "id": "1234566"
        }
      ],
      "encodedMetadata": "SGVsbG8gV29ybGQh"
    },
    {
      "structuredContent": {
        "type": "vertical",
        "elements": [
          {
            "type": "button",
            "click": {
              "actions": [
                {
                  "text": "Recommend me a movie, please",
                  "type": "publishText"
                }
              ]
            },
            "title": "Recommend a movie"
          }
        ]
      },
      "metadata": [
        {
          "type": "ExternalId",
          "id": "123-YES"
        }
      ],
      "encodedMetadata": "SGVsbG8gV29ybGQh"
    }
  ]
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace `{botDomain}`, `{accountId}`, `{conversationId}` and `{bearerToken}` from the below command with your information.

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/messages' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{
  "context": {
    "intentId": "testId",
    "intentName": "test",
    "confidenceScore": 1
  },
  "messages": [
    "Hi i am a text message",
    "I am second message"
  ]
}'

```

### Transfer Conversation

#### Request

| Method | URL                                                                                              |
| :----- | :----------------------------------------------------------------------------------------------- |
| PUT    | https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationID}>/transfer?ttl={ttl} |

**Path Parameters**

| Parameter      | Description            | Type   | Required | Notes                                                                      |
| :------------- | :--------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bot domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID             | string | Required |                                                                            |
| conversationID | LP Conversation ID     | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header       | Description      |
| :----------- | :--------------- |
| Content-Type | application/json |

**Body**

Example payload of the request with skill name `human_skill`.

{: .important}
**Please note** the skill name is **case sensitive** so provide with care.

```javascript
{
  "skill": "human_skill"
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace `{botDomain}`, `{accountId}`, `{conversationId}`, `{bearerToken}` and `{skillName}` from the below command with your information.

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/transfer' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{
  "skill": "{skillName}"
}'

```

### Close Conversation

#### Request

| Method | URL                                                                                           |
| :----- | :-------------------------------------------------------------------------------------------- |
| PUT    | https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationID}>/close?ttl={ttl} |

**Path Parameters**

| Parameter      | Description            | Type   | Required | Notes                                                                      |
| :------------- | :--------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bot domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID             | string | Required |                                                                            |
| conversationID | LP Conversation ID     | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header       | Description      |
| :----------- | :--------------- |
| Content-Type | application/json |

**Body**

There is no request body for this API.

**Example cURL**:

{: .important}
**Please note** Make sure to replace `{botDomain}`, `{accountId}`, `{conversationId}` and `{bearerToken}` from the below command with your information.

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/close' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{}'

```

### Set SDES

#### Request

| Method | URL                                                                                          |
| :----- | :------------------------------------------------------------------------------------------- |
| PUT    | https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationID}>/sdes?ttl={ttl} |

**Path Parameters**

| Parameter      | Description            | Type   | Required | Notes                                                                      |
| :------------- | :--------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bot domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID             | string | Required |                                                                            |
| conversationID | LP Conversation ID     | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header       | Description      |
| :----------- | :--------------- |
| Content-Type | application/json |

**Body**

| Parameter      | Description   | Type   | Required | Notes                                              |
| :------------- | :------------ | :----- | :------- | :------------------------------------------------- |
| sdes           | SDES          | array  | Required | Valid SDES defined in the developers documentation |
| sharkVisitorId | LP Visitor ID | string | Required |                                                    |
| sharkSessionId | LP Session ID | string | Required |                                                    |

Example payload of the request with setting visitors name and gender

```json
{
  "sdes": [
    {
      "type": "personal",
      "personal": {
        "firstname": "Muster",
        "lastname": "Mann",
        "gender": "MALE"
      }
    }
  ],
  "sharkVisitorId": "M0NG1231432YjgzZDcyN2U3",
  "sharkSessionId": "tx8LMk34242344yBHgrZ2qg"
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace `{botDomain}`, `{accountId}`, `{conversationId}`, `{bearerToken}`, `{visitorId}` and `{sessionId}` from the below command with your information.

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/sdes' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{
    "sdes": [
        {
            "type": "personal",
            "personal": {
                "firstname": "Muster",
                "lastname": "Mann",
                "gender": "MALE"
            }
        }
    ],
    "sharkVisitorId": "{visitorId}",
    "sharkSessionId": "{sessionId}"
}'

```

### Set Time to Response (TTR)

#### Request

| Method | URL                                                                                         |
| :----- | :------------------------------------------------------------------------------------------ |
| PUT    | https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationID}>/ttr?ttl={ttl} |

**Path Parameters**

| Parameter      | Description            | Type   | Required | Notes                                                                      |
| :------------- | :--------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bot domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID             | string | Required |                                                                            |
| conversationID | LP Conversation ID     | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header       | Description      |
| :----------- | :--------------- |
| Content-Type | application/json |

**Body**

Example payload of the request with setting conversation ttr to Urgent

```json
{
  "ttrType": "URGENT"
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace `{botDomain}`, `{accountId}`, `{conversationId}` and `{bearerToken}` from the below command with your information.

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/ttr' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{
	"ttrType": "URGENT"
}'

```

### Response

**Response Codes**

| Code | Response                                                                               |
| :--- | :------------------------------------------------------------------------------------- |
| 200  | OK - request for the given API succeeded.                                              |
| 400  | Bad request - Problem with body or query parameters.                                   |
| 404  | Not Found - If the conversation provided with the request not found or active anymore. |
| 500  | Internal server error.                                                                 |

**Response Body**

| Attribute name | Description              |
| :------------- | :----------------------- |
| jobId          | Identifier of the action |
