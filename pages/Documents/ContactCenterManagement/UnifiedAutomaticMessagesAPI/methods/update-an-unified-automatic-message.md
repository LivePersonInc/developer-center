---
pagename: Update an Unified Automatic Message
redirect_from:
  - account-configuration-unified-automatic-messages-update-an-automatic-message.html
Keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Unified Automatic Messages API
subfoldername: Methods

order: 30
permalink: unified-automatic-messages-api-methods-update-an-unified-automatic-message.html

indicator: both
---

Updates an existing Unified Automatic Message for a specific account.

### Request

| Method | URL |
| :-------- | :----- |
| PUT | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/engagement-window/unified-auto-messages/{unifiedAutoMessageId} |

**Path Parameters**

 |Parameter|  Description|  Type|  Notes|
 |:----------|  :--------------|  :--------------|  :---|
 |accountId|  LP site ID|  string |  Validation fail error code: 400 |


**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
| v               | API version                                                                  | String  | 2.0 is the current version                     |
| lang            | Languages (separated by commas) to filter the response by.                   | string  | Format: en-US, en-UK. Default value: null      |
| select          | Yoga selector expression.                                                    | string  | Example values: id, name. Default value: null  |
| context_id      | Context Id                                                                   | string  | Optional Context id (default is account id for ACCOUNT context)     |
| context_type    | Context Type                                                                 | string  | Optional request context type (default is ACCOUNT)     |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
| X-HTTP-Method-Override=PUT | Overrides unsupported HTTP methods. To be used with the 'PUT’ value. |
 |Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |
| Content-Type | application/json |


**Request Body**

The request body is able to accept single JSON object as shown below, or a JSON array of such objects.

```json
    {
            "messageEventId":"On-hold message #1",
            "deleted":false,
            "enabled":true,
            "data": [
                {
                    "msg":"I'll be right with you.",
                    "lang":"en-us"
                },
                {
                    "msg": "Que está conversando {nombre del agente}",
                    "lang": "ca-ES",
                }
            ],
            "attributes":[
                {
                    "timer":"60"
                }
            ]
    }
```

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

Updated Unified Auto Message’s JSON.

**Response Headers**

| Header|  Description |
 |:-------  | :----- |
 |ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. |
