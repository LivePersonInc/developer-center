---
pagename: Retrieve Special Occasions by List
redirect_from:
  - account-configuration-special-occasions-retrieve-by-list.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
subfoldername: Methods
permalink: special-occasions-api-methods-retrieve-special-occasions-by-id.html
indicator: messaging
---

Get list of all special occasions of an account

### Request

| Method | URL |
| :-------- | :------ |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/specialoccasion |

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String  


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
[
  {
      "id": 2852557012,
      "name": "so 1",
      "deleted": false,
      "isDefault": false
  },
  {
      "id": 2852560712,
      "name": "so 2",
      "deleted": false,
      "isDefault": false
  },
  {
      "id": 2852560912,
      "name": "so 3",
      "deleted": false,
      "isDefault": false
  }
]
```
