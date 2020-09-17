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

This topic contains information on tasks that are relevant to knowledge bases of various types.

### Train a knowledge base

Training a knowledge base involves:

1. Entering a consumer utterance.
2. Reviewing the results.
3. Adding or removing training phrases in the intents as needed. Adding or removing positive/negative learnings in the articles as needed.

Training is applicable when the knowledge base is:

* An [external knowledge base with LivePerson AI](knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html)
* An [internal knowledge base](knowledge-base-internal-knowledge-bases-introduction.html), which also uses LivePerson AI

To train a knowledge base, open the knowledge base, and click **Articles** in the upper-left corner if the page isn't already displayed. Enter an utterance, and review the results.

If you don't get any results for a particular utterance, you can adjust the filters by tapping <img style="width:25px" src="img/ConvoBuilder/icon_kb_sortAndFilter.png"> (Sort & Filters icon).

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_test.png">

By default, the Search Settings are set to **Intents** and **Fair Plus**. This means that the algorithm will first see if there are any matches using our NLU, with a threshold of Fair Plus. However, if it doesn’t find any, it will attempt a text search as well. Because of this, you might see a message like "No intent matched. Performed text search. 3 results found." This means you should add some more training phrases to the intent to improve your results.

* If you don’t want the follow-up text search, change the Search Settings to "Intents Only." This *only* performs the intents search.
* If you *only* want to perform the text search, change the Search Settings to "All".

For more on search modes, see [here](knowledge-base-common-common-concepts.html#knowledge-base-searches).

To add more training phrases (intent qualifiers), you can manually add them to your article.

<img class="fancyimage" style="width:700px" src="img/qualifiers.png">

#### Adding positive and negative learnings

You can also use the Thumb Up and Down icons displayed in a search. Below is an example where the utterance returned some results. The preferred result was only a GOOD match. By tapping the **Thumbs Up** icon, you automatically add the current utterance to a Positive Learning set for this article. Tapping **Thumbs Down** does the opposite.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_test_thumbsUp.png">

If you were to rerun the search, the article would return with a higher score.

If you look at the article details, in the **Advanced Settings**, you can see that the utterance has been added.

#### Beware of overtraining

Something to keep in mind when training in general, and using the Thumbs Up/Down icons specifically, is that because they are so easy to use, they are often misused. Often people use Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down. Anything over about 10 - 15 training phrases might begin to return false positives.

### Delete a knowledge base

Deleting a knowledge base is a non-recoverable action, so be certain about doing so before taking this action.

{: .important}
Before you delete a knowledge base, ensure it isn't being used in any [Knowledge Base integrations](conversation-builder-integrations-knowledge-base-integrations.html).

**To delete a knowledge base**
1. Open the knowledge base.
2. Click **Settings** in the upper-left corner.
3. Scroll down and click **More Options**.
4. In the **Delete Knowledge Base** section, click <img style="width:25px" src="img/ConvoBuilder/icon_kb_delete.png"> (Delete icon).
5. In the confirmation dialog, click **Yes**.