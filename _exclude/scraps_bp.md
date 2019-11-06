

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



### Keep the consumer in the current dialog

At branching points within a dialog, the consumer is asked to answer questions or make choices about how to proceed. Depending on the goal of the bot, you might need to ensure that the consumer's next utterance doesn't jump the consumer out into another dialog due to the NLU matching the utterance to another intent. Sometimes jumping to another dialog is desirable, but other times it isn't. For example, you might need the consumer to answer a specific question, so you need a way to keep the consumer in the current dialog until that's done.

You can help to keep the consumer in the current dialog by offering predefined options in a menu of buttons or predefined choices to a multiple-choice question. However, there's no guarantee that the consumer won't ignore these and type a response of their own. This means you need a way to handle any other response.

To solve this problem, you can create a second Response Match & Actions set....



