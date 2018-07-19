---
title: Retrieve Visitor's Name
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 120
permalink: server-chat-api-methods-retrieve-visitor-s-name.html

indicator: chat
---

Returns the visitor's name that was set by the visitor. The default is "you".

### Request

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/chat/{chatId}/info/visitorName?v=1&NC=true |

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

| Response Code | Description |
| :--- | :--- |
| 200 | Successful |

Response JSON Example:

    {
      "visitorName": "You"
    }
