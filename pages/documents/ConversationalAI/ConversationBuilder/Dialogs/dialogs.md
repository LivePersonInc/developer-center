---
pagename: Dialog Basics
redirect_from:
    - conversation-builder-conversation-builder-dialogs.html
    - conversation-builder-dialogs.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-dialog-basics.html
indicator: both
---

A dialog is a group or flow of interactions that are triggered based upon consumer intent.

### Dialog types

There are several types of dialogs:

- **Dialog (Standard)**: Standard dialogs are triggered when the bot recognizes the consumer's message via an [intent](intent-builder-intents.html) match or a [pattern](conversation-builder-conversation-builder-response-match-actions.html#pattern-matching) match. For more on this, see [here](conversation-builder-dialogs-standard-dialogs.html).
- **Fallback**: The fallback dialog is triggered when the bot doesn't recognize the consumer's message. For more on this, see [here](conversation-builder-dialogs-fallback-dialogs.html).
- **Disambiguation**: The disambiguation dialog is triggered when the bot recognizes the consumer's input, but it can match it to multiple intents. As a result, clarification from the consumer is needed. For more on this, see [here](conversation-builder-dialogs-disambiguation-dialogs.html).
- **Auto Escalation**: This type of dialog frees the consumer from being stuck within a question, which happens when the bot repeatedly doesn’t recognize the consumer’s input. The dialog is triggered automatically after a configurable threshold is reached; it gives the consumer the option to be transferred. For more on this, see [here](conversation-builder-dialogs-auto-escalation-dialogs.html).

### Context switching

“Context switching” is the term used to describe how Conversation Builder navigates the consumer back and forth between dialogs as it matches consumer utterances to intents, in effect, switching the context of the conversation.

Every time a consumer enters a new utterance in a conversation, there’s a chance that the utterance will match a new intent and “jump” the consumer out of one dialog and into another tied to the newly matched intent. When this happens, the new dialog is "pushed" to the top of a virtual, running "stack" of dialogs, and its dialog flow immediately begins. Once the dialog is completed, it is removed from the stack, and the consumer is returned to the dialog immediately underneath it in the stack. That dialog now tops the stack, *and the last interaction that was sent by the bot before leaving the dialog is repeated*.

You can see this context switching occurring in the following conversation:

<img style="width:550px" src="img/ConvoBuilder/contextSwitching2.png">

Your ability to redirect or restrict context switching depends on whether the consumer is responding to an open-ended statement **(1)** or a question **(2)**.

 <img style="width:550px" src="img/ConvoBuilder/contextSwitching1.png">

When a bot sends an open-ended statement, such as, "Please type your query below," it simply awaits the consumer's response. As a result, whatever the response is, it is processed by the NLU engine to try and find a matching intent and dialog. And if one is found, that dialog is "pushed" to the top of the dialog stack, and its flow immediately begins.

However, in contrast to open-ended statements, questions can have response conditions applied to the consumer's response, so they can be used to redirect the conversation flow (via the Next Step setting). Depending on the implementation, this can restrict context switching or prevent it from occurring. For example, if a dialog includes an interaction that specifies "end interaction" as its Next Step, this ends the conversation.

#### Preventing context switching

If the context switching behavior isn't desirable for your use case, you can disable it by setting the `skipPreviousDialog` bot variable to "true" with the following code:

`botContext.setBotVariable('skipPreviousDialog', 'true', true, false);`

This code disables the behavior until the variable is set to "false" once again.

To disable context switching at the conversation start, you can add this code to Global Functions. To disable it at the point of a specific situation, you can add the code to any interaction.

### Create a new dialog

1. Open the bot.
2. Click **+ DIALOG** in the lower-left corner.
3. In the dialog that appears, do the following:
    - **Dialog Name**: Enter a descriptive name for the dialog. Use a standard naming convention to make your dialogs more sortable and easier to find.
    - **Dialog Type**: Select the type of dialog; for help with this, see *Dialog types* farther above on this page.
4. Click **Save**.
5. Build out the dialog as per your requirements.

### Close the dialog

To close the current dialog, create a Text statement that contains the special string “LP_CLOSEDIALOG”.

 <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/keywords_lpCloseDialog.png">

This is a system message; even though it appears in the Preview window, it is not shown to the consumer when deployed.

If this Text statement isn't the last in the dialog, set this statement's **Next Step** to "End Interaction" (not "Next Interaction").

 {: .important}
LP_CLOSEDIALOG triggers a post-conversation survey. The specific survey that is triggered is based on the conversation's last skill.

### Close the conversation

To close the current conversation, set the final interaction's next step to "Close conversation" like so:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/interactions_closeConversation.png">

Alternatively, you can create a Text statement that contains the special string “LP_CLOSECONVERSATION”.

 <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/keywords_lpCloseConversation.png">

This is a system message; even though it appears in the Preview window, it is not shown to the consumer when deployed.

If this Text statement isn't the last in the dialog, set this statement's **Next Step** to "End Interaction" (not "Next Interaction").

{: .important}
LP_CLOSECONVERSATION does **not** trigger a post-conversation survey.

### Configure dialog settings

**To configure dialog settings**
1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
3. Configure the settings as needed, and click **Save**.

Dialog settings include:

* **Dialog Name**: Enter a name that's concise and clear.
* **Dialog Type**: This is read only.
* **Domain**: Select a domain to associate it with the dialog.
* **Auto Escalation Threshold**: Applicable for [Auto Escalation dialogs](conversation-builder-dialogs-auto-escalation-dialogs.html) only. Select the maximum number of times the fallback message should be sent within a question before triggering the Auto Escalation dialog.

### Disable or enable a dialog

**To disable or enable a dialog**

1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
4. For **Enable Dialog**, click the slider. Enable (turn on) the slider to enable the dialog; disable (turn off) the slider to disable the dialog.
5. Click **Save**.

### Delete a dialog

Deleting a dialog is a non-recoverable action, so be certain about doing so before taking this action. As an alternative, consider disabling the dialog instead; you can do this in the dialog's settings.

**To delete a dialog**

1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Delete Dialog**.
3. In the confirmation dialog, click **Yes**. 