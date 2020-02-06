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

Keep in mind that receiver bot is different from the sender bot, so the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. You can share this information between bots using the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).

### Seamless transfers with the Bot Transfer Context

In a bot-to-bot transfer, what makes the transfer *seamless* to the consumer is passing the conversational context--an intent or user message--from the sender bot to the receiver bot. With this information in hand, after the transfer the receiver bot can immediately start the appropriate dialog. The result is a graceful, "warm" hand-off.

As an example, examine the illustration below of a routing bot and a savings bot  engaged in a transfer. The routing bot converses with the user and determines the user's intent. It then passes the user's intent to the savings bot. As a result, the savings bot can immediately pick up and handle the user's query. 

   <img style="width:600px" src="img/ConvoBuilder/bots_collab3.png">

To pass an intent or user message from the sender bot to the receiver bot in a transfer, do the following in the sender bot:

1. In the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration, select the **Bot Transfer Context** checkbox.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab1.png">

    This enables your use of the Bot Transfer Context object that is sent from the sender bot to the receiver bot during the transfer. Now you can set an intent or user message in the object.

2. Somewhere in the dialog *before* calling the escalation, use a "bot transfer" function to set an intent or user message in the Bot Transfer Context object. In our example below, we've set a user message, and we've done this in the Pre-Process Code in the integration interaction.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab2.png">

You have a few options for setting the intent or user message in the Bot Transfer Context object:

| You can set... | If you do,... | Set the value via...
| ---- | ---- | ---- |
| a domain name plus an intent name | you can retrieve the domain name and intent name that you need from the UI. You can also retrieve the intent name via [getDialogStarterIntent](conversation-builder-scripting-functions-get-set-contextual-data.html#get-matched-intent). The system will ascertain and pass the intent ID based on this information. | [setBotTransferDomainName](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-domain-name) and [setBotTransferIntentName](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-name) |
| an intent ID | you can retrieve the intent ID that you need from the application URL if you're logged into Conversation Builder directly and know how. Otherwise, set the domain name and intent name instead. | [setBotTransferIntentID](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-id) |
| a user message | specify the string. | [setBotTransferUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-user-message) |

During the escalation (transfer), the receiver bot checks for the availability of a Bot Transfer Context object. If the object is available, the bot then checks whether it contains an intent. If an intent isn't available, it then checks whether the object contains a user message. Based on these findings, after the transfer is completed, the receiver bot starts the appropriate dialog, one that's tied to the intent or that's matched to the user message.

### FAQs

#### When using the Bot Transfer Context, which do I set - an intent or a user message?

You can set either, but setting the intent effectively lets you specify the dialog to start. No processing of a user message is required. If you set the user message instead, the receiver bot must match the user message with an intent or pattern to determine the appropriate dialog to start.

#### Can I set both an intent and a user message?

Yes, this is possible.

#### How do I transfer other data from the sender bot to the receiver bot?

You can only set an intent or user message in the Bot Transfer Context object. To transfer other data between the sender bot and receiver bot, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).