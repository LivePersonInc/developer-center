---
title: Get Agent Groups by ID
keywords:
level1: Documents
level2: Admin
level3: Agent Groups API
level4: Methods


order: 20
permalink: administration-get-agent-groups-by-id.html

indicator: both
---

This API retrieves a single agent group (by ID) for a specific account.

### Request

 |Method | URL |
| :-------- | :----- |
 |GET | https://{domain}/api/account/{accountId}/configuration/le-users/agentGroups/{agentGroupId} |

**Request Headers**

| Header | Description |
| :-------- | :------------ |
| Authorization | Contains token string to allow request authentication and authorization. |

**Path Parameters**

 |Parameter | Description | Type / Value |
| :----------- | :------------- | :------------- |
|accountId | LP site ID | String  |
 |agentgroupId | Agent group ID | Positive long number greater than zero |

### Response

**Response Body**

[Appendix](administration-agent-groups-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
