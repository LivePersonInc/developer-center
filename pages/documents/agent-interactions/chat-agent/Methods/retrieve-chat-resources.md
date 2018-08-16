---
title: Retrieve Chat Resources, Events and Information
redirect_from:
  - agent-retrieve-chat-resources.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 100
permalink: chat-agent-api-methods-retrieve-chat-resources-events-and-information.html

indicator: chat
---

This method retrieves the chat events, information and resources.

### Request

 |Method|  URL|
 |:---  |:--- |
 |GET|  https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}?v=1&NC=true |

**Request Headers**

 |Header  |Description |
 |:---|  :---|
 |Authorization| Bearer {bearer-from-login} |
 |Content-Type|  application/json |
 |Accept|  application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

 | Name         | Description                                                                                                                           | Type/Value        |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| visit-id     | URI for aggregated data and links for information on the visit, pages visited and surveys related to the visit.                       | link relationship |
| transfer     | Transfer a chat from an agent to a specific skill.                                                                                    | link relationship |
| events       | Retrieves the chat events such as: state, resource and line. Use this method to periodically poll for new events in the chat session. | link relationship |
| agent-survey | URI for retrieving the Agent survey structure and submitting the survey data. link relationship                                       |                   |
| info         | Retrieves information regarding the current status of the chat.                                                                       | link relationship |
| next         | The method for polling additional events. This will retrieve events added after your last poll.                                       | link relationship |
| ``           | The chat events. See [Chat events](agent-retrieve-chat-events.html){:target="_blank"}.                                                                  | -                 |
| ``           | The actual information about the chat. See [Chat information](agent-retrieve-chat-info.html){:target="_blank"}.                                           |                   |

**Response Codes**

| Code|  Response |
 |:---|  :---|
 |200  |OK |

Response example:

```json
{
    "chat": {
        "link": [
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415",
                "@rel": "self"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/events",
                "@rel": "events"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/info",
                "@rel": "info"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415?from=4",
                "@rel": "next"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/collaborationChannels",
                "@rel": "collaboration-channels"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/visits/visit/H2170755172687460894K8457415",
                "@rel": "visit-id"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/transfer",
                "@rel": "transfer"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/transferAccount",
                "@rel": "transfer-account"
            },
            {
                "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/survey",
                "@rel": "agent-survey"
            }
        ],
        "events": {
            "link": [
                {
                    "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/events",
                    "@rel": "self"
                },
                {
                    "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/events?from=4",
                    "@rel": "next"
                }
            ],
            "event": [
                {
                    "@id": "0",
                    "@type": "state",
                    "time": "2018-01-29T08:19:43.963-05:00",
                    "state": "waiting"
                },
                {
                    "@id": "1",
                    "@type": "line",
                    "time": "2018-01-29T08:19:43.976-05:00",
                    "textType": "plain",
                    "text": "Thank you for choosing to chat with us.  An agent will be with you shortly.",
                    "by": "info",
                    "source": "system",
                    "systemMessageId": 4,
                    "subType": "REGULAR"
                },
                {
                    "@id": "2",
                    "@type": "state",
                    "time": "2018-01-29T08:19:56.777-05:00",
                    "state": "chatting"
                },
                {
                    "@id": "3",
                    "@type": "line",
                    "time": "2018-01-29T08:19:56.782-05:00",
                    "textType": "plain",
                    "text": "You are now chatting with Barber.",
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
                    "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/info",
                    "@rel": "self"
                },
                {
                    "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/info/visitorName",
                    "@rel": "visitor-name"
                },
                {
                    "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/info/visitorTyping",
                    "@rel": "visitor-typing"
                },
                {
                    "@href": "https://va-a.agentvep.liveperson.net/api/account/25025413/agentSession/1027882276/chat/H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415/info/agentTyping",
                    "@rel": "agent-typing"
                }
            ],
            "state": "chatting",
            "chatSessionKey": "H2170755172687460894-b7d761017809489ea1a257461eb373eeK8457415",
            "agentName": "Barber",
            "agentId": 311098910,
            "startTime": "2018-01-29T08:19:43.976-05:00",
            "duration": 0,
            "lastUpdate": "2018-01-29T08:20:54.560-05:00",
            "chatTimeout": 40,
            "visitorId": 1215602164887992,
            "agentTyping": "not-typing",
            "visitorTyping": "not-typing",
            "visitorName": "visitor",
            "rtSessionId": 4295036103,
            "sharkVisitorId": "QzZDNhYTViMjA1OTJjN2Y5",
            "sharkSessionId": "ttJpjOmRQ0adbOusBi5UlA",
            "sharkContextId": 1,
            "engagementId": 311098710,
            "campaignId": 311098610,
            "language": "en-US"
        }
    }
}
```
