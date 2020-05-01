---
pagename: Delete an Unified Automatic Message
redirect_from:
  - account-configuration-unified-automatic-messages-delete-an-automatic-message.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Unified Automatic Messages API
subfoldername: Methods

order: 40
permalink: unified-automatic-messages-api-methods-delete-an-unified-automatic-message.html

indicator: both
---

Deletes an existing Unified Automatic Message for a specific account.

### Request

| Method | URL |
| :-------- | :----- |
| DELETE | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/engagement-window/unified-auto-messages/{unifiedAutoMessageId} |

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
