---
pagename: Overview
redirect_from:
    - conversation-builder-intent-builder-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-overview.html
indicator: both
---

The Conversation Builder platform's Intent Builder allows you to build multiple intent domains that can each hold one or many user intents. Thus, you can define specific groups of intents for different use cases. Once you build at least one intent domain, you can use the [Conversation Builder](conversation-builder-bot-workspace.html) to associate one domain to each dialog.

An example might be a "shipping" domain that contains intents for "delivery status", "update address", etc. This "shipping" intent domain could be linked to bot dialogs that do various shipping tasks.

Intents directs your bot to be more flexible and respond to a wider variety of user input; instead of looking for specific patterns in user input (for example, the pattern "bill"), the bot uses an NLU engine to look for the intent specified and trigger the interaction you configured to respond to this intent. Therefore, once you configure your intents with robust *training phrases*, expressions like, "I have a question about billing", "Looking to check my account," or "What's my billing status?" yield the same intent and, thus, the same response from the bot.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ib_intentDetails.png">

{: .important}
See [NLU Engines](conversation-builder-intent-builder-nlu-engines.html) to learn more about the different NLU options that are compatible with Conversation Builder.

### Access Intent Builder

**To access the Intent Builder application**

1. On the left sidebar in LiveEngage, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Intent Builder**.

### High-level workflow

When working in Intent Builder, you’ll use the following high-level workflow:

<img style="width:800px" src="img/ConvoBuilder/ib_highLevelWorkflow.png">

As can be seen, making changes to the domain and training the domain is an iterative step in the workflow.

If the domain is using a 3rd-party NLU engine, before you train you’ll also need to [create the 3rd-party NLU provider credential](intent-builder-domains.html#create-a-3rd-party-nlu-provider-credential).
