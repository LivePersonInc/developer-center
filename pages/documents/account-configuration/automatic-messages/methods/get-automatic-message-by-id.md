---
title: Get Automatic Message by ID
keywords:
level1: Documents
level2: Account Configuration
level3: Automatic Messages API
level4: Methods

order: 20
permalink: account-configuration-automatic-messages-get-automatic-message-by-id.html

indicator: both
---

Retrieves an Automatic Message by ID for a specific account.

### Request

| Method | URL |
| :-------- | :---- |
| GET | /api/account/{accountId}/configuration/engagement-window/auto-messages/{autoMessageId} |

**Path Parameters**

| Parameter |  Description        | Type / Value     |
| :----------- | :--------------- | :--------------- |
| autoMessageId | Unique account config object ID | Positive long number greater than zero |

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

```json
    {
            "id": 2,
            "deleted": false,
            "enabled": true,
            "messageEventId": "On-hold message #1",
            "templateId": "On-hold message #1",
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
                    "name": "timer",
                    "value": "60"
                }
            ]
    }
```
