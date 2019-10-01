---
pagename: Debugging
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Testing & Deployment
permalink: conversation-builder-testing-deployment-debugging.html
indicator: both
---

The Debug window can display the log of the conversation that occurred in the Preview window or the log of any conversation that occurred in a supported channel. This makes it a useful tool during bot development in a few ways.

First, if you're encountering unexpected behavior, always check the Debug window. Errors and failures are displayed in red, so you'll know at a glance if and where they occurred. 

Second, because the log provides a more technical view of the underlying process flow that occurred during the conversation, it can deepen your understanding of how that processing works and support research. For example, you can use the log to identify the patterns or intents that were matched in the conversation.

Here's a visual overview of the Debug window:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/debuggingWindow.png">

- 1 = Use the **User ID** input box to specify the log you want to view.
- 2 = Click **Refresh** to initially display or to refresh the log.
- 3 = Click the circle beside a logged event to display its timestamp.

Errors and failures are displayed <font color="red">in red</font>, so you can spot them quickly.

### Debugging during bot development

**To display the log for the conversation that occurred in the Preview window**

1. Click <img style="width:30px" src="img/ConvoBuilder/icon_debug.png"> in the lower-right corner to open the Debug window.
    
    For ease of use during bot development, by default, the user ID for the consumer in the conversation in the Preview window is entered in the User Id input box.

2. Click **Refresh**.

### Debugging end-to-end interactions

**To display the log for a conversation that occurred in a supported channel**

1. In the channel (Facebook Messenger, Apple iMessage, etc.), enter "display userid."
    
    <img style="width:400px" src="img/ConvoBuilder/debug_displayID.png">

2. Copy the ID to your clipboard.
3. Return to Conversation Builder, open a bot, and click <img style="width:30px" src="img/ConvoBuilder/icon_debug.png"> in the lower-right corner to open the Debug window.
4. Paste the ID into the **User ID** input box.
5. Click **Refresh**.

### Printing the most recent user message

To aid in debugging, you can use the `printDebugMessage` scripting function in the code areas of an interaction to print the consumer's most recent message to the Debug window. For more on this function, see [here](conversation-builder-scripting-functions.html#print-debug-message).