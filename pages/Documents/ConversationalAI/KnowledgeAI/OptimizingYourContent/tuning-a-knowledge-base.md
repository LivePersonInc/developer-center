---
pagename: Tuning a Knowledge Base
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: Optimizing Your Content
permalink: knowledgeai-optimizing-your-content-tuning-a-knowledge-base.html
indicator: both
---

### Introduction 

After you've added your content, tune the knowledge base for optimal performance. At a high-level, tuning involves:

1. Performing a search using a consumer utterance.
2. Reviewing the results.
3. Refining the articles and/or the associated intents *if you're using intents*.

### Tune a knowledge base

1. Open the knowledge base, and click **Articles** in the menu in the upper-left corner.
2. In the **Answer Tester** on the right, specify the following:

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test1.png" alt="The default state of the Answer Tester">

    * **Question**: Enter the consumer utterance for which you want to find matching articles.
    * **Retrieve answers by**: Select the [type of search](knowledgeai-search-methods.html) to perform.
    * **Threshold**: Select the [confidence threshold](knowledgeai-search-methods.html#thresholds) that an article must meet for it to be returned as a result.
    * **# of results**: Select how many results to return.
    * **Article status**: Select the status of the artice, either Active, Inactive, or All. This option is only available for internal knowledge bases.

3. Click **Get Answers**.
4. Review the results under **Matched Answers**.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test2.png" alt="The results of an example test using the Answer Tester">

5. You can click on an article title to see the article, and toggle between this and its JSON.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test3.gif" alt="Viewing the article info and JSON">

6. If you don’t get the results you expect, do one or both of the following depending on the [type of search](knowledgeai-search-methods.html) you're using: AI Search, Intent Match, or both:
    * **AI Search**: If you have a consumer query for which there isn’t a relevant article to serve as the answer, just add that article. While it’s unlikely that an existing, relevant article won’t yield results, it might happen. In this case, improve the article’s title and/or add tags to the article.
    * **Intent Match**: Adjust the training phrases for the intents in the associated domain.
