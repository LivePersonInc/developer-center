---
title: Create Workdays Object
Keywords:
level1: Documents
level2: Account Configuration
level3: Workdays API
level4: Methods
order: 10
permalink: account-configuration-workdays-create.html
indicator: messaging
---

Create new workday object(s) for an account. It is possible to create several items at a time.

### Request

| Method | URL |
| :-------- | :------ |
| POST  |/api/account/{accountId}/configuration/ac-common/workinghours|

**Path Parameters**
|Parameter  |Description |  Type / Value |
|:----------- | :------------ | :--------------- |
|accountId | LP site ID | String  |



**Request Headers**

| Header | Description |
 |:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |

**Request Body**

```json
{  
  "name": "Workdays 1",
  "description": "Description for workdays 1",
  "deleted": false,
  "isDefault": false,
  "events": [
    {
      "start": {
        "dateTime": "2018-03-27T06:00:00",
        "timeZone": "Europe/Zurich"
      },
      "end": {
        "dateTime": "2018-03-27T13:00:00",
        "timeZone": "Europe/Zurich"
      },
      "recurrence": [
        "RRULE:FREQ=WEEKLY;BYDAY=SU"
      ]
    },
    {
      "start": {
        "dateTime": "2018-03-27T15:00:00",
        "timeZone": "Europe/Zurich"
      },
      "end": {
        "dateTime": "2018-03-27T18:00:00",
        "timeZone": "Europe/Zurich"
      },
      "recurrence": [
        "RRULE:FREQ=WEEKLY;BYDAY=SU"
      ]
    }
  ]
}
```

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
