---
pagename: Retrieve Visitor’s Name
redirect_from:
  - agent-retrieve-visitor-name.html
Keywords:
sitesection: Documents
categoryname: Agent Interactions
documentname: Chat Agent API
subfoldername: Methods

order: 160
permalink: chat-agent-api-methods-retrieve-visitor-s-name.html

indicator: chat
---

This method returns the name that was set by the visitor (default: visitor).

### Request

| Method | URL |
| :--- | :--- |
| GET | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info/visitorName?v=1&NC=true |

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
| visitorName | The name of the visitor. | alphanumeric |

**Response Codes**

| Code | Response |
| :--- | :--- |
| 200 | OK |
