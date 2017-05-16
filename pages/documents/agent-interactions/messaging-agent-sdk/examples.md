---
title: Examples
Keywords:
level1: Documents
level2: Agent Interactions
level3: Messaging Agent SDK

order: 2
permalink: messaging-agent-sdk-examples.html
---

Here are a few sample bot integrations, which demonstrates some of the use cases that can be achieved with the SDK:

### Greeting Bot Example

This example demonstrates running a System Message type bot, which subscribes to all of the incoming conversation, and sends the first welcome message.

[Click here](https://github.com/LivePersonInc/node-agent-sdk#running-the-sample-app){:target="_blank"} to review the greeting bot example on Github.

### Agent Bot Example

This example demonstrates running ​a ​bot using the major API calls.

Use the agent bot example when you are looking to review and develop with the various available API calls, such as:

* getClock

* agentRequestConversation

* subscribeExConversations

* unsubscribeExConversations

* updateConversationField

* publishEvent

* queryMessages

* updateRingState

* subscribeRoutingTasks

* updateRoutingTaskSubscription

* getUserProfile

* setAgentState

* subscribeAgentsState

[Click here](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/agent-bot){:target="_blank"} to review the full code repository on Github.

You can also watch this demo video, which will guide you on how to run this example bot: [https://www.youtube.com/embed/7PVj6nhjG5o](https://www.youtube.com/embed/7PVj6nhjG5o){:target="_blank"}

### Bots Cluster Example

This example demonstrates running a bot on a ​horizontal scalable cluster. It can be used for a few use cases:

* Bot Resiliency - If one node crashes, one ​of the other ​clusters ​will reconnect the bot.

* Multiple Bots - The bots will be spread across the cluster’s nodes. If one node fails the other will share its bots. If a new node is added to the cluster it will take some of the bots from other nodes.

[Click here](https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/cluster){:target="_blank"} to review the full code repository on Github.​

You can also watch the demo video which will guide you through this example bot:

[https://www.youtube.com/embed/4FgZa87sDho](https://www.youtube.com/embed/4FgZa87sDho){:target="_blank"}

As well as a code review video: [https://www.youtube.com/embed/QZiNzkWgPWk](https://www.youtube.com/embed/QZiNzkWgPWk){:target="_blank"}