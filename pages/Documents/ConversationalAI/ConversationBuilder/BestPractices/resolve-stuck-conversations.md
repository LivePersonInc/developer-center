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

### Understanding the default "retry" flow

By default, in a bot conversation, when the bot fails to respond to the consumer within 60 seconds, the consumer’s last message is resent to the bot one time. This retry flow is always attempted when needed.

Optionally, you can customize the timeout interval and the number of retries, respectively, by adding the [retryMessageInterval](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#retrymessageinterval) and [messageResendMaxRetries](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#messageresendmaxretries) fields to the bot's agent connector. LivePerson recommends you set the number of retries to 3 or fewer. You cannot set the number of retries to zero to skip this flow.

After this retry flow is completed fully, if the bot still fails to respond to the consumer, the conversation is identified as “stuck. There are a few strategies you can use to resolve stuck conversations; these are described below.

### Resolving stuck conversations

You can resolve stuck conversations by:

1. **Starting fresh with the consumer’s original query**: In this step, the bot’s context is reset, and the consumer is asked to resend their original query. The latter is accomplished by sending something like, “I’m sorry. Something went wrong, so let’s start fresh. How can I help you today?”
2. **Transferring the conversation to a human agent**

These steps are tried in the order indicated above. You can add just one step or both. Both steps are optional and disabled by default.

{: .important}
For an optimal consumer experience, LivePerson recommends that you add support for Step 1 above at a minimum. Step 2 is also strongly recommended.

To add support, you [edit the bot's agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#edit-an-agent-connector) by adding various [custom configuration fields](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#custom-configuration-fields).

To add Step 1 (start fresh with the consumer's original query), use:

* [userRetryOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#userretryonstuckconversation) - Add this, and set it to “true.”
* [userNotificationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#usernotificationmessageonstuckconversation) - The default message that’s sent to the consumer is “I’m sorry. Something went wrong, so let’s start fresh. How can I help you today?” To customize the message, add this and set it to the desired message.

To add Step 2 (transfer to human agent), use:

* [escalateOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalateonstuckconversation) - Add this, and set it to “true.”
* [escalationSkillIdOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationskillidonstuckconversation) - You must add this and set it to the appropriate skill ID to which to transfer the conversation. Without this value, the transfer will fail.
* [escalationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationmessageonstuckconversation) - The default message that’s sent to the consumer before the transfer is, “I’m having some trouble. Let me connect you with an agent.” To customize the message, add this and set it to the desired message.