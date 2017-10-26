---
title: Update lob
keywords:
level1: Documents
level2: Admin
level3: Lobs API
level4: Methods


order: 60
permalink: administration-update-lob.html

indicator: both
---

This API updates a lob for a specific account.

### Request

| Method | URL| 
 |:--------- | :-------- |
 |PUT|  /api/account/{accountId}/configuration/le-users/lobs/{lobId}| 

**Request Headers**

 |Header | Description| 
 |:-------  | :------------  |
 |Authorization | Contains token string to allow request authentication and authorization.| 
 |If-Match|  Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |   Description   |  Type / Value |
|:----------- |  :------------  | :--------------| 
| accountId   |   LP site ID    |  String ^[a-zA-Z0-9_]{1,20}$ |
| lobId    |    Lob ID      |  Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-lobs-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
