---
pagename: Auto Escalation Dialogs
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Dialogs
permalink: conversation-builder-dialogs-auto-escalation-dialogs.html
indicator: both
---

### Why use an Auto Escalation dialog?

The purpose of the Auto Escalation dialog is to free the consumer from being stuck within a question. This can happen when the bot doesn't recognize the consumer's input. Because the bot can't determine the next step that should happen, the [fallback response]((conversation-builder-dialogs-fallback-dialogs.html)) is sent, and the consumer is returned to the place where the failure occurred. The fallback response is repeated after each unrecognizable input, resulting in a stuck conversation. The consumer's predicament is illustrated in the example below.

<img style="width:350px" src="img/ConvoBuilder/dialogs_autoEscalate1.png">

The Auto Escalation dialog solves this problem by offering the consumer the option of being transferred to a live agent (or another bot). You configure the number of times that the fallback response should be sent within a question. Once that threshold is reached, the Auto Escalation dialog is triggered automatically.

<img style="width:450px" src="img/ConvoBuilder/dialogs_autoEscalate2.png">

### Implement an Auto Escalation dialog

#### Step 1: Create the dialog

{: .important}
A dialog can have only one Auto Escalation dialog.

When you [create a custom bot](conversation-builder-bots-custom-bots.html), you can choose to create an Auto Escalation dialog at that time. However, it's also possible to create one afterward using the procedure below.

**To create an Auto Escalation dialog**

1. Open the bot, and click **+ DIALOG** in the lower-left corner.
2. In the dialog that appears, specify the following:
    * **Dialog Name**: Enter a descriptive name.
    * **Dialog Type**: Select "Auto Escalation Dialog."
    * **Auto Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). You can edit this information later in the Escalation Integration interaction's settings.
    * **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent within a question before triggering the Auto Escalation dialog. You can edit this information later in the dialog's settings.
3. Click **Save**.

#### Step 2: Build out the dialog

By default, an Auto Escalation dialog includes a Yes/No multiple choice question that asks the consumer if they want to speak to a live agent. If the consumer says Yes, the escalation (transfer) occurs. If the consumer says No, the interaction ends.

<img style="width:800px" src="img/ConvoBuilder/dialogs_autoEscalate3.png">

If the default dialog implementation doesn't meet your requirements, build out and/or modify the dialog. For information on configuring Escalation Integration interactions, see [here](conversation-builder-interactions-integrations.html#escalation-integration-interactions).

{: .important}
You can change the **Auto Escalation Threshold** in the dialog's settings.

### FAQs

#### Can you explain how the Auto Escalation Threshold counter works?

The counter is incremented if any of the following occurs:

* The built-in, default fallback response is sent to the consumer. (A fallback dialog doesn't exist.)
* A fallback dialog that contains only text interactions exists and is triggered.
* A fallback dialog that contains an API integration (e.g., a Knowledge Base integration) exists and is triggered. But the integration call failed, and the failure condition was not handled, triggering a system error message.
