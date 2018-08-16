---
title: Add Lines / End Chat
redirect_from:
  - consumer-experience-server-chat-add-lines.html
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 100
permalink: server-chat-api-methods-add-lines-end-chat.html

indicator: chat
---


The URI of the event that was added is returned in the Location header.

### Request

| Method | URL |
| :--- | :--- |
| POST | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/chat/{chatId}/events?v=1&NC=true |

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |

JSON Body Example: Adding a line:

    {"event":{"@type":"line","text":"hi"}}

JSON Body Example: Ending a chat:

    {"event":{"@type":"state","state":"ended"}}

**Notes**:

- *This API does not support sending HTML, therefore HTML will be presented as text to the agent and will not be translated into its representation.*
- *The "ended" event ends the chat (and adds an "ended" event to the chat content), but it does NOT delete the chat session resource.*
- *Only one event can be added per POST event request.*

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 201 | Successful |
