---
pagename: Get User by ID
redirect_from:
  - administration-get-user-by-id.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Users API
subfoldername: Methods


order: 20
permalink: users-api-methods-get-user-by-id.html

indicator: both
---

This API retrieves a single user (by ID) for a specific account.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

```
https://API_REQUEST?v=4.0
```

### Request

 |Method|      URL  |
 |:--------  |:---  |
 |GET|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/users/{userId}  |

**Request Headers**

 |Header|         Description  |
 |:------ |       :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

**Request Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter|  Description  |Type/Value |
 |:------|    :--------|    :--------|
 |accountId|  LP site ID|   String |
 |userId|     User Id|      Positive long number greater than zero |

**Query Parameters**

 | Name            | Description                       | Type    | Required  | Notes                                                |
 |-----------------|-----------------------------------|---------|-----------|------------------------------------------------------|
 | v               | API version number                | double  | Required  | Value should be 4.0                                  |
 | select          | Response field filter expression  | string  | Optional  | Example values: id, name. Default value: all fields  |


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
| ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. |

**Response Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.
