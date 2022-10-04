---
pagename: Delete Special Occasion
redirect_from:
  - account-configuration-special-occasions-delete.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Special Occasions API
subfoldername: Methods
permalink: special-occasions-api-methods-delete-special-occasion.html
indicator: messaging
---

Delete an existing special occasion.

### Request

| Method | URL |
| :-------- | :------ |
| DELETE  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/specialoccasion/{specialoccasionId} |

**Request Headers**

| Header | Description |
|:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |
|If-Match	| Contains special occasion's current revision number|

**Path Parameters**

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String|
 specialoccasionId | Account Config object’s unique id. For multiple deletion, use comma separator between special occasion id's {id1,id2,id3…}| String|

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

In case of delete success, the body is empty.

In case of trying to delete an already deleted workdays:

```json
{
    "type": "workinghours",
    "internalCode": 12,
    "message": "No data found"
}
```