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
* Manual transfer via an [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) or a [LivePerson Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html)

Importantly, both approaches allow for the transfer of the user's intent and/or message, which ensures a seamless hand-off.

### Automatic transfers via bot group

#### What's an automatic transfer?

Automatic transfers use [bot groups](conversation-builder-bots-bot-groups.html) to support the discovery of bots that are qualified to handle requests and can accept transfers. You [create the groups](conversation-builder-bots-bot-groups.html#create-a-bot-group-that-supports-collaboration-automatic-transfers), assign bots to them, and enable collaboration. A bot can be a member of a single group. As a member, whenever the bot receives a request that it can't handle itself, it automatically checks *within its group* for a bot that can. If the bot discovers a capable bot, transfer of the conversation happens automatically.

<img style="width:650px" src="img/ConvoBuilder/bots_collab5.png">

During an automatic transfer, information about the conversation is automatically sent from the sender bot to the receiver bot. This ensures a seamless hand-off, allowing the receiver bot to immediately start the appropriate dialog.

<img style="width:575px" src="img/ConvoBuilder/bots_collab10.png">

How does the automatic transfer happen? If the consumer's utterance can't be handled in some way by the bot, i.e., there are no dialog starters that match, the bot checks whether there is another bot *within the same group* that can handle the request. If there is one, and if it has an active Conversational Cloud connection, the conversation is transferred automatically to the receiver bot. The receiver bot then takes care of processing the request.

If there isn't another bot within the group that can handle the request, no automatic transfer occurs. Instead, the bot sends its fallback response to the consumer.

#### Why use automatic transfers?

Automatic transfers are designed to simplify your automation model and make it more robust. Because all bots within a bot group can talk to one another--automatically transferring requests when needed and possible--you don't need a "router" bot for routing user interactions between bots. With automatic transfers, the discovery and actual transfer both happen automatically and seamlessly within a bot group whenever needed.

There are still some times when you'll need to use a manual transfer instead:

* You want to transfer the conversation from a bot in one bot group to a bot in a *different* bot group.
* You want to transfer the conversation from a bot to a live agent.

#### Setting up automatic transfers

To set up automatic transfers for a group of bots, [create the bot group](conversation-builder-bots-bot-groups.html#create-a-bot-group-that-supports-collaboration-automatic-transfers). During creation of the group, enable collaboration for the group, and add the bots to the group.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/bots_collab13.png">

{: .important}
While you can include a [post-conversation survey bot](conversation-builder-bots-post-conversation-survey-bots.html) in a bot group for grouping purposes, a survey bot doesn’t participate in automatic, bot-to-bot transfers.

#### Best practices

For bot groups that are collaborative (the Collaboration setting is enabled):
* If the group will include multiple bots, LivePerson recommends the use of the [LivePerson NLU v2 engine](intent-builder-natural-language-understanding.html#liveperson-nlu-v2).
* The group should not contain more than 15 bots.
* Make sure there is no overlap in the intents and patterns used by the bots.

### Manual transfers

#### What's a manual transfer?

A manual, bot-to-bot transfer is one where you transfer the conversation to a specific skill that's assigned to a bot user agent. (In this way, it's very similar to transferring a conversation to a live agent.)

Manual transfers are done via:

* An [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) (simpler, more convenient) 
* A [LivePerson Agent Escalation integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) (more complex)

#### Why use a manual transfer?

You'll need to use a manual transfer in two situations:

* You want to transfer the conversation from a bot in one bot group to a bot in a *different* group.
* You want to offer the consumer a choice of options, and then transfer the conversation based on the consumer's response.
* You want to transfer the conversation from a bot to a live agent.

#### Making manual transfers seamless

In a manual transfer, you can *automatically* pass the intent and/or user message from the sender bot to the receiver bot by selecting the **Transfer Bot Context** slider in the [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) (in **Settings**):

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/bots_collab9.png">

Or, if you've used a [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration instead, you can do this in the integration:
   
<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/bots_collab1.png">

No coding is required.

Enabling the **Transfer Bot Context** setting enables the use of a Transfer Bot Context object behind the scenes. This object contains the information about the conversation that is sent from the sender bot to the receiver bot.

   <img style="width:575px" src="img/ConvoBuilder/bots_collab4.png">

During the transfer, the receiver bot checks for the availability of a Transfer Bot Context object. If the object is found, the bot then checks whether it contains an intent. If an intent is found, the dialog tied to that intent is triggered if available. If an intent isn't found, the bot then checks whether the object contains a user message and triggers the dialog that's matched to the message. If neither the intent nor the user message that are passed can be matched, the fallback message is sent in the receiver bot.

#### Overwriting the intent or user message

Occasionally, you might want to overwrite the intent or user message that is passed in the Transfer Bot Context object during a manual transfer. To do this, somewhere in the dialog *before* calling the transfer, use a "bot transfer" function:

* To overwrite the user message, use [setBotTransferUserMessage](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-user-message).
* To overwrite the intent, you can use [setBotTransferIntentbyDomain](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-by-domain). The system will ascertain and pass the intent ID based on the provided domain name and intent name. Alternatively, you can use [setBotTransferIntentID](conversation-builder-scripting-functions-get-set-contextual-data.html#set-bot-transfer-intent-id).

In our example below, we've overwritten the user message, and we've done this in the Pre-Process Code in the Agent Transfer interaction.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/bots_collab2.png">

### Sharing information between bots

In a transfer from one bot to another--whether automatic or manual--the receiver bot won't have all the context (variables, etc.) that you might have collected in the sender bot. To share this information between bots, use the [Conversation Context Service](conversation-builder-scripting-functions-manage-the-conversation-context-service.html).

### FAQs

#### If I have collaboration enabled for a bot group, can I control how automatic transfers are performed?

When collaboration is enabled for a bot group, transfers happen seamlessly and automatically. You can [configure the transfer message](conversation-builder-bots-bot-groups.html#create-a-bot-group-that-supports-collaboration-automatic-transfers) in the bot group, but this is the extent to which you can affect the behavior.

#### During an automatic transfer, how is a bot within a bot group chosen to handle a request?

The system follows the same NLU selection process as with every bot, just expanded to include all bots in the group. First, the system looks for a bot in the group with a [matching pattern](tutorials-guides-getting-started-with-bot-building-dialogs-patterns.html) in its dialog starter. If one is found, the consumer is directed to that bot and the matched dialog starter. If no patterns are found, it then looks for a bot in the group with a [matching intent](tutorials-guides-getting-started-with-bot-building-intents.html) in its dialog starter and directs the consumer to the bot and matched dialog starter. As with the current NLU, if multiple matching intents are found, the highest match score is selected. If there are no patterns or intents found, the consumer is directed to the Fallback dialog found within their current bot position.

#### How many bot groups do I need?
There's no limit to the number of bot groups that you can create, but it's likely that you'll need just a few. In general, [create a bot group](conversation-builder-bots-bot-groups.html#create-a-bot-group-that-supports-collaboration-automatic-transfers) whenever you want to divide the bots into groups, such that collaboration occurs only within the group. It's common to organize bots into groups based on business function. You could then further organize them based on environment.

#### Can I keep bot collaboration disabled and use bot groups only as a mechanism for grouping my bots?
Yes, this is perfectly fine. For information on creating a group for this purpose, see [here](conversation-builder-bots-bot-groups.html#create-a-bot-group-only-to-group-bots).

#### I currently have a routing bot that transfers control to other bots based on user intents. How will bot groups help in my case?

Bot groups make it easier for a routing bot to automatically transfer control to another bot. As an example, suppose you are a retailer with the following bots:

* A Routing bot
* An Order Status bot
* A Returns bot

The Routing bot is designed to have an initial conversation with the consumer and route the conversation to one of the other two bots. The conversation might look like this:
 
*Routing bot: Hello, I am routing bot. How can I help you?*

*Consumer: I need to check the status of my order.*

*Routing bot: Let me transfer you to a chatbot that can assist you with your request.*

*Order Status bot: Can I have your order number please?*

You can add all three bots to an "eCommerce Operations" bot group. When this is done, the Routing bot seamlessly and automatically transfers the control to the Order Status bot.

<img style="width:450px" src="img/ConvoBuilder/bots_collab14.png">

When the user enters, “I need to check the status of my order,” this maps to an "Order Status" intent that is handled by the Order Status bot. Because collaboration in the group is enabled, the routing bot *automatically* finds this association and transfers control to the Order Status bot. 
