---
pagename: Retrieve Special Occasion by ID
redirect_from:
  - account-configuration-special-occasions-retrieve-by-id.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
subfoldername: Methods
permalink: special-occasions-api-methods-retrieve-special-occasion-by-id.html
indicator: messaging
---

Get a single special occasion by id.

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/specialoccasion/{specialOccasionId} |

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
 |ac-revision|  This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value..|

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
              "timeZone": "Europe/Warsaw"
          },
          "end": {
              "dateTime": "2018-03-27T13:00:00",
              "timeZone": "Europe/Warsaw"
          },
          "recurrence": []
      }
  ]
}
```