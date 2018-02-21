---
title: Update Users
keywords:
level1: Documents
level2: Admin
level3: Users API
level4: Methods


order: 40
permalink: administration-update-users.html

indicator: both
---

This API updates a list of users for a specific account.

### Request

 |Method   |   URL  |
 |:--------  |:---  |
 |PUT|  https://{domain}/api/account/{accountId}/configuration/le-users/users  |

**Request Headers**

| Header     |    Description  |
| :------   |     :--------  |
 |Authorization | Contains token string to allow request authentication and authorization.|  
 |If-Match|  Contains data revision as known by the client.| Allows optimization of the backend, networking, and client resources utilization.  |

**Request Body**
 
[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description | Type/Value |
| :------  |  :--------  |  :--------|
 |accountId  |LP site ID  | String ^[a-zA-Z0-9_]{1,20}$|
| userId|  User ID |  Positive long number greater than zero|

### Response

**Response Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
