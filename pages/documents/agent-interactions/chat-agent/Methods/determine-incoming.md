---
title: Determine Incoming Chat Request
redirect_from:
  - agent-determine-incoming.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 70
permalink: chat-agent-api-methods-determine-incoming-chat-request.html

indicator: chat
---

This method returns the number of incoming chat requests assigned to the logged in agent and a link to accept the next chat request.

### Request

| Method | URL                                                                                                 |
|--------|-----------------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/incomingRequests?v=1&NC=true |

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

| Name         | Description                                        | Type/Value |
|--------------|----------------------------------------------------|------------|
| ringingCount | Number of incoming requests to chat with an agent. | numeric    |

*Note: If there are no incoming chat requests, then the rel link will not appear.*

**Response Codes**

| Code | Response |
|------|----------|
| 200  | OK       |

Response example for JSON:

    {
     "incomingRequests": {
       "ringingCount": "0"
     }
    }