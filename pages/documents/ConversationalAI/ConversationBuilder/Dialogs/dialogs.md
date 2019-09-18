---
pagename: Dialog Basics
redirect_from:
    - conversation-builder-conversation-builder-dialogs.html
    - conversation-builder-dialogs.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-dialog-basics.html
indicator: both
---

A dialog is a group or flow of interactions that are triggered based upon consumer intent.

### Dialog types

There are three types of dialogs:

- **Dialog (Standard)**: Standard dialogs are triggered when the bot recognizes the consumer's message via an [intent](conversation-builder-intent-builder-overview.html) match or a [pattern](conversation-builder-conversation-builder-response-match-actions.html#pattern-matching) match. For more on this, see [here](conversation-builder-dialogs-standard-dialogs.html).
- **Fallback**: The fallback dialog is triggered when the bot doesn't recognize the consumer's message. For more on this, see [here](conversation-builder-dialogs-fallback-dialogs.html).
- **Disambiguation**: The disambiguation dialog is triggered when the bot recognizes the consumer's input, but it can match it to multiple intents. As a result, clarification from the consumer is needed. For more on this, see [here](conversation-builder-dialogs-disambiguation-dialogs.html).

### Create a new dialog

1. Open the bot.
2. Click **+ DIALOG** in the lower-left corner.
3. In the dialog that appears, do the following:
    - **Dialog Name**: Enter a descriptive name for the dialog. Use a standard naming convention to make your dialogs more sortable and easier to find.
    - **Dialog Type**: Select either Dialog (for a [standard](conversation-builder-dialogs-standard-dialogs.html) dialog), [Fallback](conversation-builder-dialogs-fallback-dialogs.html) Dialog, or [Disambiguation](conversation-builder-dialogs-disambiguation-dialogs.html) Dialog.
4. Click **Save**.
5. Build out the dialog as per your requirements.
    
    Dialogs are displayed in the order in which they were created.
