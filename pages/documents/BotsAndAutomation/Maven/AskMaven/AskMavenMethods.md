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

#### Base URL per environment

QA URL: http://lp-mavencontext-app-qa.dev.lprnd.net

Alpha URL: https://va-a.context.liveperson.net 

Production URLs: 

AMERICAS : https://z1.context.liveperson.net  
EMEA: https://z2.context.liveperson.net  
APAC: https://z3.context.liveperson.net  

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
            <td>Optional - The conversation ID of the current conversation</td>
        </tr>
         <tr>
            <td>userId</td>
            <td>string</td>
            <td>Optional - LivePerson consumer ID of the current conversation</td>
        </tr>
        <tr>
            <td>groupId</td>
            <td>string</td>
            <td>Optional - The group ID associated with the session store variable call to set values.  If no groupId is specified, then the conversationId will be used to associate with the session store variables.
</td>
        </tr>
    </tbody>
</table>

### Get Next Actions

Get maven routing decision based on maven configured policies

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
            <td>Get Maven routing decision based on Maven configured policies</td>
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

