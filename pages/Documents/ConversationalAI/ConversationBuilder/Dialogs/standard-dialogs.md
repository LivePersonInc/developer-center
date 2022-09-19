---
pagename: Standard dialogs
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-standard-dialogs.html
indicator: both
---

### How a bot triggers a (standard) dialog

A dialog can be triggered by either of the following:

- Simple [pattern matching](conversation-builder-interactions-interaction-basics.html#specify-patterns-in-interactions).
- [Intent matches](intent-manager-key-terms-concepts.html#intents) within the intent domain that you have linked to the bot.

Once the bot recognizes the user statement via either of these methods, it triggers the corresponding dialog, listening to user answers and responding as configured by the dialog.

A dialog can also be triggered by an interaction via the interaction's **Next Action**.