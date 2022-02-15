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
Just getting started? Complete the [Using Conversation Assist](tutorials-guides-using-conversation-assist-overview.html) tutorial.

{: .important}
It takes up to 3 hours for changes in Conversation Assist configuration to take effect.

### Prerequisite knowledge
To set up Conversation Assist to recommend answers, you must have some prerequisite knowledge of other applications in the Conversational AI suite. Most importantly, you must be able to use the [KnowledgeAI](knowledgeai-overview.html) application to:

* Create a knowledge base
* Create an article

If you will create a knowledge base that uses intents in [Intent Manager](intent-manager-overview.html) (associating the intents with knowledge base’s articles), you must also be able to use the Intent Manager application to:

* Create a domain
* Create an intent

For exposure to these Conversational AI applications and tasks, we recommend that you complete the following tutorial series:

* [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html)
* [Bot Groups & Other Techniques](tutorials-guides-bot-groups-other-techniques-overview.html)

Both tutorial series focus primarily on using the Conversation Builder application for bot building. However, along the way, they also familiarize you with the Intent Manager and KnowledgeAI applications.

### High-level workflow
1. In **KnowledgeAI**, create the knowledge bases and the articles therein.
2. In **Conversation Assist**, configure the knowledge bases for Conversation Assist.
3. In **Conversation Assist**, configure relevant settings.

### Step 1: Create the KBs and articles
[Access KnowledgeAI](knowledgeai-overview.html#access-knowledgeai) and create at least one knowledge base (KB) from your [content source](knowledgeai-overview.html#content-sources) or from scratch. You can create and use any type of knowledge base, and the knowledge base can be public or private.

To get started, it’s recommended that you create at least one article therein, so you can verify that your setup is complete and working. You can continue to add more articles at any time after setup.

If you’re setting up a knowledge base that associates intents with articles, then you’ll also need to use [Intent Manager](intent-manager-overview.html) to create the domain and the necessary intents therein. Once this is done, back in KnowledgeAI, you’ll need to [associate the intents with the articles](knowledgeai-using-intents-with-kbs.html).

{: .important}
At this point, use KnowledgeAI to verify that the desired articles are active. The knowledge base should have at least one active article.

### Step 2: Configure the KBs
1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Recommendation Sources** from the menu at the top.

    The **Knowledge Bases** tab is displayed by default.

    Once you create a knowledge base (KB) in KnowledgeAI, it is automatically discovered by Conversation Assist. So you should see your knowledge base here.

    <img width="700" src="img/agentassist/configkb1.png">

2. Verify that your knowledge base is displayed. If it isn't, consult the troubleshooting information [here](conversation-assist-troubleshooting.html).

    Your knowledge base doesn't have any assigned skills yet, so its **Status** is initially set to "Off." For the articles therein to be recommended as answers, you must assign one or more skills **and** change the **Status**.

3. Assign one or more skills to the knowledge base:
    1. Beside the knowledge base, click the <img style="width:25px" src="img/agentassist/icon_managesource.png"> (Manage source) icon.
    2. In the **Manage recommendation source** dialog, change the **Status** to "ON," and add one or more skills.

        <img width="700" src="img/agentassist/configkb2.png">

    3. Click **Save**.
4. Repeat this process for additional knowledge bases as needed.

    After you assign at least one skill to each of the knowledge bases, their articles can be recommended as answers in conversations that are routed to the same skills. In this manner, you can control on a skill-by-skill basis which knowledge bases are candidates for recommendation to human agents.

    In our example below, for the agent to be offered an answer from the Order Questions knowledge base, the agent must pick up a conversation that was routed to either the “Support” or “Ordering” skills.

    <img width="700" src="img/agentassist/configkb3.png">

    Keep in mind that a conversation is routed to the skills assigned to the campaign’s engagement.

{: .important}
If you later delete a knowledge base in KnowledgeAI, the next time you access the **Knowledge Bases** tab, the list is updated automatically.

### Step 3: Configure settings

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist), and click **Settings**.
2. Configure the following relevant settings:
    * [Max # of recommendations](conversation-assist-recommendation-sources-configuring-settings.html#max--of-recommendations)
    * [Answer confidence](conversation-assist-recommendation-sources-configuring-settings.html#answer-confidence)
