---
pagename: Delete Skill
redirect_from:
  - administration-delete-skill.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Skills API
subfoldername: Methods
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
| ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. |

**Response Body**

See [Appendix](aadministration-skills-appendix.html) for Entity Structure and Entity Example.