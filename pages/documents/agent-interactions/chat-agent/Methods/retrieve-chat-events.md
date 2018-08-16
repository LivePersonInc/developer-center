---
title: Retrieve Chat Events
redirect_from:
  - agent-retrieve-chat-events.html
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API
level4: Methods

order: 120
permalink: chat-agent-api-methods-retrieve-chat-events.html

indicator: chat
---

Use this method to periodically poll for new events in the chat session. The method for polling should always be the URI specified in the "next" link. This will only retrieve events added after your last poll.

### Request

 |Method  |URL |
 |:---|  :---| 
 |GET|  https://[{domain}](https://developers.liveperson.com/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/events?v=1&NC=true |

**Request Headers**

 |Header  |Description |
 |:---|  :---| 
 |Authorization| Bearer {bearer-from-login} |
 |Content-Type|  application/json| 
 |Accept|  application/json| 

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

**Parameters**

 |Name|  Description|  Type/Value| 
 |:---  |:---  |:--- |
|from  |The ID of the first event that is shown in the response.  |numeric| 

### Response

Event type="line" Parameters

| Name            | Description                         | Type         | Notes                                              |
|-----------------|-------------------------------------|--------------|----------------------------------------------------|
| time            | The time the event occurred.        | time         |                                                    |
| text            | Content of the chat.                | alphanumeric |                                                    |
| textType        | The type of message.                | plain/html   |                                                    |
| by              | Type of message that is sent.       | string       | Valid values: "info", "agent", "visitor"           |
| source          | Indication of who sent the message. | string       | Valid values: "system", "agent", "visitor"         |
| systemMessageId | The ID of the message.              | numeric      | See [System Messages](agent-system-messages.html){:target="_blank"}. |
