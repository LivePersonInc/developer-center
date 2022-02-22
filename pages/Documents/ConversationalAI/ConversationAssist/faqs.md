---
pagename: FAQs
redirect_from:
    - conversation-orchestrator-agent-assist-faqs.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Assist
permalink: conversation-assist-faqs.html
indicator: messaging
---

#### Are third-party bots supported?

Yes, contact your LivePerson account representatives to add support.

#### Can I turn off all recommendations?
Yes, you can turn off recommendations globally. To do this:

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist).
2. Click **Settings** from the menu at the top.
3. Under **General**, click the Suspend toggle.

#### Can I turn off recommendations from an individual recommendation source?
Yes, you can do this per recommendation source. To do this:

1. [Access Conversation Assist](conversation-assist-overview.html#access-conversation-assist).
2. Click **Recommendations Sources** from the menu at the top.
3. Click the **Knowledge Bases** tab or the **Bots** tab, as appropriate.
4. Beside the source, click the <img style="width:25px" src="img/agentassist/icon_managesource.png"> (Manage source) icon.
5. In the **Manage recommendation source** dialog, change the Status to “OFF.”
6. Click **Save**.

#### Why aren’t my knowledge bases discovered?

There are a few reasons why this might be the case. For more, see [here](conversation-assist-troubleshooting.html#knowledge-bases) in *Troubleshooting*.

#### Why aren’t my knowledge base answers formatted?

Currently, only hyperlinks are supported.

#### On the Home page, in the Recommendations widget, the Summary data does not align with the graph data. Why is this?

There’s a bug in the Summary information in this widget. It should show the number of used recommendations “over” the number of offered recommendations, where the latter (the denominator) reflects the recommendations that were and weren’t used.

Currently, the denominator is incorrect. It reflects only the recommendations that weren’t used.

#### How are recommendations made?

To make recommendations, Conversation Assist analyzes the available bots and knowledge base articles that match the consumer’s intent, and it finds the best ones. The recommendations are made by choosing those ranked highest by relevance score.

{: .important}
No bot or answer recommendations are made when the consumer’s message is 3 words or fewer, or when the consumer’s message is non-intentful (e.g., a greeting or other phrase like, “Are you still there” or “Give me a minute,” and so on).<br><br>All recommendations that are made based on consumer utterances are cached for 3 hours. Keep this in mind as you update your bots and knowledge bases. If things look stale during testing, try using a slightly different utterance.

The rules for how the recommendations are made and ordered are as follows:

1. **Which recommendations to include?** First, include all answer (article) recommendations. Second, include all bot recommendations. This means that answers are included before bots even when the answer scores are lower than that of the top bot recommendation.

    The scores for included answers must meet the [Answer Confidence threshold](conversation-assist-recommendation-sources-configuring-settings.html#answer-confidence), which is configurable during setup. Similarly, the scores for included bots must meet the [Bot Confidence threshold](conversation-assist-recommendation-sources-configuring-settings.html), which is also configurable during setup.

2. **How to order the recommendations?** Within each subgroup of recommendations (answers, bots), sort the recommendations by relevance score in descending order so that the higher the score, the higher the recommendation.

As an example, assume that you have set up 2 knowledge bases and 3 bots. They get called for recommendations, and the following scores are returned:

* knowledge base article 1 = 90%
* knowledge base article 2 = 60%
* bot 1 = 100%
* bot 2 = 80%
* bot 3 = 0%

If the account’s Conversation Assist settings are 1) maximum number of recommendations = 4, 2) Answer Confidence = GOOD (70%), and 3) Bot Confidence = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 1 (90%)
* bot 1 (100%)
* bot 2 (80%)

Knowledge base 2 and Bot 3 have been filtered out because their relevance scores didn't meet the confidence thresholds that were configured.

As a second example, assume that you have set up 4 knowledge bases and 2 bots. They get called for recommendations, and the following scores are returned:

* knowledge base article 1 = 72%
* knowledge base article 2 = 80%
* knowledge base article 3 = 100%
* knowledge base article 4 = 75%
* bot 1 = 100%
* bot 2 = 100%

If the account’s Conversation Assist settings are 1) maximum number of recommendations = 4, and 2) Answer Confidence = GOOD (70%), and 3) Bot Confidence = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 3 = 100%
* knowledge base article 2 = 80%
* knowledge base article 4 = 75%
* knowledge base article 1 = 72%

In this case, the agent doesn’t see any bot recommendations because article recommendations are always included first. The maximum number of recommendations is 4, and there are 4 article recommendations with a relevance score of GOOD or better.
