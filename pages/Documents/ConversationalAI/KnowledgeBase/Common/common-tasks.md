---
pagename: Common Tasks
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: Common
permalink: knowledge-base-common-common-tasks.html
indicator: both
---

This topic contains information on tasks that are relevant to both CMS knowledge bases and LivePerson knowledge bases.

### Train a knowledge base

To train a knowledge base, select the knowledge base, enter an utterance, and review the results. If you don't get any results for a particular utterance, you can adjust the filters by tapping <img style="width:25px" src="img/ConvoBuilder/icon_kb_sortAndFilter.png"> (Sort & Filters icon).


<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_test.png">

By default, the Search Settings are set to **Intents** and **Fair Plus**. This means that the algorithm will first see if there are any matches using our NLU, with a threshold of Fair Plus. However, if it doesn’t find any, it will attempt a text search as well. Because of this, you might see a message like "No intent matched. Performed text search. 3 results found." This means you should add some more training phrases to an article to improve your results.

If you don’t want the follow-up text search, you can change the Search Settings to "Intents Only" which will ONLY perform the intents search.

If you ONLY want to perform the text search, you can set the Settings to "All".

To add more training phrases (intent qualifiers), you can manually add them to your article.

<img class="fancyimage" style="width:700px" src="img/qualifiers.png">

You can also use the Thumb Up and Down icons displayed in a search. Below is an example where the utterance returned some results. The preferred result was only a GOOF match. By tapping the **Thumbs Up** icon, you automatically add the current utterance to a Positive Learning set for this article. Tapping **Thumbs Down** does the opposite.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_test_thumbsUp.png">

If you were to rerun the search, the article would return with a higher score.

If you look at the article details, in the **Advanced Settings**, you can see that the utterance has been added.

#### Beware of overtraining

Something to keep in mind when training in general, and using the Thumbs Up/Down icons specifically, is that because they are so easy to use, they are often misused. Often people use Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down. Anything over about 10 - 15 training phrases might begin to return false positives.

### Test user input

Use the Debugger tool to feed user input directly into a knowledge base to test the NLU processing and content matching.

The Debugger tool works exactly like a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a bot. So, if your search selections in the tool match how you've configured the bot, the results you see with the tool will be the same as those returned in a bot conversation. If you don't yet have a bot integrated with your knowledge base, the Debugger tool is also a way to test how the bot will behave once it is.

The Debugger tool is also *the* way to see the JSON that's returned by the search.

**To test user input**

1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Test User Input**.

    <img class="fancyimage" style="width:350px" src="img/ConvoBuilder/kb_testUserInput1.png">

3. Specify the following:

    * **Phrase**: Enter the phrase to search for.
    * **Search Modes**: Select either Intents, Intents Only, or All. For a description of each mode, see [here](knowledge-base-overview.html#search-modes).
    * **Threshold**: Select the minimum score that a result must have in order to be returned, either VERY GOOD, GOOD, or FAIR PLUS. For more on thresholds, see [here](knowledge-base-overview.html#thresholds).

4. Click **test**.

    In the results, the JSON of the matched article is displayed. You can examine the "title" to see which article has been matched.

    <img style="width:450px" src="img/ConvoBuilder/kb_testUserInput2.png">

### Download a knowledge base 

Download of a knowledge base creates a CSV file.

You might need to download a knowledge base for a few reasons:

* You added the initial set of articles to the knowledge base by importing a CSV file, and now you want to add more articles using an import file too. *The only way to do this is with a Google sheet*, so you plan to download the knowledge base to a CSV file, convert the CSV file to a Google sheet, add the new articles alongside the existing articles (**don't remove the existing articles**), and link the Google sheet to the knowledge base.
* You want to create a copy of the knowledge base by downloading it and then adding a new knowledge base using the CSV as the import file.
* You want to move or copy the knowledge base to another environment.
* You want an extra measure of back-up, so you plan to archive the CSV file for safekeeping.

**To download a knowledge base**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Download Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_download.png"> (Download icon).
5. Follow the browser prompts to access and save the CSV file to a location of your choice.

### Delete a knowledge base

Deleting a knowledge base is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Ensure the knowledge base isn't being used in any [Knowledge Base integrations](conversation-builder-integrations-knowledge-base-integrations.html) before you delete it.

**To delete a knowledge base**
1. Open the knowledge base.
2. In the upper-right corner, click <img style="width:25px" src="img/ConvoBuilder/icon_ellipsisVertical.png">, and select **Knowledge Base Menu**.
3. In the Settings panel, click **KB Settings**.
4. Click **More Options**, scroll down to the **Delete Knowledge Base** section, and click <img style="width:25px" src="img/ConvoBuilder/icon_kb_delete.png"> (Delete icon).
5. In the confirmation dialog, click **Yes**.