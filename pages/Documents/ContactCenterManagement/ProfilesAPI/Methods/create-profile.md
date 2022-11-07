---
pagename: Create Profile
redirect_from:
  - administration-create-profile.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Profiles API
subfoldername: Methods
order: 30
permalink: profiles-api-methods-create-profile.html
indicator: both
---

This API creates a list of profiles for a specific account.

### Request

| Method |  URL  |
| :--------  | :----- |
|POST  |      https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

 |Header | Description |
 |:----- | :---------- |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Request Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter    |  Description |   Type / Value  |
| :----------   | :------------ | :------------ |
| accountId  |    LP site ID  |  String  |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.
