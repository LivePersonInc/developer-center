---
pagename: Get skill by ID
redirect_from:
  - administration-get-skill-by-id.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Skills API
subfoldername: Methods
order: 20
permalink: skills-api-methods-get-skill-by-id.html
indicator: both
---

This API retrieves a single skill (by ID) for a specific account.

### Request

|Method   |   URL    |            
|:--------  | :----------------- |
| GET     |    https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/skills/{skillId}|

**Request Headers**

|Header     |     Description  |                              
|:------------  | :---------------------  |                   
| Authorization  | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |   Description   |   Type / Value      |                                      
|:------------  | :------------- |  :----------------- |                                       
|accountId   |    LP site ID   |    string  |
|skillId       |  Skill ID       |  Positive long number greater than zero |

 **Query Parameters**

 | Name            | Description                                                                  | Type    | Notes                                          |
 |-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
 | select          | Response field filter expression .                           | string  | Example values: id, name. Default value: all fields  |

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

Please see the [Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.
