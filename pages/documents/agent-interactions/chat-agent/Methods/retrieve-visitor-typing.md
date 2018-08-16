---
title: Retrieve Visitor's Typing Status
redirect_from:
  - agent-retrieve-visitor-typing.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 190
permalink: chat-agent-api-methods-retrieve-visitors-typing-status.html

indicator: chat
---

This method retrieves the visitor's typing status.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/visitorTyping?v=1&NC=true |

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
