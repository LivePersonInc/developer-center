---
title: Retrieve Visitor's Typing Status
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 190
permalink: agent-retrieve-visitor-typing.html

---

This method retrieves the visitor's typing status.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/visitorTyping |

*Note: Currently PUT is supported using a POST method with the "X-HTTP-Method-Override:PUT" header.* 

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization| Bearer {bearer-from-login} |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

| Name | Description | Type/Value | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| visitorTyping | Indicates if the visitor is currently typing a response. | string | Required | Valid values: "typing", "not-typing", "unknown" |

**Response Codes**

| Code | Response |
| :--- | :--- |
| 201 |  Created |

Response example for JSON:

    {
    "visitorTyping" : "typing"
    }