---
pagename: Methods v2
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Next Actions API
permalink: conversation-orchestrator-next-actions-api-methods-v2.html
indicator: messaging
---

There are two ways to use the Next Actions functionality:

* The REST API can directly access policies. A primary use case for this is to retrieve policy routing decisions when using external, third-party bots, such as Watson or DialogFlow. For more information on integrating your third-party bots with Conversational Cloud, see [here](third-party-bots-getting-started.html).
* A JavaScript function wraps the REST API for easy use in Conversation Builder. If you want to save and delete properties in Conversation Builder, use the Javascript wrapper functions.

### JavaScript wrapper
For information on this, see [here](conversation-builder-scripting-functions-askmaven.html) in the Conversation Builder documentation.

### REST API

#### Overview
{domain}/{api}?access_token=

Domain URL per environment:
* AMERICAS: https://z1.context.liveperson.net
* EMEA: https://z2.context.liveperson.net
* APAC: https://z3.context.liveperson.net

{: .important}
For information on generating the secure token, see [here](conversation-orchestrator-api-authorization.html#api-authorization-for-v2).

#### Get Next Actions
Gets a routing decision based on Conversation Orchestrator configured policies.

| Method | Path |
| --- | --- |
| POST | /v2​/policy​/nextaction |

##### Request body

| Name | Type | Description | Required? |
| --- | --- | --- | --- |
| accountId | string | The accountId of the brand | required |
| conversationId | string | The conversation ID of the current conversation | optional |
| customerId | string | LivePerson customer ID of the current conversation | optional |
| sessionId | string | The group ID associated with the session store variable call to set values. If no session is specified, then the conversationId is used to associate with the session store variables. | optional |
| lpToken | string | Bearer {bearer token} | optional | 
| policyId | string | The ID of the policy | optional |

##### Request payload example
```
{
  "accountId": "le12345678",
  "customerId": "myCustomerId",
  "sessionId": "mySessionId",
  "conversationId": "myConversationId",
  "lpToken": "Bearer myToken",
}
```

##### Request example
```bash
curl -X POST "https://{domain}/v2/policy/nextaction?access_token={Token}" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"accountId\":\"le12345678\",\"customerId\":\"myCustomerId\",\"sessionId\":\"mySessionId\",\"conversationId\":\"myConversationId\",\"lpToken\":\"Bearer myToken\"}"
```

##### Response payload example
```
[
  {
    "payload": {
      "message": "TEST Hello World"
    },
    "type": "SEND_MESSAGE"
  }
]
```

status code = 200

##### Response example
```
[
  {
    "payload": {
      "message": "TEST Hello World"
    },
    "type": "SEND_MESSAGE"
  }
]
```
