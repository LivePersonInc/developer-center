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

When developing bots, it's considered a best practice to develop specialized bots that automate specific business tasks. If you're a large, enterprise company with well-demarcated functional areas, this practice is also practical and lets you scale your automation footprint more easily.

While you might be using multiple--even many--bots to automate business tasks, consumers expect a *seamless* conversation when conversing with a bot. The business tasks might be distributed across different bots, such that mutiple bots might be required to fulfill a consumer's request, but the consumer expects this not only to be possible, but also to happen smoothly. For example, if a consumer is conversing with a personal banking bot about personal banking matters but suddenly asks a question about professional banking, the personal banking bot should understand the question, know if there's a bot that's qualified to handle it (the professional banking bot), and hand over the conversation. These capabilities can be achieved with multi-bot collaboration.

Multi-bot collaboration is a feature where *participating* bots deployed in the same environment are *aware* of each others' runtime contexts. This awareness means that if one bot receives a request that it can't handle itself, the bot can determine if another bot is capable of doing so. If one can, the first bot can transfer the request and associated data to the second. This collaboration among bots is sometimes called the "bot tango."

### Setup


### An example conversation