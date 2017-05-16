---
title: Set Agent’s Typing Status
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 180
permalink: agent-set-agent-typing.html

---

This method sets the agent's typing status.

### Request

| Method | URL |
| :--- | :--- |
| PUT | https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/agentTyping| 

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
| agentTyping | Indicates if the agent is currently typing a response. | string | Required | Default values: "typing", "not-typing", "unknown" |

**Response Codes**

| Code | Response | 
| :--- | :--- |
| 201 | Created |

Response example for JSON:

    {
    "agentTyping" : "typing"
    }