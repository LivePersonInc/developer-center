---
pagename: Update Special Occasion
redirect_from:
  - account-configuration-special-occasions-update.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
subfoldername: Methods
permalink: special-occasions-api-methods-update-special-occasion.html
indicator: messaging
---

Update existing special occasions.

### Request

| Method | URL |
| :-------- | :------ |
| PUT  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/specialoccasion |

**Request Body**

```json

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
          "timeZone": "Europe/Warsaw"
        },
        "end": {
          "dateTime": "2018-03-27T13:00:00",
          "timeZone": "Europe/Warsaw"
        },
        "recurrence": [

        ]
      }
    ]
  }
]
```

**Entity structure**

For details on the entity structure, please see the appendix [link](special-occasions-api-appendix.html)

**'isDefault' entity state**

The `isDefault` field determines whether a special occasions object is the default for the entire account. Only one object can be set as the default for each account.

**Note:** If you create a new special occasions object with an `isDefault` key set to true when there's already a special occasions object set as a default for the account, LivePerson validation will set the new object created as the default.

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  |

**Request Headers**

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

**Response Headers**

 |Header|  Description|
 |:-------|   :-----  |
 |ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|

 **Response example**

```json
{
  "id": 2852546012,
  "deleted": false,
  "name": "Workdays 1111222",
  "description": "Description for workdays 1",
  "isDefault": false,
  "events": [
      {
          "start": {
              "dateTime": "2018-03-27T06:00:00",
              "timeZone": "Europe/Warsaw"
          },
          "end": {
              "dateTime": "2018-03-27T13:00:00",
              "timeZone": "Europe/Warsaw"
          },
          "recurrence": [
              "RRULE:FREQ=WEEKLY;BYDAY=SU"
          ]
      },
      {
          "start": {
              "dateTime": "2018-03-27T15:00:00",
              "timeZone": "Europe/Warsaw"
          },
          "end": {
              "dateTime": "2018-03-27T18:00:00",
              "timeZone": "Europe/Warsaw"
          },
          "recurrence": [
              "RRULE:FREQ=WEEKLY;BYDAY=SU"
          ]
      }
  ]
}
```