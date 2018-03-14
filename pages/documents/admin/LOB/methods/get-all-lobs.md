---
title: Get all lobs
keywords:
level1: Documents
level2: Admin
level3: LOBs API
level4: Methods


order: 10
permalink: administration-get-all-lobs.html

indicator: both
---

This API retrieves a list of LoBs for a specific account.

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | https://{domain}/api/account/{accountId}/configuration/le-users/lobs |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |              
 |:---------- |  :------------- |  :-------------  |            
| accountId |    LP site ID    |   String ^[a-zA-Z0-9_]{1,20}$ |

### Response

**Response Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
