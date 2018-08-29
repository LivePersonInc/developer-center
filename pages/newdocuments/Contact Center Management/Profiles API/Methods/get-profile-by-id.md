---
pagename: Get profile by ID
redirect_from:
  - administration-get-profile-by-id.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Profiles API
subfoldername: Methods


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

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |   Description   |   Type / Value      |                                      
|:------------  | :------------- |  :----------------- |                                       
|accountId   |    LP site ID   |    string  |
|profileId       |  Profile ID       |  Positive long number greater than zero |

### Response

**Response Body**

Please see the [Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.
