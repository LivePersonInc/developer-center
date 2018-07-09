---
title: Update Lobs
keywords:
level1: Documents
level2: Admin
level3: LOBs API
level4: Methods


order: 50
permalink: lobs-api-methods-update-lobs.html

indicator: both
---

This API updates a list of LoBs for a specific account.

### Request

 |Method | URL |
 |:--- | :--- |
 |PUT | https://{domain}/api/account/{accountId}/configuration/le-users/lobs |

**Request Headers**

| Header | Description |
 |:--- | :--- |
 |Authorization  |Contains token string to allow request authentication and authorization. |
 |If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:---|  :--- | :--- |
 |accountId | LP site ID | string  |

### Response

**Response Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
