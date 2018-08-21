---
pagename: Retrieve Available Skills
redirect_from:
  - agent-chat-agent-retrieve-skills.html
Keywords:
sitesection: Documents
categoryname: Agent Interactions
documentname: Chat Agent API
subfoldername: Methods

order: 200
permalink: chat-agent-api-methods-retrieve-available-skills.html

indicator: chat
---

This method returns the available skills to transfer a chat. The list includes all skills that have at least one agent online and is not currently engaged in the chat.

### Request

| Method | URL |
| :--- | :--- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/transfer?v=1&NC=true |

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

### Response

**Elements in the response**

| Name | Description | Type/Value |
| :--- | :--- | :--- |
| skill | The available skills (id and name) to which the chat can be transferred. | alphanumeric |

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |

**Response example:**

    {"transfer":{"skill":[{"id":"25975313","name":"Sales","onlineAgents":"1"},{"id":"26060413","name":"Billing","onlineAgents":"1"},