---
title: Set User Profile and SDEs
level1:
level2: Consumer Experience
level3: Connector API
level4: Examples
order: 67
indicator: both
permalink: sdes_routing_example.html
search: include
---

The Connector API provides the ability to set the user profile and change the user engagement attributes (SDEs). See below a few examples of how to do so.

The following [**JSON**](assets/schema/connectorapi/setUserProfile.json) includes all the supported attributes that can be passed in the body.


The SDEs supported for sending are the [Customer Info](https://developers.liveperson.com/engagment-attributes-types.html#customer-info){:target="_blank"} and [Personal Info](https://developers.liveperson.com/engagment-attributes-types.html#personal-info){:target="_blank"} SDEs.

**EXAMPLES**

[**Create & Send SDE Routing - ctype Example**](sdes_routing_example.html#create--send-sde-routing---ctype)

[**SDE Routing - companyBranch Example**](sdes_routing_example.html#sde-routing---companybranch)

[**SDE Routing - gender Example**](sdes_routing_example.html#create-send---sde-routing---gender)



### SDE Routing - companyBranch

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
         "authenticatedData":{  
            "lp_sdes":[  
               {  
                  "type":"ctmrinfo",
                  "info":{  
                     "socialId":"1234567890",
                     "companyBranch":"ACME"
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
         },
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
            "message":"Create & Send (SDE Routing: companyBranch)"
         }
      }
   }
]
```
{% endraw %}

### Create & Send SDE Routing - ctype

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation?v=3 |

**Json payload**

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
         },
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
            "message":"Create & Send (SDE Routing: ctype)"
         }
      }
   }
]
```
{% endraw %}

### Create & Send - SDE Routing - gender

**Request**

| Method | URL  |
| :--- | :--- |
| POST | https://\{\{domain\}\}/api/account/\{\{accountid\}\}/messaging/consumer/conversation?v=3 |

**Json payload**

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
         },
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
            "message":"Create & Send (SDE Routing: ctype)"
         }
      }
   }
]
```
{% endraw %}
