---
pagename: Keyword Triggers
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-conversation-builder-keyword-triggers.html
indicator: both
---

Conversation Builder reserves a set of keywords that each trigger special functionality. These keywords are sent via text interactions.

### Close Conversation

Create text interaction with the special string "LP_CLOSECONVERSATION". This will close the conversation.

<img class="fancyimage" width="500" src="img/ConvoBuilder/bestPractices/tips_image_2.png">

This is useful for [creating a "resolve and close" dialog](conversation-builder-best-practices-common-conversation-patterns.html#create-resolve-and-close-dialog).

{: .important}
Close Conversation will not trigger a post-conversation survey.

### Close Dialog

Create text interaction with the special string "LP_CLOSEDIALOG". This will close the current dialog.