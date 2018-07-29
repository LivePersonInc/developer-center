---
title: Set the Visitor's Typing Status
redirect_from:
  - consumer-experience-server-chat-set-visitor-typing-status.html
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 140
permalink: server-chat-api-methods-set-the-visitor's-typing-status.html

indicator: chat
---

Sets the visitor's typing status.

### Request

| Method | URL |
| :--- |  :--- |
| PUT |  https://{domain}/api/account/{accountId}/chat/{chatId}/info/visitorTyping?v=1&NC=true |

*Currently PUT is supported using a POST method with the "X-HTTP-Method-Override=PUT" header.*

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |
| X-HTTP-Method-Override | PUT |

JSON Request Body example:

    {
      "visitorTyping": "not-typing"
    }

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | OK |
