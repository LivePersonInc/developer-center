---
title: Update Skills
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 50
permalink: administration.update-skills.html

indicator: both
---

This API updates a list of skills for a specific account.

### Request

 |Method | URL |
 |:--- | :--- |
 |PUT | /api/account/{accountId}/configuration/le-users/skills |

**Request Headers**

| Header | Description |
 |:--- | :--- |
 |Authorization  |Contains token string to allow request authentication and authorization. |
 |If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body** 

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:---|  :--- | :--- |
 |accountId | LP site ID | string ^[a-zA-Z0-9_]{1,20}$ |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
