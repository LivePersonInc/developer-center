---
title: Delete LOB
redirect_from:
  - administration-delete-lob.html
keywords:
sitesection: Documents
level2: Admin
level3: LOBs API
level4: Methods


order: 80
permalink: lobs-api-methods-delete-lob.html

indicator: both
---

This API deletes a LoB from a specific account.

### Request

| Method | URL|
 |:----- | :---- |
 |DELETE | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/lobs/{lobId} |

**Request Headers**

 |Header | Description |
 |:-------  | :------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 |If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Path Parameters**

 |Parameter|  Description | Type / Value |
 |:----------- | :-------------  |:------------- |
 |accountId | LP site ID  |String  |
 |lobId | Lob ID  | Positive long number greater than zero |

### Response

**Response Body**

See [Appendix](aadministration-lobs-appendix.html) for Entity Structure and Entity Example.
