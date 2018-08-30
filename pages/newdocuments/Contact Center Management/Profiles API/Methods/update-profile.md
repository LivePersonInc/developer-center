---
pagename: Update Profile
redirect_from:
  - administration-update-profile.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Profiles API
subfoldername: Methods


order: 60
permalink: profiles-api-methods-update-profile.html

indicator: both
---

This API updates a profile for a specific account.

### Request

| Method | URL|
 |:--------- | :-------- |
 |PUT|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles/{profileId}|

**Request Headers**

 |Header | Description|
 |:-------  | :------------  |
 |Authorization | Contains token string to allow request authentication and authorization.|

**Request Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |   Description   |  Type / Value |
 |:----------- |  :------------  | :--------------|
| accountId   |   LP site ID    |  String  |
| profileId    |    Profile ID      |  Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html) for Entity Structure and Entity Example.
