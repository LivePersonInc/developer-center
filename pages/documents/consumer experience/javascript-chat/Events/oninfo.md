---
title: onInfo
redirect_from:
  - consumer-experience-javascript-chat-oninfo.html
Keywords:
sitesection: Documents
level2: Consumer Experience
level3: Javascript Chat SDK
level4: Events

order: 280
permalink: javascript-chat-sdk-events-oninfo.html

indicator: chat
---

This is published when there is a change in the chat information.

**Object Properties**

| Name           | Type                                | Description | Notes                                                                                                                                                   |
|----------------|-------------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| typing         | The visitor tying state. Boolean    |             |                                                                                                                                                         |
| visitorName    | The visitor name.                   | string      |                                                                                                                                                         |
| agentName      | The agent name.                     | string      |                                                                                                                                                         |
| rtSessionId    | The chat session identifier.        | string      |                                                                                                                                                         |
| intialised     | Chat initialization state.          | Boolean     | Depends on the [onInit](consumer-experience-javascript-chat-oninit.html){:target="_blank"} event having been triggered.                                                   |
| agentTyping    | The agent typing state.             | Boolean     |                                                                                                                                                         |
| chatInProgress | If a chat is currently in progress. | Boolean     |                                                                                                                                                         |
| visitorId      | The visitor identifier.             | string      | This should be passed in from monitoring on the chat request and also between chats if you re-start a new chat.                                         |
| agentId        | The agent identifier for this site. | string      |                                                                                                                                                         |
| chatSessionKey | The chat session key.               | string      |                                                                                                                                                         |
| lastUpdate     | The last time the chat was updated. | date        | The [onInfo](consumer-experience-javascript-chat-oninfo.html){:target="_blank"} state event will not be triggered if this is the only change since the last onInfo event. |
| state          | The current chat state.             | string      | This is the same information that returns on chat request response for information on the info fields.                                                  |

**Sample Response**

```json
{
    "typing": false,
    "visitorName": "you",
    "agentName": "agent0",
    "rtSessionId": 123123123,
    "initialised": true,
    "agentTyping": false,
    "chatInProgress": true,
    "visitorId": 123123123213,
    "agentId": 3,
    "timeout": "",
    "chatSessionKey": "H123123123123123-123123123123123123132123",
    "chatState": "chatting",
    "lastUpdate": "2013-05-23T20:00:11.513-04:00",
    "state": "chatting"
}
```                     