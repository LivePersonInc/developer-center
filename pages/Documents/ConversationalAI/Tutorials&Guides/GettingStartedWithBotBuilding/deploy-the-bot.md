---
pagename: Deploy the Bot
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Tutorials & Guides
subfoldername: Getting Started with Bot Building
permalink: tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html
indicator: both
---

In this tutorial, you walk through how to link your bot to Conversational Cloud.

<!--
### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/451127135" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>
-->

### Step 11: Create a bot user

In this step, you create a new user agent and skill for the bot, create a new engagement for web messaging, and connect the bot agent to the engagement.

1. Click on the User Management icon <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_user_mgmt.png"> along the left side of the Conversational Cloud page.

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/users_tab.png">

2. On the Users tab, click **+ Add user** in the lower-left corner.
3. Fill out the **Add user** form with the following user details:

    * **User type**: Bot
    * **Login name**: Getting Started Bot
    * **Email**: Your email address
    * **Nickname**: Getting Started
    * **Name**: Getting Started Bot
    * **Choose login method**: API key
    * **Api key**: Generate API key
    * **Assignment > Assign Profile**: Agent
    * **Skills**: Bot

    {: .important}
    By typing in the skill name **Bot**, a new skill with the name **Bot** is created.

4. Click **Save**.

### Step 12: Create an engagement

1. Click the Campaign Builder icon <img class="inlineimage"  style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_campaign_builder.png"> along the left side of the Conversational Cloud page.
2. Click **+ Add Campaign** in the lower-left corner.
3. On the page that appears, specify the following:

    * **Campaign name**: Enter "Getting Started."
    * **Campaign goal**: Click this, select "Interact with consumers" on the page that appears, and click **Done**.
    * **Engagement**: Click **+ Add engagement**. For the engagement source, select "Web." In the gallery that appears next, select a messaging template, and click **Next**. In the resulting Engagement Settings, select "Messaging" for the **Conversation type**. For **Routing**, select "Specific skill," and then select the "Bot" skill.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/engagement_settings.png">

4. Click **Next**.
5. In the Engagement Studio, click **Next**.
6. In the Engagement Window Library, click **Done**.
7. Click **Publish** in the upper-right corner. Then click **Publish** again to confirm the action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/engagement.png">

### Step 13: Add the agent connector

1. Navigate back to the Getting Started bot in Conversation Builder.
2. Click **Agent Connectors** in the menu bar in the upper-left corner.
3. Click **Add Agent Connector** in the upper-right corner.
4. In the Add Agent Connector dialog box, specify the following based on the bot user you created.

    * **Agent User ID**: Getting Started Bot
    * **Role**: Agent
    * **Conversation Type**: Messaging
    * **Deploy to**: Demo

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/add_agent_connector.png">

5. Click **Save**.
6. As a result, you will see a row on the Agent Connectors page listing your new bot agent. Select the **Start** button on that row to start the agent connector. This fully deploys the bot.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/agent_connector.png">

    It might take a few minutes for the connection to be established.

    To view more details about the connector, move your mouse over the "i" icon beside **Details**.

    {: .important}
    LivePerson recommends that, when you connect your bot to Conversational Cloud in a production environment, you deploy at least two Conversational Cloud agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

### Step 14: Test the deployment

1. In a browser, navigate to the [Messaging test page](https://developers.liveperson.com/web-messaging/emulator.html).

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/messaging_test_page.png">

2. Enter your account number and optionally a username (just your first name will do fine), and then click **Update**.
3. After a moment, you will see a Messaging "call to action," which corresponds to what we selected in the Campaign Builder. Click the Messaging call to action.
4. Start the bot by entering ‘hi’ or ‘hello.’
5. Test the bot's functionality as you would in Conversation Builder's Preview.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/getstartedtutorial/deploy_test.png">

    Congrats! You’ve successfully deployed your automation to a demo environment.

### What's next?

Continue on to the [next tutorial](tutorials-guides-getting-started-with-bot-building-escalate-to-an-agent.html) in the series.
