---
pagename: Get All Agent Groups
redirect_from:
  - administration-get-all-agent-groups.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Groups API
subfoldername: Methods
order: 10
permalink: agent-groups-api-methods-get-all-agent-groups.html
indicator: both
---

This API retrieves a list of agent groups for a specific account.

### Request

| Method | URL |
| :------- | :----- |
| GET  | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/agentGroups |

**Request Headers**

| Header  | Description  |Required |
| :------- | :--------------- | :--- |
| Authorization | Contains token string to allow request authentication and authorization. | Required
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization.|  Optional |

**Path Parameters**

| Parameter | Description | Type / Value |
| :---------- | :------------- | :-------------- |
 |accountId | LP site ID | String  |

### Response

**Response Headers**

| Header | Description|
| :------- | :------------- |
 |eTag | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value. |

**Response Body**

[Appendix](administration-agent-groups-appendix.html) for Entity Structure and Entity Example.
