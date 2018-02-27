---
title: Agent Groups Query Delta
keywords:
level1: Documents
level2: Admin
level3: Agent Groups API
level4: Methods


order: 100
permalink: administration-agent-groups-query-delta.html

indicator: both
---

This API queries changes in agent groups data.

### Request

| Method | URL| 
| :-------- | :---- |
 |POST | https://{domain}/api/account/configuration/le-users/agentGroups/query |

**Request Headers**

| Header | Description |
| :------- | :------------| 
 |Authorization | Contains token string to allow request authentication and authorization. |

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
              "from": 65,
              "to": 67
             }
        ]
    }

**Query Parameters**

| Parameter | Description  |Type / Value | Required |
 |:----------- | :------------- | :-------------- | :--- |
 |v | API version number | Double. Default Value: 1.0 | Required |
 |select | Dynamic selection of the response fields | YOGA 'gdata' dialect. Non-existing  field: no error, blank in response. Supported fields: any in response body | Optional |

### Response

Response Body For Delta Query:

    {
      "appDataList": [
        {
          "appName": "le-users",
          "appApiVersion": 1,
          "accountList": {
            "accountList": [
              {
                "siteId": "qa34649454",
                "itemsCollection": {
                  "items": [
                    {
                      "id": 276942712,
                      "deleted": true,
                      "name": "grouasyuasadrep3",
                      "description": "group3 desc",
                      "parentGroupId": 276941812,
                      "isEnabled": true
                    },
                    {
                      "id": 277087312,
                      "deleted": false,
                      "name": "group3",
                      "description": "group3 desc",
                      "parentGroupId": 272208512,
                      "isEnabled": true
                    }
                  ],
                  "revision": 67
                }
              }
            ]
          }
        }
      ]
    }

Response Body for All Changes Query:

    {
      {
        "siteId": "qa34649454",
        "revisionsCollection": [
          {
            "revision": 66,
            "revisionDate": "Jun 24, 2015 2:30:00 PM",
            "items": [
              {
                "id": 276942712,
                "deleted": true,
                "name": "grouasyuasadrep3",
                "description": "group3 desc",
                "parentGroupId": 276941812,
                "isEnabled": true
              }
            ]
          },
          {
            "revision": 67,
            "revisionDate": "Jun 25, 2015 4:03:46 PM",
            "items": [
              {
                "id": 277087312,
                "deleted": false,
                "name": "group3",
                "description": "group3 desc",
                "parentGroupId": 272208512,
                "isEnabled": true
              }
            ]
          }
        ]
      }
    }
