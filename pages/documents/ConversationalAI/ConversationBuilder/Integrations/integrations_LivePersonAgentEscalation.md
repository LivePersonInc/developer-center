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

Transferring to another bot is the same as transferring to a live agent. The bot must be set up as a user agent, assigned a skill, and deployed, as you would normally do to connect a bot to LiveEngage. Keep in mind that this is a different bot from the original bot, so it will not have all the same context (variables, etc.) that you might have collected in the original bot. Sharing information between bots is fairly complex and sometimes requires the use of SDEs. This will be covered in another document.

{: .important}
For best practices and troubleshooting help when working with this integration type, see [here](conversation-builder-best-practices-transfer-to-an-agent-or-bot.html).

**To add a LivePerson Agent Escalation integration**

1. Open the bot, and click **Integrations** in the upper-right corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select LivePerson Agent Escalation.
    - **Agent Skill Name**: 
    - **Agent Skill Id**:
    - **Message to User**: Use this field to guarantee that the user will see a message prior to being transferred, something like, “Hold on while I connect you with an agent.” You can enter either static text, use a variable, or a combination of both. The system will send this message as a part of the transfer API post body. This field is required, so if you don't want to send a message, enter "BLANK_MESSAGE" here. That satisfies the underlying, system requirement for a message, but it doesn't actually send one. 
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields as described [here](conversation-builder-interactions-interaction-basics.html#display-variables-in-interactions).
3. Click **Save**.  