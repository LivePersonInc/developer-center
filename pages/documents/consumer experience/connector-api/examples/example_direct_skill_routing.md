---
title: Direct skill routing
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 66
indicator: both
permalink: direct_skill_routing_example.html
search: include
---

In this example we create a conversation and send message while we also pass the **Skill ID** in the Payload for routing the consumer conversation to the desired skill in LiveEngage. 

### Create & Send with direct skill routing

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
         "channelType":"MESSAGING",
         "brandId":"{accountid}",
         "skillId":"2736637412"
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
            "message":"Hi from LivePerson Example - Create & Send (Direct Skill Routing)"
         }
      }
   }
]
```
{% endraw %}
