---
title: Delete Skill
redirect_from:
  - administration-delete-skill.html
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 80
permalink: skills-api-methods-delete-skill.html

indicator: both
---

This API deletes a skill from a specific account.

### Request

| Method | URL| 
 |:----- | :---- |
 |DELETE | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/skills/{skillId} |

**Request Headers**

 |Header | Description |
 |:-------  | :------------- |
 |Authorization|  Contains token string to allow request authentication and authorization.  |
 |X-HTTP-Method-Override|  Overrides unsupported HTTP methods.  To be used with the DELETE value. |
 |If-Match|  Contains data revision as known by the client. Allows concurrent modification backend verification.  |

**Path Parameters**

 |Parameter|  Description | Type / Value |
 |:----------- | :-------------  |:------------- | 
 |accountId | LP site ID  |String  |
 |skillId | Skill ID  | Positive long number greater than zero |

### Response

**Response Codes** 

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 404  | Data Not Found        |
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | Account config object type collection revision. | 

**Response Body**

See [Appendix](aadministration-skills-appendix.html) for Entity Structure and Entity Example.
