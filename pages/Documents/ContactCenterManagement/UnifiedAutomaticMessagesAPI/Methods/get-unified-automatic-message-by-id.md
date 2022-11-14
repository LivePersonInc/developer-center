---
pagename: Get Unified Automatic Message by ID
redirect_from:
  - account-configuration-unified-automatic-messages-get-automatic-message-by-id.html
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Unified Automatic Messages API
subfoldername: Methods
order: 20
permalink: unified-automatic-messages-api-methods-get-unified-automatic-message-by-id.html
indicator: both
---

Retrieves an Unified Automatic Message by ID for a specific account.

### Request

| Method | URL |
| :-------- | :---- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/configuration/engagement-window/unified-auto-messages/{unifiedAutoMessageId} |

**Request Headers**

| Header | Description |
| :------- | :-------------- |
 |Authorization | Contains token string to allow request authentication and authorization. |
| If-Match | Contains data revision as known by the client. Allows optimization of the backend, networking, and client resources utilization. |

**Path Parameters**

 |Parameter|  Description|  Type|  Notes|
 |:----------|  :--------------|  :--------------|  :---|
 |accountId|  LP site ID|  string |  Validation fail error code: 400 |
 | unifiedAutoMessageId | Message event ID | string |

**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
| v               | API version                                                                  | String  | 2.0 is the current version                     |
| include_deleted | Flag indicating whether deleted entities should be returned in the response. | Boolean | Valid values: True/False. Default value: False |
| sanitize_data   | Flag indicating whether the text should be sanitized (Antisamy).             | Boolean | Valid values: True/False. Default value: False |
| lang            | Languages (separated by commas) to filter the response by.                   | string  | Format: en-US, en-UK. Default value: null      |
| select          | Yoga selector expression.                                                    | string  | Example values: id, name. Default value: null  |
| context_id      | Context Id                                                                   | string  | Optional Context id (default is account id for ACCOUNT context)     |
| context_type    | Context Type                                                                 | string  | Optional request context type (default is ACCOUNT)     |
| view            | view                                                                         | string  | Optional flag to indicate that the response should include SKILL context data as well     |
| merge_data      | lag to indicate whether the data should be merge                             | Boolean | Optional flag to indicate whether the data should be merge with the default values, when false only override will be return. Default value is true.     |

**Note:** If view=BY_CONTEXT, context parameters are irrelevant.

### Response

**Response Codes**

| Code | Description |
| :---- | :------------ |
| 200 | OK |
| 304 | Not Modified |
| 401 | Not Authenticated |
| 403 | Not Authorized |
| 404 | Data Not Found |
| 500 | Internal Server Error |

**Response Headers**

| Header|  Description |
 |:-------  | :----- |
 |ac-revision | This parameter specifies the version of the data object retrieved. You can use the If-Match parameter in the request to retrieve a specifc version using this parameter's value.. |

**Response Body**

```json
    {
            "messageEventId": "On-hold message #1",
            "deleted": false,
            "enabled": true,
            "data": [
                {
                    "msg": "I'll be right with you.",
                    "lang": "en-us"
                },
                {
                    "msg": "Que está conversando {nombre del agente}",
                    "lang": "ca-ES"
                }
            ],
            "attributes": [
                {
                    "timer": "60"
                }
            ]
    }
```

Contexted Response:

```json
    {
	  "SKILL": {
	    "123": {
	      "messageEventId": "TestMessageEventId",
	      "deleted": false,
	      "skillId": 1,
	      "enabled": true,
	      "data": […],
	      "attributes": […]
	    }
	  },
	  "ACCOUNT": {
	    "456": {
	      "messageEventId": "TestMessageEventId",
	      "deleted": false,
	      "enabled": true,
	      "data": […],
	      "attributes": […]
	    }
	  }
	}
```
