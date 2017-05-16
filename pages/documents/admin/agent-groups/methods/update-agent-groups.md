---
title: Update Agent Groups
keywords:
level1: Documents
level2: Admin
level3: Agent Groups API
level4: Methods


order: 50

permalink: administration-update-agent-groups.html

---

This API updates an agent group for a specific account.

### Request

 |Method | URL |
 |:-------- | :----| 
 |PUT|  /api/account/{accountId}/configuration/le-users/agentGroups |

**Request Headers**

 |Header|  Description |
 |:--------  |:------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body**

[Appendix](administration-agent-groups-appendix.html){:target="_blank"} for Entity Structure and Entity Example.

**Query Parameters**

| Parameter | Description | Type / Value | Required |
 |:------------ | :-------------- | :------------  |:--- |
| v | API version number | Double. Default Value: 1.0|  Required |
| select  Dynamic selection of the response fields | YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: any in response body | Optional |

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:-----------  |:------------- | :--------------| 
| accountId | LP site ID | String ^[a-zA-Z0-9_]{1,20}$| 

### Response

**Response Body**

[Appendix](administration-agent-groups-appendix.html){:target="_blank"} for Entity Structure and Entity Example.
