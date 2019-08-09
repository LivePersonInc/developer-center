---
pagename: Methods
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: AskMaven
permalink: maven-askmaven-methods.html
indicator: messaging
---

Every API call to the AskMaven service requires the following Auth Headers to be accepted

`Content-Type : application/json`

`maven-api-key : <INSERT YOUR API KEY HERE>`

### Query Parameters

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>conversationId</td>
            <td>string</td>
            <td>Optional - The conversation id of the current conversation</td>
        </tr>
        <tr>
            <td>groupId</td>
            <td>string</td>
            <td>Optional - The group id associated with the Context API custom namespace variable call to set values</td>
        </tr>
        <tr>
            <td>conversationId</td>
            <td>string</td>
            <td>Optional - The conversation id of the current conversation</td>
        </tr>
    </tbody>
</table>

### Get Next Actions

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/v1/account/{accountId}/next-actions</td>
            <td>Get maven routing decision based on maven configured policies</td>
        </tr>
    </tbody>
</table>

Response Body: 

```bash
{
    nextActionId: ‘UUID’,  // some uuid 
rule: {
"id": "12345",
"name": "This is VIP rule"
actions: [  

{
    "type": "TRANSFER_TO_AGENT",
    "payload": { agentId: ‘g23hasd234’, fallbackSkillId: ‘12345’ }
  },
  {
    "type": "SEND_MESSAGE",
    "payload": { text: ‘hello from maven” }
  }
]
},

noMatchReason: “NO_MATCHED_RULES” // only added if no rules are matches, rule will be null
noMatchReason: “NO_POLICIES_ENABLED” 
}
```

