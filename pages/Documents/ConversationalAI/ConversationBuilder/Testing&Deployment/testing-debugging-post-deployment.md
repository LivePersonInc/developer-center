---
pagename: Testing & Debugging Post-Deployment
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Testing & Deployment
permalink: conversation-builder-testing-deployment-testing-debugging-post-deployment.html
indicator: both
---

### Introduction
As you design and implement a bot, you can use the [Preview](conversation-builder-testing-deployment-previewing.html) and [Bot Logs](conversation-builder-testing-deployment-debugging.html) tools, respectively, to preview the conversational experience and to debug issues. These tools assist you with early testing and debugging, so you can verify the conversational flow is working as expected as you build the bot. Notably, the tools don’t require that you deploy an agent connector for the bot because the conversation doesn’t go through Conversational Cloud. The conversation only flows between the tool and the underlying bot server.

In contrast, the **Conversation Tester** tool is designed for testing and debugging after deployment. You can use the tool to:

* Test the end-to-end flow after you have finished building and [deploying a bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html)
* Debug a deployed bot

The Conversation Tester lets you quickly start a conversation and view both the conversation and the debug log side by side.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ct_main.png">

With the Conversation Tester, the conversation travels from the Conversational Cloud Web channel, to Conversational Cloud, to the agent connector, to the bot server, and back again. In short, there is end-to-end testing of the entire flow over the Web.

{: .important}
Currently, you can’t use the Conversation Tester to test post-conversation survey bots.

### Prerequisites

To use the Conversation Tester, the entire pipeline for messaging must be in place and ready:

* In Conversational Cloud, there must exist a bot user (an agent) that is assigned a skill.
* In Conversation Builder, the bot must have a deployed agent connector that's assigned to the bot user, and the connector must be online.

### Access the Conversation Tester

You can access the Conversation Tester in two ways:

* From within a custom bot, click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_3_dot_menu.png"> on the menu bar, and select **Conversation Tester**.

    This option is available only when the bot has an agent connector (regardless of its status). When you want to test a specific bot, this method is quicker because it automatically starts a conversation with that bot, routing it to the first, associated skill that is found.

* From the bot dashboard, click **Conversation Tester** on the menu bar in the upper-left corner.

    When you want to perform end-to-end testing (of the engagement, skill, bot agent, and bot), this method is recommended because you'll be starting the conversation by specifying the engagement to use, not the bot to use.

    Access via this method does also allow you to select a skill by bot, or by skill directly.

### Start the conversation
Conversational Cloud routes conversations based on skill, so to start a conversation, you need to specify the skill to which to route it.

If you access the Conversation Tester from within a bot, the tool automatically starts a conversation with that bot, routing it to the first, associated skill that is found.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ct_conv_start.png">

If you access the Conversation Tester from outside of a bot, you'll need to explicitly select the skill and manually start the conversation.

**To select the skill and start the conversation**

1. Click **New Conversation** in the upper-right corner.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ct_selectskill1.png">

2. Select the skill. You do this in one of three ways:
 
    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ct_selectskill2.png">

    * **Select skill**: Select the skill. The skill list displays all the skills available within your organization. If you know the skill name to route to, this one-step method is fastest.

    * **Select skill by bot**: Select the custom bot, then the skill. For a bot to appear in the bot list, it must be deployed and online. Once you select the bot, the skill list is filtered to display only the skills assigned to the associated bot agent user. This two-step method is preferable when you want to route the conversation to a specific bot, but you aren't sure of the skill name.

    * **Select skill by campaign/engagement**: Select the campaign to use. This filters the list of engagements from which you must then select the engagement. The skill tied to the engagement will be used to start the conversation. This method is preferable when you want to perform end-to-end testing of the entire Conversational Cloud configuration: engagement, skill, bot agent, and bot.

3. Click **Start Conversation**.

### Start the debugger

Click the debug icon in the lower-left corner of the messaging panel.

<img class="fancyimage" style="width:200px" src="img/ConvoBuilder/ct_debug_conv.png">

This starts the debugger:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ct_debugger_start.png">
 
### Use the messaging panel

#### Send messages
Once the conversation is started, you can send messages in the messaging panel to direct the conversational flow. This works much like [Preview](conversation-builder-testing-deployment-previewing.html).

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/ct_send_msgs.png">

#### Close the conversation
To close the current conversation, click the icon at the bottom of the messaging panel.

<img class="fancyimage" style="width:200px" src="img/ConvoBuilder/ct_close_conv.png">

#### Reset the bot
To reset the bot, click the icon at the bottom of the messaging panel. This deletes the bot session, so you can start the conversation flow anew.

<img class="fancyimage" style="width:200px" src="img/ConvoBuilder/ct_reset_bot.png">

### Use the debug panel

#### Log debug messages
Keep the **Auto update** setting on if you want to continuously fetch the latest logs based on the conversation.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/ct_debug_auto_update.png">

If you don't need the log, you can turn **Auto update** off, which keeps the connection clean. In this case, you can manually refresh the log by clicking <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ct_refresh_debug_log.png">.

#### Show and hide debug messages
The debug log can become verbose and long, so it can be helpful to show and hide specific types of messages. Click <img class="inlineimage" style="width:30px" src="img/ConvoBuilder/icon_ct_filter_debug_msgs.png"> and use the available filters to do this.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/ct_debug_filter.png">

#### Search the debug log
To search the debug log for a partial word, word, or phrase, enter it in the search box that’s provided.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/ct_debug_log_search.png">

#### Copy the user ID
In scenarios where you’re troubleshooting an issue in collaboration with LivePerson Support, you might be asked to provide the user ID for the conversation. There are two ways you can obtain the ID:

* Click the **Copy user ID** button that’s displayed in the messaging window when you start the debugger.
* Click the **Copy user ID** icon at the bottom of the debugging panel. This too is displayed once you start the debugger.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ct_copy_user_id.png">

### Print the most recent user message

To aid in debugging, you can use the `printDebugMessage` scripting function in the code areas of an interaction to print messages -- for example, the consumer's most recent message -- to the debug log. For more on this function, see [here](conversation-builder-scripting-functions-log-debug.html#print-debug-message).

### Events glossary

Refer to the events glossary [here](conversation-builder-testing-deployment-debugging.html#events-glossary) to assist you as you debug.