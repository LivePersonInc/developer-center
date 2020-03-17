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

* Automatic transfer via [bot group](conversation-builder-bots-bot-groups.html)
* Manual transfer via an [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) or a [LP Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html)

Importantly, both approaches allow for the transfer of the user's intent and/or message, which ensures a seamless hand-off.

### Automatic transfers via bot group

#### What's an automatic transfer?

Automatic transfers use [bot groups](conversation-builder-bots-bot-groups.html) to support the discovery of bots that are qualified to handle requests and can accept transfers. You create the groups, assign bots to them, and [enable collaboration](conversation-builder-bots-bot-groups.html#enable-or-disable-collaboration-for-a-bot-group). A bot can be a member of a single group. As a member, whenever the bot receives a request that it can't handle itself, it automatically checks *within its group* for a bot that can. If the bot discovers a capable bot, transfer of the conversation happens automatically.

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

#### Setting up automatic transfers

To set up automatic transfers for a group of bots, [create the bot group](conversation-builder-bots-bot-groups.html#create-a-bot-group-that-supports-collaboration-automatic-transfers). During creation of the group, enable collaboration for the group, and add the bots to the group.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/bots_collab13.png">

### Manual transfers

#### What's a manual transfer?

A manual, bot-to-bot transfer is one where you transfer the conversation to a specific skill that's assigned to a bot user agent. (In this way, it's very similar to transferring a conversation to a live agent.)

Manual transfers are done via:

* An [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) (simpler, more convenient) 
* An [LP Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) (more complex)

#### Why use a manual transfer?

You'll need to use a manual transfer in two situations:

* You want to transfer the conversation from a bot in one bot group to a bot in a *different* group.
* You want to transfer the conversation from a bot to a live agent.

#### Making manual transfers seamless

In a manual transfer, you can *automatically* pass the intent and/or user message from the sender bot to the receiver bot by selecting the **Transfer Bot Context** checkbox in the [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions):

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab9.png">

Or, if you've used a [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration instead, you can do this in the integration:
   
<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab1.png">

No coding is required.

Enabling the **Transfer Bot Context** setting enables the use of a Transfer Bot Context object behind the scenes. This object contains the information about the conversation that is sent from the sender bot to the receiver bot.

   <img style="width:575px" src="img/ConvoBuilder/bots_collab4.png">

During the transfer, the receiver bot checks for the availability of a Transfer Bot Context object. If the object is found, the bot then checks whether it contains an intent. If an intent is found, the dialog tied to that intent is triggered if available. If an intent isn't found, the bot then checks whether the object contains a user message and triggers the dialog that's matched to the message. If neither the intent nor the user message that are passed can be matched, the fallback message is sent in the receiver bot.

#### Overwriting the intent or user message

Occasionally, you might want to overwrite the intent or user message that is passed in the Transfer Bot Context object during a manual transfer. To do this, somewhere in the dialog *before* calling the escalation, use a "bot transfer" function:

* To overwrite the user message, use [setBotTransferUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-user-message).
* To overwrite the intent, you can use [setBotTransferIntentbyDomain](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-by-domain). The system will ascertain and pass the intent ID based on the provided domain name and intent name. Alternatively, you can use [setBotTransferIntentID](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-id).

In our example below, we've overwritten the user message, and we've done this in the Pre-Process Code in the Escalation Integration interaction.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/bots_collab2.png">

### Sharing information between bots

In a transfer from one bot to another--whether automatic or manual--the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. To share this information between bots, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).

### FAQs

#### If I have collaboration enabled for a bot group, do I have any control over whether and when automatic transfers occur?

No, apart from configuring the transfer message in the [bot group](conversation-builder-bots-bot-groups.html#create-a-bot-group-that-supports-collaboration-automatic-transfers), you don't have any control over how automatic transfers are performed.

#### During an automatic transfer, how is a bot within a bot group chosen to handle a request?

The system first looks for a bot with a matching pattern. If one is found, that bot is selected. Otherwise, it then looks for a bot with a matching intent. If one is found, that bot is selected. And if multiple matching intents are found, the bot with the highest match score is selected.

#### How many bot groups do I need?
There's no limit to the number of bot groups that you can create, but it's likely that you'll need just a few. In general, create a bot group whenever you want to divide the bots into groups, such that collaboration occurs only within the group. One common use case is putting all Production bots into one group, all Staging bots into another, and all Development bots into still another. Within a given bot group then, you might have bots for the various business modules that are covered, e.g., an Accounting bot, a Customer Service bot, and so on.

#### Can I keep bot collaboration disabled and use bot groups only as a mechanism for grouping my bots?
Yes, this is perfectly fine. For information on creating a group for this purpose, see [here](conversation-builder-bots-bot-groups.html#create-a-bot-group-only-to-group-bots).