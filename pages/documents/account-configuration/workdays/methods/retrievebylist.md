---
title: Workdays list
Keywords:
level1: Documents
level2: Account Configuration
level3: Workdays API
level4: Methods
order: 50
permalink: account-configuration-workdays-get-by-list.html
indicator: messaging
---

Get a list of all workday objects of an account.

### Request

| Method | URL |
| :-------- | :------ |
| GET  |/api/account/{accountId}/configuration/ac-common/workinghours|

### Path Parameters

 |Parameter  |Description |  Type / Value |
 |:----------- | :------------ | :--------------- |
 |accountId | LP site ID | String|


### Request Headers

|Header | Description| Notes |
|:------- | :-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization.|

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
