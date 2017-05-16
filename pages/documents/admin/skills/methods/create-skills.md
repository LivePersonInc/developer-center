---
title: Create skills
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 30
permalink: administration-create-skills.html

---

This API creates a list of skills for a specific account.

### Request

| Method |  URL  |
| :--------  | :----- |
 |POST  |      /api/account/{accountId}/configuration/le-users/skills |

**Request Headers**

 |Header | Description |
 |:----- | :---------- |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |  Description |   Type / Value  |
| :----------   | :------------ | :------------ |
| accountId  |    LP site ID  |  String ^[a-zA-Z0-9_]{1,20}$ |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.