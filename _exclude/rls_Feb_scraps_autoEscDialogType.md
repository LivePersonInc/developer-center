FOR THE EXISTING CUSTOM BOT PAGE

#. If you want create an Auto Escalation dialog in the new bot, select **Auto Escalation Dialog**, and then specify the following:
    * **LE Account ID**: Enter your account number.
    * **Default Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). This information is used to configure the Auto Escalation integration that is created automatically when the bot is created. You can edit this later in the integration itself. 
    * **Escalation Threshold**: Select the maximum number of times the fallback message should be sent in a stuck conversation before triggering the Auto Escalation dialog. You can edit this later in the bot's bot settings.

    For an introduction to Auto Escalation dialogs, see here.

FOR THE EXISTING DIALOG BASICS PAGE

* **Auto Escalation**: ADD DESCRIPTION....For more on this, see here.


### Configure dialog settings

**To configure dialog settings**
1. Open the bot, and click the down arrow ( <img style="width:25px" src="img/ConvoBuilder/icon_down_caret.png"> ) beside the dialog's name.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/dialogs_menu.png">

2. Select **Dialog Settings**.
3. Click **More Settings** to display all the settings.
4. Configure the settings as needed, and click **Save**.

Dialog settings include:

* **Dialog Name**: Enter a name that's concise and clear.
* **Dialog Type**: This is read only.
* **Domain**: Select a domain to associate it with the dialog.

### Disable or enable a dialog

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

FOR THE EXISTING BOT SETTINGS PAGE

* **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent in a stuck conversation before triggering the Auto Escalation dialog. For an introduction to Auto Escalation dialogs, see here.

FOR THE NEW AUTO ESCALATION DIALOGS PAGE

### Why use an Auto Escalation dialog?

The purpose of an Auto Escalation dialog


### How a bot triggers an Auto Escalation dialog



### What's included in an Auto Escalation dialog

By default, when an Auto Escalation dialog is created, the following is created:
* The Auto Escalation dialog. This includes a yes/no multiple choice question that asks the consumer if they want to speak to a live agent, followed by a integration interaction that performs the escalation if the consumer selects Yes.
*
*


### Create an Auto Escalation dialog

{: .important}
A dialog can have only one auto escalation dialog.

When you [create a custom bot](conversation-builder-bots-custom-bots.html), you can opt to create an Auto Escalation dialog at that time. However, it's also possible to create one afterwards using the procedure below.

**To create an auto escalation dialog**

1. Open the bot, and click **+ DIALOG** in the lower-left corner.
2. In the dialog that appears, specify the following:
    * **Dialog Name**: Enter a descriptive name.
    * **Dialog Type**: Select "Auto Escalation Dialog."
3. Click **Save**.

### Configure an Auto Escalation dialog



### Customization points

ANY?

### FAQs

ANY?