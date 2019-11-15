---
pagename: Advanced Use Cases
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
permalink: conversation-builder-advanced-use-cases.html
indicator: both
---

The techniques discussed below provide solutions to common use cases and conversation challenges.

### Keep the consumer in the current dialog

In a bot, at branching points within a dialog, the consumer is asked to answer questions or make choices about how to proceed. Depending on the goal of the bot, you might need to ensure that the consumer's next utterance doesn't jump the consumer out into another dialog due to the NLU matching the utterance to another intent. Sometimes jumping to another dialog is desirable, but other times it isn't. For example, you might need the consumer to answer a specific question, so you need a way to keep the consumer in the current dialog until that's done.

You can help to keep the consumer in the current dialog by offering predefined options in a menu of buttons or predefined choices to a multiple-choice question. However, there's no guarantee that the consumer won't ignore these and type a response of their own. This means you need a way to handle any other response.

To solve this problem, you can create a "catch all other utterances" condition that directs the flow as you need, either to repeat the same question or to redirect the flow to somewhere else within the bot.

**To implement this solution**

1. In the interaction, create a *final* (last) **Response Match & Actions** set.
2. Under **Conditions**, add the pattern " * ", which is the asterisk wildcard character. This will catch all utterances other than those caught by earlier conditions.
3. Under **Next Step**, select the next step. In our example below, we've chosen to repeat the same email question.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/keepUserInDialog1.png">

This yields a conversation that looks like this:

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/keepUserInDialog2.png">

### Block consumer interruptions

One bot scenario that is typical is to have the bot present several text interactions containing information, with small delays between each interaction (to aid accessibility issues). After the interactions are sent in sequence, the bot then asks the consumer a question to decide the next step in the conversation flow.

The problem that can occur in this scenario is that there's nothing to prevent the consumer from typing an utterance while the bot is sending the sequence of messages. When this happens, the utterance is processed for matching intents and patterns, which means it can "jump" the consumer to an upcoming question in the current dialog, to another dialog, or result in a fallback response.

To solve this problem where the consumer interrupts the bot with "intermediate" messages, you can use a set of specific environment variables that work together to catch and ignore all consumer utterances until the next question is reached. 

<img class="fancyimage" style="width:300px" src="img/ConvoBuilder/bp_ignoreMessages1.png">

**To implement this solution**

1. [Add an environment](conversation-builder-environment-variables.html#add-environment-variables) that stores a set of environment variables for the bot. If the bot is already linked to an existing environment, skip this step and append the variables to the existing environment.
2. In the environment, add the following system [environment variables](conversation-builder-environment-variables.html):
    * `system_handleIntermediateUserMessage` - Set this to true.
    * `system_intermediateBotMessage` - Specify a value.
    * `system_intermediateBotResponseTimeout` - Specify a value.
    
    | Environment variable name | Description | Type | Example | 
    |----|----|----|----|
    | system_handleIntermediateUserMessage | Enables the behavior to catch and ignore "interrupt" messages by the consumer. | Boolean | true |
    | system_intermediateBotMessage | Optionally used in conjunction with `system_handleIntermediateUserMessage`. This is the message to send to the consumer if they send an utterance while their messages are blocked. | string | Please wait...we are still responding to your last message. |
    | system_intermediateBotResponseTimeout | Used in conjunction with `system_handleIntermediateUserMessage`. This is the timeout period in milliseconds (e.g., 15000 = 15 seconds). This value determines how long the bot will wait to send a message before moving on to sending the next message. In other words, if the wait for a message is too long, this instructs the bot to skip it after the specified amount of time. | string | 15000 |

3. [Link the environment to the bot](conversation-builder-environment-variables.html#link-environment-variables-to-a-bot) if it isn't already linked.
