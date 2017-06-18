---
title: Get User by ID
keywords:
level1: Documents
level2: Admin
level3: Users API
level4: Methods


order: 20
permalink: administration-get-user-by-id.html

indicator: both
---

This API retrieves a single user (by ID) for a specific account.

### Request

 |Method|      URL  |
 |:--------  |:---  |
 |GET|  /api/account/{accountId}/configuration/le-users/users/{userId}  |

**Request Headers**

 |Header|         Description  |
 |:------ |       :--------  |
 |Authorization|  Contains token string to allow request authentication and authorization.  |

**Request Body**
 
[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter|  Description  |Type/Value |
 |:------|    :--------|    :--------|
 |accountId|  LP site ID|   String ^[a-zA-Z0-9_]{1,20}$|
 |userId|     User Id|      Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-users-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
