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

In this tutorial, you walk through how to link your bot to Conversational Cloud, ending with an integration that transfers to a human agent.

### Watch the video

<div style="display: block; position: relative; max-width: 70%;margin:0 auto;"><div style="padding-top: 56.25%;"><iframe src="https://player.vimeo.com/video/451127135" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" style="width: 100%; height: 100%; position: absolute; top: 10px; bottom: 0px; right: 0px; left: 0px;"></iframe></div></div>
<br>

### Step 13: Create a bot user

In this step, you create a new user agent and skill for the bot, create a new engagement for web messaging, and connect our bot agent to the engagement.

1. Click on the User Management icon <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_user_mgmt.png"> along the left side of the Conversational Cloud page. 

    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/getstartedtutorial/users_tab.png">

2. From the Users tab, select the **+ Add user** button from the bottom left of the page.
3. Fill out the **Add user** form with the following user details:

    * **User type**: Bot
    * **Login name**: Getting Started Bot
    * **Email**: Your email address
    * **Nickname**: Getting Started
    * **Name**: Getting Started Bot
    * **Choose login method**: API key
    * **Api key**: Generate API key
    * **Assign Profile**: Agent
    * **Skills**: bot
	
    {: .important}
    By typing in the skill name **bot**, a new skill with the name **bot** will be created.

4. Click **Save**.

### Step 14: Create an engagement

1. Click on the **Campaign Builder** icon <img style="width:25px" src="img/ConvoBuilder/getstartedtutorial/icon_campaign_builder.png"> along the left side of the Conversational Cloud page. 
2. Click **+ Add Campaign** at the bottom of the page.
3. On the page that appears, specify the following:

    * **Campaign name**: Enter "Getting Started"
    * **Campaign goal**: Click this, select "Interact with consumers" on the page that appears, and click **Done**.
    * **Engagement**: Click **+ Add engagement**. For the engagement source, select "Web." In the gallery that appears next, select a messaging template, and click **Next**. In the resulting Engagement Settings, select "Messaging" for the **Conversation type**. For **Routing**, select "Specific skill," and then select the "Bot" skill.

    <img class="fancyimage" style="width:600px" src="img/ConvoBuilder/getstartedtutorial/engagement_settings.png">

4. Click **Next**.
5. In the Engagement Studio, click **Next**.
6. In the Engagement Window Library, click **Done**.
7. Click **Publish** in the upper-right corner. Then click **Publish** again to confirm the action.

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/getstartedtutorial/engagement.png">

