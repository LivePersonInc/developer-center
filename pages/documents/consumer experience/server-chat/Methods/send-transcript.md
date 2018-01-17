---
title: Send a Transcript
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 170
permalink: consumer-experience-server-chat-send-transcript.html

indicator: chat
---

Sends a transcript of the chat to the visitor's email address.

### Request

| Method | URL |
| :--- | :--- |
| PUT | https://{domain}/api/account/{accountId}/chat/{chatId}/transcriptRequest?v=1&NC=true |

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

**Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| email | Email address to send the transcript to | String |
| timezoneOffset | [Optional] Offset in milliseconds from GMT. The timestamps in the email will specify this offset to fit the consumer's timezone| number |

Request Body Example:

    {
      "email": "visitorEmail@gmail.com",
      "timezoneOffset": -7200000
    }

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | OK |
