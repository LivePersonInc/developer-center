---
title: Update an Unified Automatic Message
Keywords:
level1: Documents
level2: Account Configuration
level3: Unified Automatic Messages API
level4: Methods

order: 30
permalink: unified-automatic-messages-api-methods-update-an-unified-automatic-message.html

indicator: both
---

Updates an existing Unified Automatic Message for a specific account.

### Request

| Method | URL |
| :-------- | :----- |
| DELETE | /api/account/{accountId}/configuration/engagement-window/unified-auto-messages/{unifiedAutoMessageId} |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
| X-HTTP-Method-Override=DELETE | Overrides unsupported HTTP methods. To be used with the 'PUT’ value. |
| Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |


**Path Parameters**

| Parameter | Description | Type / Value |
| :----------- | :------------ | :--------------- |
| unifiedAutoMessageId | Unique account config object ID  | Positive long number greater than zero |

**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
| v               | API version                                                                  | String  | 2.0 is the current version                     |

### Response

**Response Codes**

| Code | Description |
| :----- | :------------- |
| 200 | OK |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 404 | Data Not Found |
| 500 | Internal Server Error |

**Response Body**

Deleted Unified Auto Message’s JSON.
