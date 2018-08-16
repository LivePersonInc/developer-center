---
title: Set Agent Availability
redirect_from:
  - agent-set-agent-availability.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 30
permalink: chat-agent-api-methods-set-agent-availability.html

indicator: chat
---

This method sets the agent's availability to one of the following states:

- **Online**: Agents can accept chat requests.
- **Away**: Agents cannot accept chat requests.
- **Occupied**: Agents can receive chats that were transferred to them.

### Request

| Method | URL |
| :--- | :--- |
| POST | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html).net/api/account/{accountId}/agentSession/{agentSessionId}/availability?v=1&NC=true |

**Request Headers**

| Header | Description |
| :--- | :--- |
| Authorization | Bearer {bearer-from-login} |
| X-HTTP-Method-Override | PUT |
| Content-Type | application/json |
| Accept | application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Body Parameters**

| Name | Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| chat | Sets the agent’s availability. | string | Valid values: "Online", "Away", "Occupied"
| chatReasonId           | chat state reason id (represents a reason as configured in the account) voice.                                                                                        | alphanumeric           | Optional - reasonID is currently not retrievable, contact your Account Team if necessary |

**Body**

Example for JSON:

```json
{
"availability": {
    "chat" : "Online"
    }
}

```

### Response

**Elements in the response**

| Name | Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| chat | Sets the agent’s availability. | string | Valid values: "Online", "Away", "Occupied" |

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |
