---
title: Direct skill routing
redirect_from:
  - direct-skill-routing-example.html
level1: Documents
level2:
level3:
level4:
order:
indicator: 
permalink: level3:-level4:-direct-skill-routing.html

---

In this example we create a conversation and pass the **Skill ID** in the Payload in order to route the consumer conversation to the desired skill in LiveEngage.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Create new conversation with skill routing

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Example Request Body - JSON Payload**

```json
[  
  {
   "kind": "req",
   "id": "1,",
   "type": "userprofile.SetUserProfile",
   "body": {
     "authenticatedData": {
       "lp_sdes": [{
           "type": "ctmrinfo",
           "info": {
             "socialId": "1234567890",
             "ctype": "vip"
           }
         },
         {
           "type": "personal",
           "personal": {
             "firstname": "John",
             "lastname": "Doe",
             "gender": "MALE"
           }
         }
       ]
     }
   }
 },
   {  
      "kind":"req",
      "id":"1,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"CUSTOM",
         "channelType":"MESSAGING",
         "brandId":"{accountid}",
         "skillId":"2736637412"
      }
   }
]
```
**Properties**

| Property  | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ttrDefName | Defines the urgency of the conversation | "NORMAL" / "URGENT" / "PRIORITIZED" / "CUSTOM" / null | string | false |
| channelType | Which channel type is used | "MESSAGING" | string | false | Always use MESSAGING |
| brandId | {accountid} - LivePerson site ID | "LivePerson" |  string | true |
| skillId | Skill ID you would like to route the conversation | string | false | use -1 as default to target all skills available |
