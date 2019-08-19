---
pagename: Dialogs
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-dialogs.html
indicator: both
---

A Dialog is a group/flow of interactions that are triggered based upon consumer intent.

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.

### How an Automation Triggers a Dialog

A Dialog may be triggered by either simple [pattern matching](conversation-builder-conversation-builder-interaction-details.html#conditions) or [intent matches](conversation-builder-intent-builder-overview.html) within the Intent Domain that you have linked to the automation. It may also be triggered by an Interaction via a Next Step action. 

Once the automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by the Dialog.

### Create New Dialog

Click the **+** icon at the bottom left corner of the Automation Workspace to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using a standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between the [dialog types](#dialog-types) below.

### Dialog Types

#### Dialog (Standard)

The default choice is a standard dialog.

#### Fallback

The second choice is a fallback dialog, which gets triggered when the automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation (For example, "I didn't quite understand you. Let me transfer this conversation to a human agent").

#### Disambiguation

While the fallback dialog triggers when user input matches *zero* intents, the disambiguation dialog triggers when user input matches *multiple* intents.

{: .important}
In order for the disambiguation dialog to work, you must set the dialog to trigger based upon intents and **not** patterns.

Instead of randomly choosing between multiple VERY_GOOD or GOOD intent matches, the disambiguation dialog presents the best matches and lets the user choose which of the ambiguous intents is correct.

The dialog presents a tile of choices that includes:

* Dynamic intents (2 or 3 intents based on the best match threshold setting)
* Custom text (Ex: Could you rephrase your question?) - Optional

In addition to this default tile, you can add any number of interactions to the dialog, such as Agent Escalation.

Use [built in functions](conversation-builder-conversation-builder-scripting-functions.html#get-disambiguated-intent) to debug or access disambiguation intent data.