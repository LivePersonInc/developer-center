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
As you design and implement a bot, you can use the [Preview](conversation-builder-testing-deployment-previewing.html) and [Bot Logs](conversation-builder-testing-deployment-debugging.html) tools, respectively, to preview the conversational experience and to debug issues. These tools assist you with early testing and debugging, so you can verify the conversational flow is working as expected as you build the bot. Notably, the tools don’t require that you deploy an agent connector for the bot because the conversation doesn’t go through Conversational Cloud. The conversation only flows from the tool to the underlying bot server and back.

In contrast, the Conversation Tester tool is designed for *post-deployment* testing and debugging. You can use the tool to:

* Test the end-to-end flow after you have finished building and [deploying](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html) a bot
* Debug a deployed bot

The Conversation Tester lets you quickly start a conversation and view both the conversation and the debug log side by side.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/conv_tester_example.png">

With the Conversation Tester, the conversation travels from the Conversational Cloud channel, to Conversational Cloud, to the agent connector, to the bot server, and back. In short, there is end-to-end testing of the entire flow over the Web.

{: .important}
Sometimes bots have logic that depends on data that is retrieved from the campaign used in the conversation. For example, the bot might use the engagement ID to direct the conversational flow to a particular dialog. The Conversation Tester doesn’t use a campaign, so it can’t be used for end-to-end testing of this kind of logic.

#### Testing post-conversation survey bots
You can't use the Conversation Tester to directly initiate testing of a [post-conversation survey bot](conversation-builder-bots-post-conversation-survey-bots.html). To test a survey bot, use the tool to start a conversation with a custom bot that triggers the survey bot, and bring that conversation to a close. This triggers the survey conversation as expected.

### Prerequisites
The Conversation Tester requires that the entire pipeline for messaging is in place and ready:

* In Conversational Cloud, there must exist a bot user (an agent) that is assigned a skill.
* In Conversation Builder, the bot must have a deployed agent connector that's assigned to the bot user, and the agent connector must be online.

### Access the Conversation Tester
You can access the Conversation Tester in two ways:

* From the bot dashboard, click **Conversation Tester** on the menu bar in the upper-left corner.
* Open a bot, click <img style="width:30px" src="img/ConvoBuilder/icon_menu_bar.png"> on the menu bar, and select **Conversation Tester**. This option is available only when the bot has an agent connector (regardless of its status).

### Start the conversation

Conversational Cloud routes conversations based on skill, so to start a conversation, you need to specify the skill to which to route it.

If you access the Conversation Tester from within a bot -- and the pipeline for messaging is configured correctly (see *Prerequisites* above) -- the tool automatically starts a conversation with that bot, routing it to the first, associated skill that is found.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_start5.png">

If you access the Conversation Tester from outside of a bot, if you want to change the skill in use, or if automatic selection of the skill fails for some reason, you'll need to explicitly select the skill and manually start the conversation:

1. In the conversation panel on the right, click **Select Entry Point**.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_start1.png">

2. Select the skill to which to route the conversation. You can do this in one of two ways:

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/conv_tester_start2.png">

    **Select Skill by Bot**: Select the bot, then the skill. For a bot to appear in the bot list, it must be deployed and online. Once you select the bot, the skill list is filtered (narrowed) to display only the skills assigned to the bot's bot agent user. This two-step method is preferable when you want to route the conversation to a specific bot, but you aren't sure of the associated skill name.

    **Select Skill**: Select only the skill. The skill list displays all the skills available within your organization. If you know the skill name to route to, this one-step method is faster.

    {: .important}
    It's rare to have multiple bots associated with the same skill. However, if this is the case, be aware that the tool will start a conversation with the first bot that is found.

3. Click **Start Conversation**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/conv_tester_start3.png">

    This starts the conversation.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_start4.png">

### Start the debugger

1. In the conversation panel on the right, enter `display userid` or `/d`.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_debug_start.png">

2. Do either of the following:
    * Click **Run Debugger**. This automatically enters the user ID for the conversation into the debugger panel on the left, and it starts the debugger.
    * Copy the user ID, and enter it into the debugger panel on the left. This starts the debugger.

### Use the conversation panel

#### Send messages

Once the conversation is started, you can send messages in the conversation panel to direct the conversational flow. This works like [Preview](conversation-builder-testing-deployment-previewing.html).

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_messages.png">

#### Monitor statuses

As you use the Conversation Tester, you can monitor two statuses:

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_statuses.png">

* **Connection**: This is the status of the Web socket, either "Open" or "Closed." Typically, this status is "Open" in the Production environment. But if a problem exists, the status will be "Closed." Try reloading the page in this case. A problem with the Web socket suggests there might be an issue with the LivePerson environment.
* **Conversation**: This is the status of the conversation, either "Open" or "Closed." If you access the Conversation Tester from within a bot, but the system can't automatically select a skill to which to route the conversation, this will be "Closed." Try manually selecting a skill in this case. Additionally, this status changes based on your actions in the tool, i.e., **Mark Resolved** closes the conversation, and **Resume Conversation** opens a new conversation.

#### Perform actions
In the conversation panel, you can perform several actions:

* **Clear Messages**: Clears the conversation panel of all messages.
* **Resume Conversation**: Opens a new conversation.
* **Scroll to Bottom**: Scrolls the display to the bottom of the conversation window.
* **Reset Bot Session**: Resets the bot session. 
* **Mark Resolved**: Closes the conversation.

#### Use a different tab
Take advantage of the ability to open the Conversation Tester in a new tab. This lets you use the tool beside other important windows.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/conv_tester_new_tab.png">

### Use the debugger
#### Log debug messages
Keep the **Auto Update** setting on if you want to continuously fetch the latest logs based on the conversation. If you don't need the logging, you can disable this, which keeps the connection clean.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_logging.png">

#### Show and hide debug messages

The debug log can become verbose and long, so it can be helpful to show and hide specific types of messages. Click <img style="width:25px" src="img/ConvoBuilder/conv_tester_filters_icon.png"> and use the available filters to do this.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_filters.png">

#### Display the debug log for a conversation

The debugger panel in the Conversation Tester can display the log for any conversation that occurred in a supported channel. Simply enter the user ID in the field provided.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_enter_id.png">

To obtain the user ID, enter "display userid" in the channel (Facebook, etc.).

<img style="width:250px" src="img/ConvoBuilder/debug_displayID.png">
