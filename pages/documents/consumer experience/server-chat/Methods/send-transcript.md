---
title: Send a Transcript
redirect_from:
  - consumer-experience-server-chat-send-transcript.html
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 170
permalink: server-chat-api-methods-send-a-transcript.html

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

Here's an example image of the email:

<img src="img/EmailTranscriptScreenShot.png" style="height: 420px;">

Request Body Example:

    {
      "email": "visitorEmail@gmail.com"
    }

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | OK |
