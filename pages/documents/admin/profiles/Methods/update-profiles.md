---
title: Update Profiles
keywords:
level1: Documents
level2: Admin
level3: Profiles API
level4: Methods


order: 50
permalink: administration.update-profiles.html

indicator: both
---

This API updates a list of profiles for a specific account.

### Request

 |Method | URL |
 |:--- | :--- |
 |PUT | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/profiles |

**Request Headers**

| Header | Description |
 |:--- | :--- |
 |Authorization  |Contains token string to allow request authentication and authorization. |

**Request Body** 

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:---|  :--- | :--- |
 |accountId | LP site ID | string  |

### Response

**Response Body**

[Appendix](administration-profiles-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

