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

{: .important}
See [NLU Engines](conversation-builder-intent-builder-nlu-engines.html) to learn more about the different NLU options that are compatible with Conversation Builder.

<img  class="fancyimage" style="width:750px" src="img/beaut_ib_2.png">

### LiveIntent

The below instructions will enable [LiveIntent](https://knowledge.liveperson.com/ai-bots-automation-liveintent-overview.html) for your intents.

When you enter Intent Builder, you will notice a column that tells you if a domain "Has LiveIntent" or not.

{: .important}
It is a best practice to only have one domain enabled for LiveIntent at a time. This is to minimize intent overlap.

<img class="fancyimage" style="width:750px" src="img/liveintent-domains1.png">

Click on a domain of your choice. On the left side of the screen, you will see your list of intents. If an intent is enabled for LiveIntent, it will have a green dot to its left.

Under the Intents left-side dropdown, select "Enable LiveIntent" and select the intents in bulk.

{: .important}
It is a best practice to enable all intents within a domain for the best analysis.

<img class="fancyimage" style="width:750px" src="img/liveintent-domains3.png">

You can view the enabled intents in the [LiveIntent dashboard](https://knowledge.liveperson.com/ai-bots-automation-liveintent-dashboard.html).