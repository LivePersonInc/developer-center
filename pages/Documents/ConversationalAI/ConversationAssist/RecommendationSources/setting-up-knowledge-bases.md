---
pagename: Setting Up Knowledge Bases
redirect_from:
  - maven-maven-assist-recommended-actions-for-knowledge-base.html
  - maven-ai-maven-assist-recommended-actions-for-knowledge-base.html
  - conversation-orchestrator-maven-assist-recommended-actions-for-knowledge-base.html
  - conversation-orchestrator-agent-assist-recommended-actions-for-knowledge-base.html
  - conversation-orchestrator-agent-assist-setting-up-knowledge-base-recommendations.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
subfoldername: Recommendation Sources
permalink: conversation-assist-recommendation-sources-setting-up-knowledge-bases.html
indicator: messaging
---

{: .important}
For some practice with Conversation Assist, complete the [Using Conversation Assist](tutorials-guides-using-conversation-assist-overview.html) tutorial.

{: .important}
It takes up to 3 hours for changes in Conversation Assist configuration to take effect.

### Prerequisite knowledge
To set up Conversation Assist to suggest recommended articles, you must have some prerequisite knowledge of other applications in the Conversational AI suite. Most importantly, you must be able to use the KnowledgeAI application to:

* Create a knowledge base
* Create an article

If you will create a knowledge base that uses intents in Intent Manager (associating the intents with knowledge base’s articles), you must also be able to use the Intent Manager application to:

* Create a domain
* Create an intent

For exposure to these Conversational AI applications and tasks, we recommend that you complete the following tutorial series:

* [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html)
* [Bot Groups & Other Techniques](tutorials-guides-bot-groups-other-techniques-overview.html)

Both tutorial series focus primarily on using the Conversation Builder application for bot building. However, along the way, they also familiarize you with the Intent Manager and KnowledgeAI applications.

### High-level workflow
1. In the KnowledgeAI application, create the knowledge bases and the articles therein, using your content source or working from scratch.
2. In the Conversation Assist, configure your recommendation sources (i.e., your knowledge bases) and configure a few other settings.

### Step 1: Create the knowledge bases and articles
Before Conversation Assist can start recommending articles, you need to create at least one knowledge base from your [content source](knowledgeai-overview.html#content-sources) or from scratch. You can create and use any type of knowledge base, and the knowledge base can be public or private.

To get started, it’s recommended that you create at least one article in the knowledge base, so you can verify that your setup is complete and working. You can continue to add more articles at any time after setup.

If you’re setting up a knowledge base that associates intents with articles, then as a part of this step, you’ll also need to use [Intent Manager](intent-manager-overview.html) to create the domain and the necessary intents therein. Once this is done, back in KnowledgeAI, you’ll need to [associate the intents with the articles](knowledgeai-using-intents-with-kbs.html).

### Step 2: Configure Conversation Assist
Configuration of Conversation Assist involves the following:

1. Verify that the knowledge bases you created have been automatically discovered and enabled.
2. Assign one or more skills to the knowledge bases.
3. Enable recommendations.
4. Specify the maximum number of recommendations that Conversation Assist will make. By default, this is 3.

#### Verify the knowledge bases have been discovered and enabled
By default, once you create a knowledge base in the KnowledgeAI application, it is automatically discovered by Conversation Orchestrator and enabled for use.

<img width="800" src="img/agentassist/verify_kbs.png">

A knowledge base is enabled by default as a convenience, saving you this step. However, its articles will not be recommended in conversations until you also assign one or more skills to the knowledge base within Conversation Assist’s configuration. Both conditions (enabled, assigned at least one skill) must be true for it to be recommended in conversations.

**To verify your knowledge bases have been automatically discovered and enabled**

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist).
2. On the left navigation bar, under **Conversation Assist**, click **Knowledge Bases**.
3. Scroll down to the **Configure article recommendations** section, which lists all discovered knowledge bases.
4. Verify that the knowledge bases are listed and enabled. At this point, you should also verify that the desired articles in the knowledge base are active. The knowledge base should have at least one active article.

{: .important}
If you subsequently delete a knowledge base in the KnowledgeAI application, the next time you access this page, the list is updated automatically.

#### Assign skills to the knowledge bases
After adding the knowledge bases, assign at least one skill to each of the knowledge bases. Once this is done, their articles can be recommended in conversations that are currently routed to the same skills. In this manner, you can control and configure which knowledge bases are candidates for recommendation to agents on a skill-by-skill basis. 

In our example below, for the human agent to be presented with an article recommendation from the Order Questions knowledge base, the agent must pick up a conversation that was routed to either the “Support” or “Ordering” skills. (Keep in mind that the conversation is routed to the skills assigned to the campaign’s engagement.)

<img width="800" src="img/agentassist/assign_skills_kb.png">

**To assign skills to the knowledge bases**

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist).
2. On the left navigation bar, under **Conversation Assist**, click **Knowledge Bases**.
3. Scroll down to the **Configure article recommendations** section, which lists all knowledge bases.
4. Add at least one skill to each available knowledge base. You can select from all the skills that are defined for your account in Conversational Cloud. To assign all available skills at once, select the knowledge base, and then use the menu option that appears.

    <img width="800" src="img/agentassist/assign_skills_kb2.png">

#### Enable recommendations
With the knowledge base ready to go, enable recommendations. This must be done so that Conversation Assist recommends articles and bots inline in conversations.

{: .important}
The **Enable recommendations** setting is a shared setting. Enabling or disabling it for knowledge bases also does so for bots, and vice versa.

**To enable recommendations**

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist).
2. On the left navigation bar, under **Conversation Assist**, click **Knowledge Bases**.
3. Scroll down to **Enable recommendations**.

    <img width="500" src="img/agentassist/enable_recs_kb.png">

4. Turn on the **enabled** toggle switch.

#### Specify the maximum number of recommendations
You can specify the maximum number of recommendations that Conversation Assist will make when recommending articles and bots based on a detected intent (the consumer’s input). By default, up to 3 recommendations are provided to the agent. You can change this at any time.

{: .important}
The **Maximum number of recommendations** setting is a shared setting. Setting its value for knowledge bases also updates the value for bots, and vice versa.

**To specify the maximum number of recommendations**

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist).
2. On the left navigation bar, under **Conversation Assist**, click **Knowledge Bases**.
3. Scroll down to **Enable recommendations**.

    <img width="500" src="img/agentassist/enable_recs_kb.png">

4. For **Maximum number of recommendations**, select a value.
