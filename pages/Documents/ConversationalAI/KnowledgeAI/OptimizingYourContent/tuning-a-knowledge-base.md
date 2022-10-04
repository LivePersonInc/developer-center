---
pagename: Tuning a Knowledge Base
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: Optimizing Your Content
permalink: knowledgeai-optimizing-your-content-tuning-a-knowledge-base.html
indicator: both
---

After you've added your content and linked it to intents, tune the knowledge base for optimal performance. At a high-level, tuning involves:

1. Performing a search using a consumer utterance.
2. Reviewing the results.
3. Adding or removing training phrases in the intents as needed.

**To tune a knowledge base**

1. Open the knowledge base, and click **Articles** in the menu in the upper-left corner.
2. In the **Answer Tester** on the right, specify the following:

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test1.png" alt="The default state of the Answer Tester">

    * **Question**: Enter the consumer utterance for which you want to find matching articles.
    * **Search mode**: Select the [type of search](knowledgeai-search-methods.html) to perform.
    * **Threshold**: Select the [confidence threshold](knowledgeai-using-intents-with-kbs.html#scoring-and-thresholds) that an article must meet for it to be returned as a result.
    * **# of results**: Select how many results to return.
    * **Article status**: Select the status of the artice, either Active, Inactive, or All. This option is only available for internal knowledge bases.

3. Click **Get Answers**.
4. Review the results under **Matched Answers**.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test2.png" alt="The results of an example test using the Answer Tester">

5. You can click on an article title to see the article, and toggle between this and its JSON.

    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test3.png" alt="The inital view of the matched answers">
    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test4.png" alt="The view of the Article tab after you select a result">
    <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/kb_test5.png" alt="The view of the JSON tab after you select a result">

6. Based on the results, adjust the training phrases for the intents in the associated domain if needed.
