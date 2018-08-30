---
pagename: Get All Profiles
redirect_from:
  - administration-get-all-profiles.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Profiles API
subfoldername: Methods


order: 10
permalink: profiles-api-methods-get-all-profiles.html

indicator: both
---

This API retrieves a list of profiles for a specific account.

### Request

 |Method           |        URL |
 |:-------          |       :------     |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

 |Header      |             Description |
| :-------       |          :------     |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |  Description   |   Type / Value  |              
 |:---------- |  :------------- |  :-------------  |            
| accountId |    LP site ID    |   String  |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.
