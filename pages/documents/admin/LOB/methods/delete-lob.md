---
title: Delete Lob
keywords:
level1: Documents
level2: Admin
level3: Lobs API
level4: Methods


order: 80
permalink: administration-delete-lob.html

indicator: both
---

This API deletes a lob from a specific account.

### Request

| Method | URL| 
 |:----- | :---- |
 |DELETE | /api/account/{accountId}/configuration/le-users/lobs/{lobId} |

**Request Headers**

 |Header | Description |
 |:-------  | :------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 |If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Path Parameters**

 |Parameter|  Description | Type / Value |
 |:----------- | :-------------  |:------------- | 
 |accountId | LP site ID  |String ^[a-zA-Z0-9_]{1,20}$ |
 |lobId | Lob ID  | Positive long number greater than zero |

### Response

**Response Body**

See [Appendix](aadministration-lobs-appendix.html) for Entity Structure and Entity Example.

