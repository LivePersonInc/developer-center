---
title: Overview
Keywords:

level2: Agent Interactions
level3: Messaging Agent API

level-order: 2
order: 1
permalink: agent-int-overview.html
root-link: true
folder: messaging-apis
docs: https://lpgithub.dev.lprnd.net/pages/Architecture/api-ums/2.0.0.10-SNAPSHOT
icon_style: style="width:16px; height:16px;" height="16" width="16"
wide_icon_style: style="width:32px; height:16px;" height="16" width="32"
---

The messaging agent API is not currently directly exposed, but can be used through an SDK. The full details about the SDK along with the source files can be found [here](https://github.com/LivePersonInc/node-agent-sdk).


### Happy Flow

1. An agent logs in using their username/password and gets a bearer token. Using the bearer the agent opens a WebSocket connection and start communicating with the messaging service.
2. The agent subscribes to get notification rings on new conversation tasks from the routing service.
3. The agent subscribes to get their list of existing assinged conversations.
3. The agent sets their availablity to ``online``.
4. The agent gets a ring notifying on a new conversation task.
5. The agent sends their acceptance to get the task.
6. The agent get a notification on the new conversation added to their list of assigned conversations.
7. The agent subscribes to get the content of this conversation.
8. The agent gets existing content events, and possibly other realtime notifications about messaging events that are being published to the conversation.
9. The agent publishes their own text messages, receipt events and presence events to the conversations.
10. The agent can remove their assignment to the conversation by sending it back to the queue or closing it.

### Major Capabilities

| Capability            | Description                                                                                        |   |
|-----------------------|----------------------------------------------------------------------------------------------------|---|
| Agent Status          | Get and set the availablity of the agent to get new conversations.                                 |   |
| Ring Subscription     | Subscribe to get notifications of new conversation tasks from the routing process.                 |   |
| Update Rings          | Accept or Rejects conversation tasks suggested by the routing service.                             |   |
| Conversation List     | Used to subsribe an agent to get a list of conversations assigned to them.                         |   |
| Publish events        | Send content, receipt and presence events to a specific conversation                               |   |
| Subscribe to messages | Subscribe to get content, recipet or presence events from a specific conversation.                 |   |
| Create conversation   | An agent can create a new conversation with a consumer after the previous conversation was closed. |   |
| Update conversation   | Close, remove assignment (back to queue), change skill or change urgency/delay of a conversaion.   |   |
| GetUserProfile        | Get the profile of the consumer                                                                    |   |




{% include links.html %}


