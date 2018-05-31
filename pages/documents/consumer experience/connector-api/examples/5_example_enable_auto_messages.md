---
title: How to enable a feature
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 64
indicator: both
permalink: enable_feature_example.html
search: include
---

The following examples illustrates how to enable auto messages feature. Pay attention also to the required request header. Please refer to this [**Client Properties Tutorial**](https://developers.liveperson.com/consumer-int-client-props.html) to learn more on the which client properties you can send and also which features can be enabled. You can also refer directly to this [**JSON Schema**](https://developers.liveperson.com/assets/schema/infra/clientPropertiesHeader.json)

### How to enable feature, e.g. AUTO_MESSAGES

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation?v=3 |

**Additional Request Header**

| Header | Description | Example |
| :--- | :--- | --- |
| Client-Properties | A JSON string for the client properties which activates AUTO_MESSAGES | { "type": ".ClientProperties", "features": ["AUTO_MESSAGES"] } |

**Json payload**

{% raw %}
```json
[  
   {  
      "kind":"req",
      "id":"2,",
      "type":"userprofile.SetUserProfile",
      "body":{  
         "firstName":"WEB UI USER",
         "lastName":"Test",
         "avatarUrl":"http://avatarurl.com",
         "role":"X",
         "backgndImgUri":"http://something.com",
         "description":"Test Description",
         "privateData":{  
            "mobileNum":"1750345346",
            "mail":"test@email.com",
            "pushNotificationData":{  
               "serviceName":"Service",
               "certName":"CertName",
               "token":"TOKEN"
            }
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
            "campaignId":"99999",
            "engagementId":"888888"
         },
         "conversationContext":{  
            "visitorId":"A3ZTY3Zjk1MDExZTczYTU4",
            "sessionId":"ys2wSqaSRSOJGki7VhEDKQ",
            "interactionContextId":"2",
            "type":"SharkContext",
            "lang":"en-US",
            "features":[  
               "AUTO_MESSAGES"
            ]
         },
         "channelType":"MESSAGING",
         "brandId":"{{accountid}}",
         "skillId":"2736637412"
      }
   }
]
```
{% endraw %}

<span style="text-decoration:underline">Notes:</span>

The __conversationContext__ part in the payload makes the difference so AUTO_MESSAGES works.
