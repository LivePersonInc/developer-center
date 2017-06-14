---
title: Retrieve Data for Multiple Chats
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 110
permalink: agent-retrieve-data.html

indicator: chat
---

This method retrieves the events, information and resources of multiple chats. Use this method to periodically poll for new data of multiple chat sessions.

### Request

| Method | URI |
| :--- | :--- |
| GET | Resource is not exposed but can be used with any given valid agent session. {agent-session}/chat?chatSessionKeys=CSK1,CSK2,...&fromEventIds=EID1,EID2,...&v=1&NC=true |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization| Bearer {bearer-from-login} |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Parameters**

| Name | Description | Type/Value | Required | Notes |
| :--- | :--- | :--- | :--- | :--- |
| chatSessionKeys | List of the chat session keys of the chats you wish to retrieve separated by commas (,) | alphanumeric | Required | Example: {agent-session}/chat?chatSessionKeys=CSK1,CSK2,...&v=1 |
| fromEventIds | List of the last event ids for the chats you wish to retrieve, this will ensure you only get updates for new chat events.  | numeric | | Example: {agent-session}/chat?chatSessionKeys=CSK1,CSK2,...&fromEventIds=EID1,EID2,...&v=1 |

### Response

**Response Codes**

| Code | Response |
| :--- | :--- | 
| 200 | OK |

Response example for JSON:

    {
      "chats": {
        "chat": [
          {
            "link": [
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}",
                "rel": "self"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events",
                "rel": "events"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info",
                "rel": "info"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}?from=214",
                "rel": "next"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/visits/visit/{visitId}",
                "rel": "visit-id"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/transfer",
                "rel": "transfer"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/transferAccount",
                "rel": "transfer-account"
              },
              {
                "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/survey",
                "rel": "agent-survey"
              }
            ],
            "events": {
              "link": [
                {
                  "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events",
                  "rel": "self"
                },
                {
                  "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events?from=214",
                  "rel": "next"
                }
              ],
              "event": [
                {
                  "id": 0,
                  "type": "state",
                  "time": "2015-08-30T18:06:02+03:00",
                  "state": "waiting"
                },
                {
                  "id": 1,
                  "type": "line",
                  "time": "2015-08-30T18:06:02.001+03:00",
                  "textType": "plain",
                  "text": "Thank you for choosing to chat with us.  An agent will be with you shortly.",
                  "by": "info",
                  "source": "system",
                  "systemMessageId": "4",
                  "subType": "REGULAR"
                },
                {
                  "id": 2,
                  "type": "state",
                  "time": "2015-08-30T18:07:26.902+03:00",
                  "state": "chatting"
                },
                {
                  "id": 3,
                  "type": "line",
                  "time": "2015-08-30T18:07:26.903+03:00",
                  "textType": "plain",
                  "text": "You are now chatting with Agent Nick.",
                  "by": "info",
                  "source": "system",
                  "systemMessageId": "3",
                  "subType": "REGULAR"
                },
                {
                  "id": 4,
                  "type": "line",
                  "time": "2015-08-30T18:07:26.904+03:00",
                  "textType": "plain",
                  "text": "",
                  "by": "info",
                  "source": "system",
                  "systemMessageId": "4",
                  "subType": "REGULAR"
                }
              ]
            },
            "info": {
              "link": [
                {
                  "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info",
                  "rel": "self"
                },
                {
                  "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/visitorName",
                  "rel": "visitor-name"
                },
                {
                  "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/visitorTyping",
                  "rel": "visitor-typing"
                },
                {
                  "href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/agentTyping",
                  "rel": "agent-typing"
                }
              ],
              "state": "chatting",
              "chatSessionKey": "H4709474615328845423-2767456311409308813K8414056",
              "agentName": "Agent Nick",
              "agentId": 2,
              "startTime": "2015-08-30T18:06:02.001+03:00",
              "duration": 0,
              "lastUpdate": "2015-08-30T18:10:57.237+03:00",
              "chatTimeout": 40,
               "visitorId": 1222309710121,
              "agentTyping": "not-typing",
              "visitorTyping": "not-typing",
              "visitorName": "visitor",
              "rtSessionId": 4294992744
            }
          }
        ]
      }
    }

*Note: Since this resource does not provide a "next" link, you must keep track of the chat event IDs received for each chat session in order to be able to query only new events on every request.*
