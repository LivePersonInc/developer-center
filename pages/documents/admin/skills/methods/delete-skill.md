---
title: Delete Skill
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 80
permalink: administration-delete-skill.html

---

This API deletes a skill from a specific account.

### Request

| Method | URL| 
 |:----- | :---- |
 |DELETE | /api/account/{accountId}/configuration/le-users/skills/{skillId} |

**Request Headers**

 |Header | Description |
 |:-------  | :------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
 |If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Path Parameters**

 |Parameter|  Description | Type / Value |
 |:----------- | :-------------  |:------------- | 
 |accountId | LP site ID  |String ^[a-zA-Z0-9_]{1,20}$ |
 |skillId | Skill ID  | Positive long number greater than zero |

### Response

**Response Body**

See [Appendix](aadministration-skills-appendix.html) for Entity Structure and Entity Example.
