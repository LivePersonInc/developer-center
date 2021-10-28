---
pagename: Setting Up Bots
redirect_from:
  - maven-maven-assist-recommended-actions-for-bots.html
  - maven-ai-maven-assist-recommended-actions-for-automations.html
  - conversation-orchestrator-maven-assist-recommended-actions-for-automations.html
  - conversation-orchestrator-agent-assist-recommended-actions-for-automations.html
  - conversation-orchestrator-agent-assist-setting-up-bot-recommendations.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
subfoldername: Recommendation Sources
permalink: conversation-assist-recommendation-sources-setting-up-bots.html
indicator: messaging
---

{: .important}
Just getting started? Complete the [Using Conversation Assist](tutorials-guides-using-conversation-assist-overview.html) tutorial.

{: .important}
It takes up to 3 hours for changes in Conversation Assist configuration to take effect.

### Prerequisite knowledge
To set up Conversation Assist to recommend bots, you must have some prerequisite knowledge of other applications in the Conversational AI suite.

<!--
If you are building your bots using Conversation Builder
-->
You must be able to use [Conversation Builder](conversation-builder-bot-workspace.html) to:
* Create a bot
* Deploy a bot

If, for utterance matching, you’ll be using intents instead of patterns, you must also be able to use [Intent Manager](intent-manager-overview.html) to:
* Create a domain
* Create an intent

For exposure to these applications and tasks, we recommend that you complete the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial series.

### High-level workflow
1. In **Conversation Builder**, create the bots.
2. In **Conversational Cloud**, create the skills and bot users.
3. In **Conversation Builder**, deploy your bots.
4. In **Conversation Assist**, configure the bots for Conversation Assist.
5. In **Conversation Assist**, configure relevant settings.

### Step 1: Create the bots
[Access Conversation Builder](conversation-builder-bot-workspace.html#access-conversation-builder) and create at least one bot. For help, see the tutorial [here](tutorials-guides-getting-started-with-bot-building-overview.html). 

<!--
Conversation Assist supports bots created in:
* [Conversation Builder](tutorials-guides-getting-started-with-bot-building-overview.html)
* [Google DialogFlow](third-party-bots-google-dialogflow-cx.html)
* [IBM Watson](third-party-bots-ibm-watson-assistant.html)
-->

### Step 2: Create the skills and bot users
Configure **Conversational Cloud** by creating a skill and a bot user for each bot. This is illustrated in the Conversation Builder [Deploy the Bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) tutorial.

* Create the skill name and bot user name that make sense for your use case.
* Be sure to assign the bot skill to the bot user.

### Step 3: Deploy the bots
Use **Conversation Builder** to deploy the bots, so they can respond to conversations in Conversational Cloud. Deployment is illustrated in the Conversation Builder [Deploy the Bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) tutorial.

When you add the agent connector for the bot, be sure to select to allow Messaging conversations. And after adding the agent connector, be sure to start it to enable the bot to handle traffic.

<!--
Once Conversational Cloud is configured, the bots need to be deployed or connected to enable them to...

* To connect a DialogFlow or Watson bot to LivePerson’s Conversational Cloud, follow the [Third-Party Bots Getting Started Guide](third-party-bots-getting-started.html). Then follow the specific guide for [DialogFlow](third-party-bots-google-dialogflow-cx.html) or [IBM Watson](third-party-bots-ibm-watson-assistant.html). Be sure to press the play button in the bot dashboard to enable the bot.
-->

### Step 4: Configure the bots

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Recommendation Sources** from the menu at the top.
2. Click the **Bots** tab.

    Once you deploy and start a bot (i.e., in the system, it is a valid bot that can serve a conversation), it is automatically discovered by Conversation Assist. So you should see your bots here. For Conversation Builder bots, this includes all bots you've created (both public and private) and other public bots within your organization.

    <img width="700" src="img/agentassist/configbot1.png">

3. Verify that your bot is displayed. If it isn't, consult the troubleshooting information [here](conversation-assist-troubleshooting.html).

    Your bot doesn't have any assigned skills yet, so its **Status** is initially set to "Off." For the bot to be recommended in conversations, you must assign one or more skills **and** change the **Status**.

4. Assign one or more skills to the bot:
    1. Beside the bot, click the <img style="width:25px" src="img/agentassist/icon_managesource.png"> (Manage source) icon.
    2. In the **Manage recommendation source** dialog, change the **Status** to "ON," and add one or more skills.

        <img width="700" src="img/agentassist/configbot2.png">

    3. Click **Save**.
5. Repeat this process for additional bots as needed.

    After you assign at least one skill to each of the bots, the bots can be recommended in conversations that are routed to the same skills. In this manner, you can control on a skill-by-skill basis which bots are candidates for recommendation to human agents.

    In our example below, for the agent to be recommended the Ordering Bot, the agent must pick up a conversation that was routed to either the “Support” or “Ordering” skills. 

    <img width="700" src="img/agentassist/configbot3.png">

    Keep in mind that a conversation is routed to the skills assigned to the campaign’s engagement.

{: .important}
If you later delete a bot, the next time you access the **Bots** tab, the list is updated automatically.

### Step 5: Configure settings

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Settings**.
2. Configure the following relevant settings:
    * [Max # of recommendations](conversation-assist-recommendation-sources-configuring-settings.html#max--of-recommendations)
    * [Bot confidence](conversation-assist-recommendation-sources-configuring-settings.html#bot-confidence)
    * [Bot messages](conversation-assist-recommendation-sources-configuring-settings.html#bot-messages)

### Updating bot user credentials

When managing bots, if you select one or more, menu options for performing actions in bulk appear.

<img width="800" src="img/agentassist/update_user_creds.png">

Use the **Update bot user credentials** menu option whenever you change the credentials (authentication details) for the associated bot user in the **User Management** area of Conversational Cloud. This menu option refreshes Conversation Assist’s copy of those credentials so that, when necessary, they can be used behind the scenes to allow users with agent profiles to join bots to conversations. Whenever you change the bot user’s credentials in **User Management**, manually update the credentials here in Conversation Assist.