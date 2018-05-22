---
title: Delete Workdays Object
Keywords:
level1: Documents
level2: Account Configuration
level3: Workdays API
level4: Methods
order: 30
permalink: account-configuration-workdays-delete.html
indicator: messaging
---

Delete an existing workday object.

### Request

| Method | URL |
| :-------- | :------ |
| DELETE  |/api/account/{accountId}/configuration/ac-common/workinghours/{workdayIds}|

**Path Parameters**

|Parameter  |Description |  Type / Value |
|:----------- | :------------ | :--------------- |
|accountId | LP site ID | String  |
|workdayIds| Account Config object’s unique id.| String|


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

### Response Headers

|Header|  Description|
|:-------|   :-----  |
|ac-revision|  Account config object type collection revision.|  
