---
pagename: Examples
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Messaging Agent SDK

order: 2
permalink: messaging-agent-sdk-examples.html
indicator: messaging
---

Here are a few sample bot integrations, which demonstrate some of the use cases that can be achieved with the SDK. Before getting started with any of these examples, you must check that you have the following prerequisites:

1. You must have a LiveEngage account.

2. You must configure an agent in your LiveEngage account.

3. You must have the latest version of node.js installed on your machine. Here's a guide on how to do so: [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac) / [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows).

### Greeting Bot Example

This example demonstrates running a System Message type bot, which subscribes to all of the incoming conversation, and sends the first welcome message. In this example, you will:

* Run a bot on your account that answers a conversation.

* This bot will send a greeting to the visitor.

* The bot will then transfer the conversation to an agent.

There are two parts to making this example work:

1. In order to setup the agent-side code which achieves the Greeting Bot, [follow this link:](https://github.com/LivePersonInc/node-agent-sdk#running-the-sample-app) to review the greeting bot example on Github.

2. In order to generate a conversation with the account (and the Greeting Bot by extension), [follow the steps included in this guide inside the Messaging Window API](consumer-int-js-sample.html).

### Agent Bot Example

This example demonstrates running an Agent Bot, which serves as the standard agent of this account, and echoes every message sent to it. This example is meant to help you understand how to handle messages as a bot.

There are two parts to making this example work:

1. In order to setup the agent-side code which achieves the Agent Bot example (echo bot), [follow this link:](https://github.com/LivePersonInc/node-agent-sdk#running-the-sample-app) to review the Agent Bot (echo bot) example on Github.

2. In order to generate a conversation with the account (and the Echo Bot by extension), [follow the steps included in this guide inside the Messaging Window API](consumer-int-js-sample.html).

Use the Agent Bot example when you are looking to review and develop with the various available API calls, such as:

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

<div class="important"><a href="https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/agent-bot">Click here</a> to review the full code repository on Github for this example. You can also watch <a href="https://www.youtube.com/embed/7PVj6nhjG5o">this demo video</a>, which will guide you on how to run this example bot.</div>



### Bots Cluster Example

This example demonstrates running a bot on a ​horizontal scalable cluster. It can be used for a few use cases:

* Bot Resiliency - If one node crashes, one ​of the other ​clusters ​will reconnect the bot.

* Multiple Bots - The bots will be spread across the cluster’s nodes. If one node fails the other will share its bots. If a new node is added to the cluster it will take some of the bots from other nodes.

<div class="important"><a href="https://github.com/LivePersonInc/node-agent-sdk/tree/master/examples/cluster">Click here</a> to review the full code repository on Github for this example. You can also watch <a href="https://www.youtube.com/embed/4FgZa87sDho">this demo video</a>, which will guide you on how to run this example bot, as well as a <a href="https://www.youtube.com/embed/QZiNzkWgPWk">code review video</a>.</div>
