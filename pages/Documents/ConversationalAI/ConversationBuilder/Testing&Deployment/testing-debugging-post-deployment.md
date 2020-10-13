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
As you design and implement a bot, you can use the [Preview](conversation-builder-testing-deployment-previewing.html) and [Bot Logs](conversation-builder-testing-deployment-debugging.html) tools, respectively, to preview the conversational experience and to debug any issues found. These tools assist you with early testing and debugging, so you can verify the conversational flow is working as you expect. Notably, the tools don’t require that you deploy an agent connector for the bot, as the conversation doesn’t go through Conversational Cloud. It only flows from the tool to the bot server and back.

In contrast, the Conversation Tester is designed for *post-deployment* testing and debugging. You can use it to:

* Test the end-to-end flow after you have deployed a bot
* Debug a deployed bot

Using the Conversation Tester, you can quickly start a conversation and view both the conversation and the debug log side-by-side.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/conv_tester_example.png">

When you use the Conversation Tester, the conversation travels from the Conversational Cloud channel, to Conversational Cloud, to the agent connector, to the bot server, and back. In short, there is end-to-end testing of the entire flow over the Web.

{: .important}
Sometimes bots have logic that depends on data that is retrieved from the campaign used in the conversation. For example, the bot might use the engagement ID to direct the conversational flow to a particular dialog. The Conversation Tester doesn’t use a campaign, so it can’t be used for end-to-end testing of this kind of logic.

### Prerequisites

To be able to use the Conversation Tester, the entire pipeline for the messaging flow must be in place and available:

* In Conversational Cloud, there exists a bot user (an agent) that is assigned a skill.
* In Conversation Builder, the bot has a deployed (online) agent connector for the bot user.

### Access the Conversation Tester
You can access the Conversation Tester in two ways:

* From the bot dashboard, click **Conversation Tester** on the menu bar in the upper-left corner.
* Open the bot, click <img style="width:30px" src="img/ConvoBuilder/icon_menu_bar.png"> on the menu bar, and select **Conversation Tester**. This option is available only when the bot has an agent connector.

### Start the conversation

If you access the Conversation Tester from within a bot, it automatically starts the conversation, routing it to the first, associated skill that is found.

However, if you open the tool from outside of a bot, i.e., from menu bar that's above the bot dashboard, you'll need to select a bot and skill, or a skill, in order to start the conversation:

1. In the conversation panel on the right, click **Select Entry Point**.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_start1.png">

2. Select the bot and skill to which to route the conversation. Or, select the skill to which to route the conversation.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/conv_tester_start2.png">

    **Select Skill by Bot**: For a bot to appear in the bot list, it must be deployed (with an associated bot user that has at least one skill) and online. The skill list displays the skills assigned to the bot user for the selected bot.

    **Select Skill**: This list displays all the skills available within your organization.

3. Click **Start Conversation**.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/conv_tester_start3.png">

    This starts the conversation.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_start4.png">

### Start the debugger

1. In the conversation panel on the right, enter `display userid`.
2. Click **Run Debugger**. Or, copy the user ID, and enter it into the debugger in the left panel.

### Use the conversation panel

#### Sending messages

Once the conversation is started, you can send messages in the conversation panel to direct the conversation flow. This works a lot like [Preview](conversation-builder-testing-deployment-previewing.html).

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_messages.png">

#### Monitoring statuses

As you use the Conversation Tester, you can monitor two statuses:

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_statuses.png">

* **Connection**: This is the status of the Web socket.
* **Conversation**: This is the status of the Messaging conversation.

#### Performing actions

In the conversation panel, you can perform several different actions:

* **Clear Messages**: Clears the conversation panel of all messages.
* **Resume Conversation**: Resumes the conversation.
* **Scroll to Bottom**: 
* **Reset Bot Session**: Resets the session. 
* **Mark Resolved**: Closes the conversation.

### Use the debugger
#### Automatically update the debug log

#### Show and hide debug messages

The debug log can become quite long, so it can be helpful to show and hide specific types of debug messages. Click <img style="width:25px" src="img/ConvoBuilder/conv_tester_filters_icon.png"> and use the available filters to do this.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_filters.png">

#### Display the debug log for a conversation

By default, the debugger panel in the Conversation Tester displays the debug log for the conversation that’s occurring in the conversation panel. However, you can display the log for any conversation that occurred in a supported channel. Simply enter the user ID in the field provided.

<img class="fancyimage" style="width:500px" src="img/ConvoBuilder/conv_tester_enter_id.png">
