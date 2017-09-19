---
title: Profiles Query Delta
keywords:
level1: Documents
level2: Admin
level3: Profile API
level4: Methods


order: 90
permalink: administration-profiles-query-delta.html

indicator: both
---

This API queries changes in profiles data.

### Request

| Method | URL |
 |:-------- | :----- |
 |POST  |/api/account/configuration/le-users/profiles/query |

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
              "revision": 0
             }
        ]
    }

All changes:

    {
        "type":1,
        "parameters":[
            {
              "site": "qa34649454",
              "from": 0,
              "to": 3
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
    "appDataList": [
        {
            "appName": "le-users",
            "accountList": {
                "accountList": [
                    {
                        "siteId": "le23319211",
                        "itemsCollection": {
                            "revision": 3,
                            "items": [
                                {
                                    "id": 2336300512,
                                    "deleted": false,
                                    "loginName": "dorinea@liveperson.com"
                                },
                                {
                                    "id": 2337419712,
                                    "deleted": false,
                                    "loginName": "dorine"
                                }
                            ]
                        }
                    }
                ]
            },
            "appApiVersion": 1
        }
    ]
}

**Response Body for All Changes Query:**
[
    {
        "revisionsCollection": [
            {
                "revision": 1,
                "items": [
                    {
                        "id": 2336300512,
                        "deleted": false,
                        "loginName": "dorinea@liveperson.com"
                    }
                ],
                "revisionDate": "2017-09-18 13:55:14"
            },
            {
                "revision": 2,
                "items": [
                    {
                        "id": 2336300512,
                        "deleted": false,
                        "loginName": "dorinea@liveperson.com"
                    }
                ],
                "revisionDate": "2017-09-18 15:15:06"
            },
            {
                "revision": 3,
                "items": [
                    {
                        "id": 2337419712,
                        "deleted": false,
                        "loginName": "dorine"
                    }
                ],
                "revisionDate": "2017-09-19 11:48:07"
            }
        ],
        "siteId": "le23319211"
    }
]
