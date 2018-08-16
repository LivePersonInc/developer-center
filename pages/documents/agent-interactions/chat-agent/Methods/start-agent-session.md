---
title: Start Agent Session
redirect_from:
  - agent-start-agent-session.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 10
permalink: chat-agent-api-methods-start-agent-session.html

indicator: chat
---

### Request

| Method | URL |
| :---- | :----- |
| POST | https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountid}/agentSession?v=1&NC=true |

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

**Body**

For backwards compatibility purposes, you must include the following request body:

```json
{
  "loginData": ""
}
```

### Response

**Elements in the response**

| Name | Description | Type/Value | Notes |
| :---- | :----- | :---- | :--- |
| agentSessionId | The ID of the agent session | string | Found in the @href element|

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |

Response example for JSON:

    {
     "agentSessionLocation": {
       "link": {
         "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSession Id}",
         "@rel": "location"
       }
     }
    }  
