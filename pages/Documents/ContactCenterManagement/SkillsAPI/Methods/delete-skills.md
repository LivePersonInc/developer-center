---
pagename: Delete Skills
redirect_from:
  - administration-delete-skills.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Skills API
subfoldername: Methods
order: 70
permalink: skills-api-methods-delete-skills.html
indicator: both
---

This API deletes skills from a specific account.

### Request

 |Method    |  URL    |
 |:-------- |  :--------- |
 |DELETE   |   https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/skills |

**Request Headers**

| Header       |  Description |
 |:--------    |  :------------- |
  |Authorization|  Contains token string to allow request authentication and authorization.  |
  |X-HTTP-Method-Override|  Overrides unsupported HTTP methods.  To be used with the DELETE value. |
  |If-Match|  Contains data revision as known by the client. Allows concurrent modification backend verification.  |

**Request Body**

`["987654321", "1232455"]`

**Path Parameters**

| Parameter|  Description |Type / Value |
 |:----------- |  :------------- | :------------- |
 |accountId | LP site ID | String |

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

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.