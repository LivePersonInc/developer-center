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
- **Auto Escalation**: This type of dialog frees the consumer from being stuck within a question, which happens when the bot repeatedly doesn’t recognize the consumer’s input. The dialog is triggered automatically after a configurable threshold of failures is reached; it gives the consumer the option to be transferred. For more on this, see [here](conversation-builder-dialogs-auto-escalation-dialogs.html).
* **Survey**: Survey dialogs can only be created in post-conversation survey bots. Use a survey dialog to define a survey. For more on this, see [here](conversation-builder-bots-post-conversation-survey-bots.html).

### Dialog templates
You can make a dialog available to other bot developers as a dialog template. For information on working with dialog templates, see [here](conversation-builder-dialog-templates.html).

### Context switching

“Context switching” is the term used to describe how Conversation Builder navigates the consumer back and forth between dialogs as it matches consumer utterances to intents, in effect, switching the context of the conversation.

Every time a consumer enters a new utterance in a conversation, there’s a chance that the utterance will match a new intent and “jump” the consumer out of one dialog and into another tied to the newly matched intent. When this happens, the new dialog is "pushed" to the top of a virtual, running "stack" of dialogs, and its dialog flow immediately begins. Once the dialog is completed, it is removed from the stack, and the consumer is returned to the dialog immediately underneath it in the stack. That dialog now tops the stack, *and the last interaction that was sent by the bot before leaving the dialog is repeated*.

You can see this context switching occurring in the following conversation:

<img style="width:550px" src="img/ConvoBuilder/contextSwitching2.png">

Your ability to redirect or restrict context switching depends on whether the consumer is responding to an open-ended statement or a question.

When a bot sends an open-ended statement, such as, "Please type your query below," it simply awaits the consumer's response. As a result, whatever the response is, it is processed by the NLU engine to try and find a matching intent and dialog. And if one is found, that dialog is "pushed" to the top of the dialog stack, and its flow immediately begins.

However, in contrast to open-ended statements, questions can have response conditions applied to the consumer's response, so they can be used to redirect the conversation flow (via the Next Action setting). Depending on the implementation, this can restrict context switching or prevent it from occurring. For example, if a dialog includes an interaction that specifies "end interaction" as its Next Action, this stops the flow within the dialog.

#### Preventing context switching

If the context switching behavior isn't desirable for your use case, you can disable it by setting the `skipPreviousDialog` bot variable to "true" with the following code:

`botContext.setBotVariable('skipPreviousDialog', 'true', true, false);`

This code disables the behavior until the variable is set to "false" once again.

To disable context switching at the conversation start, you can add this code to Global Functions. To disable it at the point of a specific situation, you can add the code to any interaction.


### Import a dialog

You can import dialogs from one bot to another within your organization. This can be useful when you have a well-defined dialog in one bot that you want to quickly and easily reuse in a different bot. Note the following:

* You can import a maximum of 10 dialogs at a time from multiple bots. If you need to import more, you can repeat the process.
* You can import only dialogs of type Dialog (see *Dialog types* above).
* You can import dialogs from the bots to which you have access in your organization. For example, you can’t import dialogs from a bot that's owned by another bot developer and isn't [public](conversation-builder-bots-bot-basics.html#configure-bot-settings).
* The following is imported:  
    * All selected dialogs and the interactions therein
    * All integrations referenced in the selected dialogs
* The following isn't imported and must be added manually:
    * Global functions
    * Environment variables (you can [export](conversation-builder-environment-variables.html#export-environment-variables-to-a-csv-file) these)
* During the import, the associations of domains, intents, and entities to interactions are maintained.
* If you import a dialog that uses a knowledge base integration, and that knowledge base is owned by another bot developer and isn't [public](knowledge-base-common-settings-tasks.html#common-configurable-settings), you can still use the integration in the bot, but you can't view or edit that knowledge base in the Knowledge Base application.

When you import dialogs, consider and address any dependencies across the dialogs. You might or might not want to import all dependent dialogs.

**To import one or more dialogs into a bot**

1. Open the destination bot.
2. Click **Add Dialog** in the lower-left corner.
3. In the Add Dialog window, select the **From Existing Bots** tab.
4. Browse and/or search to find and select the dialogs to import. You can select up to 10 dialogs. You can't select dialogs that are made available as [dialog templates](conversation-builder-dialog-templates.html); these you must import as a dialog template.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/dialogs_import1.png">

5. Click **Next**, and then **Save**.
    
    The selected dialogs are imported.
    
6. You might want to rename the imported dialogs, interactions, and integrations. They are given standard names that include a timestamp.
7. Ensure proper conversation flow by checking (and updating, if necessary) the following in the interactions in the relevant dialogs:

    * Next Action values
    * JavaScript code
    * Environment variables 

    You might also need to update the credentials in the imported integrations, if any.

### Duplicate a dialog

You can duplicate a dialog that is of type Dialog (see *Dialog types* above). This can be useful when you have a well-defined dialog that you want to quickly and easily reuse in the same bot. 

During the operation:
* The associations of domains, intents, and entities to interactions are maintained.
* In the [Dialog Starter](conversation-builder-interactions-dialog-starter.html) interaction, the patterns or the intent is duplicated. **After the operation, modify or remove these as appropriate so that each dialog starter is unique within the bot.**

**To duplicate a dialog**

1. In the dialogs panel on the left, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dialogs.png"> (3-dot icon) beside the dialog's name.
2. Select **Duplicate Dialog**.

    The dialog is duplicated. At this point, you might want to rename the copy. It is given a standard name based on the element name and bot name.


### Create a dialog

**To create a dialog**
1. Open the bot.
2. Click **Add Dialog** in the lower-left corner.
3. In the Add Dialog window, on the New Dialog tab, specify the following:
    - **Dialog Name**: Enter a descriptive name for the dialog. Use a standard naming convention to make your dialogs more sortable and easier to find.
    - **Description**: (Optional) Enter a brief description of the dialog's purpose. The description is displayed in the user interface for importing dialogs, discussed below, to help bot developers make decisions on which dialogs to select to import.
    - **Dialog Type**: Select the type of dialog; for help with this, see *Dialog types* farther above on this page.
5. Click **Save**.
6. Build out the dialog as per your requirements.

### Close the dialog

To close the current dialog, set the interaction's Next Action to "Close Dialog."

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/nextAction_closeDialog.png">

Alternatively, add a Text statement that contains the special string "LP_CLOSEDIALOG." If the statement isn't the last interaction in the dialog, set its **Next Action** to "End Interaction" (not "Next Interaction").

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/keyword_closeDialog.png">

LP_CLOSEDIALOG is a system message; even though it appears in the Preview window, it isn't shown to the consumer when deployed.

{: .important}
These methods for closing the dialog **do** trigger a post-conversation [survey](conversation-builder-bots-post-conversation-survey-bots.html).

### Close the conversation

To close the current conversation, set the interaction's Next Action to "Close Conversation."

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/nextAction_closeConv.png">

Alternatively, add a Text statement that contains the special string "LP_CLOSECONVERSATION." If the statement isn't the last interaction in the dialog, set its **Next Action** to "End Interaction" (not "Next Interaction").

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/keyword_closeConversation.png">

LP_CLOSECONVERSATION is a system message; even though it appears in the Preview window, it isn't shown to the consumer when deployed.

{: .important}
These methods for closing the conversation **don't** trigger a post-conversation [survey](conversation-builder-bots-post-conversation-survey-bots.html).

### Configure dialog settings

**To configure dialog settings**
1. In the dialogs panel on the left, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dialogs.png"> (3-dot icon) beside the dialog's name.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
3. Configure the settings as needed, and click **Save**.

Dialog settings include:

* **Dialog Name**: Enter a name that's concise and clear.
* **Dialog Type**: This is read only.
* **Domain**: Select a domain to associate it with the dialog.
* **Auto Escalation Threshold**: Applicable for [Auto Escalation dialogs](conversation-builder-dialogs-auto-escalation-dialogs.html) only. Select the maximum number of consecutive times the fallback message should be sent within a question before triggering the Auto Escalation dialog. Example: You set the threshold to 3. The consumer enters an incorrect answer three times, receiving the fallback response each time. After the fourth incorrect answer, the Auto Escalation dialog is triggered.

    LivePerson recommends setting this to "3," but you can set this to a different value based on your confidence that the fallback response will resolve the user's issue.

### Disable or enable a dialog

**To disable or enable a dialog**

1. In the dialogs panel on the left, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dialogs.png"> (3-dot icon) beside the dialog's name.
2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
4. For **Enable Dialog**, click the slider. Enable (turn on) the slider to enable the dialog; disable (turn off) the slider to disable the dialog.
5. Click **Save**.

### Delete a dialog

Deleting a dialog is a non-recoverable action, so be certain about doing so before taking this action. For example, make sure the dialog isn't referenced by any others within the bot. As an alternative, consider disabling the dialog instead; you can do this in the dialog's settings.

**To delete a dialog**

1. In the dialogs panel on the left, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsis_dialogs.png"> (3-dot icon) beside the dialog's name.
2. Select **Delete Dialog**.
3. In the confirmation dialog, click **Yes**. 