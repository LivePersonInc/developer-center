---
title: Retrieve Special Occasion by ID
Keywords:
level1:
level2: Account Configuration
level3: Special Occasions API
level4: Methods

order: 40
permalink: special-occasions-api-methods-retrieve-special-occasion-by-id.html

indicator: messaging
---

Get a single special occasion by id

### Request

| Method | URL |
| :-------- | :------ |
| GET  |/api/account/{accountId}/configuration/ac-common/specialoccasion/{specialOccasionId} |

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |
 specialOccasionId|special occasion object’s unique id.| String


**Request Headers**

 |Header | Description| Notes |
 |:------- | :-------------- | :--- |
 |Authorization | Contains token string to allow request authentication and authorization.

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

**Response Headers**

 |Header|  Description|
 |:-------|   :-----  |
 |ac-revision|  Account config object type collection revision.|  

 **Response example**

```json
{
  "id": 2852557012,
  "deleted": false,
  "name": "special occasion",
  "description": "Description for special occasion",
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
          "recurrence": []
      }
  ]
}
```
