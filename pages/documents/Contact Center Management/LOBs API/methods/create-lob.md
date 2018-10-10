---
pagename: Create LOB
redirect_from:
  - administration-create-lob.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: LOBs API
subfoldername: Methods


order: 30
permalink: lobs-api-methods-create-lob.html

indicator: both
---

This API creates a list of LoBs for a specific account.

### Request

| Method |  URL  |
| :--------  | :----- |
 |POST  |      https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/lobs |

**Request Headers**

 |Header | Description |
 |:----- | :---------- |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |  Description |   Type / Value  |
| :----------   | :------------ | :------------ |
| accountId  |    LP site ID  |  String  |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.
