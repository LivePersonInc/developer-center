---
title: Update skill
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 60
permalink: administration-update-skill.html

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
 |Authorization | Contains token string to allow request authentication and authorization.| 
 |If-Match|  Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |   Description   |  Type / Value |
 |:----------- |  :------------  | :--------------| 
| accountId   |   LP site ID    |  String ^[a-zA-Z0-9_]{1,20}$ |
| skillId    |    Skill ID      |  Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
