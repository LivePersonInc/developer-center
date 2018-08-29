---
pagename: Get all LOBs
redirect_from:
  - administration-get-all-lobs.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: LOBs API
subfoldername: Methods


order: 10
permalink: lobs-api-methods-get-all-lobs.html

indicator: both
---

This API retrieves a list of LoBs for a specific account.

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/lobs |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |              
 |:---------- |  :------------- |  :-------------  |            
| accountId |    LP site ID    |   String  |

### Response

**Response Body**

[Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.
