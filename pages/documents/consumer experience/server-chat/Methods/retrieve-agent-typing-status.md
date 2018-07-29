---
title: Retrieve the Agent's Typing Status

level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 131

permalink: consumer-experience-server-chat-retrieve-agent-typing-status.html

indicator: chat
---

Returns the agent's typing status.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/chat/{chatId}/info/agentTyping?v=1&NC=true |

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | OK |

XML Example:

    {
      "agentTyping": "not-typing"
    }

**Elements in the Response**

| Name	| Description | Type |  Notes |
| :--- | :--- | :--- |  --- |
| agentTyping | Agent's typing status | string | Valid values: "typing", "not-typing", "unknown" |