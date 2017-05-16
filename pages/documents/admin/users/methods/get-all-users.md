---
title: Get all Users
keywords:
level1: Documents
level2: Admin
level3: Users API
level4: Methods


order: 10
permalink: administration-get-all-users.html

---

This API retrieves a list of users for a specific account.

### Request

 |Method|               URL |
 |:------              |:-------- | 
 |GET|                  /api/account/{accountId}/configuration/le-users/users  |

**Request Headers**

 |Header               |Description |
 |:------|              :--------  |
 |Authorization|        Contains token string to allow request authentication and authorization.  |

**Request Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter|            Description|             |Type/Value  |
 |:------              :--------     |          :--------| 
 |AccountId|            LP site ID|              String ^[a-zA-Z0-9_]{1,20}$|

### Response

**Response Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
