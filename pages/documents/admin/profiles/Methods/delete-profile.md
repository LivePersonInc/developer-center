---
title: Delete Profile
keywords:
level1: Documents
level2: Admin
level3: Profiles API
level4: Methods


order: 80
permalink: administration-delete-profile.html

indicator: both
---

This API deletes a profile from a specific account.

### Request

| Method | URL|
 |:----- | :---- |
 |DELETE | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profile/{profileId} |

**Request Headers**

 |Header | Description |
 |:-------  | :------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |

**Path Parameters**

 |Parameter|  Description | Type / Value |
 |:----------- | :-------------  |:------------- |
 |accountId | LP site ID  | String  |
 |profileId | Profile ID  | Positive long number greater than zero |

### Response

**Response Body**

See [Appendix](aadministration-profiles-appendix.html) for Entity Structure and Entity Example.
