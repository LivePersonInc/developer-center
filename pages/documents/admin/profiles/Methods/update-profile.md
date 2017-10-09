---
title: Update profile
keywords:
level1: Documents
level2: Admin
level3: Profiles API
level4: Methods


order: 60
permalink: administration-update-profile.html

indicator: both
---

This API updates a profile for a specific account.

### Request

| Method | URL|
 |:--------- | :-------- |
 |PUT|  /api/account/{accountId}/configuration/le-users/profiles/{profileId}|

**Request Headers**

 |Header | Description|
 |:-------  | :------------  |
 |Authorization | Contains token string to allow request authentication and authorization.|

**Request Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

| Parameter   |   Description   |  Type / Value |
 |:----------- |  :------------  | :--------------|
| accountId   |   LP site ID    |  String ^[a-zA-Z0-9_]{1,20}$ |
| profileId    |    Profile ID      |  Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
