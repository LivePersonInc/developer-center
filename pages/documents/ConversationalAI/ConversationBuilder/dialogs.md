---
pagename: Dialogs
redirect_from:
    - conversation-builder-conversation-builder-dialogs.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-dialogs.html
indicator: both
---

A Dialog is a group/flow of interactions that are triggered based upon consumer intent.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### How an Automation Triggers a Dialog

A Dialog may be triggered by either simple [pattern matching](conversation-builder-conversation-builder-response-match-actions.html#pattern-matching) or [intent matches](conversation-builder-intent-builder-overview.html) within the Intent Domain that you have linked to the automation. It may also be triggered by an Interaction via a Next Step action. 

Once the automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by the Dialog.

### Create New Dialog

Click the **+** icon at the bottom left corner of the Automation Workspace to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using a standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between the [dialog types](#dialog-types) below.

### Dialog Types

#### Dialog (Standard)

The default choice is a standard dialog.

#### Fallback

By default, whenever a bot doesn't recognize the user's input in a conversation, it sends a _built-in_, _default_ fallback response of, “Not able to understand your question. Can you please re-phrase it?” It then returns the user to the place where the failure occurred.

Use the Fallback dialog type to _override_ the default behavior with a different fallback response and flow. For example, you might want to send, “I'm sorry. I didn't quite understand you,” or, “I'm not sure what '{$query}' means.” ({$query} plays back to the user what they just said.) Once the Fallback dialog flow is completed, the user is returned to their previous dialog and interaction position.

Since the Fallback dialog is triggered after failing to match any other dialog starter, it’s also useful for funneling user utterances into a Knowledge Base (or similar integration) search. If an appropriate search result is found, it can be displayed; if no results are found, you might then display a "sorry" message or escalate the conversation to a human agent.

#### Disambiguation

While the fallback dialog triggers when user input matches *zero* intents, the disambiguation dialog triggers when user input matches *multiple* intents.

{: .important}
In order for the disambiguation dialog to work, you must use intents and **not** patterns.

<img class="fancyimage" width="750px" src="img/ConvoBuilder/disambiguation_dialog1.jpg">

Instead of randomly choosing between multiple VERY_GOOD or GOOD intent matches, the disambiguation dialog presents the best matches and lets the user choose which of the ambiguous intents is correct.

The dialog presents a tile of choices that includes:

* Dynamic intents (2 or 3 intents based on the best match threshold setting)
* Custom text (Ex: Could you rephrase your question?) - Optional

You can add any number of interactions to the dialog, such as Agent Escalation.

Use [built in functions](conversation-builder-scripting-functions-get-and-set-conversation-flow-data.html#get-disambiguated-intent) to debug or access disambiguation intent data.