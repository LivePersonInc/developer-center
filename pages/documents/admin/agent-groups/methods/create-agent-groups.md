---
title: Create Agent Groups
keywords:
level1: Documents
level2: Admin
level3: Agent Groups API
level4: Methods


order: 30
permalink: administration-create-agent-groups.html

indicator: both
---

This API creates an agent group for a specific account.

### Request

| Method  |URL |
| :-------- | :-----| 
| POST | https://{domain}/api/account/{accountId}/configuration/le-users/agentGroups |

**Request Headers**

| Header|  Description |
|:-------- | :------------- |
|Authorization | Contains token string to allow request authentication and authorization. |

**Request Body** 

[Appendix](administration-agent-groups-appendix.html){:target="_blank"}{:target="_blank"} for Entity Structure and Entity Example.

**Query Parameters**

| Parameter | Description | Type / Value | Required | Notes |
|:----------- |  :------------ | :--------------- | :--- | :--- |
| v | API version number | Double | Required | Default Value: 1.0 |
| select | Dynamic selection of the response fields. | YOGA 'gdata' dialect. | Optional | Non-existing  field: no error, blank in response. Supported fields: any in response body | 

**Path Parameters**

 |Parameter|  Description|  Type / Value |
| :----------- | :------------- | :-------------- |
 |accountId  LP site ID | string  |

### Response

**Response Headers**

 |Header|  Description|  Notes |
 |:-------|  :--------------  :---| 
 |eTag | Account config objec| type collection revision|  
 |location  |URI Location of the newly created resource.|  Included only when the request created single object. |

**Response Body**

[Appendix](administration-agent-groups-appendix.html){:target="_blank"}{:target="_blank"} for Entity Structure and Entity Example.
