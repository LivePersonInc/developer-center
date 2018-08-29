---
pagename: Get all Users
redirect_from:
  - administration-get-all-users.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Users API
subfoldername: Methods


order: 10
permalink: users-api-methods-get-all-users.html

indicator: both
---

This API retrieves a list of users for a specific account.

### Request

 |Method|URL |
 |:------|:-------- |
 |GET|https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/users  |

**Request Headers**

| Header | Description | Notes|
|:-------  |:-------------- | :--- |
|Authorization | Contains token string to allow request authentication and authorization. |


**Request Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter|  Description|   Type/Value  |
|:-------  |:-------------- | :--- |
 |AccountId|            LP site ID|             |

 **Query Parameters**

 | Name            | Description                                                                  | Type    | Notes                                          |
 |-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
 | select          | Response field filter expression .                           | string  | Example values: id, name. Default value: id,pid,deleted,loginName  |


### Response


**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |      
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. |

**Response Body**

[Appendix](administration-users-appendix.html) for Entity Structure and Entity Example.
