---
pagename: Update Workdays Object
redirect_from:
  - account-configuration-workdays-update.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Workdays API
subfoldername: Methods
permalink: workdays-api-methods-update-workdays-object.html
indicator: messaging
---

Update existing workday object(s).

### Request

| Method | URL |
| :-------- | :------ |
| PUT  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/workinghours |

**Path Parameters**

|Parameter  |Description |  Type / Value |
|:----------- | :------------ | :--------------- |
|accountId | LP site ID | String |

**Request Body**

```json
[
  {
    "id": 2818213812,
    "deleted": false,
    "name": "Workdays 12",
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
]
```

**Entity structure**

For details on the entity structure, please see the [appendix](workdays-api-appendix.html)

**'isDefault' entity state**

The `isDefault` field determines whether a workdays object is the default for the entire account. Only one object can be set as the default for each account.

**Note:** If you create a new workdays object with an `isDefault` key set to true when there's already a special occasions object set as a default for the account, LivePerson validation will set the new object created as the default.

**Request Headers**

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization. |
|if-match|Contains special occasion's current revision number|

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
|ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|

**Response example**

```json
{
    "id": 2852537612,
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