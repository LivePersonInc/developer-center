---
pagename: Delete Users
redirect_from:
  - administration-delete-users.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Users API
subfoldername: Methods


order: 60
permalink: users-api-methods-delete-users.html

indicator: both
---

This API deletes users from a specific account.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

```
https://API_REQUEST?v=4.0
```

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |DELETE|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/users |

**Request Headers**

 |Header|         Description  |
 |:------ |       :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |
 |X-HTTP-Method-Override|  Overrides unsupported HTTP methods.  To be used with the DELETE value. |
 |If-Match|  Contains data revision as known by the client. Allows concurrent modification backend verification.  |

**Request Body**

`["987654321", "1232455"]`

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID|   String |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |      
| 404  | Data Not Found        |
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. |

**Response Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.
