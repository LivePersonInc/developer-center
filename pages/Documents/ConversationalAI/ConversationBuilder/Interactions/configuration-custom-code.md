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

### Access the Custom Code panel

1. Select the interaction.
2. In the interaction's upper-right corner, click <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/icon_customCode_int.png"> (Custom Code icon).

    This displays the Custom Code panel.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_customCode2.png">

There are three tabs for adding code:

* Process User Response
* Pre-Process Code
* Post-Process Code

Use the desired tab to add the code. You can use the built-in [scripting functions](conversation-builder-scripting-functions-functions-list.html) to access variables and manipulate data.

### Pre-Process Code

Use this area to add JavaScript code that executes before the interaction runs. This can be useful for any kind of processing you want to do before executing the interaction.

### Process User Response

Use this area to add JavaScript code that executes after the user has responded to the interaction. This code can be used in place of the response conditions, or in conjunction with them after a successful match.

### Post-Process Code

Use this area to add JavaScript code that executes after the interaction runs. This can be useful for any kind of processing you want to do after executing the interaction.