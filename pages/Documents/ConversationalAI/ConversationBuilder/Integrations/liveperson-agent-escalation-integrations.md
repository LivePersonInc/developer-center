---
pagename: LivePerson Agent Escalation Integrations
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-liveperson-agent-escalation-integrations.html
indicator: both
---

You can use a LivePerson Agent Escalation integration when you want to transfer a conversation to either a live agent or another bot.

{: .important}
There are two ways to implement an escalation: You can add an [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions). Or, you can add an Integration interaction that uses a supporting LivePerson Agent Escalation integration, *which is discussed here*. There is no difference between the two approaches when it comes to performance. However, use of the [Agent Transfer interaction](conversation-builder-interactions-integrations.html#agent-transfer-interactions) is a simpler, more convenient approach because you specify all necessary information in the interaction itself. If you use an Agent Transfer interaction, you *don't* need to create a supporting integration.

{: .important}
Implementing a bot-to-bot transfer? See [here](conversation-builder-bots-bot-to-bot-transfers.html#manual-transfers) for more information.

### Add a LivePerson Agent Escalation 

**To add a LivePerson Agent Escalation integration**

1. Open the bot, and click **Integrations** in the upper-left corner.
2. Configure the integration settings (required fields are marked with asterisks):
    - **Integration Name**: Enter the name of integration. Enter a name that's meaningful (it describes well the integration's purpose), concise, and follows a consistent pattern. This helps with organization, and it makes it easier for bot developers to work with the integration during bot development.
    - **Response Data Variable Name**: Enter the name of the response data variable.
    - **Integration Type**: Select LivePerson Agent Escalation.
    - **Agent Skill Name**: Enter the name of the agent skill to which to transfer the conversation. The skill is defined in Conversational Cloud. Entering the name provides you with something display-friendly and "readable" by which to readily understand which skill is being used (since the skill ID is a number).
    - **Agent Skill Id**: Specify the ID of the skill to which to transfer the conversation. The skill is defined in Conversational Cloud. Here you can specify the ID using a bot context variable like `{$botContext.skillId}`, or you can enter a direct, numeric value.
        
        When the escalation is attempted, the Agent Skill Id is evaluated; if it isn't numeric, the fallback message is sent to the user. If the value is numeric, but the bot doesn't respond for more than 3 minutes (e.g., the chat server becomes overloaded and drops the message), an attempt is made to transfer the escalation to the fallback skill ID *if one is specified in the [agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#add-an-agent-connector)*. Otherwise, the escalation fails. For information on handling failures, see below [here](conversation-builder-integrations-liveperson-agent-escalation-integrations.html#handle-transfer-failures). 
    - **Agent Id**: Optional. Used for bot-to-human transfers only. Specify the ID of the human agent to which to transfer the conversation. (You can obtain the ID from the address bar when the user profile is displayed in Conversational Cloud.) Transfer of the conversation to this agent ID only occurs if the agent is assigned to the skill ID that you specify and is available; otherwise, transfer to the skill ID occurs instead.
    - **Transfer Bot Context**: Used for [manual, bot-to-bot transfers](conversation-builder-bots-bot-to-bot-transfers.html#manual-transfers) only. Select this to *automatically* pass the user's intent and/or message from the sender bot to the receiver bot. This lets the receiver bot know the appropriate dialog to start after the transfer.
    - **Message to User**: Use this field to guarantee that the user will see a message prior to being transferred, something like, “Hold on while I connect you with an agent.” You can enter either static text, use a variable, or a combination of both. The system will send this message as a part of the transfer API post body. If you need to insert a new line, use an escape character like so: \\\n. 

    This field is required, so if you don't want to send a message, enter "BLANK_MESSAGE" here. That satisfies the underlying, system requirement for a message, but it doesn't actually send one. 
    - **Transform Result Script**: If applicable, use this section to write JavaScript code that transforms the raw result (typically in JSON format), so you can use the information in the bot's dialog. For more on this, see [Transform an API result](conversation-builder-integrations-integration-basics.html#transform-an-api-result).
    - **Custom Data Fields**: Add the fields that will store the result data in key/value pairs. Users who are tasked with creating bots can use and display this data in interactions by referencing these fields. For more on this, see [here](conversation-builder-integrations-integration-basics.html#process-api-results-with-custom-data-fields).
3. Click **Save**.  

### Best practices

#### Send a transfer message

When transferring the consumer to a live agent, it's customary to send some form of message to the user like, "Hold on while I connect you with an agent." You might want to send this as a Text statement in the dialog. However, supplying the message as a part of the integration's configuration guarantees the message is the last one seen by the consumer prior to the transfer (because the message is sent as a part of the post body in the underlying Transfer API).

In the integration, you supply the transfer message in the **Message to User** field. You don't have to supply a message, but if you don't, you'll need to set the field to `BLANK_MESSAGE` to satisfy the system requirement for a value, as described above.

#### Add a time delay to the transfer if needed

If you're sending one or more text responses prior to the transfer, it's recommended that you add to the Integration interaction an interaction delay that accounts for each response you need to send. This gives the bot sufficient time to send the messages before transferring the conversation. For example, if you're sending 3 text messages prior to the transfer, you might add a 6000 millisecond delay to the Integration interaction (3 messages x 2000 millisecond delay per message = an aggregate 6000 millisecond delay). Specify the delay in the **Interaction Delay** field in the Integration interaction's settings.

#### Handle transfer failures

First, if an immediate error occurs when calling the escalation API, a failure response will be returned. You can catch and handle these errors by adding a custom rule to the integration interaction that checks for a “failure” result. For more on this, see [here](conversation-builder-interactions-integrations.html#integration-interactions).

Second, most often in Chat, but occasionally with Messaging, it can happen that the escalation API call is successful, but an attempt at transferring to a skill will fail after some time. When this happens, the platform sends the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog set up to catch this pattern, the bot will treat it like any other consumer message. In most cases, it will go to the Fallback dialog.

Setting up a dialog to catch the `__agent_escalation_failed__` pattern allows you to send an appropriate message to the consumer, e.g., "Sorry, we're unable to perform the transfer at this time. Please try again later."

If the `__agent_escalation_failed__` message is sent 3 times to the bot, and the 4th attempt also fails, the escalation stops, and the following default response is sent to the consumer, "Not able to transfer to Agent at this time. Please try later." Alternatively, if you've specified a "default user-friendly response" (for when errors and exceptions occur) in [Bot Settings](conversation-builder-bots-bot-basics.html#configure-bot-settings), that response is sent instead.

### Troubleshooting

For troubleshooting help when working with this integration type, see [here](conversation-builder-integrations-troubleshooting.html).