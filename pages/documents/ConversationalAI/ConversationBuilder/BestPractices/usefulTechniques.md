---
pagename: Useful Techniques
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-useful-techniques.html
indicator: both
---

The techniques discussed below meet good design requirements and solve common conversation issues.

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
