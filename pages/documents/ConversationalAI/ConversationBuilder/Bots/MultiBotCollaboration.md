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

### Introduction

When developing bots, it's considered a best practice to develop specialized bots that automate specific business tasks. If you're a large, enterprise company with well-demarcated functional areas, this practice also makes practical sense and lets you scale your automation footprint more easily. Within a business function, bot developers can specialize, and they can implement, maintain, and extend bots efficiently.

However, while it's advantageous to have multiple--even many--bots that automate business tasks, this also means that a single bot might not be able to handle all of a consumer's requests. The consumer's requests might require the support of multiple bots, and this means that a bot-to-bot transfer of the conversation is required.

### About bot-to-bot transfers

A bot-to-bot transfer is a [LivePerson agent escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) where you transfer the conversation to a skill that's assigned to a bot agent in specific. In this way, it's very similar to transferring a conversation to a live agent. The bot must be set up as a user agent; the user agent must be assigned a skill; and the bot must be deployed, as you would normally do to connect a bot to LiveEngage.

Keep in mind that the receiver bot is different from the sender bot, so the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. You can share this information between bots using the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).

### Making transfers seamless

Generally speaking, in a bot-to-bot transfer, what makes the transfer *seamless* to the consumer is passing the user's intent and/or message from the sender bot to the receiver bot. With this information in hand, after the transfer the receiver bot can immediately start the appropriate dialog. The result is a graceful, "warm" hand-off. 

As an example, examine the illustration below of a routing bot and a savings bot  engaged in a transfer. The routing bot converses with the user, determines the user's intent, and passes that information to the savings bot. As a result, the savings bot can immediately pick up and handle the user's query. 

   <img style="width:650px" src="img/ConvoBuilder/bots_collab3.png">

To *automatically* pass the intent and/or user message from the sender bot to the receiver bot in a transfer, simply select the **Bot Transfer Context** checkbox in the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration. No coding by you is required.
   
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab1.png">

Selecting the **Bot Transfer Context** checkbox enables the use of a Bot Transfer Context object behind the scenes. This object contains the conversational context information that is sent from the sender bot to the receiver bot.

   <img style="width:500px" src="img/ConvoBuilder/bots_collab4.png">

During the transfer, the receiver bot checks for the availability of a Bot Transfer Context object. If the object is found, the bot then checks whether it contains an intent. If an intent is found, the dialog tied to that intent is triggered if available. If an intent isn't found, the bot then checks whether the object contains a user message and triggers the dialog that's matched to the message. If neither the intent nor the user message that are passed can be matched, the fallback message is sent in the receiver bot.

### Overriding the intent or user message

Occasionally, you might want to override the intent or user message that is passed during a transfer. To do this, somewhere in the dialog *before* calling the escalation, use a "bot transfer" function to override the intent or user message in the Bot Transfer Context object:

* To override the user message, use [setBotTransferUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-user-message).
* To override the intent, you can use [setBotTransferDomainName](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-domain-name) with [setBotTransferIntentName](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-name). The system will ascertain and pass the intent ID based on this information. Alternatively, you can use [setBotTransferIntentID](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-id).

In our example below, we've overridden the user message, and we've done this in the Pre-Process Code in the integration interaction.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab2.png">
