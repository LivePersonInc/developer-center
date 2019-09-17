---
pagename: Disambiguation Dialogs
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-disambiguation-dialogs.html
indicator: both
---

While the fallback dialog triggers when user input matches *zero* intents, the disambiguation dialog triggers when user input matches *multiple* intents.

{: .important}
In order for the disambiguation dialog to work, you must use intents and **not** patterns.

<img class="fancyimage" width="750px" src="img/ConvoBuilder/disambiguation_dialog1.jpg">

Instead of randomly choosing between multiple VERY_GOOD or GOOD intent matches, the disambiguation dialog presents the best matches and lets the user choose which of the ambiguous intents is correct.

The dialog presents a tile of choices that includes:

* Dynamic intents (2 or 3 intents based on the best match threshold setting)
* Custom text (Ex: Could you rephrase your question?) - Optional

You can add any number of interactions to the dialog, such as Agent Escalation.

Use [built in functions](conversation-builder-conversation-builder-scripting-functions.html#get-disambiguated-intent) to debug or access disambiguation intent data.