---
pagename: Introduction
redirect_from:
    - conversation-builder-conversation-builder-scripting-functions.html
    - conversation-builder-scripting-functions.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Scripting Functions
permalink: conversation-builder-scripting-functions-introduction.html
indicator: both
---

Functions are modules of code that are used for accomplishing a certain task programmatically. 

With few exceptions, functions can be used in the following JavaScript [code panels](conversation-builder-interactions-configuration-custom-code.html) in interactions:

* Pre-Process Code
* Post-Process Code
* Process User Response

{: .note}
For info on the order of operations (i.e., which code is run when), see [this section](conversation-builder-interactions-interaction-basics.html#order-of-operations).

### Requirements

Your custom JavaScript code should be compatible with ES5, i.e., ECMAScript 5 (2009). There is an exception: The `toLocaleString` method isn't supported.

### Important notes

* Function names are case-sensitive in the JavaScript.
* Functions require the `botContext.` prefix.
* Functions are scoped ONLY for the JavaScript panel in which they appear.
