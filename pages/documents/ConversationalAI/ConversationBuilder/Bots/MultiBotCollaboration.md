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

However, while you might have multiple--even many--bots that automate business tasks, a single bot might not be able to completely handle a consumer's requests. The consumer's requests might require the support of multiple bots. And to the consumer, this should not only be possible, it should happen *seamlessly*. For example, if a consumer is conversing with a personal banking bot about personal banking matters but suddenly asks a question about professional banking, the personal banking bot should understand the question (not send a [fallback response](conversation-builder-dialogs-fallback-dialogs.html)), know if there's a bot that's qualified to handle it (the professional banking bot), and gracefully hand over the conversation. These capabilities can be achieved with multi-bot collaboration.

Multi-bot collaboration is an implementation design whereby *participating* bots deployed in the same environment are *aware* of each others' runtime contexts. This awareness means that if one bot receives a request that it can't handle itself, the bot can determine if another bot is capable of doing so. If one can, the first bot can transfer the request to the second. This collaboration among bots is sometimes called the "bot tango."

### How multi-bot collaboration works

Participating = ???

**Workflow 1**

1. Bot A receives a request that it can't handle. That is, Bot A doesn't have a dialog with an intent that matches the consumer's utterance.
2. Bot A checks whether a participating bot is capable of handling the request. It identifies Bot B as having a matching intent.
3. Bot A transfers the conversation to Bot B and sends to Bot B the following:

    * The user message that triggered the intent match
    * The intent that was matched

4. Bot B examines the received intent and triggers its associated dialog. Or, if the intent is null, Bot B examines the user message and handles it as designed.

**Workflow 2**

1. Bot A receives a request that it can't handle. That is, Bot A doesn't have a dialog with an intent that matches the consumer's utterance.
2. Bot A checks whether a participating bot is capable of handling the request. It doesn't identify one.
3. Bot A sends a [fallback response](conversation-builder-dialogs-fallback-dialogs.html).


### An example conversation


### FAQs

#### How do I get and set data in the context object that's passed from the sender bot to receiver bot?

The context object that's passed between bots is a private object. There is no access to the object, so this can't be done. To transfer data between bots, use the [Context Session Store](conversation-builder-scripting-functions-manage-the-context-session-store.html).

