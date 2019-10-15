---
pagename: Keywords
redirect_from:
    - conversation-builder-conversation-builder-keyword-triggers.html
    - conversation-builder-keyword-triggers.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-keywords.html
indicator: both
---

Conversation Builder reserves a set of keywords that trigger special functionality. These keywords are sent via Text statements.

### LP_CLOSEDIALOG

To close the current dialog, create a Text statement that contains the special string “LP_CLOSEDIALOG”.

 <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/keywords_lpCloseDialog.png">

### LP_CLOSECONVERSATION

To close the current conversation, create a Text statement that contains the special string “LP_CLOSECONVERSATION”.

 <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/keywords_lpCloseConversation.png">

{: .important}
LP_CLOSECONVERSATION does not trigger a post-conversation survey.