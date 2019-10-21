---
pagename: Transfer to an Agent or Bot
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Troubleshooting
permalink: conversation-builder-troubleshooting-transfer-to-an-agent-or-bot.html
indicator: both
---

If you're trying to transfer a conversation to a live agent or another bot, but it isn't working, the reason could be one of several. Use this page to help you troubleshoot the issue.

For some practice with transfers, complete the [Connect to LiveEngage](conversation-builder-getting-started-4-connect-to-liveengage.html) tutorial.

### The transfer isn't working

#### The Agent Skill ID is incorrect

In the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration, verify that the **Agent Skill ID** you're attempting to transfer to is correct. This is often the cause of a failed transfer.

#### Common errors in a manual implementation

{: .important}
This section describes common errors when implementing a transfer via code instead of using the [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integration type. To make your bots more flexible and dynamic, LivePerson recommends that you switch to the LivePerson Agent Escalation integration type. It handles several, variable aspects (like the Transfer API URL) automatically.

The following are common errors in a manual implementation:

* **The transfer API URL is incorrect**: There are a few different server environments where you might be working with Conversation Builder. Depending on your region and whether you’re using LP Cloud, the URL used to connect to LiveEngage changes. Verify the URL is correct.

* **The authorization ID is incorrect**: Each Conversation Builder user has a unique API access key that is used in a number of different platform APIs. Verify that your API access key is correct. You can find it on the API tab in the User Settings for your user profile.

* **You aren't sending a transfer message**: When transferring the consumer, it's customary to send some form of message to the user like, "Hold on while I connect you with an agent." You might want to send this as a Text statement in the dialog, but this transfer message is sent as a part of the Transfer API post body as a way to guarantee that it's the last message the consumer sees prior to the transfer. The message can be handled by a variable, or it can be hard-coded if you don't require it to change. If you do not want to send a message in the API, you must set the message value to `BLANK_MESSAGE` because a value is required.

### After a failed transfer, the bot is acting weird

Most often in Chat, but occasionally with Messaging, an attempt at transferring to a skill will fail. When this happens, the platform sends the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog/message set up to catch this pattern, your bot will treat it like any other user message. In most cases, it will go to the Fallback dialog.
