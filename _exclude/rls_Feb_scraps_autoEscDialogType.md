HANDLE THE TROUBLESHOOTING DOC SOMEHOW - LP AGENT ESCALATIONS ARE NOW ESCALATION INTERACTIONS!

FOR THE EXISTING CUSTOM BOT PAGE

The purpose of the Auto Escalation dialog is to free the consumer from being stuck within a question. This can happen when the bot doesn't recognize the consumer's input.

#. **Create Auto Escalation Dialog**. An Auto Escalation dialog frees the consumer from being stuck within a question, which happens when the bot repeatedly doesn’t recognize the consumer’s input. The dialog is triggered automatically after a threshold is reached; it gives the consumer the option to be transferred. If you want to create an Auto Escalation dialog in the new bot, select this checkbox, and then specify the following:
    * **Auto Escalation Skill**: Specify the ID of the skill to which to escalate (transfer) the conversation. You can select from the IDs of the skills configured for your account; alternatively, enter a [botContext variable](conversation-builder-variables-slots.html#variables) like `{$botContext.skillId}` or an [environment variable](conversation-builder-environment-variables.html). You can edit this information later in the Escalation interaction's settings. 
    * **Auto Escalation Threshold**: Select the maximum number of times the fallback message should be sent within a question before triggering the Auto Escalation dialog. You can edit this information later in the dialog's settings.

LP AGENT ESCALATION INTEGRATIONS --MARK AS DEPRECATED BUT SUPPORTED; WILL BE REMOVED FROM ADD NEW INTEGRATION FORM MAYBE WHEN RELEASED OR MAYBE IN A FUTURE RELEASE. WILL STAY FOR EXISTING BOTS FOR BACKWARDS COMPATIBILITY.

BOT-TO-BOT TRANSFERS - UPDATE TO USE ESCALATION INTERACTION