---
pagename: Update LOBs
redirect_from:
  - administration.update-lobs.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: LOBs API
subfoldername: Methods


order: 50
permalink: lobs-api-methods-update-lobs.html

indicator: both
---

This API updates a list of LoBs for a specific account.

### Request

 |Method | URL |
 |:--- | :--- |
 |PUT | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/lobs |

**Request Headers**

| Header | Description |
 |:--- | :--- |
 |Authorization  |Contains token string to allow request authentication and authorization. |
 |If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body**

[Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:---|  :--- | :--- |
 |accountId | LP site ID | string  |

### Response

**Response Body**

[Appendix](administration-lobs-appendix.html) for Entity Structure and Entity Example.
