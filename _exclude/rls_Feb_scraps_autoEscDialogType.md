FOR THE EXISTING CUSTOM BOT PAGE

#. If you want create an Auto Escalation dialog in the new bot, select **Auto Escalation Dialog**, and then specify the following:
    * **LE Account ID**: Enter your account number.
    * **Default Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). This information is used to configure the Auto Escalation integration that is created automatically when the bot is created. You can edit this later in the integration itself. 
    * **Escalation Threshold**: Select the maximum number of times the fallback message should be sent in a stuck conversation before triggering the Auto Escalation dialog. You can edit this later in the bot's bot settings.

    For an introduction to Auto Escalation dialogs, see here.

FOR THE EXISTING DIALOG BASICS PAGE

* **Auto Escalation**: ADD DESCRIPTION....For more on this, see here.

FOR THE EXISTING BOT SETTINGS PAGE

* **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent in a stuck conversation before triggering the Auto Escalation dialog. For an introduction to Auto Escalation dialogs, see here.

FOR THE EXISTING LP AGENT ESCALATION PAGE
???

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