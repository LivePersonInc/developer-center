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

### Seamless transfers

Generally speaking, in a bot-to-bot transfer, what makes the transfer *seamless* to the consumer is passing the user's intent and/or message from the sender bot to the receiver bot. With this information in hand, after the transfer the receiver bot can immediately start the appropriate dialog. The result is a graceful, "warm" hand-off. 

As an example, examine the illustration below of a Customer Service bot and a Savings bot engaged in a transfer. The Customer Service bot starts the conversation with the user, determines the user's intent, and passes that information to the Savings bot. As a result, the Savings bot can immediately pick up and handle the user's query. 

   <img style="width:650px" src="img/ConvoBuilder/bots_collab3.png">

You can transfer a conversation from one bot to another in two general ways:

* Automatic transfer via discovery
* Manual transfer

Importantly, both approaches allow for the transfer of the user's intent and/or message, which ensures a seamless hand-off.

### Automatic transfers via discovery

#### What's an automatic transfer?

Automatic transfers use "bot transfer groups" to support the discovery of bots that are qualified to handle requests and accept transfers. You create the groups and assign bots to them. A bot can be a member of a single group. As a member, whenever the bot receives a request that it can't handle itself, it automatically checks *within its group* for a bot that can. If the bot discovers a capable bot, the transfer happens automatically.

<img style="width:650px" src="img/ConvoBuilder/bots_collab5.png">

During an automatic transfer, the conversational context information is automatically sent from the sender bot to the receiver bot. This ensures a seamless hand-off, allowing the receiver bot to immediately start the appropriate dialog.

<img style="width:500px" src="img/ConvoBuilder/bots_collab4.png">

How does the automatic transfer happen? If the consumer's utterance can't be handled in some way by the bot, i.e., there are no dialog starters that match nor a Knowledge Base integration in the fallback dialog that returns a response (a matching article), the bot checks whether there is another bot *within the same group* that can handle the request. If there is one, and if it has an active LiveEngage connection, the conversation is transferred automatically to the receiver bot. The receiver bot then takes care of processing the request.

If there isn't another bot within the group that can handle the request, no automatic transfer occurs. Instead, the bot sends the default, built-in fallback response to the consumer.

#### Why use automatic transfers?

Automatic transfers are designed to simplify your automation model and make it more robust. Because all bots within a bot transfer group can talk to one another--automatically transferring requests when needed and possible--you don't need a "router" bot for routing user interactions between bots. What's more, you don't need LivePerson agent escalations within your dialogs to perform transfers. With automatic transfers, the discovery and actual transfer both happen automatically and seamlessly within a bot transfer group.

There are still some times when you'll need to use a manual transfer instead:

* You want to transfer the conversation from a bot in one bot transfer group to a bot in a *different* bot transfer group.
* You want to transfer the conversation from a bot to a live agent.

#### Create a bot transfer group

Automatic transfers rely on bot transfer groups to determine which bots can talk to one another and transfer conversations automatically. When you [create a custom bot](conversation-builder-bots-custom-bots.html), you have the option of assigning a bot transfer group to it.

**To create a bot transfer group**
1. From the bots dashboard that lists your bots, click **Bot Transfer Groups** in the upper-left corner.
2. Click **New Group**.
3. Specify the following:

    * **Group name**: Enter a group name that's concise and clear.
    * **Bots**: Select each bot to add it to the group. 

4. Click **Save**.

#### Inactivate or activate a bot transfer group

To disable automatic transfers on a group-by-group basis, inactivate the bot transfer group.

**To inactivate or activate a bot transfer group**

1. From the bots dashboard that lists your bots, click **Bot Transfer Groups** in the upper-left corner.
2. In the left panel, select the group.
3. In the right panel, click the **Status** slider. To activate the group, turn it on; to inactivate the group, turn it off.
4. Click **Save**.

#### Delete a bot transfer group

**To delete a bot transfer group**

1. From the bots dashboard that lists your bots, click **Bot Transfer Groups** in the upper-left corner.
2. In the left panel, click the icon and select **Delete**.
3. confirm step.

### Manual transfers

#### What's a manual transfer?

A manual, bot-to-bot transfer is a [LivePerson agent escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) where you transfer the conversation to a skill that's assigned to a bot user agent in specific. In this way, it's very similar to transferring a conversation to a live agent.

#### Why use a manual transfer?

You'll need to use a manual transfer in two situations:

* You want to transfer the conversation from a bot in one bot transfer group to a bot in a *different* group.
* You want to transfer the conversation from a bot to a live agent.

#### Making manual transfers seamless

In a manual transfer, you can *automatically* pass the intent and/or user message from the sender bot to the receiver bot in a manual transfer by selecting the **Bot Transfer Context** checkbox in the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration. No coding by you is required.
   
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab1.png">

Selecting the **Bot Transfer Context** checkbox enables the use of a Bot Transfer Context object behind the scenes. This object contains the conversational context information that is sent from the sender bot to the receiver bot.

   <img style="width:500px" src="img/ConvoBuilder/bots_collab4.png">

During the transfer, the receiver bot checks for the availability of a Bot Transfer Context object. If the object is found, the bot then checks whether it contains an intent. If an intent is found, the dialog tied to that intent is triggered if available. If an intent isn't found, the bot then checks whether the object contains a user message and triggers the dialog that's matched to the message. If neither the intent nor the user message that are passed can be matched, the fallback message is sent in the receiver bot.

#### Overwriting the intent or user message

Occasionally, you might want to overwrite the intent or user message that is passed in the Bot Transfer Context object during a manual transfer. To do this, somewhere in the dialog *before* calling the escalation, use a "bot transfer" function:

* To overwrite the user message, use [setBotTransferUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-user-message).
* To overwrite the intent, you can use [setBotTransferIntentbyDomain](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-by-domain). The system will ascertain and pass the intent ID based on the provided domain name and intent name. Alternatively, you can use [setBotTransferIntentID](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-id).

In our example below, we've overridden the user message, and we've done this in the Pre-Process Code in the integration interaction.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab2.png">

### Sharing information between bots

In a transfer from one bot to another--whether automatic or manual--the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. To share this information between bots, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).
