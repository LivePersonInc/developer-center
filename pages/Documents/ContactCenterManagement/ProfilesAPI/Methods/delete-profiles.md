---
pagename: Delete Profiles
redirect_from:
  - administration-delete-profiles.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Profiles API
subfoldername: Methods


order: 70
permalink: profiles-api-methods-delete-profiles.html

indicator: both
---

This API deletes profiles from a specific account.

### Request

 |Method    |  URL    |     
 |:-------- |  :--------- |
 |DELETE   |   https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

| Header       |  Description |
 |:--------    |  :------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |


**Request Body**

`["987654321", "1232455"]`

**Path Parameters**

| Parameter|  Description |Type / Value |
 |:----------- |  :------------- | :------------- |
 |accountId | LP site ID | String |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.
