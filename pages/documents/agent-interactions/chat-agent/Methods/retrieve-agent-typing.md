---
title: Retrieve Agent’s Typing Status
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 170
permalink: agent-retrieve-agent-typing.html

---

This method returns the agent's typing status.

### Request

| Method | URL                                                                                                   |
|--------|-------------------------------------------------------------------------------------------------------|
| GET    | https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/agentTyping |

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

### Response

**Elements in the response**

 | Name        | Description                                            | Type   | Notes                                           |
|-------------|--------------------------------------------------------|--------|-------------------------------------------------|
| agentTyping | Indicates if the agent is currently typing a response. | string | Valid values: "typing", "not-typing", "unknown" |

**Response Codes**

 |Code|  Response| 
 |:---  |:---| 
 |201  |Created |