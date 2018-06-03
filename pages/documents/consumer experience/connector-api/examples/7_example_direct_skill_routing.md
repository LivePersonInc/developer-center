---
title: Direct skill routing
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 66
indicator: both
permalink: direct_skill_routing_example.html

---

In this example we create a conversation and pass the **Skill ID** in the Payload in order to route the consumer conversation to the desired skill in LiveEngage.

### Create new conversation with skill routing

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |

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

| Attribute  | Description | Value/Example | Type | Mandatory | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ttrDefName | Defines the urgency of the conversation | "NORMAL" / "URGENT" / "PRIORITIZED" / "CUSTOM" / null | string | false |
| channelType | Which channel type is used | "MESSAGING" | string | false | Always use MESSAGING |
| brandId | {accountid} - LivePerson site ID | "LivePerson" |  string | true |
| skillId | Skill ID you would like to route the conversation | string | false | use -1 as default to target all skills available |
