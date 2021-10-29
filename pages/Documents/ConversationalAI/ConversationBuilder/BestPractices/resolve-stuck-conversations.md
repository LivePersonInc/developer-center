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

As a best practice, your bot should resolve stuck conversations. This helps the bot to re-engage the consumer when the conversation isn’t progressing as expected.

### Retrying the consumer's last message

In a conversation, when a bot fails to respond to the consumer, the consumer’s last message can be resent to the bot one or more times. However, this retry flow is disabled by default.

#### Adding support

To retry the consumer's last message, [edit the bot's agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#edit-an-agent-connector) and add these [custom configuration fields](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#custom-configuration-fields):

* [messageResendMaxRetries](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#messageresendmaxretries) - Add this field, which specifies the number of tries, not retries. LivePerson recommends that you set this no higher than 3. Examples:
    * For 1 retry, set this to 2. (1 for the original try + 1 for the single retry)
    * For 2 retries, set this to 3.

    The default value of this field is 1, which means the consumer's last message is never retried when the bot doesn't respond. Effectively, the retry flow is skipped by default.

* [retryMessageInterval](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#retrymessageinterval) - This is the amount of time to wait before resending the consumer's last message. The default value is 60000 milliseconds (60 seconds). To customize the timeout interval, add this field, and set it as desired. 

### Resolving stuck conversations

When the retry flow described above is added, it is always attempted to re-engage the bot. Once the flow is fully completed, if the bot still fails to respond to the consumer, the conversation is identified as “stuck."

You can resolve stuck conversations by:

1. **Asking the consumer to resend their original query**: If you configure this, the conversation starts anew, and the consumer is sent, “I’m sorry. Something went wrong, so let’s start fresh. Could you restate your question in a few words?” You can change the bot message if desired.
2. **Transferring the conversation to a human agent**: To add support for this, you must specify the human agent skill ID that can better assist the consumer. 

These steps are disabled by default. You can add just one step (start anew only, or transfer only), or you can add both. The steps are tried in the order above.

{: .important}
For an optimal consumer experience, LivePerson recommends that you configure both steps.

Be aware that, in the case of Step 1, the consumer's response after starting the conversation anew might not match any intents or patterns in the bot; this will trigger the fallback response.

#### Adding support

Like with the retry flow, adding support for resolving stuck conversations involves [editing the bot's agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#edit-an-agent-connector) and adding various [custom configuration fields](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#custom-configuration-fields).

To configure Step 1 (start anew with the consumer's original query), use:

* [userRetryOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#userretryonstuckconversation) - Add this field, and set it to “true.”
* [userNotificationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#usernotificationmessageonstuckconversation) - The default message that’s sent to the consumer is “I’m sorry. Something went wrong, so let’s start fresh. Could you restate your question in a few words?” To change the message, add this field, and set it as desired.

To configure Step 2 (transfer to human agent), use:

* [escalateOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalateonstuckconversation) - Add this field, and set it to “true.”
* [escalationSkillIdOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationskillidonstuckconversation) - You must add this field, and set it to the appropriate human agent skill ID to which to transfer the conversation. Without this value, the transfer will not occur.
* [escalationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationmessageonstuckconversation) - The default message that’s sent to the consumer just before the transfer is, “I’m having some trouble. Let me connect you with an agent.” To change the message, add this field, and set it as desired.

### Tips

* If you have multiple agent connectors configured for a single bot due to traffic considerations, remember to update each agent connector accordingly.
