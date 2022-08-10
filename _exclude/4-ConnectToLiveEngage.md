---
pagename: 4 - Connect to LiveEngage
redirect_from: conversation-builder-getting-started-getting-started-part-4.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Getting Started
permalink: conversation-builder-getting-started-4-connect-to-liveengage.html
indicator: both
---

In this tutorial, you walk through how to link your bot to LiveEngage, ending with an integration that transfers to a human agent.

### Step 10: Configure LiveEngage

In this step, you create two user agents, one for the bot and one for the human that will be receiving the inbound transfers (for human "escalation"). Each user agent will have an assigned skill, which you'll also create.

#### Create the skills

1. [Log in](https://authentication.liveperson.net/login.html) to your LiveEngage account. 
2. Click the Users and Skills icon <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_usersAndSkills.png">, and then click the **Skills** tab.
3. In the upper-right corner, click **Action → Add**.
4. On the Add Skill page, specify the following:
    * **Name**: Enter "Bot."
    * **Description**: Enter "Bot skill."
5. Click **Save**.

    The Bot skill will be the default skill connected to the bot agent.
6. Repeat steps 3–5 to create another skill named "Human." To enable the Save button, you'll need to provide a description here too; anything is suitable.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_1.png">

7. In the list of skills, select the Bot skill, and then note the URL that's displayed in the browser's address bar. Write down the skill ID in the URL, as it will be needed later. The skill ID is the number at the end of the URL: https://z1.le.liveperson.net/a/accountNumber/#um!skills/**skillID**.
8. Repeat the preceding step to copy down the skill ID for the Human skill.

#### Create the LiveEngage agents

In addition to the skills, you also need user agents, one for the bot and one for the agent that will be receiving the inbound transfers (for human escalation).

1. Still in LiveEngage, click the **Users** tab.
2. In the upper-right corner, click **Action → Add**.
3. On the Add User page, specify the following:
    * **User type**: Set this to "Bot." If you don't see this field, contact your LivePerson representative to enable this for you.
    * **Login name**: Enter any value, e.g., "bot_user."
    * **Email**: Enter any value, such as your own email address.
    * **Nickname**: Enter any value, e.g., "Billing Bot."
    * **Name**: Enter any value, e.g., "Billing Bot."
    * **Choose login method**: Select "API key," and then, for **Api key**, select "Generate API key." This fills in the keys automatically. If you don't see the "API key" option, contact your LivePerson representative to enable this for you.
    * **Assignment**: Click this field, and select "Agent" from the list that appears.
    * **Max no. live chats**: Select "Unlimited."
    * **Skills**: Click this field, and select "Bot" from the list that appears. This is the default bot skill. **Do NOT add additional skills.**
    <img class="fancyimage" style="width:400px" src="img/ConvoBuilder/helloworld/confLE_2.png">
4. Click **Save**.
5. Repeat steps 2–4 to create a human agent, and assign the Human skill to the human agent. Alternatively, assign the Human skill to your own user account, and make sure your user is set to Available (so you can take chats), not Away or Offline.

#### Assign the bot skill to an engagement

You will test this connection with a standard web chat engagement, so now you create a campaign and an engagement that routes to the new Bot skill.

1. Click the Campaigns and Engagements icon <img style="width:30px" src="img/ConvoBuilder/helloworld/icon_le_campaigns.png">.
2. In the upper-right corner, click **Action → Add**.
3. On the page that appears, specify the following:
    * **Campaign name**: Enter "Bot test."
    * **Campaign goal**: Click this, select "Interact with consumers" on the page that appears, and click **Done**.
    * **Engagement**: Click **+ Add engagement**. For the **engagement source**, select "Web." In the gallery that appears next, select a chat template, and click **Next**. In the Engagement Settings that appear next, select "Live chat" for the **Conversation type**. For **Routing**, select "Specific skill," and then select the "Bot" skill.

    <img style="width:400px" src="img/ConvoBuilder/helloworld/confLE_5.png">
4. Click **Next**. 
5. In the Engagement Studio, click **Next**. 
6. In the Engagement Window Library, click **Done**.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/confLE_6.png">
7. Click **Publish** in the upper-right corner.

### Step 11: Set up the transfer from bot to human

In this step, you set up an [integration](conversation-builder-integrations-liveperson-agent-escalation-integrations.html#add-a-liveperson-agent-escalation) to transfer the user to a human agent in LiveEngage. This is called an "escalation."

1. Return to Conversation Builder, and open the bot.
2. Click **Integrations** on the menu bar in the upper-right corner.
3. Click **+ Add Integration** in the lower-left corner.
4. On the Add Integration page, create a new API integration with the following parameters.

    * **Integration Name**: Escalation (or similar)
    * **Response Data Variable Name**: Escalation (or similar)
    * **Integration Type**: LivePerson Agent Escalation
    * **Agent Skill Name**: Enter the name of the human skill that you created; this should be "Human" unless you used a different name.
    * **Agent Skill Id**: Enter the ID number of the human skill that you created; you wrote this down earlier.

        (While you set the skill name and ID to that for a specific skill, you could also set these values using variables for a more dynamic experience.)

    * **Message to User**: Enter a message to be sent to the user prior to escalation, something like, "Hold on while I transfer you to an agent…" Alternatively, if you don't want to send a message, enter "BLANK_MESSAGE".

5. Click **Save**.

6. Return to the dialog editor by clicking **Dialogs** on the menu bar in the upper-right corner.

7. Create a new regular dialog named "Agent Handoff" (or similar).

8. In the default User Says interaction that's provided, enter "I want to speak to an agent" as the sample user statement.

9. Open the User Says interaction's **Interaction Details**, and click the **Settings** tab.

10. Add the following pattern: `*(agent|representative|help|human)*`. Click **Save**.

11. Add an Integration interaction, and select "Escalation" from the drop-down list.

    <img style="width:500px" src="img/ConvoBuilder/helloworld/selectescalation.png">
12. Still in the interaction, click the vertical ellipsis icon <img style="width:25px" src="img/ConvoBuilder/helloworld/icon_ellipsis_vertical.png">, and then click **Save**.

### Step 12: Deploy the bot to LiveEngage

In this step, you use Conversation Builder to connect your bot to the bot agent you just created and get the connection running in the Demo environment.

#### Add the agent connector

1. Still in the bot in Conversation Builder, click **Agent Connectors** on the menu bar in the upper-right corner.
2. Click **New Bot Connector** in the upper-right corner, just under the menu bar.
3. In the Add Agent Connector dialog box, specify the following based on the bot user you created.
    - **Agent User ID**: Select the user ID for the bot user agent.
    - **Role**: Select "Agent."
    - **Conversation Type**: Select "Chat."
    - **Deploy to**: Select "Demo." The Demo environment is a testing environment, and the Production environment is the live environment. It's always a best practice to test your bot in the Demo environment first, before deploying it to the Production environment.
4. Click **Save**.
    
    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/helloworld/agentConnectorsPage1.png">

{: .important}
LivePerson recommends that, when you connect your bot to LiveEngage in a production environment, you deploy at least two LiveEngage agent connectors for a single bot. This is so the second can serve to support failover if the first goes down. Additionally, if you have traffic considerations, you might want to deploy three or more. A good baseline is no more than 50 concurrent conversations per agent connector (e.g., deploy 4 connectors to support 200 concurrent conversations).

#### Start the agent connector

- Click the **Start** button to start the agent connector. This fully deploys the bot.
    <img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/helloworld/agentConnectorsPage2.png">
    It might take a few minutes for the connection to be established.

    To view more details about the connector, move your mouse over the **i** icon beside **Details**.
    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/helloworld/agentConnectorsPage3.png">

### Step 13: Test the bot

{: .important}
In this step, you'll be testing with Chat, so you'll be using [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]), adding your account number to the URL. When you test with Messaging for Web, you can use [this test page](https://vx-lp.github.io/v2/lpwm/).

1. Be sure you are online as a Human agent in LiveEngage.

2. In a browser, navigate to [this test page](https://livepersoninc.github.io/visitor-page/?siteid=[your account number]). Note the URL.

    <img class="fancyimage" style="width:650px" src="img/ConvoBuilder/helloworld/testpage1.png">

3. In the URL, replace the placeholder with your site ID, i.e., your account number.

   <img class="fancyimage" style="width:650px" src="img/ConvoBuilder/helloworld/testpage2.png">

4. On the test page, click the Live Chat button.

    This connects you with the bot in the Bot skill.

5. Enter a message to test the bot, and press Enter.

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/conversation1.png">

6. Trigger the Agent Handoff dialog by entering, "I want to speak to an agent."

    <img class="fancyimage" style="width:300px" src="img/ConvoBuilder/helloworld/conversation2.png">

    The conversation should be transferred to you as long as you assigned your test agent with the appropriate skill.

6. Return to Conversation Builder. On the left sidebar, note the message indicator on the "Agent workspace for Chat" icon.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/helloworld/messageindicator.png">

7. Click the icon to enter the agent workspace in LiveEngage, and then select the connection in the table. Click **Accept** in the lower-left corner.

   <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/helloworld/webvisitors_accept.png">

    As an agent, when you accept the inbound transfer, you should see something like this below in your LiveEngage dashboard. You can now take part in live chat.

    <img class="fancyimage" style="width:900px" src="img/ConvoBuilder/helloworld/confLE_19.png">
