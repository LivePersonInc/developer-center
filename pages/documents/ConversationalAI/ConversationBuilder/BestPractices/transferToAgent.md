---
pagename: Transfer to an Agent or Bot
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-transfer-to-an-agent-or-bot.html
indicator: both
---

The following are some best practices when implementing [LivePerson Agent Escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html) integrations, which transfer the consumer to a live agent or another bot.

For some practice with transfers, complete the [Connect to LiveEngage](conversation-builder-getting-started-4-connect-to-liveengage.html) tutorial.

#### Send a transfer message

When transferring the consumer to a live agent, it's customary to send some form of message to the user like, "Hold on while I connect you with an agent." You might want to have this as a Text statement in the dialog. However, supplying the message as a part of the integration's configuration guarantees the message is the last one seen by the consumer prior to the transfer because the message is sent as a part of the Transfer API post body.

In the integration, you supply the transfer message in "Message to User" field. For more information on this field, see [here](conversation-builder-integrations-liveperson-agent-escalation-integrations.html#add-a-liveperson-agent-escalation).

#### Handle transfer failures

Most often in Chat, but occasionally with Messaging, an attempt at transferring to a skill will fail. When this happens, the platform will send the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog/message set up to catch this pattern, the bot will treat it like any other user message. In most cases, it will go to the Fallback dialog.