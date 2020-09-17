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

This topic contains common, conceptual information that is relevant to:

* [External knowledge bases with LivePerson AI](knowledge-base-external-knowledge-bases-external-kbs-with-liveperson-ai.html)
* [Internal knowledge bases](knowledge-base-internal-knowledge-bases-introduction.html), which also use LivePerson AI

### Knowledge base searches

When you integrate a knowledge base with a bot via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), you specify a "mode" for the search; this determines the type of search that is performed. Possible modes include:

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
* With an [internal knowledge base](knowledge-base-internal-knowledge-bases-introduction.html), the search algorithm checks the consumer's input against the title, summary, detail, [Knowledge Base intents](knowledge-base-internal-knowledge-bases-introduction.html#knowlege-base-intents-versus-domain-intents) (intent qualifiers), and tags.

### Scoring and thresholds

When the Knowledge Base uses Natural Language Understanding (NLU) algorithms to evaluate a consumer's input against a knowledge base, it scores the articles based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR or POOR. 

| If the knowledge base is... | Then... |
| --- | --- |
| an external knowledge base with LivePerson AI | the scoring breakdown for the NLU engine used by the associated domain is used |
| an internal knowledge base with Domain intents | the scoring breakdown for the NLU engine used by the associated domain is used |
| an internal knowledge base with Knowledge Base intents (intent qualifiers) | the scoring breakdown for LivePerson NLU v1 is used |

For these confidence score breakdowns, see [here](intent-builder-intents.html#what-is-the-intent-scorethreshold).

When you integrate a knowledge base with a bot via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), you specify the minimum score that a result must have in order to be returned. The highest performing article with that threshold is returned. You can select from VERY GOOD, GOOD or FAIR PLUS. The default value is GOOD.

If you downgrade the threshold to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS.
