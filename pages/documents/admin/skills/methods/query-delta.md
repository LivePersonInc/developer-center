---
title: Skills Query Delta
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 90
permalink: administration-skills-query-delta.html

indicator: both
---

This API queries changes in skills data.

### Request

| Method | URL |
 |:-------- | :----- |
 |POST  |/api/account/configuration/le-users/skills/query |

**Request Headers**

 |Header | Description |
|:---------|  :------------ |
|Authorization|  Contains token string to allow request authentication and authorization. |

**Request Body**

There are 2 types of query:

- Delta (type 0): Returns the active revision for a site.
- All changes (type 1): Returns a range of revision data.

Delta:

    {
        "type":0,
        "parameters":[
            {
              "site": "qa34649454",
              "revision": 26
             }
        ]
    }

All changes:

    {
        "type":1,
        "parameters":[
            {
              "site": "qa34649454",
              "from": 20,
              "to": 23
             }
        ]
    }

**Query Parameters**

 |Parameter     |Description      |    Type / Value | Required |
 |:----------- | :-------------     |  :------------- | :--- |
| v |            API version number |  Double. Default Value: 1.0 | Required |
 |select | Dynamic selection of the response fields  YOGA 'gdata' dialect. Non-existing  field: no error, blank in response. Supported fields: any in response body.  |Optional  |

### Response

**Response Body For Delta Query:**

    {
       "appDataList":[
          {
             "appName":"le-users",
             "appApiVersion":1,
             "accountList":{
                "accountList":[
                   {
                      "siteId":"qa34649454",
                      "itemsCollection":{
                         "items":[
                            {
                               "id":276940312,
                               "deleted":false,
                               "name":"MySkill2",
                               "description":"skillDescription",
                               "skillOrder":0,
                               "maxWaitTime":0
                            },
                            {
                               "id":276940412,
                               "deleted":false,
                               "name":"MySkill1",
                               "description":"skillDescription",
                               "skillOrder":0,
                               "maxWaitTime":0,
                               "skillRoutingConfiguration":[
                                  {
                                     "priority":1,
                                     "splitPercentage":10,
                                     "agentGroupId":326244812
                                  },
                                  {
                                     "priority":2,
                                     "splitPercentage":20,
                                     "agentGroupId":326244812
                                  }
                               ]
                            }
                         ],
                         "revision":27
                      }
                   }
                ]
             }
          }
       ]
    }

**Response Body for All Changes Query:**

    {  
       {  
          "siteId":"qa34649454",
          "revisionsCollection":[  
             {  
                "revision":21,
                "revisionDate":"May 20, 2015 11:56:40 AM",
                "items":[  
                   {  
                      "id":260603812,
                      "deleted":false,
                      "name":"skill11",
                      "description":"skillDescription",
                      "skillOrder":0,
                      "maxWaitTime":0,
                      "skillRoutingConfiguration":[  
                         {  
                            "priority":1,
                            "splitPercentage":10,
                            "agentGroupId":326244812
                         },
                         {  
                            "priority":2,
                            "splitPercentage":20,
                            "agentGroupId":326244812
                         }
                      ]
                   }
                ]
             },
             {  
                "revision":23,
                "revisionDate":"May 20, 2015 12:15:55 PM",
                "items":[  
                   {  
                      "id":260603812,
                      "deleted":false,
                      "name":"skill11",
                      "description":"skillDescriptionuu",
                      "skillOrder":0,
                      "maxWaitTime":0
                   }
                ]
             },
             {  
                "revision":22,
                "revisionDate":"May 20, 2015 11:57:27 AM",
                "items":[  
                   {  
                      "id":260603812,
                      "deleted":false,
                      "name":"skill11",
                      "description":"skillDescriptionuu",
                      "skillOrder":0,
                      "maxWaitTime":0
                   }
                ]
             }
          ]
       }
    }
