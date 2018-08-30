---
pagename: Update Agent Groups
redirect_from:
  - administration-update-agent-groups.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Agent Groups API
subfoldername: Methods


order: 50

permalink: agent-groups-api-methods-update-agent-groups.html

indicator: both
---

This API updates an agent group for a specific account.

### Request

 |Method | URL |
 |:-------- | :----| 
 |PUT|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/agentGroups |

**Request Headers**

 |Header|  Description |
 |:--------  |:------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Request Body**

[Appendix](administration-agent-groups-appendix.html) for Entity Structure and Entity Example.

**Query Parameters**

| Parameter | Description | Type / Value | Required |
 |:------------ | :-------------- | :------------  |:--- |
| v | API version number | Double. Default Value: 1.0|  Required |
| select  Dynamic selection of the response fields | YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: any in response body | Optional |

**Path Parameters**

 |Parameter | Description  |Type / Value |
 |:-----------  |:------------- | :--------------| 
| accountId | LP site ID | String | 

### Response

**Response Body**

[Appendix](administration-agent-groups-appendix.html) for Entity Structure and Entity Example.
