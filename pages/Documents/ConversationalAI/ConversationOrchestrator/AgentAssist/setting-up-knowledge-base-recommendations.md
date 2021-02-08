---
pagename: Setting Up Knowledge Base Recommendations
redirect_from:
  - maven-maven-assist-recommended-actions-for-knowledge-base.html
  - maven-ai-maven-assist-recommended-actions-for-knowledge-base.html
  - conversation-orchestrator-maven-assist-recommended-actions-for-knowledge-base.html
  - conversation-orchestrator-agent-assist-recommended-actions-for-knowledge-base.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Agent Assist
permalink: conversation-orchestrator-agent-assist-setting-up-knowledge-base-recommendations.html
indicator: messaging
---

{: .important}
For some practice with Agent Assist, complete the [Using Agent Assist](tutorials-guides-using-agent-assist-overview.html) tutorial.

{: .important}
It takes up to 20 minutes for changes in Agent Assist configuration to take effect.

### Prerequisite knowledge
To set up Conversation Orchestrator’s Agent Assist to suggest recommended articles, you must have some prerequisite knowledge of other applications in the Conversational AI suite. Most importantly, you must be able to use the Knowledge Base application to:

* Create a knowledge base
* Create an article

If you will create a knowledge base that uses intents in Intent Builder (associating the intents with knowledge base’s articles), you must also be able to use the Intent Builder application to:

* Create a domain
* Create an intent

For exposure to these Conversational AI applications and tasks, we recommend that you complete the following tutorial series:

* [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html)
* [Bot Groups & Other Techniques](tutorials-guides-bot-groups-other-techniques-overview.html)

Both tutorial series focus primarily on using the Conversation Builder application for bot building. However, along the way, they also familiarize you with the Intent Builder and Knowledge Base applications.

### High-level workflow
1. In the Knowledge Base application, create the knowledge bases and the articles therein, using your content source or working from scratch.
2. In the Conversation Orchestrator application, configure Agent Assist.

### Step 1: Create the knowledge bases and articles
Before Agent Assist can start recommending articles, you need to create at least one knowledge base from your [content source](knowledge-base-overview.html#content-sources) or from scratch. You can create and use any type of knowledge base, and the knowledge base can be public or private.

To get started, it’s recommended that you create at least one article in the knowledge base, so you can verify that your setup is complete and working. You can continue to add more articles at any time after setup.

If you’re setting up a knowledge base that associates intents with articles, then as a part of this step, you’ll also need to use [Intent Builder](intent-builder-overview.html) to create the domain and the necessary intents therein. Once this is done, back in Knowledge Base, you’ll need to [associate the intents with the articles](knowledge-base-using-intents-with-kbs.html).

### Step 2: Configure Agent Assist
Configuration of Agent Assist involves the following:

1. Add the knowledge bases to Agent Assist.
2. Assign one or more skills to the knowledge bases.
3. Enable recommendations.
4. Specify the maximum number of recommendations that Agent Assist will make. By default, this is 3.

#### Add the knowledge bases to Agent Assist

1. In the Knowledge Base application, click <img style="width:30px" src="img/agentassist/icon_apikey.png"> (API Key icon) in the upper-right corner.
2. On the **User Settings** page, copy your API access key.

    <img width="800" src="img/agentassist/api_key.png">

3. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
4. On the left navigation bar, under **Agent Assist**, click **Knowledge Bases**.
5. Scroll down to the **Add KB** section, paste in your API access key, and click **Save**.

    <img width="800" src="img/agentassist/add_kb.png">

This adds to Agent Assist’s configuration all the knowledge bases that you have access to, for the account that you're currently logged into. This includes all knowledge bases that you've created (both public and private) and other public knowledge bases within your organization.

You should now see the knowledge bases listed under **Configure article recommendations**. They are enabled by default. However, their articles will not be recommended in conversations until you assign one or more skills to each knowledge base.

#### Assign skills to the knowledge bases
After adding the knowledge bases, assign at least one skill to each of the knowledge bases. Once this is done, their articles can be recommended in conversations that are currently routed to the same skills. In this manner, you can control and configure which knowledge bases are candidates for recommendation to agents on a skill-by-skill basis. 

In our example below, for the human agent to be presented with an article recommendation from the Order Questions knowledge base, the agent must pick up a conversation that was routed to either the “Support” or “Ordering” skills. (Keep in mind that the conversation is routed to the skills assigned to the campaign’s engagement.)

<img width="800" src="img/agentassist/assign_skills_kb.png">

**To assign skills to the knowledge bases**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Knowledge Bases**.
3. Scroll down to the **Configure article recommendations** section, which lists all knowledge bases.
4. Add at least one skill to each available knowledge base. You can select from all the skills that are defined for your account in Conversational Cloud.

#### Enable recommendations
With the knowledge base ready to go, enable recommendations. This must be done so that Agent Assist recommends articles and bots inline in conversations.

{: .important}
The **Enable recommendations** setting is a shared setting. Enabling or disabling it for knowledge bases also does so for bots, and vice versa.

**To enable recommendations**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Knowledge Bases**.
3. Scroll down to **Enable recommendations**.

    <img width="500" src="img/agentassist/enable_recs_kb.png">

4. Turn on the **enabled** toggle switch.

#### Specify the maximum number of recommendations
You can specify the maximum number of recommendations that Agent Assist will make when recommending articles and bots based on a detected intent (the consumer’s input). By default, up to 3 recommendations are provided to the agent. You can change this at any time.

{: .important}
The **Maximum number of recommendations** setting is a shared setting. Setting its value for knowledge bases also updates the value for bots, and vice versa.

**To specify the maximum number of recommendations**

1. [Access Conversation Orchestrator’s Agent Assist](conversation-orchestrator-agent-assist-overview.html#access-conversation-orchestrators-agent-assist).
2. On the left navigation bar, under **Agent Assist**, click **Knowledge Bases**.
3. Scroll down to **Enable recommendations**.

    <img width="500" src="img/agentassist/enable_recs_kb.png">

4. For **Maximum number of recommendations**, select a value.
