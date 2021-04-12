---
pagename: Methods
redirect_from:
  - maven-askmaven-methods.html
  - maven-ai-askmaven-methods.html
  - maven-ai-recommendation-api-methods.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Recommendation API
permalink: conversation-orchestrator-recommendation-api-methods.html
indicator: messaging
---

There are two sets of APIs that can be used to manage properties in the Conversation Context Service (CCS):

* The REST API that can directly access CCS. A primary use case for this is to retrieve policy routing decisions when using external, third-party bots, such as Watson or DialogFlow. For more information on integrating your third-party bots with Conversational Cloud, see [here](third-party-bots-getting-started.html).
* A JavaScript function that wraps the REST API for easy use in Conversation Builder. If you want to save and delete properties in Conversation Builder, use the Javascript wrapper functions.

### JavaScript wrapper
For information on this, see [here](conversation-builder-scripting-functions-askmaven.html) in the Conversation Builder documentation.

### REST API
Every API call to the Conversation Context Service requires the following auth headers to be accepted:  

* content-Type : application/json  
* maven-api-key : {YOUR API KEY}

Base URL per environment:

* AMERICAS : https://z1.askmaven.liveperson.net
* EMEA: https://z2.askmaven.liveperson.net
* APAC: https://z3.askmaven.liveperson.net

{: .important}
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
curl -X GET "http://localhost:3000/v1/account/le63071475/next-actions?conversationId=myconversationId&consumerId=myconsumerId&groupId=mygroupId" -H  "accept: */*" -H  "maven-api-key: YBrAm6BigSbWF2ZW4tcm91dGluZw=="
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
