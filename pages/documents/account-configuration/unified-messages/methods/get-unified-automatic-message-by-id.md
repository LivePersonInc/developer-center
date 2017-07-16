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

| Parameter |  Description        | Type / Value     |
| :----------- | :--------------- | :--------------- |
| unifiedAutoMessageId | Unique account config object ID | Positive long number greater than zero |

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
