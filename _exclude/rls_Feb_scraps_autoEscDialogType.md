FOR THE "INTERACTIONS > INTEGRATIONS" PAGE

### Escalation interactions

Use an Escalation integration in a dialog when....

**To add an Escalation interaction**

1. 

FOR THE NEW AUTO ESCALATION DIALOGS PAGE

### Why use an Auto Escalation dialog?

The [fallback behavior](conversation-builder-dialogs-fallback-dialogs.html) in Conversation Builder means that, whenever a bot doesn't recognize a consumer's input and therefore can't determine the next step, the fallback message is sent, and the consumer is returned to the place where the failure occurred. As a result, it's possible for a consumer to get stuck inside of a question. The consumer's predicament is illustrated in the example below.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/dialogs_autoEscalate1.png">

The purpose of the Auto Escalation dialog is to free the consumer from being stuck and to transfer the conversation.

You configure the number of times that the fallback message is sent during a question. Once that threshold is reached, the Auto Escalation dialog is automatically triggered so that the consumer can be transferred to a live agent (or another bot).

### Implement an Auto Escalation dialog

#### Step 1: Create the dialog

{: .important}
A dialog can have only one auto escalation dialog.

When you [create a custom bot](conversation-builder-bots-custom-bots.html), you can opt to create an Auto Escalation dialog at that time. However, it's also possible to create one afterward using the procedure below.

**To create an auto escalation dialog**

1. Open the bot, and click **+ DIALOG** in the lower-left corner.
2. In the dialog that appears, specify the following:
    * **Dialog Name**: Enter a descriptive name.
    * **Dialog Type**: Select "Auto Escalation Dialog."
    * **LE Account ID**: Enter your account number.
    * **Auto Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). This information is used to configure the supporting [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration, which is created automatically. You can edit this information later in the integration itself. 
    * **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent during a question before triggering the Auto Escalation dialog. You can edit this information later in the bot's bot settings.
3. Click **Save**.

#### Step 2: Configure the threshold

When you created the Auto Escalation dialog, you specified a value for the **Auto Escalation Threshold**. You can change this in the bot's bot settings if desired.

#### Step 3: Configure the integration

When you created the Auto Escalation dialog, the supporting [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration was automatically created. Placeholder values were provided for the **Agent Skill Name**, **Agent Skill Id**, and **Message to user**.

SCREEN CAP

Configure these settings as per your requirements.

#### Step 4: Build out the dialog

By default, an Auto Escalation dialog includes a Yes/No multiple choice question that asks the consumer if they want to speak to a live agent. If the consumer says No, the interaction ends. If the consumer says Yes, the next interaction is executed. It transfers the conversation, invoking the escalation integration.

SCREEN CAP

If the default dialog implementation doesn't meet your requirements, build out and/or modify the dialog.

FOR THE EXISTING CUSTOM BOT PAGE

#. **Create Auto Escalation Dialog**. The purpose of an Auto Escalation dialog is to take a conversation that is stuck in a question and transfer it to a live agent or another bot. If you want to create an Auto Escalation dialog in the new bot, select **Create Auto Escalation Dialog**, and then specify the following:
    * **LE Account ID**: Enter your account number.
    * **Auto Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). This information is used to configure the supporting [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration, which is created automatically. You can edit this information later in the integration itself. 
    * **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent during a question before triggering the Auto Escalation dialog. You can edit this information later in the bot's bot settings.

    For more on Auto Escalation dialogs, see here.

FOR THE EXISTING DIALOG BASICS PAGE > DIALOG TYPES

* **Auto Escalation**: The auto escalation dialog is triggered after the fallback message is sent a specific (configurable) number of times during a question. The dialog is designed to take a conversation that is stuck in a question and transfer it to a live agent or another bot. For more on this, see here.

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
* **Auto Escalation Threshold**: Applicable for Auto Escalation dialogs only. Select the maximum number of times the fallback message should be sent during a question before triggering the Auto Escalation dialog. For more on Auto Escalation dialogs, see here.

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