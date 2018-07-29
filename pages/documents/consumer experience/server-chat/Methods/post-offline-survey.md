---
title: Post Offline Survey
redirect_from:
  - consumer-experience-server-chat-post-offline-survey.html
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 60
permalink: server-chat-api-methods-post-offline-survey.html

indicator: chat
---

Posts an offline survey.

*Note: Currently PUT is supported using a POST method with the "X-HTTP-Method-Override:PUT" header.*

### Request

| Method | URL  |
| :--- | :--- |
| POST | https://{domain}/api/account/{accountId}/chat/offlineSurvey?v=1&NC=true |

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

**Survey Body Parameters**

| Name	| Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| question | Contains answer elements for the survey's question with this ID. | |  |
| answer | Provided answer for the container question. | alphanumeric | If the question is a multi-selection type (checkbox) it can contain more than one answer. |
| skill | Sets the visitor's skill. | alphanumeric | |
| visitorId | A visitorId from a previous chat can be set in this parameter in order to link this survey to an existing visitor. | numeric | | 
| visitorIp | Sets the visitor's IP address. | alphanumeric (IP) | The IP address can be used to identify a visitor. |
| chatRefferer | Sets the location of where the chat button was clicked. | alphanumeric  | Can have a URI format, but not mandatory. |
| userAgent | Sets the visitor's user agent. | alphanumeric | If no user agent is specified, it will be taken from the HTTP "User-Agent" header. |

Request Body example:

    {"survey":{"id":361346,"question":[{"id":4991310,"answer":"natalie"},{"id":4991311,"answer":"natalie@mail.com"},{"id":4991312,"answer":"03556"},{"id":4991314,"answer":"tes"}],"LETagVisitorId":"rloXnVgEQ-iQuoOytvKNqA","LETagSessionId":"rN82d4rATN6EuiA4cJwaPg","LETagContextId":"5","skill":"Sales","userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"}}

  
### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |