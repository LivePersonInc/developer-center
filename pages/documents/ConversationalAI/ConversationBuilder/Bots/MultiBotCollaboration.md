---
pagename: Multi-Bot Collaboration
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Bots
permalink: conversation-builder-bots-multi-bot-collaboration.html
indicator: both
---

### What's multi-bot collaboration?

When developing bots, it's considered a best practice to develop specialized bots that automate specific business tasks. If you're a large, enterprise company with well-demarcated functional areas, this practice also makes practical sense and lets you scale your automation footprint more easily. Within a business function, bot developers can specialize, and they can implement, maintain, and extend bots efficiently.

However, while you might have multiple--even many--bots that automate business tasks, a single bot might not be able to handle all of a consumer's requests. The consumer's requests might require the support of multiple bots. And to the consumer, this should not only be possible, it should happen *seamlessly*. For example, if a consumer is conversing with a personal banking bot about personal banking matters but suddenly asks a question about professional banking, the personal banking bot should understand the question (not send a [fallback response](conversation-builder-dialogs-fallback-dialogs.html)), know if there's a bot that's qualified to handle it (the professional banking bot), and gracefully hand over the conversation.

To achieve the aforementioned capabilities, you can implement a dialog that 1) matches the utterance that can't be handled by the bot, and 2) performs a [LivePerson agent escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) that transfers the conversation from one bot to another. Because it's a *bot-to-bot* transfer (not a bot-to-human transfer), multi-bot collaboration takes place.

Multi-bot collaboration involves a few things. First, during the agent escalation, there is some information that the source bot automatically shares with the destination bot:

* The session-scoped BotContext object ????
* The most recent user message

Second, once the agent escalation is completed, the destination bot automatically processes the received user message.


Before, starting of Bot B conversation wasn't very clear - user is asked to retype his/her intent.

Now can specify an intent to trigger and user message. No more looking at the queue.

Bot B will look into the tango context before processing the message. Looks at tango context. If tango context is available, and then it reads the message from the tango context...and it looks at the intent ID that's there in the tango context. If the intent ID isn't there, then what is the user message sent in the tango context?

We allow the bot developer to set the intent ID after Bot B. The reason for doing this is so that Bot B can know which dialog to start with....so that Bot B doesn't have to go and do a search across the dialog starters. If the intent isn't there, Bot B will use the user message sent in the tango context and the Bot B finds the dialog starter that's associated with the user message. 

If intent and user message aren't there, it follows the old model (to support backwards compatibility?!?!) where you look into the queue for the user message and try and find the intent that way

In Agent Escalation, adding an Enable Tango Context checkbox....enables tango context...once it's enabled, then user can transfer the intent ID or user message (whatever he wants)! Ideally only checked for a bot-to-bot agent escalation where you want to make use of the feature and transfer the intent Id or user message.

Once transfer is successful, control goes back to Bot B.

Added some JavaScript methods...
setBotTangoContextVariable - specify user text to send from bot A to bot B, or specify intent ID of intent to send from bot A to bot B....if bot developer wants to trigger a specific dialog, the developer has to do this - first parameter is the key/name (hard-coded value that can't be changed), second parameter is the value.....if developer wants to set the user text, they need to pass it in this way...in the preprocess code of the integration. or, if they want to pass a user intent, they pass that in this way instead.......can set it here and it will get passed in the tango context object.

first checks for intent ID...if it doesn't find a matching intent id in the dialog starter, then it will go back to the user text

if somebody has to transfer anything apart from this tango context to the destination bot, make use of the Context Session Store. 

Right now bot-to-bot transfer isn't working as expected at all

### FAQs

#### How do I transfer data from the source bot to the destination bot?

To transfer data between bots, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).
