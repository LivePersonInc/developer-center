---
pagename: Basic Content
sitesection: Documents
categoryname: "Conversational AI"
documentname: Third-Party Bots
subfoldername: e-bot7
permalink: third-party-bots-e-bot7-basic-content.html
indicator:
---

### The Welcome Event

The behaviour of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual Liveperson product works.

#### Messaging Conversations

A Messaging conversation qualifies as "initiated" from a Conversational Cloud perspective only after the consumer sends
their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the
conversation. As a result, the consumer’s first message will be the entry point for the main flow in e-bot7 which can be processed by a `Visitor Input` node.
In this scenario, all bot messages in the flow which are created before this node will be skipped.

<img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-messaging-flow.png">
<figure>Figure 2.1 Example conversation flow for messaging without support of the `Welcome` event</figure>
<br>

#### Chat Conversations

A Chat conversation is considered started when the chat is routed to an agent. Best practice is for the agent to provide the first response.
In this scenario, all bot messages in the flow which are created before the first `Visitor Input` node will be processed.
Make sure to have `Bot Message` nodes after the `Start Flow` entrypoint to utilise the `Welcome` event.

<img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-chat-flow.png">
<figure>Figure 2.2 Example conversation flow for chats with support of the `Welcome` event</figure>
<br>

### Bot Messages

The flow of a bot in e-bot7 can include three different types of messages a bot can send. These are `Bot Message: Text`, `Bot Message: Image`, `Bot Message: Video`. All three types are supported with some restrictions:

- `Bot Message: Text` is rendered as pure text and contains no markup.

### Visitor Input

Input messages by a visitor which will be delivered to a bot are of different types. Currently the types `Visitor Input: Text` and `Visitor Input: Selection` are supported.

### Bot Actions

Bots can trigger different forms of actions.

{: .important}
Please note we only support **ONE ACTION** per response

#### Transfer

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using a special `Bot Message: Text`.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent (Eg, action : transfer)

2. If the Bot does not have an appropriate answer, it should recognise this as a scenario for a transfer.
   Depending on the connector configuration or the decision making capacity of the bot, the bot will transfer to a particular agent, skill or default skill.

3. If there is a internal error or the bot service cannot be reached the connector will transfer to a default skill set up during configuration.

{: .notice}
If you use the node 'Handover to Agent' inside of an e-bot7 flow, the conversation won't be transferred within Conversational Cloud. Instead it will be transferred within the application of e-bot7 which is not supported by this connector.

Action: **CONVERSATION_TRANSFER**

##### Transfer To Skill

This option transfers the conversation to the next available agent using the provided skill.

Message in form of: `CONVERSATION_TRANSFER _skill_`

Parameters:

- `_skill_` **(Case sensitive)** skill name in Conversational Cloud.

<img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-transfer-to-skill.png">
<figure>Figure 2.3 Configuration for transfer to skill</figure>
<br>

##### Transfer to Agent

{: .important}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill

Message in form of: `CONVERSATION_TRANSFER _skill_ _agentId_`

Parameters:

- `_skill_` **(Case sensitive)** skill name in Conversational Cloud.
- `_agentId_` **(Case sensitive)** agent id in Conversational Cloud.

<img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-transfer-to-agent.png">
<figure>Figure 2.4 Configuration for transfer to agent</figure>
<br>

### Close Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, it is best practice having the bot end the conversation.

The method for closing a conversation is given by the `End Flow` node of the `Main Flow` in e-bot7. If a conversation reaches this point, an action to close the conversation is generated automatically.
