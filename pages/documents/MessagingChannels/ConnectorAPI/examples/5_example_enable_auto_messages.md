---
pagename: How to enable a feature
redirect_from:
  - enable-feature-example.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Examples
order: 64
indicator: messaging
permalink: connector-api-examples-how-to-enable-a-feature.html

---

The following example illustrates how to enable the auto messages feature upon conversation opening. The JSON payload is the same one used to create a new conversation but pay attention to the additional request header.

**Notes**:

1. Contact your account team to enable this feature on your account.

2. Upon creating a new conversation (via the CONVERSATION endpoint), make sure you also pass the additional **Client-Properties** request header. See [Example](enable-feature-example.html#create-a-new-conversation--enable-the-auto-messages-feature) below.

3. Every following request (via the SEND endpoint) must also include the additional **Client-Properties** request header. See [Example](enable-feature-example.html#send-a-message--enable-the-auto-messages-feature) below.


### Getting Started

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

### How to enable AUTO_MESSAGES

#### Create a new conversation & enable the AUTO Messages feature

**Request URI**

| Method | URL  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation?v=3 |


**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html)) |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |


**Request Body - JSON Payload**

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
         "brandId":"{accountid}",
         "conversationContext": {
         	 "visitorId": "",
         	 "sessionId": "",
         	 "interactionContextId": "2",
         	 "type": "SharkContext",
         	 "lang": "en-US"
         }
      }
   }
]
```

#### Send a message & enable the AUTO messages feature.

**Request URI**

| Method | URI  |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/messaging/consumer/conversation/send?v=3 |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | The AppJWT token (see details [here](Create_AppJWT.html)) |
| X-LP-ON-BEHALF | The ConsumerJWS token (see details [here](Create_ConsumerJWS.html)) |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |

**Request Body - JSON Payload**

```json
{  
   "kind":"req",
   "id":"1",
   "type":"ms.PublishEvent",
   "body":{  
      "dialogId":"{conversationId}",
      "event":{  
         "type":"ContentEvent",
         "contentType":"text/plain",
         "message":"Hi from Send Message only - Auto Messages feature"
      }
   }
}
```


<div class="important"> In order to receive AUTO MESSAGES, the two requests from above (creating the new conversation and sending the first message) <b>must follow one after another within 10 seconds</b>. In addition, it is required that the account has enabled the Controller Bot permissions in Account Config; contact your Customer Success Manager to arrange this.</div>
