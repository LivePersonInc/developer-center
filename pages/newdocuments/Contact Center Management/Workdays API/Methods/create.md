---
pagename: Create Workdays Object
redirect_from:
  - account-configuration-workdays-create.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Workdays API
subfoldername: Methods
permalink: workdays-api-methods-create-workdays-object.html
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

**Entity structure**

For details on the entity structure, please see the [appendix](https://lpgithub.dev.lprnd.net/product-marketing/developers-community/blob/workdays-documentation/pages/documents/account-configuration/workdays/appendix.md)

**'isDefault' entity state**

The `isDefault` field determines whether a workdays object is the default for the entire account. Only one object can be set as the default for each account. **Note**: if you create a new workdays object with an `isDefault` key set to true when there's already a special occasions object set as a default for the account, LivePerson validation will set the new object created as the default.

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
    "id": 2844079112,
    "deleted": false,
    "name": "Workdays 11112",
    "description": "Description for workdays 1",
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
