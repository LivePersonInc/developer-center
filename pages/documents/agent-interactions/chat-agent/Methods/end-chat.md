---
title: End Chat
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 140
permalink: agent-end-chat.html

indicator: chat
---

Use this request to end a chat.

### Request

| Method | URL                                                                                               |
|--------|---------------------------------------------------------------------------------------------------|
| POST   | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events?v=1&NC=true |

**Request Headers**

| Header                                   | Description      |
|------------------------------------------|------------------|
| Authorization Bearer {bearer-from-login} |                  |
| Content-Type                             | application/json |
| Accept                                   | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Body Parameters**

| Name  | Description                    | Type/Value | Required |
|-------|--------------------------------|------------|----------|
| state | End the chat with the visitor. | string     | Required |

Body example:

    {
        "event" :
        {
            "@type" : "state",
            "state" : "ended"
        }
    }

### Response

**Response Codes**

| Code | Response |
|------|----------|
| 201  | Created  |

Response example for JSON:

    {
     "chatLocation": {
       "link": {
         "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events/{number}",
         "@rel": "location"
       }
     }
    }

*Note: The "ended" event ends the chat (and adds an "ended" event to the chat content), but it does NOT delete the chat session resource.*
