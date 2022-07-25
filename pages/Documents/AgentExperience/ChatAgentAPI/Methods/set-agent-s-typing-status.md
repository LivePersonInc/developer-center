---
pagename: Set Agent's Typing Status
redirect_from:
  - agent-set-agent-typing.html
Keywords:
sitesection: Documents
categoryname: "Agent Experience"
documentname: Chat Agent API
subfoldername: Methods

order: 180
permalink: chat-agent-api-methods-set-agent-s-typing-status.html

indicator: chat
---

This method sets the agent's typing status.

### Request

| Method | URL |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/agentTyping?v=1&NC=true|

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization| Bearer {bearer-from-login} |
| X-HTTP-Method-Override | PUT |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Body Parameters**
| Name | Description | Type/Value | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| agentTyping | Indicates if the agent is currently typing or not. | string | Required | Valid values: "typing", "not-typing" |

### Response

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | Ok |
| 400 | Bad Request |

Request body example:

```json
{
  "agentTyping" : "typing"
}
```
