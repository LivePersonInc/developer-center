---
pagename: Retrieve Chat Information
redirect_from:
  - agent-retrieve-chat-info.html
Keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Chat Agent API
subfoldername: Methods

order: 150
permalink: chat-agent-api-methods-retrieve-chat-information.html

indicator: chat
---

This method retrieves information regarding the current status of the chat. The information section includes the agent's state, agent's name, start time of the chat, last update, visitor's ID, agent typing, visitor typing, and the visitor's name.

### Request

| Method | URL                                                                                       |
|--------|-------------------------------------------------------------------------------------------|
| GET    | https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountId}/agentSession/{agentSessionId}/chat/{chatId}/info?v=1&NC=true |

**Request Headers**

| Header                                   | Description                |
|------------------------------------------|----------------------------|
| Authorization                            | Bearer {bearer-from-login} |
| Content-Type                             | application/json           |
| Accept                                   | application/json           |

**Formats**

The body media type must have one of the following formats:

- XML
- JSON

### Response

**Elements in the response**

| Name           | Description                                                                                                                  | Type              | Notes                                                                                                                                                                                                                                                      |
|----------------|------------------------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| visitor-name   | The name that was set by the visitor.                                                                                        | link relationship |                                                                                                                                                                                                                                                            |
| visitor-typing | Visitor's typing status.                                                                                                     | link relationship |                                                                                                                                                                                                                                                            |
| agent-typing   | Agent's typing status.                                                                                                       | link relationship |                                                                                                                                                                                                                                                            |
| state          | The state of the chat session.                                                                                               | string            | Valid values: "waiting", "chatting", "ended"                                                                                                                                                                                                               |
| chatSessionKey | The current chat session key.                                                                                                | string            |                                                                                                                                                                                                                                                            |
| agentName      | The name of the agent that is currently chatting with the visitor.                                                           | alphanumeric      |                                                                                                                                                                                                                                                            |
| agentId        | The ID number of the agent that is chatting with the visitor.                                                                | numeric           |                                                                                                                                                                                                                                                            |
| startTime      | The time the chat started.                                                                                                   | time              |                                                                                                                                                                                                                                                            |
| lastUpdate     | The last time that any request was sent to the chat session.                                                                 | time              |                                                                                                                                                                                                                                                            |
| chatTimeout    | The time in seconds from the last update time, after which the chat times out and must be updated again before this timeout. | numeric           |                                                                                                                                                                                                                                                            |
| visitorId      | The ID number of the visitor that is chatting with the agent.                                                                | numeric           |                                                                                                                                                                                                                                                            |
| agentTyping    | Indicates if the agent is currently typing a message.                                                                        | string            | Valid values: "typing", "not-typing"                                                                                                                                                                                                                       |
| visitorTyping  | Indicates if the visitor is currently typing a message.                                                                      | string            | Valid values: "typing", "not-typing"                                                                                                                                                                                                                       |
| visitorName    | The name of the visitor that is chatting with the agent.                                                                     | alphanumeric      | Default value: visitor.                                                                                                                                                                                                                                    |
| rtSessionId    | The identifier of this session which is shared across other APIs.                                                            | numeric           | This identifier can be used to correlate the session through the various API types. This identifier can also be retrieved in Operator Alerts using the macro {LPINFO!rt-session-id}. In order to make it unique, concatenate the account id to this value. |
| participantId  | The identifier of the authenticated consumer.                                                            | GUID              | Optional. This identifier is only present when the consumer has started a chat VIA SSO. |

**Response Codes**

| Code| Response|
|------|------| 
 |200  |OK |
