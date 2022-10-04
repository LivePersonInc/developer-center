---
pagename: Get All Skills
redirect_from:
  - administration-get-all-skills.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Skills API
subfoldername: Methods

order: 10
permalink: skills-api-methods-get-all-skills.html

indicator: both
---

This API retrieves a list of skills for a specific account.

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/skills |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |
 |:---------- |  :------------- |  :-------------  |
| accountId |    LP site ID    |   String  |

 **Query Parameters**

 | Name            | Description                                                                 | Type    | Notes                                          |
 |-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
 | select          | Response field filter expression.                           | string  | Example values: id, name. Default value: id,deleted,name  |


### Response

**Response Codes**

| Code | Description           |
|------|-----------------------|
| 200  | OK                    |
| 401  | Not Authenticated     |
| 403  | Not Authorized        |
| 500  | Internal Server Error |

**Response Headers**

 |Header  |Description |
| :-------  | :-----  |
| ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. |

**Response Body**

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.