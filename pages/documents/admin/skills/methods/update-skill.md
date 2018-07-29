---
title: Update skill
redirect_from:
  - administration-update-skill.html
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 60
permalink: skills-api-methods-update-skill.html

indicator: both
---

This API updates a skill for a specific account.

### Request

| Method | URL| 
 |:--------- | :-------- |
 |PUT|  https://{domain}/api/account/{accountId}/configuration/le-users/skills/{skillId}| 

**Request Headers**

 |Header | Description| 
 |:-------  | :------------  |
  |Authorization | Contains token string to allow request authentication and authorization.  |
  |X-HTTP-Method-Override|  Overrides unsupported HTTP methods.  To be used with the PUT value. |
  |If-Match  |Contains data revision as known by the client. Allows concurrent modification backend verification.  |
  
**Request Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |   Description   |  Type / Value |
 |:----------- |  :------------  | :--------------| 
| accountId   |   LP site ID    |  String  |
| skillId    |    Skill ID      |  Positive long number greater than zero |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        | 
| 404  | Not found             | 
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. | 


**Response Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
