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

A Dialog may be triggered by either via simple [pattern matching](conversation-builder-conversation-builder-conditions.html#pattern-matching) or via [intents](conversation-builder-intent-builder-overview.html). It may also be triggered by an Interaction via a Next Step action. 

Once the automation recognizes the user statement via either of these methods, it triggers the corresponding Dialog, listening to user answers and responding as configured by the Dialog.

### Create New Dialog

Click the **+** icon at the bottom left corner of the Automation Workspace to add a new Dialog. You'll be prompted to enter a new name for the Dialog (**we recommend using standard naming conventions to name your Dialogs, to make them more sortable and easy to find**) and choose between two options:

* Dialog - the default choice is a standard dialog, as described above.

* Fallback dialog - the second choice is a fallback dialog, which gets triggered when the automation cannot recognize a user's input and has to fallback to an escalation/troubleshooting conversation (For example, "I didn't quite understand you. Let me transfer this conversation to a human agent").

You can use the hamburger icon right next to the **+** icon to see a list of your different dialogs. Otherwise, they are displayed horizontally, in chronological order.




