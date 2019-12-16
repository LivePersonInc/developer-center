---
pagename: LivePerson Agent Escalation integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-liveperson-agent-escalation-integrations.html
indicator: both
---

Use a LivePerson Agent Escalation integration when you want to transfer a conversation to either a live agent or another bot.

Transferring to another bot is the same as transferring to a live agent. The bot must be set up as a user agent, assigned a skill, and deployed, as you would normally do to connect a bot to LiveEngage. Keep in mind that this is a different bot from the original bot, so it will not have all the same context (variables, etc.) that you might have collected in the original bot. Sharing information between bots is fairly complex and sometimes requires the use of SDEs.

For some practice with this integration type, complete the [Connect to LiveEngage](conversation-builder-getting-started-4-connect-to-liveengage.html) tutorial.

### Add a LivePerson Agent Escalation

**To add a LivePerson Agent Escalation integration**

1. Open the bot, and click **Integrations** in the upper-right corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select LivePerson Agent Escalation.
    - **Agent Skill Name**: Enter the name of the skill to which to transfer the conversation. The skill is defined in LiveEngage.
    - **Agent Skill Id**: Specify the ID of the skill to which to transfer the conversation. The skill is defined in LiveEngage. Here you can specify the ID using a bot context variable like `{$botContext.skillId}`, or you can enter a direct, numeric value.
        
        When the escalation is attempted, the Agent Skill Id is evaluated first; if it isn't numeric, the fallback message is sent to the user. If the value is numeric, but the bot doesn't respond for more than 3 minutes, an attempt is made to transfer the escalation to the fallback skill ID *if one is specified in the [agent connector](conversation-builder-testing-deployment-deploying-to-liveengage.html#add-an-agent-connector)*. Otherwise, the escalation fails. For information on handling failures, see below [here](conversation-builder-integrations-liveperson-agent-escalation-integrations.html#handle-transfer-failures). 
    - **Message to User**: Use this field to guarantee that the user will see a message prior to being transferred, something like, “Hold on while I connect you with an agent.” You can enter either static text, use a variable, or a combination of both. The system will send this message as a part of the transfer API post body. This field is required, so if you don't want to send a message, enter "BLANK_MESSAGE" here. That satisfies the underlying, system requirement for a message, but it doesn't actually send one. 
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields as described [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).
3. Click **Save**.  

### Best practices

#### Send a transfer message

When transferring the consumer to a live agent, it's customary to send some form of message to the user like, "Hold on while I connect you with an agent." You might want to send this as a Text statement in the dialog. However, supplying the message as a part of the integration's configuration guarantees the message is the last one seen by the consumer prior to the transfer (because the message is sent as a part of the post body in the underlying Transfer API).

In the integration, you supply the transfer message in the **Message to User** field. You don't have to supply a message, but if you don't, you'll need to set the field to `BLANK_MESSAGE` to satisfy the system requirement for a value, as described above.

#### Handle transfer failures

Most often in Chat, but occasionally with Messaging, an attempt at transferring to a skill will fail. When this happens, the platform sends the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog set up to catch this pattern, the bot will treat it like any other consumer message. In most cases, it will go to the Fallback dialog.

Setting up a dialog to catch the `__agent_escalation_failed__` pattern allows you to send an appropriate message to the consumer, e.g., "Sorry, we're unable to perform the transfer at this time. Please try again later."

If the `__agent_escalation_failed__` message is sent 3 times to the bot, and the 4th attempt also fails, the escalation stops, and the following default response is sent to the consumer, "Not able to transfer to Agent at this time. Please try later." Alternatively, if you've specified a "default user-friendly response" (for when errors and exceptions occur) in [Bot Settings](conversation-builder-bots.html#configure-bot-settings), that response is sent instead.

#### Disable context switching

Consider disabling [context switching](conversation-builder-dialogs-dialog-basics.html#context-switching) by adding the following as Pre-process code in the integration interaction that escalates (transfers) the conversation to a live agent:

`botContext.setBotVariable('skipPreviousDialog', 'true', true, false);`

This sets the variable to "true" and helps to ensure the consumer is never returned to an earlier dialog due to an utterance.

### Troubleshooting

For troubleshooting help when working with this integration type, see [here](conversation-builder-integrations-troubleshooting.html).