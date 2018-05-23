---
title: Get skill by ID
keywords:
level1: Documents
level2: Admin
level3: Skills API
level4: Methods


order: 20
permalink: administration-get-skill-by-id.html

indicator: both
---

This API retrieves a single skill (by ID) for a specific account.

### Request

|Method   |   URL    |            
|:--------  | :----------------- |
| GET     |    https://{domain}/api/account/{accountId}/configuration/le-users/skills/{skillId}|

**Request Headers**

|Header     |     Description  |                              
|:------------  | :---------------------  |                   
| Authorization  | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

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

Please see the [Appendix](administration-skills-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
