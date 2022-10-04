---
pagename: Configuration - Custom Code
redirect_from:
   - conversation-builder-interactions-details-code.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Interactions
permalink: conversation-builder-interactions-configuration-custom-code.html
indicator: both
---

You can add custom code to an interaction. The code can be executed before the interaction runs, after the user has responded to the interaction, or after the interaction runs.

### Requirements

Your custom JavaScript code should be compatible with ES5, i.e., ECMAScript 5 (2009). There is an exception: The `toLocaleString` method isn't supported.

Also, your custom JavaScript code must complete within 5 seconds; otherwise, it times out and the execution flow continues on as per the [order of operations](conversation-builder-interactions-interaction-basics.html#order-of-operations).

### Custom code indicator
An interaction that contains custom code displays a green dot:

<img style="width:600px" src="img/ConvoBuilder/interactions_codeIndicator.png" alt="The green dot that indicates the presence of custom code in the interaction">

Check for this to understand at a glance whether there's code in the Pre-Process Code, Process User Response code, or Post-Process Code in the interaction.

You'll also see this green dot next to the name of any code tab that contains custom code:

<img style="width:600px" src="img/ConvoBuilder/interactions_codeIndicator2.png" alt="The green dot that indicates the presence of custom code in the code panel">

### Access the Custom Code panel

1. Select the interaction.
2. In the interaction's upper-right corner, click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_customCode_int.png" alt="Custom Code icon"> (Custom Code icon).

    This displays the Custom Code panel.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_customCode2.png" alt="The Process User Response panel for entering custom code">

There are three tabs for adding code:

* Pre-Process Code
* Post-Process Code
* Process User Response

Use the desired tab to add the code. You can use the built-in [scripting functions](conversation-builder-scripting-functions-functions-list.html) to access variables and manipulate data.

{: .attn-note}
For info on the order of operations (i.e., which code is run when), see [this section](conversation-builder-interactions-interaction-basics.html#order-of-operations).
