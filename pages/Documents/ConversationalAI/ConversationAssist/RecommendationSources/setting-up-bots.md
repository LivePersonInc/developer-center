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

### Supported bot types
Conversation Assist supports bots created in:
* Conversation Builder
* Google Dialogflow ES
* IBM Watson Assistant v1 and v2

### Prerequisite knowledge
To set up Conversation Assist to recommend bots, you need some prerequisite knowledge of other applications in the Conversational AI suite.

If you intend to build your bots using Conversation Builder, you must be able to use [Conversation Builder](conversation-builder-overview.html) to create and deploy a bot. And if, for utterance matching, you’ll be using intents instead of patterns, you must also be able to use [Intent Manager](intent-manager-overview.html) to create a domain and the intents. For exposure to these applications and tasks, we recommend that you complete the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial series.

If you intend to build your bots using a third-party application, see [here](third-party-bots-getting-started.html) for more information.

### High-level workflow
1. In **Conversation Builder** or the third-party application, create the bots.
2. In **Conversational Cloud**, create the skills and bot users.
3. In **Conversation Builder**, deploy the Conversation Builder bots. Or, in **Third-Party Bots**, connect the third-party bots.
4. In **Conversation Assist**, configure the bots for Conversation Assist.
5. In **Conversation Assist**, configure relevant settings.

### Step 1: Create the bots
[Access Conversation Builder](conversation-builder-overview.html#access-conversation-builder) and create at least one bot. For help, see the tutorial [here](tutorials-guides-getting-started-with-bot-building-overview.html). 

For help with creating a third-party bot, see [here](third-party-bots-getting-started.html) for info.

### Step 2: Create the bot users
Configure Conversational Cloud by creating a bot user for each bot. This is illustrated in the Conversation Assist [tutorial](tutorials-guides-using-conversation-assist-overview.html). Specify a bot user name that make sense for your use case.

### Step 3: Deploy the bots
If you've created Conversation Builder bots, then use Conversation Builder to deploy the bots. This is illustrated in the Conversation Builder [Deploy the Bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) tutorial. When you add the agent connector for the bot, be sure to select to allow Messaging conversations. And after adding the agent connector, be sure to start it to enable the bot to handle traffic.

To connect a Google Dialogflow or IBM Watson bot to LivePerson’s Conversational Cloud, follow the [Getting Started Guide](third-party-bots-getting-started.html) for third-party bots. Then follow the specific guide for the vendor you're using. Be sure to press the play button in the bot dashboard to enable the bot.

### Step 4: Configure the bots

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Recommendation Sources** from the menu at the top.
2. Click the **Bots** tab.
3. Click <img class="inlineimage" style="width:25px" src="img/agentassist/icon_refresh.png"> over on the right. This fetches the available bots. Available bots include those you’ve deployed and started (i.e., they’re valid bots that can serve a conversation). You should see all of the bots that you’ve created (both public and private) and other public bots within your organization.

    <img width="700" src="img/agentassist/configbot1.png">

4. Verify that your bot is displayed. If it isn't, consult the troubleshooting information [here](conversation-assist-troubleshooting.html).

    Your bot doesn't have any assigned skills yet, so its **Status** is initially set to "Off." For the bot to be recommended in conversations, you must assign one or more skills **and** change the **Status**.

5. Assign one or more skills to the bot:
    1. Beside the bot, click the <img style="width:25px" src="img/agentassist/icon_managesource.png"> (Manage source) icon.
    2. In the **Manage recommendation source** dialog, change the **Status** to "ON," and add one or more skills.

        <img width="700" src="img/agentassist/configbot2.png">

    3. Click **Save**.
6. Repeat this process for additional bots as needed.

    After you assign at least one skill to each of the bots, the bots can be recommended in conversations that are routed to the same skills. In this manner, you can control on a skill-by-skill basis which bots are candidates for recommendation to human agents.

    In our example below, for the agent to be recommended the Ordering Bot, the agent must pick up a conversation that was routed to either the “Support” or “Ordering” skills. 

    <img width="700" src="img/agentassist/configbot3.png">

    Keep in mind that a conversation is routed to the skills assigned to the campaign’s engagement.

{: .important}
If you later delete a bot, you’ll need to manually refresh the list of discovered bots in Conversation Assist in order to see the bot removed from the list.

### Step 5: Configure settings

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Settings**.
2. Configure the following relevant settings:
    * [Max # of recommendations](conversation-assist-recommendation-sources-configuring-settings.html#max--of-recommendations)
    * [Bot confidence](conversation-assist-recommendation-sources-configuring-settings.html#bot-confidence)
    * [Bot messages](conversation-assist-recommendation-sources-configuring-settings.html#bot-messages)
