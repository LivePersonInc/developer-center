---
title: Update an Unified Automatic Message
Keywords:
level1: Documents
level2: Account Configuration
level3: Unified Automatic Messages API
level4: Methods

order: 30
permalink: account-configuration-unified-automatic-messages-update-an-automatic-message.html

indicator: both
---

Updates an existing Unified Automatic Message for a specific account.

### Request

| Method | URL |
| :-------- | :----- |
| DELETE | /api/account/{accountId}/configuration/engagement-window/unified-auto-messages/{autoMessageId} |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
| X-HTTP-Method-Override=DELETE | Overrides unsupported HTTP methods. To be used with the ‘PUT’ value. |

**Path Parameters**

| Parameter | Description | Type / Value |
| :----------- | :------------ | :--------------- |
| unifiedAutoMessageId | Unique account config object ID  | Positive long number greater than zero |

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
