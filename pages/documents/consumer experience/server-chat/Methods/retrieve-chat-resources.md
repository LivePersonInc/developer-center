---
title: Retrieve Chat Resources, Events and Information
level1: Documents
level2: Consumer Experience
level3: Server Chat API
level4: Methods

order: 80
permalink: server-chat-api-methods-retrieve-chat-resources,-events-and-information.html

indicator: chat
---

Retrieves all information available for this chat, including both Events and Information sections of the chat.

### Request

| Method | URL  |
| :--- | :--- |
| GET | Accessed from a link in the Location header from the response to the [Start Chat](consumer-experience-server-chat-start-chat.html){:target="_blank"} POST request. |

**Formats**

- XML
- JSON

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | LivePerson appKey=721c180b09eb463d9f3191c41762bb68 |
| Content-Type | application/json |
| Accept | application/json |

**Parameters**

| Name  | Description | Type/Value |
| :--- | :--- | :--- |
| from | The ID of the first event that is shown in the response. | numeric |

### Response

**Response Codes**

| Code | Description |
| :--- | :--- |
| 200 | Successful |

JSON Example:

    {
      "chat": {
        "link": [
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}",
            "@rel": "self"
          },
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/events",
            "@rel": "events"
          },
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info",
            "@rel": "info"
          },
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}?from=4",
            "@rel": "next"
          },
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/transcriptRequest",
            "@rel": "transcript-request"
          },
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/transcriptWithSubjectRequest",
            "@rel": "transcript-with-subject-request"
          },
          {
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/exitSurvey",
            "@rel": "exit-survey"
          },
          {
            // not supported (deprecated)
            "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/customVariables",
            "@rel": "custom-variables"
          }
        ],
        "events": {
          "link": [
            {
              "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/events",
              "@rel": "self"
            },
            {
              "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/events?from=4",
              "@rel": "next"
            }
          ],
          "event": [
            {
              "@id": "0",
              "@type": "state",
              "time": "2017-02-27T06:24:15.424-05:00",
              "state": "waiting"
            },
            {
              "@id": "1",
              "@type": "line",
              "time": "2017-02-27T06:24:15.425-05:00",
              "textType": "plain",
              "text": "Thank you for choosing to chat with us.",
              "by": "info",
              "source": "system",
              "systemMessageId": 4,
              "subType": "REGULAR"
            },
            {
              "@id": "2",
              "@type": "state",
              "time": "2017-02-27T06:24:21.930-05:00",
              "state": "chatting"
            },
            {
              "@id": "3",
              "@type": "line",
              "time": "2017-02-27T06:24:21.930-05:00",
              "textType": "plain",
              "text": "You are now chatting with Natalie.",
              "by": "info",
              "source": "system",
              "systemMessageId": 3,
              "subType": "REGULAR"
            }
          ]
        },
        "info": {
          "link": [
            {
              "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info",
              "@rel": "self"
            },
            {
              "@href": "https:/{domain}/api/account/{accountId}/chat/{chatId}/info/visitorName",
              "@rel": "visitor-name"
            },
            {
              "@href": "https://{domain}/api/account/{accountId}/chat/{chatId}/info/visitorTyping",
              "@rel": "visitor-typing"
            },
            {
              "@href": "{domain}/api/account/{accountId}/chat/{chatId}/info/agentTyping",
              "@rel": "agent-typing"
            }
          ],
          "state": "chatting",
          "chatSessionKey": "H3079121553394024223-70f331aba40b4ae58fe9e1af832e31b9K8388834",
          "skillName": "Sales",
          "skillId": 25975313,
          "agentName": "Natalie",
          "agentId": 25025413,
          "startTime": "2017-02-27T06:24:15.425-05:00",
          "duration": 0,
          "lastUpdate": "2017-02-27T06:24:31.188-05:00",
          "chatTimeout": 40,
          "visitorId": 1214701440733986,
          "agentTyping": "not-typing",
          "visitorTyping": "not-typing",
          "visitorName": "You",
          "rtSessionId": 4294967522,
          "sharkVisitorId": "rloXnVgEQ-iQuoOytvKNqA",
          "sharkSessionId": "rN82d4rATN6EuiA4cJwaPg",
          "sharkContextId": 2,
          "engagementId": 27469613,
          "campaignId": 26948813,
          "language": "en-US"
        }
      }
    }

**Elements in the Response**

| Name | Description | Type | Notes |
| :--- | :--- | :--- | :--- |
| events | URI to retrieve the chat events, add a line or end a chat. | link relationship | See [Retrieve Chat Events](consumer-experience-server-chat-retrieve-chat-events.html)|
| info | URI to retrieve information regarding the current status of the chat. | link relationship | See [Retrieve Chat Information](consumer-experience-server-chat-retrieve-chat-information.html). |
| transcript-request | URI to send a transcript of the chat. | link relationship | |
| exit-survey | URI to retrieve the Exit survey structure or to submit the survey data. | link relationship | |
| visitor-name | URI to return the visitor's name or set the visitor's name. | link relationship | |
| visitor-typing | URI to return visitor's typing status or sets the visitor's typing status. | link relationship | |
| agent-typing | URI to return the agent's typing status. | link relationship | |
| visit-session | URI to get the visit session associated with this chat session. | link relationship | Included in the response only if the application key has Visit API privilege. |
