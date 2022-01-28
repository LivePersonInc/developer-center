---
pagename: Prevent Consumer Interruptions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-prevent-consumer-interruptions.html
indicator: both
---

### How bots prevent consumer interruptions

Sometimes, a bot needs some time to respond to the consumer's message. For example, to formulate its response, the bot might need time to make an API call to a third-party system, and this can require a bit of time. Because this is the case, by default, Conversation Builder bots prevent consumer interruptions as a best practice. This works as follows:

* While a bot is responding to a consumer’s message, the bot *ignores* additional messages from the consumer until the bot has finished responding or until the default timeout of 15 seconds passes, whichever happens first. This ensures the bot is given sufficient time to send its response.

* During this time when the bot is ignoring consumer messages, the bot doesn’t acknowledge any additional messages from the consumer. If you want, you can optionally configure a bot message to send in response, for example, "Please wait. I’m still responding to your last message. Thanks for your patience."

### Why this behavior is used

All Conversation Builder bots use this "ignore" behavior by default so that a bot is given sufficient time to send its response to the consumer. Without the behavior, if the consumer were to send another message while the bot was still responding to their last message, the new message would be processed for matching intents and patterns. As a result, the bot could jump the consumer to an upcoming question in the current dialog, to another dialog, or even send a fallback response. This leads to a poor consumer experience.

{: .important}
In practice, it should be rare that a bot takes 15 seconds to respond to the consumer. If you find that this is happening, evaluate and address other aspects of your solution, e.g., the speed of your API calls, and so on.

### Customizing the behavior

To customize the behavior:

1. [Add an environment](conversation-builder-environment-variables.html#add-environment-variables) that stores a set of environment variables for the bot. If the bot is already linked to an existing environment, skip this step and append the variables to the existing environment.
2. In the environment, add these three system environment variables:

    * **Name**: `system_handleIntermediateUserMessage`<br>
    **Description**: If true, the bot ignores consumer messages while the bot is responding to the consumer’s last message. Set this to "true."<br>
    **Type**: Boolean<br>
    **Default value**: true

    * **Name**: `system_intermediateBotResponseTimeout`<br>
    **Description**: This is the timeout period in milliseconds (e.g., 15000 = 15 seconds). Use this to specify how long the bot should ignore consumer messages.<br>
    **Type**: string<br>
    **Default value**: 15000

    * **Name**: `system_intermediateBotMessage`<br>
    **Description**: By default, while the bot ignores consumer messages, it doesn’t acknowledge them (i.e., this default value is BLANK_MESSAGE). Use this to specify a bot message to send in response to each interrupt message from the consumer, for example, “Please wait. I’m still responding to your last message. Thanks for your patience.”<br>
    **Type**: string<br>
    **Default value**: BLANK_MESSAGE

    {: .important}
    If you want to customize the timeout period or bot message, you must add all three variables, including the variable for enablement.

3. [Link the environment to the bot](conversation-builder-environment-variables.html#link-environment-variables-to-a-bot) if it isn’t already linked.

### Disabling the behavior

To ensure the best consumer experience, LivePerson recommends that you keep this behavior enabled. However, you can disable it as follows:

1. [Add an environment](conversation-builder-environment-variables.html#add-environment-variables) that stores a set of environment variables for the bot. If the bot is already linked to an existing environment, skip this step and append the variable to the existing environment.
2. In the environment, add just this one environment variable:

    * **Name**: `system_handleIntermediateUserMessage`<br>
    **Description**: If true, the bot ignores consumer messages while the bot is responding to the consumer’s last message. To disable the behavior, set this to “false.”  If false, every consumer message is processed by the bot for matching intents and patterns.<br>
    **Type**: Boolean<br>
    **Default value**: true

    {: .important}
    If you want to disable the behavior, you need only add the `system_handleIntermediateUserMessage` variable.

3. [Link the environment to the bot](conversation-builder-environment-variables.html#link-environment-variables-to-a-bot) if it isn’t already linked.

### FAQs

#### I see “BLANK_MESSAGE” when I test this behavior in the Preview tool. Is “BLANK_MESSAGE” sent to the consumer?

No. While you do see “BLANK_MESSAGE” in the [Preview tool](conversation-builder-testing-deployment-previewing.html), this is never sent to the consumer.

If you keep the default value of “BLANK_MESSAGE” for `system_intermediateBotMessage`, no message will be sent to the consumer. The bot will silently ignore consumer interrupt messages.

#### Previously, I enabled this behavior by manually adding the environment variables discussed above to an environment. Does my implementation still work?

Yes. In the November 2021 release, we changed things so that all bots prevent consumer interruptions by default.

In previous releases, the behavior was existing functionality that you could manually enable by adding the same environment variables described above: `system_handleIntermediateUserMessage`, `system_intermediateBotMessage`, and `system_intermediateBotResponseTimeout`. If this is your case, your implementation still works, and no change is required by you. The feature works as it did previously. Your custom values for the variables are simply used to control the behavior.