---
pagename: Create Special Occasion
redirect_from:
  - account-configuration-special-occasions-create.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
subfoldername: Methods
permalink: special-occasions-api-methods-create-special-occasion.html
indicator: messaging
---

Create new special occasion(s) for an account. It is possible to create several items at a time.

### Request

| Method | URL |
| :-------- | :------ |
| POST  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/specialoccasion |

**Request Headers**

| Header | Description |
 |:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |

**Request Body**

```json
{
  "deleted": false,
  "name": "special occasion 1",
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
  "id": 2852557012,
  "deleted": false,
  "name": "so 1",
  "description": "Description for workdays 1",
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
```