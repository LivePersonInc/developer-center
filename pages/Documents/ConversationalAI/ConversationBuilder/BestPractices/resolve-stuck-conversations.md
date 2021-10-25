---
pagename: Resolve Stuck Conversations
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-resolve-stuck-conversations.html
indicator: both
---

### Introduction

A *stuck* conversation is one where the bot repeatedly fails to respond to the consumer’s message. A conversation can become stuck for a variety of reasons. For example, this might be due to a long delay in receiving a response from a third-party system.

To promote the best conversational experience, your bot should attempt to resolve stuck conversations. This helps to ensure the conversation is resumed as quickly as possible, and the consumer’s needs ultimately are met.

### How bots can resolve stuck conversations

The default flow used by all Conversation Builder bots is this:

* **Step 1 - Retry the last consumer message**: When a bot fails to respond to the consumer within 60 seconds, the consumer’s last message is resent to the bot one time.

Step 1 is always attempted when needed. After Step 1 is completed fully, if the bot still fails to respond to the consumer, the conversation is identified as “stuck.” As a best practice, resolve stuck conversations by adding support for Step 2 and/or Step 3 below. *Step 2 and Step 3 are disabled by default.*

* **Step 2 - Start fresh with the consumer’s original query**: Reset the bot’s context and ask the consumer to resend their original query. The latter is accomplished by sending something like, “I’m sorry. Something went wrong, so let’s start fresh. How can I help you today?”

* **Step 3 - Transfer to a human agent**: If the bot is still stuck after Step 2, transfer the conversation.

### Customizing the behavior

Customization is accomplished by [editing the bot’s agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#edit-an-agent-connector), specifically, by adding various [custom configuration fields](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#custom-configuration-fields) to control the behavior.

Step 1 is the default flow where the consumer's last message is retried. To customize Step 1, use:

* [retryMessageInterval](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#retrymessageinterval) - To change the default 60-second interval, use this.
* [messageResendMaxRetries](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#messageresendmaxretries) - To retry the consumer’s last message more than once, use this. LivePerson recommends you don’t set this value to something greater than 3. You cannot set this value to zero to effectively skip Step 1.

Step 2 involves asking the consumer to start fresh. This step in the flow is optional and disabled by default. To add this step, use:

* [userRetryOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#userretryonstuckconversation) - To reset the bot’s context and ask the consumer to resend their original query, add this and set it to “true.”
* [userNotificationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#usernotificationmessageonstuckconversation) - The default message that’s sent to the consumer is “I’m sorry. Something went wrong, so let’s start fresh. How can I help you today?” To customize the message, use this.

Step 3 involves transferring the conversation to a human agent. This step in the flow is optional and disabled by default. To add this step, use:

* [escalateOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalateonstuckconversation) - Add this and set it to “true.”
* [escalationSkillIdOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationskillidonstuckconversation) - You must add this and set it to the appropriate skill ID to which to transfer the conversation. Without this value, the transfer will fail.
* [escalationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationmessageonstuckconversation) - The default message that’s sent to the consumer before the transfer is, “I’m having some trouble. Let me connect you with an agent.” To customize the message, use this.