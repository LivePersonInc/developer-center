---
title: Update Users
redirect_from:
  - administration-update-users.html
keywords:
sitesection: Documents
level2: Admin
level3: Users API
level4: Methods


order: 40
permalink: users-api-methods-update-users.html

indicator: both
---

This API updates a list of users for a specific account.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

```
https://API_REQUEST?v=4.0
```

### Request

 |Method   |   URL  |
 |:--------  |:---  |
 |PUT|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/users  |

**Request Headers**

| Header     |    Description  |
| :------   |     :--------  |
 |Authorization | Contains token string to allow request authentication and authorization.|  
 |X-HTTP-Method-Override|  Overrides unsupported HTTP methods.  To be used with the PUT value. |
 |If-Match|  Contains data revision as known by the client. Allows concurrent modification backend verification.  |

**Request Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description | Type/Value |
| :------  |  :--------  |  :--------|
 |accountId  |LP site ID  | String |
| userId|  User ID |  Positive long number greater than zero|

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        | 
| 404  | Not found             | 
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. | 

**Response Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
