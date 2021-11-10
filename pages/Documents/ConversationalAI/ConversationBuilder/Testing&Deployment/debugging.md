---
pagename: Debugging
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Testing & Deployment
permalink: conversation-builder-testing-deployment-debugging.html
indicator: both
---

The Bot Logs window can display the log of the conversation that occurred in the Preview window or the log of any conversation that occurred in a supported channel. This makes it a useful tool in a few ways. 

First, if you're encountering unexpected behavior, always check the Bot Logs window. Errors and failures are displayed in red, so you'll know at a glance if and where they occurred.

Second, because a log provides a more technical view of the underlying process flow that occurred during the conversation, it can deepen your understanding of how that processing works and support research. For example, you can use the log to identify the patterns or intents that were matched in the conversation.

Here's a visual overview of the Bot Logs window:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/debuggingWindow.png">

- 1 = Use the **User ID** input box to specify the log you want to view.
- 2 = Click <img style="width:30px" src="img/ConvoBuilder/icon_refresh.png"> (Refresh) to display or refresh the log.
- 3 = Click the circle beside a logged event to display its timestamp.

Errors and failures are displayed <font color="red">in red</font>, so you can spot them quickly.

### Debug during bot development

**To display the log for the conversation that occurred in the Preview window**

1. With the Dialogs page displayed, click **Preview** in the upper-right corner.
2. Just outside the lower-left corner of the Preview window, click the **Bot Logs** icon.
    
    <img style="width:500px" src="img/ConvoBuilder/debuggingWindow2.png">

    This opens the Bot Logs window, so it is displayed beside the Preview window.

    <img style="width:600px" src="img/ConvoBuilder/debuggingWindow3.png">
    
    For ease of use during bot development, by default, the user ID for the consumer in the conversation in the Preview window is entered in the User Id input box, and the associated logs are automatically displayed.

### Print the most recent user message

To aid in debugging, you can use the `printDebugMessage` scripting function in the code areas of an interaction to print messages -- for example, the consumer's most recent message -- to the Bot Logs window. For more on this function, see [here](conversation-builder-scripting-functions-log-debug.html#print-debug-message).

### Events glossary

#### Max limit on daisy chaining of interactions: 10

This error is:

    BREAKING THE INTERACTION FLOW. Reached max limit on daisy chaining of interactions: 10

This error occurs when you have linked together 10 or more, consecutive Statement and/or Integration interactions within a single dialog. In other words, within those interactions, there are no Question interactions that stop the flow to ask for user input.

When the limit of 10 is reached, the interaction flow is stopped.

The limit of 10 is designed to prevent infinite loops and other potential error conditions.

#### Iteration count exceeded 5

This error is: 

    Breaking the interaction flow because iteration count exceeded 5

This error occurs when you have linked together 5 or more, consecutive Statement and/or Integration interactions across multiple dialogs. In other words, within those interactions, there are no Question interactions that stop the flow to ask for user input.

When the limit of 5 is reached, the interaction flow is stopped.

The limit of 5 is designed to prevent infinite loops and other potential error conditions.