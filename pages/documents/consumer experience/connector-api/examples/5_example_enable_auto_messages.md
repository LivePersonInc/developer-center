---
title: How to enable a feature
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 64
indicator: both
permalink: connector-api-examples-how-to-enable-a-feature.html

---

The following example illustrates how to enable the auto messages feature upon conversation opening. The JSON payload is the same one used to create a new conversation but pay attention to the additional request header.

**Note**: Make sure to pass the required "Client-Properties" request header as per the below example.

### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

### How to enable AUTO_MESSAGES

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountid}/messaging/consumer/conversation?v=3 |


**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html){:target="_blank"}) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html){:target="_blank"}) |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |


**Example Request Body - JSON Payload - Creating a new conversation**

```json
[  
   {  
      "kind":"req",
      "id":"1,",
      "type":"userprofile.SetUserProfile",
      "body":{  
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "ctype":"vip"
                  }
               },
               {  
                  "type":"personal",
                  "personal":{  
                     "firstname":"John",
                     "lastname":"Doe",
                     "gender":"MALE"
                  }
               }
            ]
         }
      }
   },
   {  
      "kind":"req",
      "id":"2,",
      "type":"cm.ConsumerRequestConversation",
      "body":{  
         "ttrDefName":"NORMAL",
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   }
]
```
