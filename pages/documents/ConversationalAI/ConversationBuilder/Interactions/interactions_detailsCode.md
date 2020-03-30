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

You can add custom code to an interaction. The code can be executed after the user has responded to the interaction, before the interaction runs, or after the interaction runs.

### Access the Custom Code panel

1. Select the interaction.
2. In the interaction's upper-right corner, click <img style="width:20px" src="img/ConvoBuilder/icon_ellipsisVertical_int.png"> (3-dot icon), and select **Custom Code**.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_customCode1.png">

    This displays the Custom Code panel.

    <img style="width:600px" class="fancyimage" src="img/ConvoBuilder/interactions_customCode2.png">

    There are three tabs:

    * Process User Response
    * Pre-Process Code
    * Post-Process Code

    Use the desired tab to add the code. You can use the built-in [scripting functions](conversation-builder-scripting-functions-functions-list.html) to access variables and manipulate data.

### Process User Response

Use this area to add JavaScript code that executes after the user has responded to the interaction. This code can be used in place of the response conditions, or in conjunction with them after a successful match.

### Pre-Process Code

Use this area to add JavaScript code that executes before the interaction runs. This can be useful for any kind of processing you want to do before executing the interaction.

### Post-Process Code

Use this area to add JavaScript code that executes after the interaction runs. This can be useful for any kind of processing you want to do after executing the interaction.