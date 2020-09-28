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

Training a knowledge base is applicable when the knowledge base is:

* An [external knowledge base with LivePerson AI](knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html)
* An [internal knowledge base](knowledge-base-internal-knowledge-bases-introduction.html), which also uses LivePerson AI

Training involves:

1. Performing a search using a consumer utterance.
2. Reviewing the results.
3. Adding or removing training phrases in the intents as needed. Adding or removing positive/negative learnings in the articles as needed.

**To train a knowledge base**

Open the knowledge base, and click **Articles** in the upper-left corner if the page isn't already displayed. 

Enter an utterance, and review the results.

If you don't get any results, you can adjust the filters by tapping <img style="width:25px" src="img/ConvoBuilder/icon_kb_sortAndFilter.png"> (Sort & Filters icon).

The following image illustrates a search in an internal knowledge base. Things work similarly for an external knowledge base that uses LivePerson AI.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_test.png">

By default, the Search Settings are set to **Intents** and **Fair Plus**. This means that the algorithm first checks for matches using NLU, with a threshold of Fair Plus. If it doesn’t find any matches, it attempts a text search as well. Because of this, you might see a message like "No intent matched. Performed text search. 3 results found." This means you should add some more training phrases to the intent to improve the results.

* If you don’t want the follow-up text search, change the **Search Mode** to "Intents Only." This performs only the intents search.
* If you want to perform only the text search, change the **Search Mode** to "Text."

For more on search modes, see [here](knowledge-base-common-common-concepts.html#knowledge-base-searches).

If you need to, add more training phrases:

* Add them to the intents in the domain if you're using Domain intents
* Add them as intent qualifiers in the article if you're using Knowledge Base intents ([legacy](knowledge-base-internal-knowledge-bases-introduction.html#choosing-between-knowledge-base-intents-and-domain-intents))

#### Adding positive and negative learnings

You can also use the Thumb Up and Thumbs Down icons displayed in a search.

Continuing our example of an internal knowledge base, the image below illustrates an utterance that returned some results. However, the preferred result was only a FAIR PLUS match.

Tap the **Thumbs Up** icon (and click **Save** in the resulting window) to add the utterance to the article's Positive Learnings set. These are the phrases for which you want a match to occur.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_test_thumbsUp.png">

If you were to rerun the search, the article would return with a higher score.

Tapping **Thumbs Down** does the opposite: It adds the utterance to the article's Negative Learnings set. These are the phrases for which you don't want the article to appear in the result even if it is matched to the consumer's intent.

{: .important}
Positive and negative learnings work the same way for 1) internal knowledge bases and 2) external knowledge bases that use LivePerson AI.

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