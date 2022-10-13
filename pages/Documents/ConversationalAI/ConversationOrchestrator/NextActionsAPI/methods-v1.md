---
pagename: Methods v1
redirect_from:
  - maven-askmaven-methods.html
  - maven-ai-askmaven-methods.html
  - maven-ai-recommendation-api-methods.html
  - conversation-orchestrator-recommendation-api-methods.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Next Actions API
permalink: conversation-orchestrator-next-actions-api-methods-v1.html
indicator: messaging
---

There are two ways to use the Next Actions functionality:

* The REST API that can directly access CCS. A primary use case for this is to retrieve policy routing decisions when using [external, third-party bots](third-party-bots-getting-started.html), such as Watson or DialogFlow.
* A JavaScript function that wraps the REST API for easy use in Conversation Builder. If you want to save and delete properties in Conversation Builder, use the Javascript wrapper functions.

### JavaScript wrapper
See the [discussion on the built-in askMaven function](conversation-builder-scripting-functions-askmaven.html) in Conversation Builder.

### REST API
Every API call to the Conversation Context Service requires the following auth headers to be accepted:
* content-Type: application/json
* maven-api-key: {YOUR API KEY}

Base URL per environment:

* AMERICAS: https://z1.askmaven.liveperson.net
* EMEA: https://z2.askmaven.liveperson.net
* APAC: https://z3.askmaven.liveperson.net

{: .attn-note}
The accountId and API key in these examples are fake; please replace them with the accountID and the developer key that you generated.

#### Get Next Actions
Get a routing decision based on Conversation Orchestrator configured policies.

##### URI

| Method | Path |
| --- | --- |
| GET | /v1/account/{accountId}/next-actions?conversationId={conversationId}&consumerId={consumerId}&groupId={groupId} |

##### Query parameters

| Name | Type | Description | Required? |
| --- | --- | --- | --- |
| accountId | string | The accountId of the brand | Required |
| conversationId | string | The conversation ID of the current conversation | Optional |
| consumerId | string | LivePerson consumer ID of the current conversation | Optional |
| groupId | string | The group ID associated with the session store variable call to set values. If no groupId is specified, then the conversationId is used to associate with the session store variables. | Optional |

##### Request payload
N/A

##### Request example
```bash
curl -X GET "https://{domain}/v1/account/{accountId}/next-actions?conversationId=myconversationId&consumerId=myconsumerId&groupId=mygroupId" -H  "accept: */*" -H  "maven-api-key: ABCD12BigSbWF2ZW4tcm91dGluZw=="
```

##### Response example
```
{
    nextActionId: 'UUID', // some uuid
    rule: {
        "id": "12345",
        "name": "This is VIP rule"
        actions: [
            {
                "type": "TRANSFER_TO_AGENT",
                "payload": {
                    agentId: 'g23hasd234',
                    fallbackSkillId: '12345'
                }
            },
            {
                "type": "SEND_MESSAGE",
                "payload": {
                    text: 'hello from maven"
                }
            }
        ]
    },
    noMatchReason: "NO_MATCHED_RULES" // only added if no rules are matches, rule will be null
    noMatchReason: "NO_POLICIES_ENABLED"
}
```