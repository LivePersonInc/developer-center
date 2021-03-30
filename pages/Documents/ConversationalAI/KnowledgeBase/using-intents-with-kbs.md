---
pagename: Using Intents with KBs
redirect_from:
    - conversation-builder-knowledge-base.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-using-intents-with-kbs.html
indicator: both
---

### Introduction

If your knowledge base is an [external knowledge base with LivePerson AI](knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html) or an [internal knowledge base](knowledge-base-internal-knowledge-bases-introduction.html) (which also uses LivePerson AI), it makes use of Natural Language Understanding or NLU to evaluate the articles against the consumer's utterance (the intent) in order to return the highest scoring article.

To set this up, you create a domain with the necessary intents in [Intent Builder](intent-builder-overview.html), where the domain specifies the [NLU engine](intent-builder-natural-language-understanding.html) to use. Then, within the Knowledge Base application, you 1) associate the domain with the knowledge base, 2) associate the domain's intents with the articles, and 3) train the knowledge base to use the intents to return the articles.

{: .important}
Intent Builder offers a set of [pre-built domains](intent-builder-overview.html#prebuilt-domains). These are designed to get you up and running quickly with intents.

### Associate a domain with a knowledge base

You associate a domain with an external knowledge base when you [add the knowledge base](knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html#add-an-external-kb-with-liveperson-ai):

<img style="width:700px" src="img/ConvoBuilder/kb_add_ext.png">

And you likewise associate a domain with an internal knowledge base when you [add the knowledge base](knowledge-base-internal-knowledge-bases-knowledge-bases.html#add-an-internal-knowledge-base): 

<img style="width:700px" src="img/ConvoBuilder/kb_add_int.png">

Associating the domain gives you access to the domain's intents, so you can associate them with the articles. This is the next step in connecting your content to intents.

{: .important}
When you are adding the knowledge base, take care when selecting the domain. You can't change the domain after adding the knowledge base.

### Associate intents with articles

After you've added a knowledge base that is associated to a domain, configure the articles so that each is linked to the appropriate intent.

<img style="width:600px" src="img/ConvoBuilder/kb_associate_article.png">

### Train a knowledge base

After you've added your content and linked it to intents, train the knowledge base. Training involves:

1. Performing a search using a consumer utterance.
2. Reviewing the results.
3. Adding or removing training phrases in the intents as needed. Adding or removing positive/negative learnings in the articles as needed.

**To train a knowledge base**

Open the knowledge base, and click **Articles** in the upper-left corner if the page isn't already displayed. Then enter an utterance, and review the results.

The following image illustrates a search in an internal knowledge base. Things work similarly for an external knowledge base.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_test.png">

For testing and learning purposes, by default, the Filter settings are set to "Intents" and "Poor." 

<img class="fancyimage" style="width:350px" src="img/ConvoBuilder/kb_sortandfilter.png">

This means that the algorithm first checks for matches using NLU, with a threshold of Poor. If it doesn’t find any matches, it attempts a text search as well. Because of this, you might see a message like "No intent matched. Performed text search. 3 results found." When this happens, you should add some more training phrases to the intent to improve the results.

If you don’t want the follow-up text search, change the **Search Mode** to "Intents Only." This performs only the intents search. If you want to perform only the text search, change the **Search Mode** to "Text." For more on search modes, see farther below in this topic.

If you don't get any results with your search, you can adjust these filters by clicking **Add Filters** in the upper-left corner.

Based on your results, add more training phrases to the intents in the domain if needed.

#### Adding positive and negative learnings

You can also use the Thumb Up and Thumbs Down icons displayed in a search.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_test_thumbsUp.png">

Continuing our example of an internal knowledge base, the image above illustrates an utterance that returned some results. However, the preferred result was only a FAIR PLUS match.

Tap the **Thumbs Up** icon to add the utterance to the article's Positive Learnings set, which can be viewed in the article's **Advanced Settings**. These are the phrases for which you want a match to occur. If you were to rerun the search after doing this, the article would return with a higher score.

Tap **Thumbs Down** to do the opposite. Thumbs Down adds the utterance to the article's Negative Learnings set. These are the phrases for which you don't want the article to appear in the result even if it is matched to the consumer's intent.

{: .important}
Positive and negative learnings work the same way for internal and external knowledge bases.

#### Beware of overtraining

Something to keep in mind when training in general, and using the Thumbs Up/Down icons in specific, is that because they are so easy to use, they are often misused. Often people use Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down. Anything over about 10 - 15 training phrases might begin to return false positives.

### Search modes

A knowledge base search is performed using a specified "search mode." The search mode determines the type of search. Possible modes include:

* Intents
* Intents Only
* Text

#### Intents mode

When the Intents mode is used, an exact match, text-to-text search is performed first. If a match isn't found by the first search, Knowledge Base next uses Natural Language Understanding (NLU) algorithms to match the consumer input to articles. And if a match isn't found by the NLU search, a final, text-to-text search is performed as a fallback.

<img style="width:750px" src="img/ConvoBuilder/kb_search_modes_ext.png">
<img style="width:750px" src="img/ConvoBuilder/kb_search_modes_int.png">

#### Intents Only mode

The Intents Only mode is like the Intents mode (above) except that the final, text-to-text search isn't performed as a fallback.

#### Text mode

When the Text mode is used, a text-to-text search is performed:

* With an [external knowledge base with LivePerson AI](knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html), the search algorithm checks the consumer's input against the title and tags.
* With an [internal knowledge base](knowledge-base-internal-knowledge-bases-introduction.html), the search algorithm checks the consumer's input against the title, summary, detail, [Knowledge Base intents](knowledge-base-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents) (intent qualifiers), and tags.

### Scoring and thresholds

When the Knowledge Base uses Natural Language Understanding (NLU) algorithms to evaluate a consumer's input against a knowledge base, it scores the articles based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR or POOR. 

| If the knowledge base is... | Then... |
| --- | --- |
| an external knowledge base with LivePerson AI | the scoring breakdown for the NLU engine used by the associated domain is used |
| an internal knowledge base with Domain intents | the scoring breakdown for the NLU engine used by the associated domain is used |
| an internal knowledge base with Knowledge Base intents (intent qualifiers) | the scoring breakdown for LivePerson (Legacy) is used |

For these confidence score breakdowns, see [here](intent-builder-intents.html#what-is-the-intent-scorethreshold).

When you implement a knowledge base search within a bot via a [Knowledge AI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions), you specify the minimum score that a result must have in order to be returned. You can select from VERY GOOD, GOOD or FAIR PLUS. The default value is GOOD. If you downgrade the threshold to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS.
