---
title: Update special occasions
Keywords:
level1: Documents
level2: Account Configuration
level3: AC workdays API
level4: Methods

order: 80
permalink: 

indicator: both
---

Update existing special occasions.

### Request

| Method | URL |
| :-------- | :------ |
| PUT  |/api/account/{accountId}/configuration/ac-common/specialoccasion |

**Request Headers**

| Header | Description |
 |:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |

**Request Body**

[
  {
    "id": 2837048012,
    "deleted": false,
    "name": "special occasion 2",
    "description": "Description for special occasion 1",
    "isDefault": false,
    "events": [
      {
        "meta": {
          "working": true,
          "name": "user1"
        },
        "start": {
          "dateTime": "2017-03-27T06:00:00",
          "timeZone": "Europe/Zurich"
        },
        "end": {
          "dateTime": "2018-03-27T13:00:00",
          "timeZone": "Europe/Zurich"
        },
        "recurrence": [
          
        ]
      }
    ]
  }
]

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$ |

### Request Headers

 |Header | Description| Notes |
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 if-match|Contains special occasion's current revision number
 
### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 304  | Not Modified          |
| 400  | Bad Request           |
| 401  | Not Authorized        |
| 403  | Forbidden             |
| 404  | Data Not Found        |
| 409  | Conflict              |
| 500  | Internal Server Error |

### Response Headers

 |Header|  Description| 
 |:-------|   :-----  |
 |ac-revision|  Account config object type collection revision.|  

