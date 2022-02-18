---
pagename: Optimizing via Dashboard Analysis
redirect_from:
    - knowledgeai-optimizing-via-dashboard-analysis.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: Optimizing Your Content
permalink: knowledgeai-optimizing-your-content-optimizing-via-dashboard-analysis.html
indicator: both
---

KnowledgeAI’s home page includes a dashboard of rich, diagnostic analytics. Use the dashboard to get an at-a-glance, holistic understanding of when and how your knowledge content is being used. The data is designed to help you to optimize your automation solution.

This article orients you to a few things you can do with the KnowledgeAI analytics.

### Act on alerts and warnings

Take note of the alerts and warnings in the upper-right corner. These let you know about potential issues that need your attention, such as when a knowledge base is incomplete or  underperforming.

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/kb_alertswarnings.png">

### Identify usage and tuning opportunities

To find opportunities to answer questions in conversations, evaluate the **Bot conversations using answers** panel:

<img style="width:800px" src="img/ConvoBuilder/kb_botconvsusinganswers.png">

This data shows you how well KnowledgeAI is supporting automated consumer conversations. It helps you to see the opportunities to better leverage answers in your conversations. For example:

* **If you see this**: A large gap between “total bot conversations” and “with knowledge queries.”
* **This means**: There are few knowledge base searches happening when compared to the total number of bot conversations occurring. This indicates that you aren’t making use of KnowledgeAI in all bot conversations.
* **You can optimize things by**: Evaluating your bots and looking for points in the conversation flow that would benefit from using a knowledge base search.

    A common use case is within a Fallback dialog, where you want to direct a consumer utterance that didn’t match a dialog starter into a knowledge base search. Alternatively, you might want to add an FAQ bot that is driven by a knowledge base full of articles.

    **Tip**: You can easily add KnowledgeAI to a bot by using the [KnowledgeAI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) in Conversation Builder. 

* **If you see this**: A low rate or a large gap between “with knowledge queries” and “with answers”
* **This means**: Knowledge base searches are happening, but few answers are being found. 
* **You can optimize things by**: Looking for opportunities for content improvements and retrieval enhancements.

    To progress here, check out the **Knowledge base usage** panel next. 
    
    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_kbusage.png">
    
    Look at the “Top 5” knowledge bases to see the high-level performance for your most active knowledge bases. A low rate of responses to queries indicates that consumers are asking questions that aren’t supported by the knowledge base. In cases like these, add answers or enhance your intents.

    You can also look at the “Last 5” knowledge bases to see the active knowledge bases with the least activity. For these, integrate them with more bots or agents to get more use out of them.

### Improve answer performance

The **Active articles** panel identifies:

* The 5 articles that were served the most number of times
* The 5 articles that were served the least number of times
* For each article, the retrieval method (intent-based match or text-based search) that was used to return the article

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_activearticles.png">

Use this information to help improve answer performance.

For example, text searches have a higher risk of returning answers when they shouldn’t, i.e., instances of “false positives.” To reduce false positives, update the training phrases for the intent that’s associated with the article, or associate an intent to the article.

### Export the data and dive deeper

Click the **CSV** download icon in the upper-right corner to download data on question and answer events. This data provide easy visibility into the questions asked by consumers and the resulting actions from KnowledgeAI.

### Statuses

On the Home dashboard and the individual knowledge base dashboards, you’ll see a few status indicators. These are defined below.

#### Active, Idle and Incomplete

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/kb_kbsummary.png">

* **Active**: Configuration of the knowledge base is complete, and the knowledge base has been used in the last 7 days. By “used,” we mean that it has powered answers to consumers in bot conversations (via a Conversation Builder integration) and/or served recommended answers to agents (via a Conversation Assist integration).
* **Idle**: Configuration of the knowledge base is complete, but the knowledge base hasn’t been used in the last 7 days.
* **Incomplete**: Applies to external knowledge bases only. Configuration of the knowledge base is incomplete. For more on this, see [here](knowledgeai-external-knowledge-bases-introduction.html#getting-started-saving-an-incomplete-knowledge-base).
