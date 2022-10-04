---
pagename: Delete Agent Group
redirect_from:
  - administration-delete-agent-group.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Groups API
subfoldername: Methods

order: 80
permalink: agent-groups-api-methods-delete-agent-group.html

indicator: both
---

This API deletes an agent group from a specific account.

### Request

| Method|  URL|
 |:--------  |:---- |
 |DELETE|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/le-users/agentGroups/{agentGroupId} |

**Request Headers**

 |Header  |Description |
 :------  :-------------- |
 |Authorization|  Contains token string to allow request authentication and authorization. |
 |If-Match|  Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Query Parameters**

 |Parameter | Description | Type / Value  |Required |
| :----------- | :-------------  |:-------------- | :--- |
|v|   API version number|  Double. Default Value: 1.0|  Required
 |select|  Dynamic selection of the response fields|  YOGA 'gdata' dialect. Non-existing field: no error, blank in response. Supported fields: any in response body|  Optional |

**Path Parameters**

| Parameter | Description | Type / Value |
| :----------- | :-------------  |:-------------- |
| accountId  |LP site ID  String  |

### Response

**User Entity Structure**

[Appendix](administration-agent-groups-appendix.html) for Entity Structure and Entity Example.