---
pagename: Troubleshooting
redirect_from:
    - conversation-builder-troubleshooting-transfer-to-an-agent-or-bot.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Integrations
permalink: conversation-builder-integrations-troubleshooting.html
indicator: both
---

Use this page to help you troubleshoot common issues when working with integrations in Conversation Builder.

### Troubleshooting common issues

#### New lines stored in variables

One issue that commonly occurs on mobile phones in particular is that the consumer adds another line to their message, that new line ( \\n ) is stored as a part of a variable, and the variable is subsequently used in an integration, causing it to fail.

For example, if the consumer's address is stored in a variable as "123 my address \n something somewhere 11111," and the variable is used in an integration, the integration will fail. This is by design to help to prevent injection attacks in the API.

You can avoid this new line issue by [cleaning the data](conversation-builder-variables-slots.html#cleaning-variable-data) before setting or storing it in a variable.

To troubleshoot and check for this issue, use the [printDebugMessage](conversation-builder-scripting-functions-log-debug.html#print-debug-message) scripting function to log debug messages to the console and verify that the data is as you expect.

### Troubleshooting transfers

If you're trying to transfer a conversation to a live agent or another bot, but it isn't working, the reason could be one of several. (For some practice with transfers, complete the [Escalate to an Agent](tutorials-guides-getting-started-with-bot-building-escalate-to-an-agent.html) tutorial.)

#### Messages are sent after the transfer

This can happen due to context switching. If, given your use case, you need to prevent context switching from occurring during the transfer, you can do this as described [here](conversation-builder-dialogs-dialog-basics.html#preventing-context-switching).

#### The transfer isn't working

##### The Agent Skill ID is incorrect

In the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration, verify that the **Agent Skill ID** you're attempting to transfer to is correct. This is often the cause of a failed transfer.

##### Common errors in a manual implementation

{: .important}
This section describes common errors when implementing a transfer via code instead of using the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration type. To make your bots more flexible and dynamic, LivePerson recommends that you switch to the LivePerson Agent Escalation integration type. It handles several, variable aspects (like the Transfer API URL) automatically.

The following are common errors in a manual implementation:

* **The transfer API URL is incorrect**: There are a few different server environments where you might be working with Conversation Builder. Depending on your region and whether you’re using LP Cloud, the URL used to connect to Conversational Cloud changes. Verify the URL is correct.

* **The authorization ID is incorrect**: Each Conversation Builder user has a unique API access key that is used in a number of different platform APIs. Verify that your API access key is correct. You can find it on the API tab in the User Settings for your user profile.

* **You aren't sending a transfer message**: When transferring the consumer, it's customary to send some form of message to the user like, "Hold on while I connect you with an agent." You might want to send this as a Text statement in the dialog, but this transfer message is sent as a part of the Transfer API post body as a way to guarantee that it's the last message the consumer sees prior to the transfer. The message can be handled by a variable, or it can be hard-coded if you don't require it to change. If you do not want to send a message in the API, you must set the message value to `BLANK_MESSAGE` because a value is required.

#### After a failed transfer, the bot is acting weird

Most often in Chat, but occasionally with Messaging, an attempt at transferring to a skill will fail. When this happens, the platform sends the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog/message set up to catch this pattern (discussed [here](conversation-builder-integrations-liveperson-agent-escalation-integrations.html#best-practices)), your bot will treat it like any other user message. In most cases, it will go to the Fallback dialog.
