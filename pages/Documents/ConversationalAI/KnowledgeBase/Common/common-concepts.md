---
pagename: Common Concepts
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
subfoldername: Common
permalink: knowledge-base-common-common-concepts.html
indicator: both
---

### How a knowledge base works

#### Search modes
When you integrate a knowledge base with a bot via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), you specify a "mode" for the search; this determines the type of search that is performed. Possible modes include:

* **Intents**: First, a text-to-text search is performed; the search algorithm checks the consumer's input against the title and intent qualifiers (if used; intent qualifiers are applicable only when using Knowledge Base intents, not Domain intents).

    If a match isn't found by the first search, the Knowledge Base next uses Natural Language Understanding (NLU) algorithms to match the consumer input to articles. If it finds a match to a reasonable degree of certainty, it returns the article. The article attributes against which the NLU engine compares the consumer's input include the title, intents (either Knowledge Base intents or Domain intents), and the positive and negative learnings that the article has acquired.

    If a match isn't found by the NLU search, as a fallback, a final text-to-text search is performed. The search algorithm checks the consumer's input against the title, summary, detail, intent qualifiers (if used; intent qualifiers are applicable only when using Knowledge Base intents, not Domain intents), and tags in the articles.

    <img style="width:750px" src="img/ConvoBuilder/kb_intents_search.png">

* **Intents Only**: This mode is like the Intents mode except that the final text-to-text search isn't performed as a fallback.

* **All**: A text-to-text search is performed. The search algorithm checks the consumer's input against the title, summary, detail, intent qualifiers (if used; applicable to Knowledge Base intents only), and tags in the articles. 

#### Thresholds

When the Knowledge Base uses Natural Language Understanding (NLU) algorithms to evaluate a consumer's input against a knowledge base, it scores the articles based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR, or POOR. If you're using Knowledge Base intents, the confidence score breakdown for LivePerson NLU v1 is used. If you're using Domain intents, the breakdown for the NLU engine used by the domain is used. For the breakdowns, see [here](intent-builder-intents.html#what-is-the-intent-scorethreshold).

When you integrate a knowledge base with a bot via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), you specify the minimum score that a result must have in order to be returned. (The highest performing article with that threshold is returned.) You can select from VERY GOOD, GOOD, or FAIR PLUS. The default value is GOOD. If you downgrade the threshold to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS.

