---
title: Retrieve Chat Information
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 110
permalink: server-chat-api-methods-retrieve-chat-information.html

indicator: chat
---

Retrieves information regarding the current status of the chat. The information section includes the state, agent's name, start time of the chat, last update, visitor's ID, agent typing, visitor typing, and the visitor's name.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://{domain}/api/account/{accountId}/chat/{chatId}/info?v=1&NC=true |

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

Response JSON Example

    {
      "info": {
        "link": [
          {
            "href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info",
            "rel": "self"
          },
          {
            "href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info/visitorName",
            "rel": "visitor-name"
          },
          {
            "href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info/visitorTyping",
            "rel": "visitor-typing"
          },
          {
            "href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info/agentTyping",
            "rel": "agent-typing"
          }
        ],
        "state": "chatting",
        "chatSessionKey": "H7496712445225055898-608c28f64b1f4d41aeca4188fb95f66fK8388836",
        "skillName": "Sales",
        "skillId": 25975313,
        "agentName": "Natalie",
        "agentId": 25025413,
        "startTime": "2017-02-27T06:35:45.448-05:00",
        "duration": 0,
        "lastUpdate": "2017-02-27T06:41:10.319-05:00",
        "chatTimeout": 40,
        "visitorId": 1214701440734022,
        "agentTyping": "not-typing",
        "visitorTyping": "not-typing",
        "visitorName": "You",
        "rtSessionId": 4294967524,
        "sharkVisitorId": "rloXnVgEQ-iQuoOytvKNqA",
        "sharkSessionId": "rN82d4rATN6EuiA4cJwaPg",
        "sharkContextId": "3",
        "engagementId": "27469613",
        "campaignId": "26948813",
        "language": "en-US"
      }
    }

**Elements in the Response**

| Name | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| state | The state of the chat session. | string | Valid values: "waiting", "chatting", "ended" |
| chatSessionKey | The ID of the chat session. | alphanumeric | |
| agentName | The name of the agent that is currently chatting with the visitor. | alphanumeric | |
| agentId | The ID of the agent that is currently chatting with the visitor. |  alphanumeric | |
| startTime | The time the chat started.| date time | |
| lastUpdate | The last time that any request was sent to the chat session. | date time | |
| chatTimeout | The time in seconds from the last update time, after which the chat times out and must be updated again before this timeout. | numeric | |
| visitorId | The ID number of the visitor that is chatting with the agent. | numeric | |
| agentTyping | Indicates if the agent is currently typing a message. | string | Valid values: "typing", "not-typing" | 
| visitorTyping | Indicates if the visitor is currently typing a message. | string |  Valid values: "typing", "not-typing" |
| visitorName | Is the name of the visitor that is chatting with the agent. | alphanumeric | |
| rtSessionId | The real-time session ID that can be used to match the chat session on the agent side with the session on the visitor side. | numeric |
