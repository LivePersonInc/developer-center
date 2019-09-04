---
pagename: Accept a Chat
redirect_from:
  - agent-accept-chat.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Chat Agent API
subfoldername: Methods

order: 80
permalink: chat-agent-api-methods-accept-a-chat.html

indicator: chat
---

This method accepts the next chat request.

**Note 1**: *You should verify the results to see if there are any chat requests before accessing the resource.*
**Note 2**: *If an assigned chat is not accepted within 20 seconds, the system will assume the agent being idle and set the agent status to "away".*

### Request

| Method|  URL|
 |:---|  :--- |
 |POST|  https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/incomingRequests?v=1&NC=true |

**Request Headers**

 |Header| Description |
 |:---  |:--- |
 |Authorization |Bearer {bearer-from-login}|
 |Content-Type  |application/json |
 |Accept|  application/json |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Body**

For backwards compatibility purposes, you must include the following empty request body:

```json
{}
```

### Response

If a chat request exists, the request will return an existing chat session.

**Elements in the response**

 |Name|  Description|  Type/Value|  Notes|
 |:----  |:-----  |:----  |:--- |
 |chatId|  The ID of the agent chat|  string|  Found in the @href element|

**Response Codes**

| Code|  Response|
 |:---  |:--- |
 |201|  Created|

Response example for JSON:

```json
{
 "chatLocation": {
   "link": {
     "@href": "https://{domain}/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}",
     "@rel": "location"
   }
 }
}
```
