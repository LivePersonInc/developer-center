---
title: Get all LOBs
keywords:
level1: Documents
level2: Admin
level3: LOBs API
level4: Methods


order: 10
permalink: lobs-api-methods-get-all-lobs.html

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
| accountId |    LP site ID    |   String  |

### Response

**Response Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
