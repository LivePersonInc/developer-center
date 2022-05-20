---
pagename: Evaluating Consumer Queries
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: Optimizing Your Content
permalink: knowledgeai-optimizing-your-content-evaluating-consumer-queries.html
indicator: both
---

### What’s the Consumer Queries view?
After you’ve rolled out your KnowledgeAI integrations, and they’ve spent some time at work in Production, you might ask:

* What questions are consumers asking?
* Are the right answers being served at the right time?
* How do I improve answer performance?

These are great questions that the Consumer Queries view helps to answer. The view is a historical look at:

* The questions (*“How do I cancel an order?”*) and other intentful messages (*“I want to cancel an order”*) sent by your consumers and used in knowledge base searches to find answers
* The answers returned in response (when answers were, indeed, returned)

<img style="width:800px" src="img/ConvoBuilder/kai_csq1.png">

Use the view to evaluate both answered and unanswered queries. Both vantage points help you to audit your content and improve the answer quality.

Consider this scenario:

1. You use the Consumer Queries view to **review the questions** your consumers are asking.
2. In checking out the **unanswered queries** in particular, you **discover a trend**. There’s a question that’s asked frequently.

    <img style="width:400px" src="img/ConvoBuilder/kai_csq2.png">

3. Right within the view, you act. You **quickly add an article**, tying it to an intent that you also create on-the-fly using the unanswered query.

    <img style="width:700px" src="img/ConvoBuilder/kai_csq3.png">

Or, how about this scenario?

1. This time, you’re checking out the **answered queries**.
2. You see a consumer query that was answered with the **wrong article**.

    <img style="width:400px" src="img/ConvoBuilder/kai_csq4.png">

3. Right within the view, you fix this. You **add the query as a training phrase** to the correct intent to improve its intent matching.

    <img style="width:600px" src="img/ConvoBuilder/kai_csq5.png">

    (In this flow and in others, similar training phrases can be automatically generated. This capability uses an Intent Manager feature behind the scenes, and there are some limitations that apply. For info on these, see the notes [here](intent-manager-build-intents.html#generate-training-phrases).)

### Who is the view for?
The Consumer Queries view is for the person at your organization who is tasked with the following:

* Analyzing the performance of your KnowledgeAI integrations (think metrics and key performance indicators)
* Tuning things for improvement
* Content operations

Depending on your organization, this might not be the person who implemented your integrations. It could be a more non-technical person that’s closer to the content itself and the voice of the consumer.

### Access Consumer Queries
1. [Access the KnowledgeAI application](knowledgeai-overview.html#access-knowledgeai).
2. Select **Test & Tune** in the menu in the upper-left corner.
    The **Consumer Queries** tab is displayed by default.

### Refine the view
Initially, the Consumer Queries view shows you a lot of data. So, the first step is to refine the view, so you can focus on what you want: a particular knowledge base, a time frame, etc. Use the available filters to accomplish this.

<img style="width:800px" src="img/ConvoBuilder/kai_csq6.png">

1. Select a specific knowledge base here.
2. Use this to display the data for unanswered queries, answered queries, or both.
3. Select a time frame here.
4. Use this to access even more filters: confidence score (Fair, Fair Plus, Good, Very Good), retrieval type (intent match, text search, CMS match), etc.
5. See a bar in the graph that looks interesting? Click it to show only its queries.

### Evaluate unanswered queries
Unanswered queries are those where the knowledge base was searched for an answer, but one wasn’t found. Unanswered queries include:

* Queries posed to bots where answers weren’t found
* Queries posed to human agents where answers weren’t found that could be offered to the agents as recommendations for their use (i.e., you’re supporting your agents with a Conversation Assist integration)

**To evaluate unanswered queries**

1. If desired, refine the view to show only unanswered queries. This simplifies the view.
2. Review an unanswered consumer query.
    Initially, the query is displayed like this:

    <img style="width:400px" src="img/ConvoBuilder/kai_csq7.png">

    You can click the down arrow at the bottom of the card to show more information:

    <img style="width:400px" src="img/ConvoBuilder/kai_csq8.png">

3. Decide if and how you want to take action:
    * **Add answer**: Select this if you want to add an answer for the query. This takes you through a guided flow: If you don’t have an existing article that’s suitable to respond to the query, you can create one. And if there is a suitable article, you can add the query as a training phrase to the article’s intent, or add an intent if none exists.
    * **Don’t answer**: Select this if you don’t want to add an answer for the query. You might want to do this for queries that are non-intentful, such as profanity or other spam-like messages (e.g., “bots are pathetic”). You might even want to do this for intentful messages that you don’t want to address at the moment.
    
    <br>It’s also appropriate to select **Don’t answer** if you’ve already addressed the query. Assume you see a trend where the same unanswered query is asked 5 times. You might add the answer using the first instance, add the second and third instances as training phrases to the same intent, and dismiss the remaining two because they aren’t sufficiently different. Overall, you don’t need to answer the same query over and over.
    
    **Don’t answer** dismisses the query: It simply removes the card from the view to get it out of your way. The card still counts in your  “Reviewed” total though. And if you turn on the **Reviewed** slider, you can see the card again.

    <img style="width:800px" src="img/ConvoBuilder/kai_csq9.png">

4. Repeat this process for other unanswered queries.

### Evaluate answered queries
Answered queries are those where the knowledge base was searched for an answer, and one was found. Answered queries include:

* Queries posed to bots where answers were found and were sent to consumers
* Queries posed to human agents where answers were found and were offered to the agents as recommendations for their use (i.e., you’re supporting your agents with a Conversation Assist integration)

Even answered queries can provide opportunities for tuning. 

**To evaluate answered queries**

1. If desired, refine the view to show only answered queries. This simplifies the view.
2. Review an answered consumer query.
    Initially, the query is displayed like this:

    <img style="width:500px" src="img/ConvoBuilder/kai_csq10.png">

    You can click the down arrow at the bottom of the card to show more information:

    <img style="width:400px" src="img/ConvoBuilder/kai_csq11.png">

3. Evaluate the answer to the query, and then mark the answer with a thumbs up or down:
    * <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/kai_csq12.png"> = Good = This means the answer was the right one, and the associated article has good content. Selecting this marks the answer as “Good,” and marks the card as “Reviewed.” This informs LivePerson’s underlying models. We value this feedback and use it to enhance our models. 
    * <img class="inlineimage" style="width:25px" src="img/ConvoBuilder/kai_csq13.png"> = Bad = The answer was the wrong one, or the associated article has inadequate content. This too informs LivePerson’s underlying models.
4. If you marked the answer as bad, specify why, and click **Next**.

    <img style="width:700px" src="img/ConvoBuilder/kai_csq14.png">

    The reason you marked the query as bad determines what happens next:
    * **Wrong content served**: This takes you through a guided flow, right within the view. You’re prompted to find the right article for the query, and to add the query as a training phrase to the article’s intent. If the article doesn’t have an associated intent, you’re prompted to associate an existing one or to create one. 
    * **Inadequate content**: This too takes you through a guided flow, right within the view. You can update the article, and optionally associate an intent.
5. Repeat this process for other unanswered queries.

### Run a test
To quickly run a test on an answered query, select the **Run test** option.

<img style="width:600px" src="img/ConvoBuilder/kai_csq15.png">

This takes you to the **Test** tab and populates the **Question** field with the consumer query (among other answer criteria), so you can test its performance.

### Best practices
Evaluating how your consumers’ queries were and weren’t answered by KnowledgeAI is an important step in the optimization process. To facilitate the best consumer experience, incorporate this step into your regular workflow. For example, you might want to invest some time here weekly.

### FAQs
#### I don’t see my knowledge base listed in the Knowledge Base dropdown menu. Why is this?
The menu shows you only the knowledge bases that have been used within the specified time frame. By “used,” we mean that it has powered answers to consumers in bot conversations (via a Conversation Builder integration) or served recommended answers to human agents (via a Conversation Assist integration).

Additionally, be aware that currently this feature is only available for internal and external knowledge bases that use AI, i.e., that use Natural Language Understanding (NLU) technology to understand and intelligently match consumer queries to articles. So, if you have an [external knowledge base that doesn’t use AI](knowledgeai-external-knowledge-bases-external-kbs-without-liveperson-ai.html), it won’t be listed in the menu.

#### A query shows the conversation ID and the search criteria. Can you explain these?
Yes, if you expand a consumer query, you can see the ID of the associated conversation and the search criteria that was applied when performing the search of the knowledge base:

<img style="width:400px" src="img/ConvoBuilder/kai_csq16.png">

The conversation ID is shown to support additional research, as you might want to look deeper into the context of the query. In Bot Analytics, you can use the conversation ID to display the complete transcript of the conversation.

The search criteria are drawn from the integration. It can give you insight into why certain answers are being served. For example, if you see that an inadequate answer was served and your integration is set to serve answers with a FAIR PLUS score or higher, you might want to consider boosting that to GOOD.

#### If I make changes to my intents, do I need to train the affected domain to pick up the changes?
Yes, it’s still the case that you need to train the domain after updating it if you want the updates to be reflected in subsequent testing, debugging, and usage. Training creates a new model version that incorporates the changes.

Within Consumer Queries, at the end of a guided flow, you’re reminded to train the domain within Intent Manager.

#### Can I download the query-and-answer information for use elsewhere?
Yes, there’s a download icon for this purpose.

<img style="width:400px" src="img/ConvoBuilder/kai_csq17.png">
