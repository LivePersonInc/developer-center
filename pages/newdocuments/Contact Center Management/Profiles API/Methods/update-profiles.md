---
pagename: Update Profiles
redirect_from:
  - administration.update-profiles.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Profiles API
subfoldername: Methods


order: 50
permalink: profiles-api-methods-update-profiles.html

indicator: both
---

This API updates a list of profiles for a specific account.

### Request

 |Method | URL |
 |:--- | :--- |
 |PUT | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

| Header | Description |
 |:--- | :--- |
 |Authorization  |Contains token string to allow request authentication and authorization. |

**Request Body** 

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:---|  :--- | :--- |
 |accountId | LP site ID | string  |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.

