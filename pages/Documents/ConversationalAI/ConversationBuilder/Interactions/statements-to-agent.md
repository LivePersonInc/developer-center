---
pagename: Statements to Agent
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-statements-to-agent.html
indicator: both
---

### Private messages

#### What’s a private message?
Private messages are messages that are visible to all conversation participants *except* the consumer.

Human agents can send private messages within a conversation. This allows agents to privately seek guidance from managers. In turn, it also allows managers to provide that guidance privately. More on this [here](https://knowledge.liveperson.com/contact-center-management-messaging-operations-private-messages-overview.html/).

Bots can send private messages too. You can design a bot to send a private message at any time in the conversation flow.

<img style="width:450px" src="img/ConvoBuilder/statements_privatemsg1.png">

#### Why use a private message?
There are several scenarios where private messages sent by bots can be useful:

* **Provide important information**: Assume, for example, that the bot detected a “financial hardship” intent from the consumer. The bot can send a private message containing special instructions on how to handle the situation. If the conversation is then transferred to a human agent, the agent has this information available.

    <img style="width:450px" src="img/ConvoBuilder/statements_privatemsg2.png">

* **Provide contextual information**: As a consumer converses with a bot, the bot gathers useful contextual information about the consumer and their intent (e.g., name, account number, and so on). Just before transferring the conversation to a human agent, the bot can send a private message summarizing this information.

* **Notify the human agent when the bot leaves the conversation**: If you’re using [Conversation Assist](conversation-assist-overview.html), you might be recommending bots to handle conversations with your consumers. If so, it can be a challenge for the agent to know when the bot has finished its work. The agent must check back repeatedly on the bot’s progress. A private message sent by the bot when it’s finished handling the consumer’s request can notify the agent that it’s time for them to rejoin the conversation to close things out with the consumer.

    <img style="width:450px" src="img/ConvoBuilder/statements_privatemsg3.png">

    Or, perhaps you have a manager bot that’s a participant in all conversations with human agents. If a conversation needs to be escalated to a human manager, the manager bot can send a private message to the human agent to let them know why the conversation is being taken from their workspace.

* **Mark a point in a conversation**: If you want to set “markers” at specific points in a conversation flow, you can send a private message to do this. A human agent that picks up the conversation can use these to search for a specific topic in the conversation.

#### User experiences

* **Human agents**: In an actual conversation with a consumer, a private message appears inline in the conversation area — with a “Private” badge — in the human agent’s view within Conversational Cloud. For an illustration, see [here](https://knowledge.liveperson.com/contact-center-management-messaging-operations-private-messages-overview.html/).
* **Consumers**: The consumer never sees private messages.

#### Add a Private Message interaction
1. Add the interaction.
2. Enter the message to send. Essentially, the interaction is a Statement interaction that isn’t sent to the consumer. So, the guidelines for other Statement interactions apply: You can enter plain and formatted text; see [here](conversation-builder-interactions-interaction-basics.html#format-text) for supported HTML. You can also enter botContext variables and environment variables.

    <img style="width:600px" src="img/ConvoBuilder/statements_privatemsg4.png">

#### FAQs

**Can I see private messages within the Preview tool in Conversation Builder?**

Yes, private messages are visible within [Preview](conversation-builder-testing-deployment-previewing.html), so you can easily test them. They are displayed with a “Private” indicator.

<img style="width:450px" src="img/ConvoBuilder/statements_privatemsg1.png">

**Are private messages included in a conversation transcript?**

Yes. However, there’s an important exception: Conversation transcripts that are sent to consumers (e.g., by way of a post-conversation survey bot) don’t include private messages.

**Can both agent and manager bots send private messages?**

Yes, they can.

**In which types of dialogs can a private message be sent?**

You can send a private message in any type of dialog.

**Are there any associated scripting functions?**

Yes, there's the [sendPrivateMessage](conversation-builder-scripting-functions-send-messages.html#send-private-message-to-agent) function.