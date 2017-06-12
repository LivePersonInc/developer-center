---
title: Set Agent Availability
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 30
permalink: agent-set-agent-availability.html

---

This method sets the agent's availability to one of the following states:

- **Online**: Agents can accept chat requests.
- **Away**: Agents cannot accept chat requests.
- **Occupied**: Agents can receive chats that were transferred to them.

### Request

| Method | URL |
| :--- | :--- |
| PUT | https://{domain}.net/api/account/{accountId}/agentSession/{agentSessionId}/availability?v=1&NC=true |

*Note: PUT is supported using a POST method with the "X-HTTP-Method-Override:PUT" header.*

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

**Body Parameters**

| Name | Description | Type/Value | Notes |
| :--- | :--- | :--- | :--- |
| chat | Sets the agent’s availability. | string | Valid values: "Online", "Away", "Occupied" |
| chatReasonId | Sets a reason id for the availability state | string | | |

*Note: chatReasonId is optional and defaults to null.
Each reasonId represents a String value as configured in  the account.*

**Body**

Examples for JSON:

```json
{
"availability": {
    "chat" : "Online"
    }
}

```

```json
{
"availability": {
    "chat" : "Online",
    "chatReasonId" : "123"
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
