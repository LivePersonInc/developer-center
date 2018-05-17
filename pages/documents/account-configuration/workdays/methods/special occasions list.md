---
title: Special occasions list
Keywords:
level1: Documents
level2: Account Configuration
level3: AC workdays API
level4: Methods

order: 80
permalink: 

indicator: both
---

Get list of all special occasions of an account

### Request

| Method | URL |
| :-------- | :------ |
| GET  |/api/account/{accountId}/configuration/ac-common/specialoccasion |

### Path Parameters

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$ 


### Request Headers

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

### Response Headers

 |Header|  Description| 
 |:-------|   :-----  |
 |ac-revision|  Account config object type collection revision.|  

