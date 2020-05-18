---
pagename: Public API
redirect_from:
  - bot-connectors-public-api.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
permalink: third-party-bots-public-api.html
indicator:
---

### Introduction

The following document outlines the Public API feature. This enhancement allows brands to takes actions directly on active conversations using provided API to give enriched experience for their customers. Using the API, Brands can take actions on the conversation that are not in direct response to a message passed to the bot. 
The API allows Brands to take proactive actions on a conversation and grow the usability of a bot in handling and owning the conversational flow with the consumer. 

The API supports the following methods:
<ul>
    <li><a href='#send-messages'>Sending Messages</a></li>
    <li><a href='#transfer-conversation'>Transfer Conversation</a></li>
    <li><a href='#close-conversation'>Close Conversation</a></li>
    <li><a href='#set-sdes'>Set SDEs</a></li>
    <li><a href='#set-time-to-response-ttr'>Set Time to Response (TTR)</a></li>    
</ul>

<div class="important">
Refer to the <a href="https://www.liveperson.com/policies/apitou">API Terms of Use</a>, if you haven't already done so.<br>
</div>

### Flow for using Public API

#### Step 1. Identify the Third-Party Bots API Domain

To identify the Third-Party Bots API endpoint user, first get domain information via [Domain Retrieval Tool](/agent-domain-domain-api.html). Enter Account Id/Site Id in the 'Domain Retrieval Tool' and the user will be able to see the 'Service Names' and their Base URIs relevant to the account. Search for `botConnectorsDomain` and then map service base URI to corresponding Third-Party Bots API Domain from the table below.

| Service Domain                   | Third-Party Bots API Domain                      |
| :------------------------------- | :----------------------------------------------- |
| z1.bot-connectors.liveperson.net | https://bot-platform-api.fs.liveperson.com/      |
| z2.bot-connectors.liveperson.net | https://bot-platform-api.emea.fs.liveperson.com/ |
| z3.bot-connectors.liveperson.net | https://bot-platform-api.apac.fs.liveperson.com/ |

#### Step 2. Get Bearer Token

To get the bearer token you must perform a `login` request to Third-Party Bots API Domain

#### Request

| Method | URL                                                                                                         |
| :----- | :---------------------------------------------------------------------------------------------------------- |
| POST   | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/account/{accountId}/login?v=1.3 |

**Path Parameters**

| Parameter | Description                 | Type   | Required | Notes                                                                      |
| :-------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId | LP site ID                  | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description    | Type   | Required | Notes      |
| :-------- | :------------- | :----- | :------- | :--------- |
| v         | version of API | number | Required | value: 1.3 |

**Headers**

| Header       | Description      |
| :----------- | :--------------- |
| Content-Type | application/json |

**Body**

Example payload of the request

```javascript
{
    "username": "someusername",
    "password": "123456"
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{userName}` and `{password}` from the below command with your information

```bash
curl -X POST \
  'https://{botDomain}/api/account/{accountId}/login?v=1.3' \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "{userName}",
    "password": "{password}"
}'

```

**Response**:

```json
{
  "bearer": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

#### Step 2. Call API

Currently, the user is allowed to carry out following actions using our Public API

<ul>
    <li><a href='#send-messages'>Sending Messages</a></li>
    <li><a href='#transfer-conversation'>Transfer Conversation</a></li>
    <li><a href='#close-conversation'>Close Conversation</a></li>
    <li><a href='#set-sdes'>Set SDEs</a></li>
    <li><a href='#set-time-to-response-ttr'>Set Time to Response (TTR)</a></li>    
</ul>

### Send Messages

This API allows The user to send The message(s) to an ongoing conversation. We support the sending of Text, Pause/Delay, Structured Content ([more info](getting-started-with-rich-messaging-introduction.html)), and Quick Replies. Moreover, We also allow sending of encodedMetadata and metadata/context information ([more info](messaging-agent-sdk-conversation-metadata-guide.html)) with the message(s) as well.

#### Request

| Method | URL                                                                                                                                                 |
| :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/messages?ttl={ttl} |

**Path Parameters**

| Parameter      | Description                 | Type   | Required | Notes                                                                      |
| :------------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                  | string | Required |                                                                            |
| conversationId | LP Conversation ID          | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Body**

Example payload of the request with Simple Text, Pause/Delay, [Structured Content](getting-started-with-rich-messaging-introduction.html) and Quick Replies messages with [context information/metadata](messaging-agent-sdk-conversation-metadata-guide.html) and encodedMetadata.

{: .important}
**Please note** Quick Replies and encodedMetadata are only supported in messaging conversations

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
        "message": "Do you like bots?"
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
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}` and [`{bearerToken}`](#step-2-get-bearer-token) from the below command with your information

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

**Response Body**

| Attribute name | Description                         |
| :------------- | :---------------------------------- |
| commandId      | Identifier of the requested command |

### Transfer Conversation

This API allows an ongoing conversation to be transferred to another skill. User has to provide a skill name that is created previously. The skill name is case-sensitive.

#### Request

| Method | URL                                                                                                                                                 |
| :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/transfer?ttl={ttl} |

**Path Parameters**

| Parameter      | Description                 | Type   | Required | Notes                                                                      |
| :------------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                  | string | Required |                                                                            |
| conversationId | LP Conversation ID          | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Body**

Example payload of the request with skill name `human_skill`.

{: .important}
**Please note** the skill name is **case sensitive** so provide with care

```javascript
{
  "skill": "human_skill"
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}`, [`{bearerToken}`](#step-2-get-bearer-token) and `{skillName}` from the below command with your information

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/transfer' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{
  "skill": "{skillName}"
}'

```

**Response Body**

| Attribute name | Description                         |
| :------------- | :---------------------------------- |
| commandId      | Identifier of the requested command |

### Close Conversation

This API allows an ongoing conversation to be ended.

#### Request

| Method | URL                                                                                                                                              |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/close?ttl={ttl} |

**Path Parameters**

| Parameter      | Description                 | Type   | Required | Notes                                                                      |
| :------------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                  | string | Required |                                                                            |
| conversationId | LP Conversation ID          | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Body**

There is no request body for this API.

**Example cURL**:

{: .important}
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}` and [`{bearerToken}`](#step-2-get-bearer-token) from the below command with your information

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/close' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{}'

```

**Response Body**

| Attribute name | Description                         |
| :------------- | :---------------------------------- |
| commandId      | Identifier of the requested command |

### Set SDES

This API allows setting SDES of an ongoing conversation. More information about available SDES can be [found here](engagement-attributes-types-of-engagement-attributes.html).

#### Request

| Method | URL                                                                                                                                             |
| :----- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/sdes?ttl={ttl} |

**Path Parameters**

| Parameter      | Description                 | Type   | Required | Notes                                                                      |
| :------------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                  | string | Required |                                                                            |
| conversationId | LP Conversation ID          | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Body**

| Parameter      | Description   | Type   | Required | Notes                                                                                                           |
| :------------- | :------------ | :----- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| sdes           | SDES          | array  | Required | Valid SDES defined in the [developers documentation](engagement-attributes-types-of-engagement-attributes.html) |
| sharkVisitorId | LP Visitor ID | string | Required |                                                                                                                 |
| sharkSessionId | LP Session ID | string | Required |                                                                                                                 |

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
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}`, [`{bearerToken}`](#step-2-get-bearer-token), `{visitorId}` and `{sessionId}` from the below command with your information

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

**Response Body**

| Attribute name | Description                         |
| :------------- | :---------------------------------- |
| commandId      | Identifier of the requested command |

### Set Time to Response (TTR)

LivePerson Messaging uses 4 different types of priorities: `URGENT`, `NORMAL`, `PRIORITIZED` and `CUSTOM`. This API allows setting TTR for the ongoing conversation.

{: .important}
**Please note** setting of TTR is supported only for messaging conversation

#### Request

| Method | URL                                                                                                                                            |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/ttr?ttl={ttl} |

**Path Parameters**

| Parameter      | Description                 | Type   | Required | Notes                                                                      |
| :------------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                  | string | Required |                                                                            |
| conversationId | LP Conversation ID          | string | Required |                                                                            |

**Query Parameters**

| Parameter | Description                                 | Type   | Required | Notes                                           |
| :-------- | :------------------------------------------ | :----- | :------- | :---------------------------------------------- |
| ttl       | Number of seconds to keep the command valid | number | No       | Value Must be between 10-120. Default Value: 30 |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Body**

Example payload of the request with setting conversation ttr to Urgent

```json
{
  "ttrType": "URGENT"
}
```

In case of `CUSTOM` as `ttrType` user must provide a value. The unit of value is seconds. In such case request payload will look like as follows:

```json
{
  "ttrType": "CUSTOM",
  "value": "10"
}
```

**Example cURL**:

{: .important}
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}` and [`{bearerToken}`](#step-2-get-bearer-token) from the below command with your information.

```bash
curl -X POST \
  'https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/ttr' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \
  -d '{
	"ttrType": "URGENT"
}'

```

**Response Body**

| Attribute name | Description                         |
| :------------- | :---------------------------------- |
| commandId      | Identifier of the requested command |

### Get Conversation Commands

This API allows returning of the commands that were sent to a conversation via Public API.

{: .important}
**Please note** Only commands of on-going conversation will be returned. If conversation is closed/ended commands will not be returned

#### Request

| Method | URL                                                                                                                                      |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/command |

**Path Parameters**

| Parameter      | Description                 | Type   | Required | Notes                                                                      |
| :------------- | :-------------------------- | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                  | string | Required |                                                                            |
| conversationId | LP Conversation ID          | string | Required |                                                                            |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Example cURL**:

{: .important}
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}` and [`{bearerToken}`](#step-2-get-bearer-token) from the below command with your information.

```bash
curl -X GET \
  https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/command \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \

```

#### Example Response

Example response of an request with `Array` of commands returned.

{: .important}
**Please note** there could be three states of a command: `waiting` (command execution pending), `failed` (command execution caused an error) and `completed` (command executed successfully)

```json
[
  {
    "id": "24",
    "data": {
      "type": "sdes",
      "payload": {
        "sdes": [
          {
            "type": "personal",
            "personal": {
              "gender": "Male"
            }
          }
        ],
        "sharkSessionId": "sadjkasdhi23D-P6BbaFRsBkA",
        "sharkVisitorId": "dladji38dsda"
      },
      "conversationId": "2312ed0e-662e-4c94-9022-f0991058b4a4",
      "isInternal": true,
      "timeoutTime": 1580396820804
    },
    "result": null,
    "state": "waiting"
  },
  {
    "id": "23",
    "data": {
      "type": "messages",
      "payload": [
        {
          "payload": "Hi i am text Message",
          "metadata": [],
          "type": "text"
        }
      ],
      "conversationId": "2312ed0e-662e-4c94-9022-f0991058b4a4",
      "isInternal": true,
      "timeoutTime": 1580474718054
    },
    "result": {
      "error": {
        "trace": [],
        "name": "com.liveperson.bot-connectors-worker.error.public-api.execution-failed"
      },
      "startTime": 1580637839412,
      "endTime": 1580637839412,
      "executionTime": 0
    },
    "state": "failed"
  },
  {
    "id": "21",
    "data": {
      "type": "sdes",
      "payload": {
        "sdes": [
          {
            "type": "personal",
            "personal": {
              "firstname": "Muster",
              "lastname": "Frau"
            }
          }
        ],
        "sharkSessionId": "sadjkasdhi23D-P6BbaFRsBkA",
        "sharkVisitorId": "dladji38dsda"
      },
      "conversationId": "2312ed0e-662e-4c94-9022-f0991058b4a4",
      "isInternal": true,
      "timeoutTime": 1580396820804
    },
    "result": {
      "executionTime": 405,
      "startTime": 1580396700808,
      "endTime": 1580396701213
    },
    "state": "completed"
  }
]
```

### Get Conversation Command

This API allows returning of a single command that was sent to a conversation via Public API.

{: .important}
**Please note** Only command of on-going conversation will be returned. If conversation is closed/ended command will not be returned

#### Request

| Method | URL                                                                                                                                                  |
| :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | https://[{botDomain}](#step-1-identify-the-third-party-bots-api-domain)/api/v1/account/{accountId}/conversation/{conversationId}/command/{commandId} |

**Path Parameters**

| Parameter      | Description                                 | Type   | Required | Notes                                                                      |
| :------------- | :------------------------------------------ | :----- | :------- | :------------------------------------------------------------------------- |
| botDomain      | Third-Party Bots API domain                 | string | Required | Valid Third-Party API domain belonging to the zone on which account exists |
| accountId      | LP site ID                                  | string | Required |                                                                            |
| conversationId | LP Conversation ID                          | string | Required |                                                                            |
| commandId      | Command ID that was sent via the Public API | string | Required |                                                                            |

**Headers**

| Header        | Description          |
| :------------ | :------------------- |
| Content-Type  | application/json     |
| Authorization | Bearer {bearerToken} |

**Example cURL**:

{: .important}
**Please note** Make sure to replace [`{botDomain}`](#step-1-identify-the-third-party-bots-api-domain), `{accountId}`, `{conversationId}`, [`{bearerToken}`](#step-2-get-bearer-token) and `{commandId}` from the below command with your information.

```bash
curl -X GET \
  https://{botDomain}/api/v1/account/{accountId}/conversation/{conversationId}/command/{commandId} \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {bearerToken}' \

```

#### Example Response

Example response of a command returned by the API will look like this with state `completed`

{: .important}
**Please note** there could be three states of a command: `waiting` (command execution pending), `failed` (command execution caused an error) and `completed` (command executed successfully). See [example response](#example-response) of GET Commands API to see other examples of different states.

```json
{
  "id": "21",
  "data": {
    "type": "sdes",
    "payload": {
      "sdes": [
        {
          "type": "personal",
          "personal": {
            "firstname": "Muster",
            "lastname": "Frau"
          }
        }
      ],
      "sharkSessionId": "sadjkasdhi23D-P6BbaFRsBkA",
      "sharkVisitorId": "dladji38dsda"
    },
    "conversationId": "2312ed0e-662e-4c94-9022-f0991058b4a4",
    "isInternal": true,
    "timeoutTime": 1580396820804
  },
  "result": {
    "executionTime": 405,
    "startTime": 1580396700808,
    "endTime": 1580396701213
  },
  "state": "completed"
}
```

### Response Codes

| Code | Response                                                             |
| :--- | :------------------------------------------------------------------- |
| 200  | OK - request for the given API succeeded.                            |
| 400  | Bad request - Problem with body or query parameters.                 |
| 401  | Unauthorized - Invalid bearer token.                                 |
| 404  | Not Found - If the provided conversation Id is invalid or not found. |
| 500  | Internal server error.                                               |
