---
pagename: Useful Solutions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-useful-solutions.html
indicator: both
---

The techniques discussed below provide solutions to common conversation challenges.

### Transfer to bot and offer consistent greeting

There are times when an agent hands off a conversation to a bot to perform an automated process. When the conversation reaches the bot, the bot attempts to match the most recent message in the conversation with an intent in one of its dialogs.

The problem that can occur in this scenario is that there's no guarantee  that the hand-off is always consistent. The agent might adhere to best practices and send a predefined message to let the consumer know they are about to be transferred to a bot. But this might not always be the case. Moreover, there's nothing that prevents the consumer from acknowledging the imminent transfer with something like, "Ok," before the agent completes the transfer. If that were to happen, the first message that the bot would receive would be "Ok," which would likely trigger the Fallback dialog. As a result, the consumer's first experience conversing with the bot begins poorly.

To solve this problem, you can offer a consistent greeting when the bot receives a transfer from a human agent, but the last utterance doesn't match a known intent or pattern in a dialog. You do this by adding some custom logic as pre-process code in the bot's fallback dialog and the "business" dialog.

**To implement this solution**

1. In the *first* interaction in the Fallback dialog, access the **[Pre-Process Code](conversation-builder-interactions-details-code.html)** section, and add the following code.

    ```javascript
    var transferAcknowledged = botContext.getBotVariable("transferAcknowledged");
    if (!transferAcknowledged || transferAcknowledged !== "yes") {
  botContext.setTriggerNextMessage("paybill_flow_start");
    }
    ```

    "paybill_flow_start" is the starter interaction that we want to jump to in our example VIP dialog. Replace it with the name of the interaction in your intent flow that you want to consistently jump to. Ensure the interaction name is specified *exactly*.

    This code checks for a `transferAcknowledged` bot variable. If the variable doesn't exist or isn't set to "yes," it redirects the conversation flow to whatever is your substitute for the "paybill_flow_start" interaction.

2. Go to your substitute for the "paybill_flow_start" interaction, and, in the **[Pre-Process Code](conversation-builder-interactions-details-code.html)** section, add the following code:

    ```javascript
    botContext.setBotVariable('transferAcknowledged','yes',true,false);
    ```

    This code sets a bot variable to indicate that the bot has responded to the transfer.

Let's see how this solution works with a few examples.

#### Transfer example 1: Consumer's last utterance is unmatched

Examine the following conversation flow where the consumer's last utterance to the human agent is unmatched:

<img style="width:600px" src="img/ConvoBuilder/bp_consistentGreeting2.png">

In the conversation above, the Fallback dialog is triggered due to the consumer's last utterance. Before the dialog is processed, it first checks the `transferAcknowledged` bot variable. Since the variable is set to "no", it immediately redirects the consumer to the VIP dialog, which begins. 

Because the first interaction, our "paybill_flow_start" interaction, sets the `transferAcknowledged` bot variable to "yes", subsequent, unmatched utterances likewise trigger the Fallback dialog. However, the fallback message is sent instead.

<img style="width:600px" src="img/ConvoBuilder/bp_consistentGreeting3.png">

In other words, *redirection only happens once.*

#### Transfer example 2: Consumer's last utterance is matched

Examine the following conversation flow where the consumer's last utterance to the human agent is matched:

<img style="width:600px" src="img/ConvoBuilder/bp_consistentGreeting1.png">

It's important to note that the unmatched utterance *doesn't* return the consumer to the start of VIP dialog flow. Instead, the Fallback dialog begins. This is because the `transferAcknowledged` bot variable was set by the VIP dialog, then checked by the Fallback dialog.


### Block consumer interruptions

One bot scenario that is typical is to have the bot present several text interactions containing information, with small delays between each interaction (to aid accessibility issues). After the interactions are sent in sequence, the bot then asks the consumer a question to decide the next step in the conversation flow.

The problem that can occur in this scenario is that there's nothing to prevent the consumer from typing an utterance while the bot is sending the sequence of messages. When this happens, the utterance is processed for matching intents and patterns, which means it can "jump" the consumer to an upcoming question in the current dialog, to another dialog, or result in a fallback response.

To solve this problem where the consumer interrupts the bot with "intermediate" messages, you can use a set of specific environment variables that work together to catch and ignore all consumer utterances until the next question is reached. 

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/bp_ignoreMessages1.png">

**To implement this solution**

1. [Add an environment](conversation-builder-environment-variables.html#add-environment-variables) that stores a set of environment variables for the bot. If the bot is already linked to an existing environment, skip this step and append the variables to the existing environment.
2. In the environment, add the following system environment variables:
    * `system_handleIntermediateUserMessage`
    * `system_intermediateBotMessage`
    * `system_intermediateBotResponseTimeout`
 
    For details on these environment variables, see [here](conversation-builder-environment-variables.html#system-environment-variables). 

3. [Link the environment to the bot](conversation-builder-environment-variables.html#link-environment-variables-to-a-bot) if it isn't already linked.
