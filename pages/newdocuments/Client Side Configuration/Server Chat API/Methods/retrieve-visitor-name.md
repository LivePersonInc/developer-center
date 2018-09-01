---
pagename: Retrieve Visitor's Name
redirect_from:
  - consumer-experience-server-chat-retrieve-visitor-name.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Server Chat API
subfoldername: Methods

order: 120
permalink: server-chat-api-methods-retrieve-visitor-s-name.html

indicator: chat
---

Returns the visitor's name that was set by the visitor. The default is "you".

### Request

| Method | URL |
| :--- | :--- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/chat/{chatId}/info/visitorName?v=1&NC=true |

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
