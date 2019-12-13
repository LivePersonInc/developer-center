
## A pre-launch checklist

### Test the "unhappy" paths

Try and break the flows you have built. Be as disruptive as possible. 
From within each dialog, enter gibberish messages to see how fallback occurs.
Test whether you are catching unexpected answers to questions. If needed, use the * pattern to [keep the consumer in the current dialog](conversation-builder-advanced-use-cases.html#keep-the-consumer-in-the-current-dialog).

### Avoid mismatched intents for unhandled use cases

If there are known phrases or patterns for sensitive consumer intents that you aren't handling in the bot on Day 1, it's recommended that you create "placeholder" dialogs that catch these specific patterns and immediately transfer to a human agent (i.e., [LivePerson agent escalation]((conversation-builder-integrations-liveperson-agent-escalation-integrations.html))).  Doing this prevents the fallback response or a mismatched intent tied to another dialog.

For example, "my partner has passed away" relates to bereavement, and in this case the consumer should be transferred to a live agent immediately. For this, create a dialog with a User Says interaction that listens for the pattern `*passed away*` and other variations, and have this immediately transfer to a human agent.

### Prepare for unmatched intents

Add a dialog that recognizes that the consumer wants help with a popular intent or question that the bot currently can't handle. Build out the dialog steps to explain this and gracefully bring in an agent via transfer, i.e., [LivePerson agent escalation](conversation-builder-integrations-liveperson-agent-escalation-integrations.html).

Later, during the retraining downtime of the bot on Day 1, create a new intent from the unmatched intents data, and connect the new intent to this new dialog. You can then quickly go live with this change in round 2 of the bot on Day 1. 

### Prepare for service outages

Consider adding one or more dialogs that refer to incidents regarding specific service outages that might occur while the bot is live. Hook these up to common phrases that consumers might ask in the event of an outage.

If an incident occurs, you can then quickly enable these dialogs on-the-fly to help deflect/contain the consumers who flood the channel during outages.

All this can be built before Day 1 and tested based on the knowledge you have about how you communicate service outages when consumers reach agents in those moments.

THIS BELOW IS ANOTHER ADVANCED USE CASE - ON HOLD - JON IS THINKING MORE ON THIS ONE

### Transfer to bot and offer consistent greeting

There are times when an agent hands off a conversation to a bot to perform an automated process. When the conversation reaches the bot, the bot attempts to match the most recent message in the conversation with an intent in one of its dialogs.

The problem that can occur in this scenario is that there's no guarantee  that the hand-off is always consistent. The agent might adhere to best practices and send a predefined message to let the consumer know they are about to be transferred to a bot. But this might not always be the case. Moreover, there's nothing that prevents the consumer from acknowledging the imminent transfer with something like, "Ok," before the agent completes the transfer. If that were to happen, the first message that the bot would receive would be "Ok," which would likely trigger the Fallback dialog. As a result, the consumer's first experience conversing with the bot begins poorly.

To solve this problem, you can offer a consistent greeting when the bot receives a transfer from a human agent, but the last utterance doesn't match a known intent or pattern in a dialog. You do this by adding some custom logic as pre-process code in the bot's fallback dialog and the "business" dialog.

**To implement this solution**

1. In the *first* interaction in the Fallback dialog, access the **[Pre-Process Code](conversation-builder-interactions-details-code.html)** section of the **Interaction Details**, and add the following code.

    ```javascript
    var transferAcknowledged = botContext.getBotVariable("transferAcknowledged");
    if (!transferAcknowledged || transferAcknowledged !== "yes") {
  botContext.setTriggerNextMessage("paybill_flow_start");
    }
    ```

    "paybill_flow_start" is our example starter interaction that we want to jump to in our example VIP dialog. Replace it with the name of the interaction in your intent flow that you want to consistently jump to. Ensure the interaction name is specified *exactly*.

    This code checks for a `transferAcknowledged` bot variable. If the variable isn't found or isn't set to "yes," it redirects the conversation flow to whatever is your substitute for the "paybill_flow_start" interaction.

2. Go to your substitute for the "paybill_flow_start" interaction, and, in the **[Pre-Process Code](conversation-builder-interactions-details-code.html)** section of the **Interaction Details**, add the following code:

    ```javascript
    botContext.setBotVariable('transferAcknowledged','yes',true,false);
    ```

    This code sets a bot variable to indicate that the bot has responded to the transfer.

Let's see how this solution works with a few examples.

#### Transfer example 1: Consumer's last utterance is unmatched

Examine the following conversation flow where the consumer's last utterance to the human agent is unmatched:

<img style="width:600px" src="img/ConvoBuilder/bp_consistentGreeting2.png">

In the conversation above, the Fallback dialog is triggered due to the consumer's last utterance to the human agent, which is checked by the bot. Before the Fallback dialog is processed, it first checks the `transferAcknowledged` bot variable. Since the variable is set to "no", it immediately redirects the consumer to the VIP dialog, which begins with the paybill_flow_start interaction. 

Because the first interaction, our "paybill_flow_start" interaction, sets the `transferAcknowledged` bot variable to "yes", subsequent, unmatched utterances likewise trigger the Fallback dialog. However, the Fallback dialog flow begins instead.

<img style="width:600px" src="img/ConvoBuilder/bp_consistentGreeting3.png">

The conversation flow never gets stuck in the redirect loop from the Fallback dialog to the VIP dialog.

#### Transfer example 2: Consumer's last utterance is matched

Examine the following conversation flow where the consumer's last utterance to the human agent is matched:

<img style="width:600px" src="img/ConvoBuilder/bp_consistentGreeting1.png">

The matched utterance takes the flow straight to the VIP dialog, which begins.

The subsequent, unmatched utterance above doesn't return the consumer to the start of VIP dialog flow. Instead, the Fallback dialog begins.

Here again, the conversation flow never gets stuck in the redirect loop from the Fallback dialog to the VIP dialog.
