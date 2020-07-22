---
pagename: Retrieve the Visitor's Typing Status
redirect_from:
  - consumer-experience-server-chat-retrieve-visitor-typing-status.html
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Server Chat API
subfoldername: Methods

order: 130
permalink: server-chat-api-methods-retrieve-the-visitor-s-typing-status.html

indicator: chat
---

Returns the visitor's typing status.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/chat/{chatId}/info/visitorTyping?v=1&NC=true |

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

JSON Example:

```json
    {
      "visitorTyping": "not-typing"
    }
```

**Elements in the Response**

| Name	| Description | Type |  Notes |
| :--- | :--- | :--- |  --- |
| visitorTyping | Visitor's typing status | string | Valid values: "typing", "not-typing"|
