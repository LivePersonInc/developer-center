---
pagename: Bot-to-Bot Transfers
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bots
permalink: conversation-builder-bots-bot-to-bot-transfers.html
indicator: both
---

### Why transfer?

When developing bots, it's considered a best practice to develop specialized bots that automate specific business tasks. If you're a large, enterprise company with well-demarcated functional areas, this practice also makes practical sense and lets you scale your automation footprint more easily. Within a business function, bot developers can specialize, and they can implement, maintain, and extend bots efficiently.

However, while it's advantageous to have multiple--even many--bots that automate business tasks, this also means that a single bot might not be able to handle all of a consumer's requests. The consumer's requests might require the support of multiple bots, which means that a bot-to-bot transfer of the conversation is required.

This type of collaboration and hand-off between bots is sometimes called the "bot tango."

### Seamless transfers

A bot-to-bot transfer is a [LivePerson agent escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) where you transfer the conversation to a skill that's assigned to a bot agent in specific. What makes the transfer *seamless* to the consumer is passing the conversational context--an intent or user message--from the sender bot to the receiver bot. With this information in hand, after the transfer the receiver bot can immediately start the appropriate dialog. The result is a graceful hand-off.

To pass the conversational context to the receiver bot, you need to do two things:

1. In the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration, select the **Tango Context** checkbox.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab1.png">

    This enables your use of the Tango Context object that is sent from the sender bot to the receiver bot during the transfer. Now you can set an intent ID or user message in the object.

2. Somewhere in the dialog *before* calling the escalation, use the `setBotTangoContextVariable` scripting function to set either an intent ID or a user message in the Tango Context object. In our example below, we've set an intent ID, and we've done this in the Pre-Process Code in the integration interaction.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab2.png">

    For details on `setBotTangoContextVariable`, see [here](conversation-builder-scripting-functions-get-set-contextual-data.html#get-and-set-bot-tango-context-variable).

During the escalation (transfer), the receiver bot checks for the availability of a Tango Context object. If the object is available, the bot then checks whether it contains an intent ID. If an intent ID isn't available, it then checks whether the object contains a user message. Based on these findings, after the transfer is completed, the receiver bot starts the  appropriate dialog, one that's tied to the intent or that's matched to the user message.

### FAQs

#### Which do I set - the intent ID or the user message?

You can set either the intent ID or the user message in the Tango Context object. 

Because intents are tied to dialogs, setting the intent ID effectively lets you specify the actual dialog to start. No processing of a user message is required.

If you set the user message instead, the receiver bot must match the user message with a pattern or an intent to determine the appropriate dialog to start.

#### Can I set both the intent ID and the user message?

Yes, this is possible.

#### What happens if I enable the Transfer Context object, but I don't set an intent ID or user message?

The purpose of enabling the Transfer Context object is to be able to set an intent ID or user message, so typically this scenario shouldn't happen. However, if the receiver bot doesn't find an intent ID or user message in the Tango Context object, the old escalation flow continues.

#### How do I transfer other data from the sender bot to the receiver bot?

You can only set an intent ID or user message in the Tango Context object. To transfer other data between the sender bot and receiver bot, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).
