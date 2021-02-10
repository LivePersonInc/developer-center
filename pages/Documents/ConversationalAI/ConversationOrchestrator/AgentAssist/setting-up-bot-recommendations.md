---
pagename: Setting Up Bot Recommendations
redirect_from:
  - maven-maven-assist-recommended-actions-for-bots.html
  - maven-ai-maven-assist-recommended-actions-for-automations.html
  - conversation-orchestrator-maven-assist-recommended-actions-for-automations.html
  - conversation-orchestrator-agent-assist-recommended-actions-for-automations.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Agent Assist
permalink: conversation-orchestrator-agent-assist-setting-up-bot-recommendations.html
indicator: messaging
---

{: .important}
For some practice with Agent Assist, complete the [Using Agent Assist](tutorials-guides-using-agent-assist-overview.html) tutorial.

{: .important}
It takes up to 20 minutes for changes in Agent Assist configuration to take effect.

### Prerequisite knowledge
To set up Conversation Orchestrator’s Agent Assist to suggest recommended bots, you must have some prerequisite knowledge of a few other applications in the Conversational AI suite.

If you are building your bots using Conversation Builder, you must be able to use Conversation Builder to:
* Create a bot
* Deploy a bot

If, for utterance matching, you’ll be using intents instead of patterns, you must be able to use Intent Builder to:
* Create a domain
* Create an intent

For exposure to these applications and tasks, we recommend that you complete the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial series:

If you are building a third-party bot (using Google DialogFlow or IBM Watson), see [here](third-party-bots-getting-started.html) for Getting Started information on connecting your bots to LivePerson’s Conversational Cloud.

### High-level workflow
1. In Conversation Builder or your third-party application, create the bots.
2. In Conversational Cloud, create the skills and bot users.
3. In Conversation Builder, deploy your Conversation Builder bots. Or, use your third-party application and Conversational Cloud to connect your bots to Conversational Cloud.
4. In Conversation Orchestrator, configure Agent Assist.

### Step 1: Create the bots
Before Conversation Orchestrator can start recommending bots, you need to create at least one bot. Conversation Orchestrator supports bots created in:
* [Conversation Builder](tutorials-guides-getting-started-with-bot-building-overview.html)
* [Google DialogFlow](third-party-bots-google-dialogflow-version-2.html)
* [IBM Watson](third-party-bots-ibm-watson-assistant.html)

### Step 2: Create the Conversational Cloud skills and bot users
Next, configure Conversational Cloud by creating a skill and a bot user for each bot. This is illustrated in the Conversation Builder [Deploy the Bot](tutorials-guides-getting-started-with-bot-building-deploy-the-bot.html) tutorial.

* Create the skill name and bot user name that make sense for your use case.
* Be sure to assign the bot skill to the bot user.

### Step 3: Deploy the bots to Conversational Cloud
Once Conversational Cloud is configured, the bots need to be deployed or connected to enable them to respond to conversations in Conversational Cloud.

* To deploy a *Conversation Builder* bot, follow the steps [here](conversation-builder-testing-deployment-deploying-to-conversational-cloud.html). When you add the agent connector for the bot, be sure to select to allow Messaging conversations. And after adding the agent connector, be sure to start it to enable the bot to handle traffic.
* To connect a *DialogFlow or Watson* bot to LivePerson’s Conversational Cloud, follow the [Third-Party Bots Getting Started Guide](third-party-bots-getting-started.html). Then follow the specific guide for [DialogFlow](third-party-bots-google-dialogflow-version-2.html) or [IBM Watson](third-party-bots-ibm-watson-assistant.html). Be sure to press the play button in the bot dashboard to enable the bot.

### Step 4: Configure Agent Assist
Configuration of Agent Assist involves the following:

1. Verify that the bots you created have been automatically discovered and enabled.
2. Assign one or more skills to the bots.
3. Enable recommendations.
4. Specify the maximum number of recommendations that Agent Assist will make. By default, this is 3.
5. Configure the confidence threshold.

#### Verify the bots have been discovered and enabled
By default, once you deploy and start a Conversation Builder or third-party bot (i.e., in the system, it is a valid bot that can serve a conversation), it is automatically discovered by Conversation Orchestrator and enabled for use. For Conversation Builder bots, this includes all bots you've created (both public and private) and other public bots within your organization.

<img width="800" src="img/agentassist/verify_bots.png">

A discovered bot is enabled by default as a convenience, saving you this step. However, it will not be recommended in conversations until you also assign one or more skills to the bot within Agent Assist’s configuration. Both conditions (enabled, assigned at least one skill) must be true for it to be recommended in conversations.

**To verify your bots have been automatically discovered and enabled**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Bots**.
3. Scroll down to the **Configure bot recommendations** section, which lists all discovered bots.
4. Verify that the bots are listed and enabled.

{: .important}
If you subsequently delete a bot, the next time you access this page, the list is updated automatically.

#### Assign skills to the bots
After verifying the bots are discovered and enabled, assign at least one skill to each of the bots. Once this is done, the bot can be recommended in conversations that are currently routed to the same skills. In this manner, you can control and configure which bots are candidates for recommendation to agents on a skill-by-skill basis. 

In our example below, for the human agent to be presented with a recommendation for the Ordering Bot, the agent must pick up a conversation that was routed to either the “Support” or “Ordering” skills. (Keep in mind that the conversation is routed to the skills assigned to the campaign’s engagement.)

<img width="800" src="img/agentassist/assign_skills.png">

**To assign skills to the bots**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Bots**.
3. Scroll down to the **Configure bot recommendations** section, which lists all discovered bots.
4. Add at least one skill to each available bot. You can select from all the skills that are defined for your account in Conversational Cloud.

#### Enable recommendations
With the bot ready to go, now enable recommendations. This must be done so that Agent Assist recommends articles and bots inline in conversations.

{: .important}
The **Enable recommendations** setting is a shared setting. Enabling or disabling it for bots also does so for knowledge bases, and vice versa.

**To enable recommendations**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Bots**.
3. Scroll down to **Enable recommendations**.

    <img width="500" src="img/agentassist/enable_recs.png">

4. Turn on the **enabled** toggle switch.

#### Specify the maximum number of recommendations
You can specify the maximum number of recommendations that Agent Assist will make when recommending articles and bots based on a detected intent (the consumer’s input). By default, up to 3 recommendations are provided to the agent.  You can change this at any time.

{: .important}
The **Maximum number of recommendations** setting is a shared setting. Setting its value for bots also updates the value for knowledge bases, and vice versa.

**To specify the maximum number of recommendations**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Bots**.
3. Scroll down to **Enable recommendations**.

    <img width="500" src="img/agentassist/enable_recs.png">

4. For **Maximum number of recommendations**, select a value.

#### Configure the confidence threshold
Bot recommendations have a score indicating how relevant the predicted intent is to a given consumer message. Recommendations are shown only if they are above the score threshold, which is configurable as shown below. The default score threshold is 70%.

<img width="650" src="img/agentassist/confidence.png">

**To configure the confidence threshold**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Bots**.
3. Scroll down to **Confidence threshold**.
4. Move the slider to the desired point.
