---
pagename: Retrieve Current Availability
redirect_from:
  - agent-retrieve-current-availability.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Chat Agent API
subfoldername: Methods

order: 20
permalink: chat-agent-api-methods-retrieve-current-availability.html

indicator: chat
---

This method returns the agent's availability to accept chat requests.

Available states are:

- **Online**: Agents can accept chat requests.
- **Away**: Agents cannot accept chat requests.
- **Occupied**: Agents can receive chats that were transferred to them.

### Request

 |Method|  URL |
 |:---|  :---|
 |GET|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/availability?v=1&NC=true |

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

| Name | Description                                        | Type/Value | Notes                                      |
|------|----------------------------------------------------|------------|--------------------------------------------|
| chat | Displays the agent's availability to accept chats. | string     | Valid values: "Online", "Away", "Occupied" |

**Response Codes**

 | Code | Response |
|------|----------|
| 200  | OK       |

Response example:

```json
{
 "availability": {
   "chat": "Online",
   "voice": "Offline"
 }
}
```
