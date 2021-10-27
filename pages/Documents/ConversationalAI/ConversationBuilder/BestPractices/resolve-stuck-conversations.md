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

### Understanding the default "retry" flow

By default, in a conversation, when a bot fails to respond to the consumer within 60 seconds, the consumer’s last message is resent to the bot one time. This retry flow is always attempted when needed.

Optionally, you can customize the retry flow by changing the timeout interval and the number of retries. You do this by adding the [retryMessageInterval](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#retrymessageinterval) and [messageResendMaxRetries](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#messageresendmaxretries) fields, respectively, to the bot's agent connector. LivePerson recommends you set the number of retries to 3 or fewer. You cannot set the number of retries to zero to skip the flow.

Once the retry flow is fully completed, if the bot still fails to respond to the consumer, the conversation is identified as “stuck." There are a few strategies you can use to resolve stuck conversations; these are described below.

### Resolving stuck conversations

You can resolve stuck conversations by:

1. **Asking the consumer to resend their original query**: If you configure this, the conversation starts anew, and the consumer is sent, “I’m sorry. Something went wrong, so let’s start fresh. Could you restate your question in a few words?” You can change the bot message if desired.
2. **Transferring the conversation to a human agent**: To add support for this, you must specify the human agent skill ID that can better assist the consumer. 

You can add just one step (start anew only, or transfer only), or you can add both. Both steps are optional and disabled by default. The steps are tried in the order indicated above.

{: .important}
For an optimal consumer experience, LivePerson recommends that you configure both steps.<br><br>Additionally, be aware that, in the case of Step 1, the consumer's response after starting the conversation anew might not match any intents or patterns in the bot; this will trigger the fallback response.

**To add support for resolving stuck conversations**, you [edit the bot's agent connector](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#edit-an-agent-connector) and add various [custom configuration fields](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#custom-configuration-fields).

To configure Step 1 (start anew with the consumer's original query), use:

* [userRetryOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#userretryonstuckconversation) - Add this field, and set it to “true.”
* [userNotificationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#usernotificationmessageonstuckconversation) - The default message that’s sent to the consumer is “I’m sorry. Something went wrong, so let’s start fresh. Could you restate your question in a few words?” To change the message, add this field, and set it as desired.

To configure Step 2 (transfer to human agent), use:

* [escalateOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalateonstuckconversation) - Add this field, and set it to “true.”
* [escalationSkillIdOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationskillidonstuckconversation) - You must add this field, and set it to the appropriate human agent skill ID to which to transfer the conversation. Without this value, the transfer will fail.
* [escalationMessageOnStuckConversation](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html#escalationmessageonstuckconversation) - The default message that’s sent to the consumer just before the transfer is, “I’m having some trouble. Let me connect you with an agent.” To change the message, add this field, and set it as desired.

### Tips

* If you have multiple agent connectors configured for a single bot due to traffic considerations, remember to update each agent connector accordingly.
