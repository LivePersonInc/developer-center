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

### The importance of seamless transfers

Generally speaking, in a bot-to-bot transfer, what makes the transfer *seamless* to the consumer is passing the user's intent and/or message from the sender bot to the receiver bot. With this information in hand, after the transfer the receiver bot can immediately start the appropriate dialog. The result is a graceful, "warm" hand-off. 

As an example, examine the illustration below of a Customer Service bot and a Savings bot engaged in a transfer. The Customer Service bot starts the conversation with the user, determines the user's intent, and passes that information to the Savings bot. As a result, the Savings bot can immediately pick up and handle the user's query. 

   <img style="width:650px" src="img/ConvoBuilder/bots_collab3.png">

You can transfer a conversation from one bot to another in two general ways:

* Automatic transfer via bot group
* Manual transfer via escalation

Importantly, both approaches allow for the transfer of the user's intent and/or message, which ensures a seamless hand-off.

### Automatic transfers via bot group

#### What's an automatic transfer?

Automatic transfers use "bot groups" to support the discovery of bots that are qualified to handle requests and can accept transfers. You create the groups and assign bots to them. A bot can be a member of a single group. As a member, whenever the bot receives a request that it can't handle itself, it automatically checks *within its group* for a bot that can. If the bot discovers a capable bot, transfer of the conversation happens automatically.

<img style="width:650px" src="img/ConvoBuilder/bots_collab5.png">

During an automatic transfer, information about the conversation is automatically sent from the sender bot to the receiver bot. This ensures a seamless hand-off, allowing the receiver bot to immediately start the appropriate dialog.

<img style="width:575px" src="img/ConvoBuilder/bots_collab10.png">

How does the automatic transfer happen? If the consumer's utterance can't be handled in some way by the bot, i.e., there are no dialog starters that match, the bot checks whether there is another bot *within the same group* that can handle the request. If there is one, and if it has an active LiveEngage connection, the conversation is transferred automatically to the receiver bot. The receiver bot then takes care of processing the request.

If there isn't another bot within the group that can handle the request, no automatic transfer occurs. Instead, the bot sends its fallback response to the consumer.

#### Why use automatic transfers?

Automatic transfers are designed to simplify your automation model and make it more robust. Because all bots within a bot group can talk to one another--automatically transferring requests when needed and possible--you don't need a "router" bot for routing user interactions between bots. With automatic transfers, the discovery and actual transfer both happen automatically and seamlessly within a bot group whenever needed.

There are still some times when you'll need to use a manual transfer instead:

* You want to transfer the conversation from a bot in one bot group to a bot in a *different* bot group.
* You want to transfer the conversation from a bot to a live agent.

#### Create a bot group

Automatic transfers rely on bot groups to determine which bots can talk to one another and transfer conversations automatically. When you [create a custom bot](conversation-builder-bots-custom-bots.html), you have the option of assigning a bot group to it.

**To create a bot group**
1. From the bots dashboard that lists your bots, click **Create Group** in the upper-right corner.
2. In the Create Bot Group dialog, specify the following:

    * **Bot group name**: Enter a group name that's concise and clear.
    * **Bot collaboration**: The default value is Off (Disabled). This setting lets you enable/disable automatic transfers on a group-by-group basis. Turn the slider on or off, respectively, to enable or disable the group's collaboration.
    * **Transfer message**: Enter the message to send to the consumer prior to the transfer, something like, "Hold on while I transfer you to a chatbot that can assist you..." You can use bot context variables in the message. You can also leave this field blank if desired.
    * **Add Bots**: Select each bot to add it to the group. A bot can be a member of only one group. You can select from the bots that are not yet assigned to a group.

4. Click **Create**.

    This creates the bot group, which groups together the bots on the bot dashboard.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab12.png">

#### Enable or disable collaboration for a bot group

To enable or disable automatic transfers on a group-by-group basis, respectively, enable or disable collaboration for the bot group.

**To enable or disable collaboration for a bot group**

1. From the bots dashboard that lists your bots, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> icon that corresponds to the bot group name.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab11.png">

2. Select **Edit Group** from the menu that appears.
3. In the Edit Bot Group dialog, click the **Bot collaboration** slider to turn it on (Enabled) or off (Disabled).
4. Click **Update**.

#### Delete a bot group

You can delete a bot group at any time; this *doesn't* delete the bots therein. If you delete a bot group that contains bots, the bots simply no longer have an assigned bot group.

**To delete a bot group**

1. From the bots dashboard that lists your bots, click the <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_vertical.png"> icon that corresponds to the bot group name.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab11.png">

2. Select **Delete Group** from the menu that appears.
3. Click **Yes** to confirm the action.

### Manual transfers via escalation

#### What's a manual transfer?

A manual, bot-to-bot transfer is an escalation where you transfer the conversation to a skill that's assigned to a *bot user agent* in specific. In this way, it's very similar to transferring a conversation to a live agent.

#### Why use a manual transfer?

You'll need to use a manual transfer in two situations:

* You want to transfer the conversation from a bot in one bot group to a bot in a *different* group.
* You want to transfer the conversation from a bot to a live agent.

#### Making manual transfers seamless

In a manual transfer, you can *automatically* pass the intent and/or user message from the sender bot to the receiver bot by selecting the **Bot Transfer Context** checkbox in the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration:
   
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab1.png">

Or, if you've used an [Escalation Integration interaction](conversation-builder-interactions-integrations.html#escalation-integration-interactions) instead, you can do this in the interaction's settings:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab9.png">

No coding is required.

Enabling the **Bot Transfer Context** setting enables the use of a Bot Transfer Context object behind the scenes. This object contains the information about the conversation that is sent from the sender bot to the receiver bot.

   <img style="width:575px" src="img/ConvoBuilder/bots_collab4.png">

During the transfer, the receiver bot checks for the availability of a Bot Transfer Context object. If the object is found, the bot then checks whether it contains an intent. If an intent is found, the dialog tied to that intent is triggered if available. If an intent isn't found, the bot then checks whether the object contains a user message and triggers the dialog that's matched to the message. If neither the intent nor the user message that are passed can be matched, the fallback message is sent in the receiver bot.

#### Overwriting the intent or user message

Occasionally, you might want to overwrite the intent or user message that is passed in the Bot Transfer Context object during a manual transfer. To do this, somewhere in the dialog *before* calling the escalation, use a "bot transfer" function:

* To overwrite the user message, use [setBotTransferUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-user-message).
* To overwrite the intent, you can use [setBotTransferIntentbyDomain](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-by-domain). The system will ascertain and pass the intent ID based on the provided domain name and intent name. Alternatively, you can use [setBotTransferIntentID](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-id).

In our example below, we've overwritten the user message, and we've done this in the Pre-Process Code in the Escalation Integration interaction.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab2.png">

### Sharing information between bots

In a transfer from one bot to another--whether automatic or manual--the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. To share this information between bots, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).

### FAQs

#### How many bot groups do I need?

There's no limit to the number of bot groups that you can create, but it's likely that you'll need just a few. In general, create a bot group whenever you want to divide the bots into groups, such that collaboration occurs only within the group. One common use case is putting all Production bots into one group, all Staging bots into another, and all Development bots into still another. Within a given bot group then, you might have bots for the various business modules that are covered, e.g., an Accounting bot, a Customer Service bot, and so on.

#### Can I keep bot collaboration disabled and use bot groups just as a mechanism for grouping my bots?

Yes, this is perfectly fine for modularizing the bots.