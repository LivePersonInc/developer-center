---
title: Delete Users
keywords:
level1: Documents
level2: Admin
level3: Users API
level4: Methods


order: 60
permalink: administration-delete-users.html

indicator: both
---

This API deletes users from a specific account.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

```
https://{domain}/api/account/{accountId}/configuration/le-users/users?v=4.0
```

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |DELETE|  https://{domain}/api/account/{accountId}/configuration/le-users/users |

**Request Headers**

 |Header|         Description  |
 |:------ |       :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |
 |If-Match|  Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization.  |

**Request Body**

`["987654321", "1232455"]`

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID|   String ^[a-zA-Z0-9_]{1,20}$|

### Response

**Response Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
