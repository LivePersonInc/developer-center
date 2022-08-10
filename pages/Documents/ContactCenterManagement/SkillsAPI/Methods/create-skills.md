---
pagename: Create Skills
redirect_from:
  - administration-create-skills.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Skills API
subfoldername: Methods

order: 30
permalink: skills-api-methods-create-skills.html

indicator: both
---

This API creates a list of skills for a specific account.

### Request

| Method |  URL  |
| :--------  | :----- |
 |POST  |      https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/skills |

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
 | ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. | 
 

**Request Body**

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |  Description |   Type / Value  |
| :----------   | :------------ | :------------ |
| accountId  |    LP site ID  |  String  |

### Response

**Response Body**

[Appendix](administration-skills-appendix.html) for Entity Structure and Entity Example.