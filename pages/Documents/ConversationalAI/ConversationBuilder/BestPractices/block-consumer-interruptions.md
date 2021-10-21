---
pagename: Block Consumer Interruptions
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-block-consumer-interruptions.html
indicator: both
---

### Why bots block consumer interrupt messages

Sometimes, a bot needs some time to respond to the consumer. For example, a scenario that’s common is to have the bot send several text interactions containing information, with small delays between each interaction to aid accessibility issues. After the interactions are sent in sequence, the bot then asks the consumer a question to decide the next step in the conversation flow.

The problem that can occur in such scenarios is that there’s nothing to prevent the consumer from sending another message while the bot is still responding to their last message. When this happens, if the bot were to process the new message for matching intents and patterns, it could “jump” the consumer to an upcoming question in the current dialog, to another dialog, or even result in a fallback response.

Conversation Builder bots address this issue as follows: By default, while the bot is responding to the consumer, the bot blocks—i.e., it catches and ignores—all consumer messages. This is done until the next question is reached or until 15 seconds passes, whichever happens first. During this time, the bot doesn’t acknowledge the consumer’s “interrupt” messages.

{: .important}
In practice, it should be rare that a bot takes 15 seconds to respond to the consumer. If you find that this is happening, evaluate and address other aspects of your solution, e.g., the speed of your API calls, and so on.

### Customizing or disabling the blocking behavior

To prevent the consumer’s context from changing inadvertently, LivePerson recommends that you keep the blocking behavior enabled. You can customize it in a few ways; you can:

* Customize how long the bot should block consumer messages.
* Specify an acknowledgement message to send to the consumer while their messages are being blocked. For example, you might want the bot to respond to each “interrupt” message with, “Please wait. I’m still responding to your last message. Thanks for your patience.”

You can also disable the blocking behavior if desired. If you do this, every consumer message is processed by the bot for matching intents and patterns.

**To customize or disable the blocking behavior**

1. [Add an environment](conversation-builder-environment-variables.html#add-environment-variables) that stores a set of environment variables for the bot. If the bot is already linked to an existing environment, skip this step and append the variables to the existing environment.
2. In the environment, add these three system environment variables:

    * **Name**: `system_handleIntermediateUserMessage`<br>
    **Description**: If true, the bot blocks consumer messages while the bot is responding to the consumer’s last message. To disable the blocking behavior, set this to “false.”<br>
    **Type**: Boolean<br>
    **Default value**: true

    * **Name**: `system_intermediateBotResponseTimeout`<br>
    **Description**: This is the timeout period in milliseconds (e.g., 15000 = 15 seconds). Use this to specify how long the bot should block consumer messages.<br>
    **Type**: string<br>
    **Default value**: 15000

    * **Name**: `system_intermediateBotMessage`<br>
    **Description**: By default, while the bot blocks consumer messages, it doesn’t acknowledge  them (i.e., this default value is BLANK_MESSAGE). Use this to specify a bot message to send in response to each consumer “interrupt” message, for example, “Please wait. I’m still responding to your last message. Thanks for your patience.”<br>
    **Type**: string<br>
    **Default value**: BLANK_MESSAGE

    {: .important}
    If you want to customize the timeout period or bot message, add all three variables. In this case of customization, you can use the default values or specify your own values, but not a mix of both.<br><br>
    If you want to disable the blocking behavior, you need only add the system_handleIntermediateUserMessage variable.

3. [Link the environment to the bot](conversation-builder-environment-variables.html#link-environment-variables-to-a-bot) if it isn’t already linked.

### FAQs

#### Do these environment variables impact other processes?

Yes, if you've implemented a Web View integration, be aware that these environment variables also work together to block (catch and ignore) system messages sent via a Web View integration. For information on overriding this so that Web View messages are still processed by the bot, see [here](conversation-builder-integrations-web-view-integration-api.html#system-environment-variables) in the Web View integration documentation.
