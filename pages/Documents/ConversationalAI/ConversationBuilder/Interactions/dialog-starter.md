---
pagename: Dialog Starter
redirect_from:
    - conversation-builder-interactions-user-says.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-dialog-starter.html
indicator: both
date_updated: 2022/11/13
---

### What's a dialog starter?

Dialog Starter interactions are how dialogs are initially triggered, so most dialogs start with a Dialog Starter interaction. ([Fallback dialogs](conversation-builder-dialogs-fallback-dialogs.html) work differently.) A dialog can have only one Dialog Starter interaction, and it must start the dialog.

It’s the consumer that starts things off by supplying some input: a message or a question. In response, the bot tries to match the input with either a pattern or an [intent](intent-manager-key-terms-concepts.html#intents) in a Dialog Starter interaction in one of its dialogs. If a match is found, that dialog is triggered, and its flow begins.

As an example, the Goodbye dialog below is triggered when the bot matches the consumer’s message to some form (pattern) of “good-bye.”

<img style="width:700px" src="img/ConvoBuilder/interactions_dialogStarter1.png" alt="An example dialog starter that's triggered by patterns of bye">

In contrast, the Billing dialog below is triggered when the bot matches the user’s message to a “Billing question” intent.

<img style="width:800px" src="img/ConvoBuilder/interactions_dialogStarter2.png" alt="An example dialog starter that's triggered by a Billing question intent">

What’s an intent? An intent is a consumer request for action or info from your brand. In our example, the intent is to ask a billing question. You create intents in [Intent Manager](intent-manager-overview.html).

<img style="width:800px" src="img/ConvoBuilder/interactions_dialogStarter5.png" alt="An example intent in Intent Manager, this one for a Billing question">

### Add a dialog starter

When you create a standard dialog, by default it includes a dialog starter interaction. So, typically, you don’t need to add one. But, if you delete the dialog starter, you can use the Interaction Palette to add it back. Just click the **Dialog Starter** icon.

<img style="width:300px" src="img/ConvoBuilder/interactions_dialogStarter6.png" alt="The Dialog Starter tool on the Interactions tool palette">

### Add patterns to a dialog starter

1. Click the **+ Pattern** button.

    <img style="width:700px" alt="The Pattern button on the Dialog Starter interaction" src="img/ConvoBuilder/interactions_dialogStarter7.png">

    This opens up the **Patterns & Intent** tab of the **Interaction Settings** window, where you perform the work.

    <img style="width:800px" alt="The Patterns field on the Patterns and Intent tab in the Interaction Settings" src="img/ConvoBuilder/interactions_dialogStarter8.png">

2. [Enter the patterns](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions) (text strings) against which to match the consumer input.

    You can also add keywords to exclude. An excluded keyword is a text string that is matched against consumer input in order to *not* trigger the dialog.

    For some practice with this adding patterns, try the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial.

### Add an intent to a dialog starter

1. Click the **+ Intent** button.

   <img style="width:700px" alt="The Intent button on the Dialog Starter interaction" src="img/ConvoBuilder/interactions_dialogStarter9.png">

2. Use the [Assist tool](conversation-builder-assist.html) to associate the dialog starter with a domain. Then associate the dialog starter with an intent.

    For some practice with this, try the try the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial.

### FAQs

#### In the case of an intent added to a dialog starter, what must the match score be for the dialog flow to be triggered?

The score must be GOOD or better.

#### When do you use patterns versus intents?

- Use a pattern when the user’s input must match the pattern exactly. Otherwise, it isn’t considered a match, and the dialog isn’t triggered. In practice, patterns are mostly used by routing bots.
- Use an intent when the match criteria needs to be more flexible, which means the bot can respond to a wider variety of input. Intents are broader and more flexible because the bot makes use of a Natural Language Understanding (NLU) engine when determining if there is a match. Matches are scored based on the confidence level: VERY GOOD, GOOD, FAIR PLUS, and so on.

#### Can a dialog starter have both patterns and an intent?
Yes, it can. When the consumer’s input is evaluated, it can match either one of the patterns or the intent.

#### Within a bot, which takes precedence: dialog starters with patterns or those with intents?

When the consumer’s input is evaluated, dialog starters with patterns are examined first. So, if you have dialog starter A with a pattern and you have dialog starter B with an intent, and if the consumer’s input matches the pattern in dialog starter A, dialog starter B is never examined. The dialog that contains dialog starter A is triggered.