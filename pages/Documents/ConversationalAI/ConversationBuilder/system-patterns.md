---
pagename: System Patterns
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder

permalink: conversation-builder-system-patterns.html
indicator: both
---

### Introduction
This topic provides information on the system patterns (commands) that can be sent by the bot and are received by the bot. These serve various purposes.

### System patterns sent by the bot

#### LP_CLOSEDIALOG
Learn about this in the discussion on [closing a dialog](conversation-builder-dialogs-dialog-basics.html#close-the-dialog).

#### LP_CLOSECONVERSATION
Learn about this in the discussion on [closing a conversation](conversation-builder-dialogs-dialog-basics.html#close-the-conversation).

#### BLANK_MESSAGE
Sometimes, you’ll need to use this when you don’t want to send a message to the consumer. Learn more in the discussions on:

* [Preventing consumer interruptions](conversation-builder-best-practices-prevent-consumer-interruptions.html)
* [Using Agent Transfer interactions](conversation-builder-interactions-integrations.html#agent-transfer-interactions) (or, if you’re using our legacy method, see the discussion on the [LivePerson Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html))
* [Using KnowledgeAI interactions](conversation-builder-interactions-integrations.html#knowledge-ai-interactions)

#### SET_USER_PROFILE
In unauthenticated bot conversations, you can use this command to set the consumer’s name in their profile within Conversation Cloud. If the conversation is subsequently transferred to a human agent, the agent then has that information available to them. This makes possible a “warm” handoff.

**To use the command**

1. Request that LivePerson configure your account to support this feature.
2. Within Conversational Cloud, in the **Agent** profile, enable the **Update consumer profile via API** permission. This option might take a short while to appear after step 1 is performed.
3. In your bot, get the user’s name and store it in a bot variable. Then use the command in a text interaction like so:

    `SET_USER_PROFILE | {"firstName" : "{$botContext.firstName}", "lastName" : "{$botContext.lastName}"}`

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/system_patterns1.png" alt="An example of using SET_USER_PROFILE in a Text statement">

    Once the bot invokes this interaction, the consumer’s name will appear in the list of conversations within Conversational Cloud.

### System patterns received by the bot

#### \__agent_escalation_failed__
For information on this, see the best practices for [Agent Transfer interactions](conversation-builder-interactions-integrations.html#agent-transfer-interactions). (Or, if you’re using our legacy method, see the best practices for [LivePerson Agent Escalation integrations](conversation-builder-integrations-liveperson-agent-escalation-integrations.html).)
