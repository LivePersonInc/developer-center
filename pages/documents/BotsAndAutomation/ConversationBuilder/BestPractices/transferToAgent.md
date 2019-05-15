---
pagename: Transfer to an Agent or Bot
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-transfer-to-an-agent-or-bot.html
indicator: both
---

### Introduction

Within your automation, you may need to transfer a conversation to a live agent or perhaps another bot. You can find the basics of how to [Connect your bot to LiveEngage](conversation-builder-getting-started-4-connect-to-liveengage.html) here.

The following are some best practices to keep in mind while creating your escalation flows and troubleshooting any issues that may occur.

### My transfer isn’t working

There are a number of reasons why your transfer may be failing. Here are a few of the most common causes:

#### Your transfer API URL may be incorrect for your server environment

There are a few different server environments where you may be working with Conversation Builder. Depending on your region and whether you’re using LP Cloud, you may need to change the URL for your escalation.

| Server Environment | URL endpoint |
| --- | --- |
| US | `https://platformservice.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent` |
| US (If accessing from LiveEngage automation tab) | `https://va.bc-bot.liveperson.net/botservice-0.1/botcentral/livePersonAgent` |
| Europe | `https://platformservice-eu.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent` |
| APAC | `https://platformservice-ap.botcentralapi.com/botservice-0.1/botcentral/livePersonAgent` |

#### Your Authorization ID may be incorrect

Each Conversation Builder user has a unique API Access Key that is used in a number of different platform APIs. Make sure that your ID is correct. Your API Access Key can be found under your user profile, under the API tab.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/bestPractices/1.png">

#### Your skillId may be incorrect

Take a moment to double check the skillId you are attempting to transfer to. This is often the cause of a failed transfer.

#### You are not sending a Transfer Message

When transferring, it is customary to send some form of message to the user like "Hold on while I connect you with an agent." You may want to have this as a Text Statement in your dialog, but this transfer message is sent as part of the Transfer API Post Body as a way to guarantee that it is the last message the user will see prior to transfer.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/bestPractices/0.png">

This can be handled by a variable (as shown here), or hard coded if you do not require it to change.

If you do **not** want to send a message in the API, set the message value to `BLANK_MESSAGE`.

#### After a failed transfer my bot is acting weird

Most often in Chat, but occasionally with Messaging, an attempt at transferring to a skill will fail. When this happens, the platform will send the message `__agent_escalation_failed__` to the bot. If you don’t have a dialog/message set up to catch this pattern, your bot will treat it like any other user message. In most cases it will go to your Fallback dialog.

### How do I transfer to another Bot

Sometimes you may require multiple bots for your particular user case. Transferring to another bot is exactly the same as transferring to a human agent. The bot needs to be set up as a user agent, assigned a skill and deployed, as you would normally do to connect a bot to LiveEngage. Then when you want to transfer, you use the skillId for the bot, it will transfer after a brief moment.

Keep in mind that because this is a completely different bot it will not have all of the same context (variables, etc) that you may have collected in the original bot. Sharing information between bots is fairly complex and may require the use of SDEs. This will be covered in another document.
