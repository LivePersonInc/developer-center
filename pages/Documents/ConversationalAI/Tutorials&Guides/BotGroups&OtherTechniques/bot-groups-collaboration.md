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

### "Many Bots" design approach

Historically, all of our bot capabilities would be included in a single, monolithic bot design. This bot would house all of our intent-driven dialogs, knowledge bases, the fallback dialog, and escalations. 

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/single_bot_design.png">

While this approach is certainly appropriate for small-scale use cases, it results in difficulty in navigating and developing future iterations of your bot. As the dialogs stack up and become more complex for development teams to approach, scaling bots becomes a real concern and can be difficult to manage. With this in mind, LivePerson has implemented functionality for a multiple bot approach, with each bot being responsible for its own functionality.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/many_bots_design.png">

With the addition of Bot Groups and Bot Group Collaboration, we’re able to create multiple bots that work together seamlessly to assist users. Collaboration allows conversations to be passed around to each bot as needed, ensuring that each user has access to the bot they need to satisfy their intent. An added benefit of the "many bot" approach is apparent during development. Multiple developers are able to work on the same account, each focusing on a separate bot without the concern of conflicts.

### Breaking up the monolith

After completing the [Getting Started tutorial](tutorials-guides-getting-started-with-bot-building-overview.html), you have a single bot that handles welcoming the user, processing several intents, and escalating to a human agent. As new functionality is introduced, the size and scope of this single bot can become difficult to manage. Breaking a single bot into multiple bots is no small task, so it is best to do so as early in your development process as possible. 

We’ll use three separate bots as part of our "many bot" solution:

* A **Greeter bot** that will serve to provide our existing Welcome, Goodbye, and Fallback dialogs.
* An **Order bot** that will contain our Billing Question and Order Status dialogs.
* A **Small Talk bot** that will contain our Agent Escalation and some Small Talk functionality that we'll develop later in this tutorial.

### Step 1: Create the Greeter bot

Instead of creating these new bots from scratch, we will copy our Getting Started bot into three new bots and strip away the unnecessary functionality from each.

1. From the Getting Started bot in Conversation Builder, click on the three-dot icon <img style="width:25px" src="img/ConvoBuilder/advtutorial/icon_three_dot_ellipsis_vert.png"> in the menu bar, and select **Bot Settings**.
2. Expand the **More Settings** menu, and scroll towards the bottom until you see the **Export Bot** option. Click the download icon <img style="width:25px" src="img/ConvoBuilder/advtutorial/icon_download.png"> to generate a JSON-formatted copy of the Getting Started bot.
3. Back out of the Getting Started bot to the dashboard of bots. Click **Import Bot** in the upper-right corner.
4. Select and open the downloaded JSON as your import file, which will fully create a new copy of your bot, bringing you into its dialog editor. 
5. Navigate to this bot’s **Bot Settings**, and update the name to "Greeter Bot." 
6. Prior to saving, click the **Bot Group** dropdown and select the **Create Group** option and provide the following values in the Create Bot Group form:
    * **Bot group name**: Many bots
    * **Collaboration**: Turn on
    * **Transfer message**: BLANK_MESSAGE
    
    Click **Create** to exit the Create Bot Group form, and click **Save** from the Bot Settings menu.

7. Lastly, delete the dialogs that Greeter Bot is not responsible for. From the **Dialogs** menu, click the three-dot icon next to the Billing Question dialog, and select **Delete Dialog**. Confirm **Yes**. Repeat this process to also delete the Escalation, Disambiguation and Order Status dialogs.

    <img class="fancyimage" style="width:250px" src="img/ConvoBuilder/advtutorial/dialog_menu.png">

    Once you’ve deleted the unnecessary dialogs, back out of the Greeter Bot and return to the Conversation Builder dashboard of bots. Two bots should now be visible: your original Getting Started Bot and the new Greeter Bot. Note that the Greeter Bot is nested under the "Many bot" group.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/bots.png">

### Step 2: Create the Order bot

For the Order bot, follow the same process that you used to create the Greeter bot: 

1. From the Conversation Builder dashboard of bots, click **Import Bot** in the upper-right corner.
2. Select and open the downloaded Getting Started JSON as your import file, which will fully create a new copy of your bot, bringing you into its dialog editor. 
3. Navigate to this bot's **Bot Settings**, and update the name to "Order Bot." 
4. Prior to saving, click the **Bot Group** dropdown, and notice there is now an option for the "Many bots" group. Select that option, and click **Save**.
5. Delete the dialogs that Order Bot is not responsible for, i.e., the Welcome, Goodbye, Fallback, and Escalation dialogs.
6. Verify that the Billing Question and Order Status dialogs are still set to be triggered using their associated intents. 

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/billing_question_dialog.png">

    As long as you are still in the same account, this link remains active. If you have created a new account for your "Many bots" group, you will need to export and import the previously created domain into the new account. 

    Back in the Conversation Builder dashboard of bots, ensure that your Order Bot is nested underneath your "Many bots" group along with the Greeter Bot.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/bots_2.png">

### Step 3: Create the Small Talk Bot

As much of the functionality of the Small Talk Bot has yet to be constructed, you will create this bot from scratch and associate it with the "Many bots" group.

1. From the Conversation Builder dashboard of bots, click **New Bot** in the upper-right corner.
2. Select a new **Custom Bot**, click **Next**, and in the resulting Custom Bot form, fill in the following:
    * **Name**: Small Talk Bot
    * **Bot Language**: English - United States
    * **Bot Group**: Many bots

	Click **Create Bot** when finished.
3. At this time, this bot will only serve to provide Escalation functionality, so delete both the Welcome and Fallback dialogs that are provided on bot creation. 
4. Click **Add Dialog** in the lower-left corner and give our dialog a name of "Escalation."
5. Complete the Dialog Starter interaction using the process that you used in the Getting Started tutorial, i.e., using the patterns `agent`, `representative`, and `human` to trigger the dialog.

    **Tip**: A quick and easy way to add these patterns is to click the **Library** link, and select the "Help" set of patterns.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/advtutorial/library_link1.png">
    <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/advtutorial/library_link2.png">

6. Create a new **Agent Transfer** interaction, modifying the text to read “Transferring to a human agent…”. In the Interaction Settings for this interaction, make sure to enter the corresponding **Human** skill ID for your user profile. Please refer to the Getting Started tutorial for details on this process.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/agent_transfer_interaction.png">

    When complete, back out of the Small Talk bot to the dashboard of bots. You should see the newly created bot nested under the "Many bots" group along with the Greeter and Order bots.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/bots_3.png">

### Step 4: Deploying the "Many Bots" group

Due to the nature of the Many Bots solution, each bot in our bot group will need to be deployed with an agent connector in order to see the collaboration in action. To do so, new bot agents will need to be created and assigned to each bot in our group. 

1. Navigate to the **User Management** section of the Conversational Cloud by clicking the **Manage users and skills** icon <img style="width:25px" src="img/ConvoBuilder/advtutorial/icon_user_mgmt.png"> on the left.
2. In the lower-left corner, click **+ Add user**.
3. Fill out the **User details** form with the following information:
    * **User type**: Bot
    * **Login name**: Greeter Bot
    * **Email**: Your email address
    * **Nickname**: Greeter Bot
    * **Name**: Greeter Bot

    <br>
    In the **Add login** method section, complete the following:
    * **Choose login method**: API key
    * **Api key**: Generate API Key

    <br>
    In the **Assignment** section:
    * **Assign profile**: Agent
    * **Skills**: Greeter

    Unless you have previously created your Greeter skill, you will need to type it into the **Skills** field to create it. 

	Click **Save**.

4. Repeat the previous steps for both our Order Status and Small Talk bot agents. All fields will remain the same except where you’ll need to replace “Greeter” with either "Order Status" or "Small Talk."

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/users_list.png">

5. Once you’ve created all of your bot user agents, navigate to Campaign Builder, and select the Getting Started campaign. We want to ensure that the Greeter Bot is the one that picks up all new conversations, so edit the existing engagement to point to the Greeter Skill.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/engagement.png">

    Click **Edit** in the Engagement section. In the Routing section of the Engagement Settings, set the specific skill to "Greeter."

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/engagement_2.png">

    When finished, click **Publish** in the lower-right corner.

6. Once published, navigate back to Conversation Builder. The bot agents that have been created now need to be connected to their associated bots. Within each of the 3 bots, click **Agent Connectors** on the menu, click **Add Agent Connector**, and complete the **Add Agent Connector** form as follows:
    * **Agent User ID**: The bot agent that corresponds to this bot
    * **Role**: Agent
    * **Conversation Type**: Messaging
    * **Deploy to**: Demo

	Click the **> Start** button for each.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/advtutorial/start.png">

7. Once all agent connectors have been added, navigate to the [bot demo deployment site](https://vx-lp.github.io/v2/lpwm/) and test as you did with the previous Getting Started bot. Saying “Hello” results in your Greeter bot responding.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/bot_greeter.png">

    Next, type “I have a question about my bill”. This results in the Order Bot taking over and directing to the appropriate intent.
    
    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/bot_order.png">

    Follow this by typing “agent” to see the Small Talk bot handle the escalation to a human agent.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/advtutorial/bot_smalltalk.png">

    Seamlessly, the different bots that have been created will enter and exit the conversation to meet the needs of your users. When the Greeter bot is unable to handle the “Billing Question” intent, it looks to its collaborator bots to see whether they are able to assist. Note that the bot name displayed will change based on which bot is currently working with our users.

    With our bots now properly split up and working in tandem to handle a user's needs, there are additional improvements and best practices that we can implement to ensure proper handling and understanding of our users' intents.

### What's next?

Continue on to the [next tutorial](tutorials-guides-bot-groups-other-techniques-complex-conditions.html) in the series.
