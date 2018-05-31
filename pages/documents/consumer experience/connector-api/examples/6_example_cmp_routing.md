---
title: Campaign for messaging Routing
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 65
indicator: both
permalink: cmp_routing_example.html
search: include
---

In this example we create a conversation and send a message and while we do it we pass the **Engagement ID** and **Campaign ID** to LiveEngage to route the consumer conversation to the desired skill as planned by the Campaign Manager.



### Create & Send - Campaign for messaging Routing

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation?v=3 |

{% raw %}
```json
[  
   {  
      "kind":"req",
      "id":"2,",
      "type":"userprofile.SetUserProfile",
      "body":{  
         "firstName":"John",
         "lastName":"Doe",
         "avatarUrl":"http://avatarurl.com",
         "role":"X",
         "backgndImgUri":"http://something.com",
         "description":"Test Description",
         "privateData":{  
            "mobileNum":"1750345346",
            "mail":"test@gmail.com",
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
            "campaignId":"2739101812",
            "engagementId":"2739121912"
         },
         "channelType":"MESSAGING",
         "brandId":"{accountid}"
      }
   },
   {  
      "kind":"req",
      "id":"3",
      "type":"ms.PublishEvent",
      "body":{  
         "event":{  
            "type":"ContentEvent",
            "contentType":"text/plain",
            "message":"Hi from LivePerson Example - Create & Send (C4M Routing)"
         }
      }
   }
]
```
{% endraw %}

<span style="text-decoration:underline">Notes:</span>

More information [About Campaigns](https://www.liveperson.com/services/technical-support/about-campaigns){:target="_blank"}
