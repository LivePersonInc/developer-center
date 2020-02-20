FOR THE "INTERACTIONS > INTEGRATIONS" PAGE

### Escalation interactions

Use an Escalation interaction in a dialog when you want to escalate (transfer) a conversation to either a live agent or another bot.

{: .important}
Implementing a bot-to-bot transfer? See here for more information.

**To add an Escalation interaction**

1. Select the interaction just above where you want to add the escalation, and click (Escalation) on the interactions toolbar.
2. In the interaction, enter the message to send to the user prior to being transferred, something like, “Hold on while I connect you with an agent.” You can enter either static text, use a variable, or a combination of both. The system will send this message as a part of the transfer API post body. This field is required, so if you don't want to send a message, enter "BLANK_MESSAGE" here. That satisfies the underlying, system requirement for a message, but it doesn't actually send one.

    ADD SCREEN

3. DOC HOW TO ACCESS INTERACTION SETTINGS, specify the following:

    * **Agent Skill ID**: Specify the ID of the skill to which to transfer the conversation. The skill is defined in LiveEngage. Here you can specify the ID using a bot context variable like `{$botContext.skillId}`, or you can enter a direct, numeric value.

    When the escalation is attempted, the Agent Skill Id is evaluated first; if it isn't numeric, the fallback message is sent to the user. If the value is numeric, but the bot doesn't respond for more than 3 minutes, an attempt is made to transfer the escalation to the fallback skill ID *if one is specified in the [agent connector](conversation-builder-testing-deployment-deploying-to-liveengage.html#add-an-agent-connector)*. Otherwise, the escalation fails. For information on handling failures, see below here.

    * **Bot Transfer Context**: Used for manual, bot-to-bot transfers only. Select this to *automatically* pass the user's intent and/or message from the sender bot to the receiver bot. This lets the receiver bot know the appropriate dialog to start after the transfer. For more information, see the discussion on bot-to-bot transfers here.

4. Click **Save**.

{: .important}
The Escalation interaction *doesn't* require a supporting LivePerson Agent Escalation integration. You specify all necessary information in the interaction itself.

MOVE THE BP AND TROUBLESHOOTING DOC HERE OR SOMEWHERE TOO!

FOR THE EXISTING CUSTOM BOT PAGE

The purpose of the Auto Escalation dialog is to free the consumer from being stuck within a question. This can happen when the bot doesn't recognize the consumer's input.

#. **Create Auto Escalation Dialog**. An Auto Escalation dialog frees the consumer from being stuck within a question, which happens when the bot repeatedly doesn’t recognize the consumer’s input. The dialog is triggered automatically after a threshold is reached; it gives the consumer the option to be transferred. If you want to create an Auto Escalation dialog in the new bot, select this checkbox, and then specify the following:
    * **Auto Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). You can edit this information later in the Escalation interaction's settings. 
    * **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent within a question before triggering the Auto Escalation dialog. You can edit this information later in the dialog's settings.

FOR THE EXISTING DIALOG BASICS PAGE > DIALOG TYPES

* **Auto Escalation**: This type of dialog frees the consumer from being stuck within a question, which happens when the bot repeatedly doesn’t recognize the consumer’s input. The dialog is triggered automatically after a configurable threshold is reached; it gives the consumer the option to be transferred. For more on this, see here.

### Configure dialog settings

**To configure dialog settings**
1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
3. Configure the settings as needed, and click **Save**.

Dialog settings include:

* **Dialog Name**: Enter a name that's concise and clear.
* **Dialog Type**: This is read only.
* **Domain**: Select a domain to associate it with the dialog.
* **Auto Escalation Threshold**: Applicable for Auto Escalation dialogs only. Select the maximum number of times the fallback message should be sent within a question before triggering the Auto Escalation dialog.

### Disable or enable a dialog

**To disable or enable a dialog**

1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
4. For **Enable Dialog**, click the slider. Enable (turn on) the slider to enable the dialog; disable (turn off) the slider to disable the dialog.
5. Click **Save**.

### Delete a dialog

Deleting a dialog is a non-recoverable action, so be certain about doing so before taking this action. As an alternative, consider disabling the dialog instead; you can do this in the dialog's settings.

**To delete a dialog**

1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Delete Dialog**.
3. In the confirmation dialog, click **Yes**. 

LP AGENT ESCALATION INTEGRATIONS

--MARK AS DEPRECATED BUT SUPPORTED; WILL BE REMOVED FROM ADD NEW INTEGRATION FORM MAYBE WHEN RELEASED OR MAYBE IN A FUTURE RELEASE. WILL STAY FOR EXISTING BOTS FOR BACKWARDS COMPATIBILITY.

BOT-TO-BOT TRANSFERS

UPDATE TO USE ESCALATION INTERACTION