---
pagename: Create Users
redirect_from:
  - administration-create-users.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Users API
subfoldername: Methods


order: 30
permalink: users-api-methods-create-users.html

indicator: both
---

This API creates a list of users for a specific account.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

```
https://API_REQUEST?v=4.0
```

### Request

 |Method|      URL|  
 |:--------  |:---  |
 |POST|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/users  |

**Request Headers**

 |Header         |Description  |
 |:------|        :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

**Request Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------    |:--------    |:--------|
 |accountId|  LP site ID|   String |
 
**Query Parameters**

 | Name            | Description                       | Type    | Required  | Notes                                                |
 |-----------------|-----------------------------------|---------|-----------|------------------------------------------------------|
 | v               | API version number                | double  | Required  | Value should be 4.0                                  |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 201  | Created               |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. | 

**Response Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.
