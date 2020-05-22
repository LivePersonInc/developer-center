---
pagename: Introduction
redirect_from:
    - conversation-builder-conversation-builder-scripting-functions.html
    - conversation-builder-scripting-functions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Conversation Builder
permalink: conversation-builder-scripting-functions-introduction.html
indicator: both
---

Functions are modules of code that are used for accomplishing a certain task programatically. 

With few exceptions, functions can be used in the following JavaScript [code panels](conversation-builder-interactions-configuration-custom-code.html) in interactions:

* Pre-Process Code
* Process User Response
* Post-Process Code

**Note**

* Function names are case-sensitive in the JavaScript.
* Functions require the `botContext.` prefix.
* Functions are scoped ONLY for the JavaScript panel in which they appear.
