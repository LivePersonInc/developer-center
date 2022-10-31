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

The behavior of the welcome event is different depending on whether the bot is for chat and messaging. This divergence comes down to the way that each individual LivePerson product works.

#### Messaging Conversations

A Messaging conversation qualifies as "initiated" from a Conversational Cloud perspective only after the consumer sends
their first message. The consumer is prompted for their initial message in the channel they have chosen to initiate the
conversation. As a result, the consumer’s first message will be the entry point for the main flow in e-bot7, which can be processed by a `Visitor Input` node.
In this scenario, all bot messages in the flow which are created before this node will be skipped.

<figure>
 <img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-messaging-flow.png" alt="e-bot7 flow without support of the 'Welcome' event">
 <figcaption>Figure 2.1: Example conversation flow for messaging without support of the `Welcome` event</figcaption>
</figure>

#### Chat Conversations

A Chat conversation is considered started when the chat is routed to an agent. The best practice is for the agent to provide the first response.
In this scenario, all bot messages in the flow which are created before the first `Visitor Input` node will be processed.
Make sure to have `Bot Message` nodes after the `Start Flow` entry point to utilize the `Welcome` event.

<figure>
 <img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-chat-flow.png" alt="e-bot7 flow to support the 'Welcome' event">
 <figcaption>Figure 2.2: Example conversation flow for chats with support of the `Welcome` event</figcaption>
</figure>

### Bot Messages

The flow of a bot in e-bot7 can include three different types of messages a bot can send. These are `Bot Message: Text`, `Bot Message: Image`, `Bot Message: Video`. All three types are supported with some restrictions:

| Message type         | Restrictions                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `Bot Message: Text`  | Text messages are rendered as pure text and contain no markup or rich content.                                                     |
| `Bot Message: Image` | Enabling image messages requires a whitelisting done by LivePerson. Contact your LivePerson account representative for assistance. |
| `Bot Message: Video` | Video messages are rendered as a button with a link action to the video.                                                           |

### Visitor Input

Input messages by a visitor which will be delivered to a bot can have different types. Currently supported types are:

- `Visitor Input: Text`
- `Visitor Input: Selection`

### Bot Actions

Bots can trigger different forms of actions.

{: .attn-note}
Please note we only support **ONE ACTION** per response.

#### Transfer

{: .attn-alert}
If you use the node 'Handover to Agent' inside of an e-bot7 flow, the conversation won't be transferred within Conversational Cloud. Instead, it will be transferred within the application of e-bot7 which is not supported by this connector.

If the bot needs to transfer the conversation to a human agent, or the conversation flow indicates that another bot is better suited for the identified intent, you will need to tell the connector to transfer the conversation to a given skill.

This is achieved using a special `Bot Message: Text`.

Multiple scenarios for transfer/escalations exist triggered by the transfer action object.

1. Explicit request from visitor to transfer to an agent (Eg, action: transfer)

2. If the Bot does not have an appropriate answer, it should recognize this as a scenario for a transfer.
   Depending on the connector configuration or the decision-making capacity of the bot, the bot will transfer to a particular agent, skill, or default skill.

3. If there is an internal error or the Third-Party connector cannot reach the APIs of e-bot7, the connector will transfer to a default skill set up during configuration.

Action: **CONVERSATION_TRANSFER**

##### Transfer To Skill

This option transfers the conversation to the next available agent using the provided skill.

Message in form of: `CONVERSATION_TRANSFER _skill_`

Please note the space between `_skill_` and prefix

Parameters:

- `_skill_` **(Case sensitive)** skill name in Conversational Cloud.

<figure>
 <img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-transfer-to-skill.png" alt="Example bot message to trigger the transfer to a skill">
 <figcaption>Figure 2.3: Configuration for transfer to skill</figcaption>
</figure>

##### Transfer to Agent

{: .attn-note}
This feature is depending on [permissions](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions)

This option transfers the conversation to the particular agent matching the provided `agentId` and `skill`. If the agent is not available, the conversation will be transferred to an available agent with the same skill

Message in form of: `CONVERSATION_TRANSFER _skill_ _agentId_`

Please note the spaces between `_skill_` and `_agentId_` and also the order in which they are written

Parameters:

- `_skill_` **(Case sensitive)** skill name in Conversational Cloud.
- `_agentId_` **(Case sensitive)** agent id in Conversational Cloud.

<figure>
 <img class="fancyimage" style="width:450px" src="img/ThirdPartyBots/e-bot7-transfer-to-agent.png" alt="Example bot message to trigger the transfer to an agent">
 <figcaption>Figure 2.4: Configuration for transfer to agent</figcaption>
</figure>

### Close Conversation

In the bot’s flow, there will be times when it is appropriate to end the conversation without escalating to a live agent.
If a query has been answered, or the brand has determined that no escalation is required for a given query, it is best practice having the bot end the conversation.

The method for closing a conversation is given by the `End Flow` node of the `Main Flow` in e-bot7. If a conversation reaches this point, an action to close the conversation is generated automatically.
