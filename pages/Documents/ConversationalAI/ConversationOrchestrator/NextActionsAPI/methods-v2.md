---
pagename: Methods v2
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Next Actions API
permalink: conversation-orchestrator-next-actions-api-methods-v2.html
indicator: messaging
date_updated: 2022/11/17
---

There are two ways to use the Next Actions functionality:

* The REST API can directly access policies. A primary use case for this is to retrieve policy routing decisions when using [external, third-party bots](third-party-bots-getting-started.html), such as Watson or DialogFlow.
* A JavaScript function wraps the REST API for easy use in Conversation Builder. If you want to save and delete properties in Conversation Builder, use the Javascript wrapper functions.

### JavaScript wrapper
See the [discussion on the built-in askMaven function](conversation-builder-scripting-functions-askmaven.html) in Conversation Builder.

### REST API

#### Overview
{domain}/{api}?access_token=

Domain URL per environment:
* AMERICAS: https://z1.context.liveperson.net
* EMEA: https://z2.context.liveperson.net
* APAC: https://z3.context.liveperson.net

{: .attn-note}
See also the [discussion on generating the secure token](conversation-orchestrator-api-authorization.html#api-authorization-for-v2).

#### Get Next Actions
Gets a routing decision based on Conversation Orchestrator configured policies.

| Method | Path |
| --- | --- |
| POST | /v2​/policy​/nextaction |

##### Request body

| Name | Type | Description | Required? |
| --- | --- | --- | --- |
| accountId | String | The account ID of the brand | Required |
| conversationId | String | The conversation ID of the current conversation | Optional |
| customerId | String | LivePerson customer ID of the current conversation | Optional. However, this parameter is required if you're using SDEs to route in your dynamic policy. |
| sessionId | String | The group ID associated with the session store variable call to set values. If no session is specified, then the conversationId is used to associate with the session store variables. | Optional |
| lpToken | String | Bearer {bearer token} | Optional |
| policyId | String | The ID of the policy | Optional |

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