---
title: Delete Profiles
keywords:
level1: Documents
level2: Admin
level3: Profile API
level4: Methods


order: 70
permalink: administration-delete-profiles.html

indicator: both
---

This API deletes profiles from a specific account.

### Request

 |Method    |  URL    |     
 |:-------- |  :--------- |
 |DELETE   |   /api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

| Header       |  Description |
 |:--------    |  :------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |


**Request Body**

`["987654321", "1232455"]`

**Path Parameters**

| Parameter|  Description |Type / Value |
 |:----------- |  :------------- | :------------- |
 |accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$| 

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

