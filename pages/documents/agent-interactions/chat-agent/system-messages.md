---
title: System Messages
Keywords:
level1: Documents
level2: Agent Interactions
level3: Chat Agent API

order: 9
permalink: agent-system-messages.html

---

Messages that are initiated by the system. These messages are added with the `<systemMessageId>` element tag. The following table describes the available messages and IDs:

| ID | Event                                        |
|----|----------------------------------------------|
| 4  | Routing chat to an agent.                    |
| 22 | Ticket ID associated with chat. (Deprecated) |
| 5  | Operator ends chat.                          |
| 3  | Operator accepts chat.                       |
| 2  | Site operators are currently busy.           |
| 13 | Chat is transferred to an operator.          |
| 15 | Chat is transferred to another skill group.  |
| 6  | Chat is unexpectedly disconnected.           |
| 23 | Chat requeued by system.                     |

**Event type="state" Parameters**

| Name  | Description                  | Type   | Notes                                        |
|-------|------------------------------|--------|----------------------------------------------|
| time  | The time the event occurred. | time   |                                              |
| state | The state of the chat.       | string | Valid values: "waiting", "chatting", "ended" |

**Response Codes**

 |Code | Response| 
 |:--- | :---| 
 |200 | OK |
