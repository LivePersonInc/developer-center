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

    }

**Response Body for All Changes Query:**

    {  
   
    }

