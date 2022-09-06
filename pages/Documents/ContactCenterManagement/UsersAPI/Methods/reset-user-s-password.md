---
pagename: Reset User's Password
redirect_from:
  - administration-reset-users-password.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Users API
subfoldername: Methods

order: 90
permalink: users-api-methods-reset-user-s-password.html

indicator: both
---

This API resets a user’s password.

**Note:** The current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:

```
https://API_REQUEST?v=4.0
```

### Request

| Method|      URL  |
| :-------- | :---|  
 |PUT|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/users/{userId}/resetPassword |

**Request Headers**

 |Header|         Description  |
| :------|        :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

**Request Body**

```json
    {
        "newPassword": "newPassword"
    }
```

**Path Parameters**

 |Parameter|  Description|  Type/Value |
 |:------|    :--------|    :--------|
 |accountId|  LP site ID|   String |
 |userId|  User ID|   Positive long number greater than zero|
 
**Query Parameters**

 | Name            | Description                       | Type    | Required  | Notes                                                |
 |-----------------|-----------------------------------|---------|-----------|------------------------------------------------------|
 | v               | API version number                | double  | Required  | Value should be 4.0                                  |

### Response

**Response Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.
