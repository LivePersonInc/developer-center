---
title: Delete
redirect_from:
  - account-configuration-special-occasions-delete.html
Keywords:
sitesection:
level2: Account Configuration
level3: Special Occasions API
level4: Methods

order: 30
permalink: special-occasions-api-methods-delete.html

indicator: messaging
---

Delete an existing special occasions.

### Request

| Method | URL |
| :-------- | :------ |
| DELETE  |/api/account/{accountId}/configuration/ac-common/specialoccasion/{specialoccasionId} |

**Request Headers**

| Header | Description |
|:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |
|If-Match	| Contains special occasion's current revision number|


**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String|
 specialoccasionId | Account Config object’s unique id. For multiple deletion, use comma separator between special occasion id's {id1,id2,id3....}| String|


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

In case delete success - body is empty.<br>
In case trying to delete an already deleted workdays:

```json
{
    "type": "workinghours",
    "internalCode": 12,
    "message": "No data found"
}
```
