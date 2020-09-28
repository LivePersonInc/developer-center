---
pagename: Bot Groups & Collaboration
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Bot Groups & Other Techniques
permalink: tutorials-guides-bot-groups-other-techniques-bot-groups-collaboration.html
indicator: both
---

### Introduction

This guide is a continuation of our Getting Started tutorial and expands on the implementations built within. If you are following along, please make sure you’ve completed that tutorial first.

Here at LivePerson, we continue to iterate and develop new features to simplify the development process and to provide tools to reinforce best practices in bot building. This guide provides an introduction to some of these features that have been deployed more recently, demonstrating cutting-edge techniques in bot development for all channels. 

The Bot Groups & Other Techniques series includes five tutorials that build on one another:

* Bot Groups & Collaboration (this tutorial)
* [Complex Conditions](tutorials-guides-bot-groups-other-techniques-complex-conditions.html)
* [Auto Escalation](tutorials-guides-bot-groups-other-techniques-auto-escalation.html)
* [Knowledge Bases](tutorials-guides-bot-groups-other-techniques-knowledge-bases.html)
* [Meta Intents](tutorials-guides-bot-groups-other-techniques-meta-intents.html)

### "Many Bots" design approach

Historically, all of our bot capabilities would be included into a single, monolithic bot design. This bot would house all of our intent driven dialogs, our knowledge bases, fallback dialogs, and escalations. 

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/single_bot_design.png">

While this approach is certainly appropriate for small scale use cases, it results in difficulty in navigating and developing future iterations of your automation. As the dialogs stack up and become more complex for development teams to approach, scaling our automations becomes a real concern and can be difficult to manage. With this in mind, LivePerson has implemented functionality for a multiple bot approach, with each bot being responsible for its own functionality.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/many_bots_design.png">

With the addition of Bot Groups and Bot Group Collaboration, we’re able to create multiple bots which work together seamlessly to assist our users. Collaboration allows conversations to be passed around to each bot as needed, ensuring that each user has access to the automation they need to satisfy their intent. An added benefit of the many bot approach is apparent during development. Multiple developers are able to work on the same account, each focusing on a separate bot without the concern of conflicts. 

### Breaking up the monolith

Upon finishing the Getting Started tutorial, you will have a single bot that handles welcoming the user, escalating to a human agent, and processing several intents. As new functionality is introduced, the size and scope of our single bot can become difficult to manage. As breaking a single bot into multiple bots is no small task, it is best to do so as early in your development process as possible. 

We’ll use three separate bots as part of our many bot solution:

* **Greeter Bot** which will serve to provide our existing Welcome, Goodbye, and Fallback dialogs.
* **Order Bot** which will contain our Billing Question and Order Status dialogs.
* **Small Talk Bot** which will contain our Agent Escalation, as well as Small Talk functionality which we will develop later on in this guide.

### Step 1: Create the Greeter bot

As opposed to creating these new bots from scratch, we will copy our Getting Started bot into three new bots and strip away the unnecessary functionality from each.

1. From the Getting Started bot in Conversation Builder, click on the three dot icon <img style="width:25px" src="img/ConvoBuilder/advtutorial/icon_three_dot_ellipsis_vert.png"> in the menu bar and navigate to **Bot Settings**.
2. Expand the **More Settings** menu and scroll towards the bottom until you see the **Export Bot** option. Click the download icon <img style="width:25px" src="img/ConvoBuilder/advtutorial/icon_download.png"> to generate a JSON-formatted copy of your Getting Started bot.
3. Back out of the Getting Started bot and from the Conversation Builder menu, select the **Import Bot** button.
4. Select and open the downloaded JSON as your import, which will fully create a new copy of your bot, bringing you into its dialog editor. 
5. Navigate to this automation’s **Bot Settings** menu and update the name to Greeter Bot. 
6. Prior to saving, click the **Bot Group** dropdown and select the **Create Group** option and provide the following values in the Create Bot Group form:
    * **Bot group name**: Many bots
    * **Collaboration**: Turn on
    * **Transfer message**: BLANK_MESSAGE
    
    Click **Create** to exit the Create Bot Group form and click **Save** from the Bot Settings menu.

7. Lastly, delete the dialogs that Greeter Bot is not responsible for. From the **Dialogs** menu, click the three-dot icons next to your Billing Question, Escalation, Disambiguation, and Order Status dialogs and select **Delete Dialog**. Confirm **Yes** for each.

    <img class="fancyimage" style="width:250px" src="img/ConvoBuilder/advtutorial/dialog_menu.png">

    Once you’ve deleted the unnecessary dialogs, back out of the Greeter Bot into the Conversation Builder menu page. Two bots should now be visible, your original Getting Started Bot as well as a new Greeter Bot. Note that the Greeter Bot is nested under the "Many bot" group.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/bots.png">

### Step 2: Create the Order bot

For the Order bot, follow the same process that you used to create the Greeter bot. 

1. From the Conversation Builder menu, select the **Import Bot** button.
2. Select and open the downloaded Getting Started JSON as your import, which will fully create a new copy of your bot, bringing you into its dialog editor. 
3. Navigate to this automation’s **Bot Settings** menu and update the name to "Order Bot." 
4. Prior to saving, click the **Bot Group** dropdown and notice there is now a selection option for your "Many bots" group. Select that option and click **Save** from the Bot Settings menu.
5. Delete the dialogs that Order Bot is not responsible for. From the **Dialogs** menu, click the three-dot icons next to your Welcome, Goodbye, Fallback, and Escalation dialogs and select **Delete Dialog**. Confirm **Yes** for each.
6. Prior to exiting back to the Conversation Builder menu, verify that your Billing Question and Order Status dialogs are still set to be triggered using their associated intents. 

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/billing_question_dialog.png">

    As long as you are still in the same account, this link should still remain active. If you have created a new account for your "Many bots" group, you will need to export and import the previously created domain into this new account. 

    Back in the Conversation Builder menu, ensure that your Order Bot is nested underneath your "Many bots" group along with the Greeter Bot.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/bots_2.png">

### Step 3: Create the Small Talk Bot

As much of the functionality of our Small Talk Bot has yet to be constructed, we will create this bot from scratch and associate it with our "Many bots" group.

1. From the Conversation Builder menu, select the **New Bot** button from the upper right corner.
2. Select a new **Custom Bot** and in the resulting Custom Bot form, fill in the following:
    * **Name**: Small Talk Bot
    * **Bot Language**: English - United States
    * **Bot Group**: Many bots

	Click **Create Bot** when finished.
3. At this time, this bot will only serve to provide Escalation functionality. Delete both the Welcome and Fallback dialogs that are provided on bot creation. 
4. Select **Add Dialog** from the lower left corner and give our dialog a name of Escalation.
5. Complete this dialog following the same directions as was done in our Getting Started guide, using the patterns `agent`, `representative`, and `human` to trigger the dialog.
6. Create a new **Agent Transfer** interaction, modifying the text to read “Transferring to a human agent…”. In the settings menu for this interaction, make sure to enter the corresponding **Human** skill ID for your user profile. Please refer to the Getting Started guide for details on this process.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/agent_transfer_interaction.png">

    When complete, back out of the Small Talk bot to the Conversation Builder menu. You should see this newly created bot nested under the "Many Bots" group along with the Greeter and Order bots.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/bots_3.png">

