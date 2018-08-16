---
title: Set the Visitor's Name
redirect_from:
  - consumer-experience-server-chat-set-visitor-name.html
permalink: undefined-set-the-visitors-name.html

indicator: chat
---

Sets the visitor's name. The default is "you".

### Request

| Method | URL |
| :--- | :--- |
| POST | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/chat/{chatId}/info/visitorName?v=1&NC=true |

*Note: Currently PUT is supported using a POST method with the "X-HTTP-Method-Override=PUT" header.*

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

JSON Request body example:

    {
      "visitorName": "Natalie"
    }

### Response

| Response Code | Description |
| :--- | :--- |
| 201 | Successful |
