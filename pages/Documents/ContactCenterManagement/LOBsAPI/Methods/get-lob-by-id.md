---
pagename: Get LOB by ID
redirect_from:
  - administration-get-lob-by-id.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: LOBs API
subfoldername: Methods

order: 20
permalink: lobs-api-methods-get-lob-by-id.html

indicator: both
---

This API retrieves a single LoB (by ID) for a specific account.

### Request

|Method   |   URL    |
|:--------  | :----------------- |
| GET     |    https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/lobs/{lobId}|

**Request Headers**

|Header     |     Description  |
|:------------  | :---------------------  |
| Authorization  | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |   Description   |   Type / Value      |
|:------------  | :------------- |  :----------------- |
|accountId   |    LP site ID   |    string  |
|lobId       |  Lob ID       |  Positive long number greater than zero |

### Response

**Response Body**

Please see the [Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.