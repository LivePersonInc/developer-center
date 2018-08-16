---
title: Get profile by ID
redirect_from:
  - administration-get-profile-by-id.html
keywords:
level1: Documents
level2: Admin
level3: Profiles API
level4: Methods


order: 20
permalink: profiles-api-methods-get-profile-by-id.html

indicator: both
---

This API retrieves a single profile (by ID) for a specific account.

### Request

|Method   |   URL    |            
|:--------  | :----------------- |
| GET     |    https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles/{profileId}|

**Request Headers**

|Header     |     Description  |                              
|:------------  | :---------------------  |                   
| Authorization  | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |   Description   |   Type / Value      |                                      
|:------------  | :------------- |  :----------------- |                                       
|accountId   |    LP site ID   |    string  |
|profileId       |  Profile ID       |  Positive long number greater than zero |

### Response

**Response Body**

Please see the [Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
