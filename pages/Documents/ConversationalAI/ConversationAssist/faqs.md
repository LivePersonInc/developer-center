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

#### How are recommendations made?

To make recommendations, Conversation Assist analyzes the available bots and knowledge base articles that match the consumer’s intent, and it finds the best ones. The recommendations are made by choosing those ranked highest by relevance score.

{: .important}
No bot or answer recommendations are made when the consumer’s message is 3 words or fewer, or when the consumer’s message is non-intentful (e.g., a greeting or other phrase like, “Are you still there” or “Give me a minute,” and so on).<br><br>All recommendations that are made based on consumer utterances are cached for 3 hours. Keep this in mind as you update your bots and knowledge bases. If things look stale during testing, try using a slightly different utterance.

The rules for how the recommendations are made and ordered are as follows:

1. **Which recommendations to include?** First, include all answer (article) recommendations. Second, include all bot recommendations. This means that answers are included before bots even when the answer scores are lower than that of the top bot recommendation.

    Included answers must have a relevance score of GOOD (70%) or higher. The scores for included bots must meet the [Bot Confidence** threshold](conversation-assist-recommendation-sources-configuring-settings.html), which is configurable during setup.

2. **How to order the recommendations?** Within each subgroup of recommendations (answers, bots), sort the recommendations by relevance score in descending order so that the higher the score, the higher the recommendation.

As an example, assume that you have set up 2 knowledge bases and 3 bots. They get called for recommendations, and the following scores are returned:

* knowledge base article 1 = 90%
* knowledge base article 2 = 60%
* bot 1 = 100%
* bot 2 = 80%
* bot 3 = 0%

If the account’s Conversation Assist settings are 1) maximum number of recommendations = 4, and 2) Bot Confidence threshold = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 1 (90%)
* bot 1 (100%)
* bot 2 (80%)

Knowledge base 2 has been filtered out because its relevance score isn’t GOOD or better (70% or higher). Bot 3 has been filtered out because its score didn’t meet the confidence threshold for bots.

As a second example, assume that you have set up 4 knowledge bases and 2 bots. They get called for recommendations, and the following scores are returned:

* knowledge base article 1 = 72%
* knowledge base article 2 = 80%
* knowledge base article 3 = 100%
* knowledge base article 4 = 75%
* bot 1 = 100%
* bot 2 = 100%

If the account’s Conversation Assist settings are 1) maximum number of recommendations = 4, and 2) Bot Confidence threshold = 70%, then the agent receives the following, ordered list of recommendations:

* knowledge base article 3 = 100%
* knowledge base article 2 = 80%
* knowledge base article 4 = 75%
* knowledge base article 1 = 72%

In this case, the agent doesn’t see any bot recommendations because article recommendations are always included first. The maximum number of recommendations is 4, and there are 4 article recommendations with a relevance score of GOOD or better.
