---
title: Campaign for messaging Routing
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 65
indicator: both
permalink: cmp-routing-example.html

---

In this example we create a conversation and pass the **Engagement ID** and **Campaign ID** to LiveEngage in order to route the consumer conversation to the desired skill as designed by the Campaign Manager.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### Create new conversation and send campaign information

**Request URI**

| Method | URI  |
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
         "campaignInfo":{  
            "campaignId":"2739101812",
            "engagementId":"2739121912"
         },
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```

**Note**:

For more information about campaigns, please [click here](https://www.liveperson.com/services/technical-support/about-campaigns){:target="_blank"}.
