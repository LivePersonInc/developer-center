---
title: Get Unified Automatic Message by ID
keywords:
level1: Documents
level2: Account Configuration
level3: Unified Automatic Messages API
level4: Methods

order: 20
permalink: account-configuration-unified-automatic-messages-get-automatic-message-by-id.html
 
indicator: both
---

Retrieves an Unified Automatic Message by ID for a specific account.

### Request

| Method | URL |
| :-------- | :---- |
| GET | /api/account/{accountId}/configuration/engagement-window/unified-auto-messages/{unifiedAutoMessageId} |

**Path Parameters**

 |Parameter|  Description|  Type|  Notes| 
 |:----------|  :--------------|  :--------------|  :---| 
 |accountId|  LP site ID|  string ^[a-zA-Z0-9_]{1,20}$|  Validation fail error code: 400 |
 | unifiedAutoMessageId | Unique account config object ID | Positive long number greater than zero |

**Query Parameters**

| Name            | Description                                                                  | Type    | Notes                                          |
|-----------------|------------------------------------------------------------------------------|---------|------------------------------------------------|
| v               | API version                                                                  | String  | 2.0 is the current version                     |
| include_deleted | Flag indicating whether deleted entities should be returned in the response. | Boolean | Valid values: True/False. Default value: False |
| sanitize_data   | Flag indicating whether the text should be sanitized (Antisamy).             | Boolean | Valid values: True/False. Default value: False |
| lang            | Languages (separated by commas) to filter the response by.                   | string  | Format: en-US, en-UK. Default value: null      |
| select          | Yoga selector expression.                                                    | string  | Example values: id, name. Default value: null  |


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

**Response Body**

    {
            "messageEventId": "On-hold message #1",
            "deleted": false,
            "enabled": true,
            "data": [
                {
                    "msg": "I'll be right with you.",
                    "lang": "en-us",
                    "isDefault":true
                },
                {
                    "msg": "Que está conversando {nombre del agente}",
                    "lang": "ca-ES",
                    "isDefault":false
                }
            ],
            "attributes": [
                {
                    "timer": "60"
                }
            ]
    }
