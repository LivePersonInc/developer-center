---
title: Create skills
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 30
permalink: administration-create-skills.html

indicator: both
---

This API creates a list of skills for a specific account.

### Request

| Method |  URL  |
| :--------  | :----- |
 |POST  |      https://{domain}/api/account/{accountId}/configuration/le-users/skills |

**Request Headers**

 |Header | Description |
 |:----- | :---------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 
 **Response Codes** 
 
 | Code | Description           |
 |------|-----------------------|
 | 201  | Created               |
 | 401  | Not Authenticated     |
 | 403  | Not Authorized        |
 | 500  | Internal Server Error |
 
 **Response Headers**
 
  |Header  |Description |
 | :-------  | :-----  |
 | ac-revision | Account config object type collection revision. | 
 

**Request Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |  Description |   Type / Value  |
| :----------   | :------------ | :------------ |
| accountId  |    LP site ID  |  String ^[a-zA-Z0-9_]{1,20}$ |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.