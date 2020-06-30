---
pagename: Delete Workdays Object
redirect_from:
  - account-configuration-workdays-delete.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Workdays API
subfoldername: Methods
permalink: workdays-api-methods-delete-workdays-object.html
indicator: messaging
---

Delete an existing workday object.

### Request

| Method | URL |
| :-------- | :------ |
| DELETE  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/ac-common/workinghours/{workdayId}|

**Path Parameters**

|Parameter  |Description |  Type / Value |
|:----------- | :------------ | :--------------- |
|accountId | LP site ID | String  |
|workdayId| Account Config object’s unique id. To delete multiple workdays objects, use comma separator between workday id's {id1,id2,id3....}| String|


**Request Headers**

| Header | Description |
|:-------- | :------------ |
| Authentication | Contains token string to allow request authentication and authorization |
|If-Match	| Contains workday object's current revision number|



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

In case delete success - body is empty.<br>
In case trying to delete an already deleted workdays:

```json
{
    "type": "workinghours",
    "internalCode": 12,
    "message": "No data found"
}
```
**Entity structure**

For details on the entity structure, please see the [appendix](workdays-api-appendix.html)
