---
pagename: Search Modes
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
permalink: knowledgeai-search-modes.html
indicator: both
---

### Introduction

A knowledge base search is performed using a specified "search mode." The search mode determines the type of search. Possible modes include:

* Intents
* Intents Only
* Text

### Intents mode

When the Intents mode is used, an exact match, text-to-text search is performed first. If a match isn't found by the first search, KnowledgeAI next uses Natural Language Understanding (NLU) algorithms to match the consumer input to articles. And if a match isn't found by the NLU search, a final, text-to-text search is performed as a fallback.

<img style="width:750px" src="img/ConvoBuilder/kb_search_modes_ext.png">
<img style="width:750px" src="img/ConvoBuilder/kb_search_modes_int.png">

### Intents Only mode

The Intents Only mode is like the Intents mode (above) except that the final, text-to-text search isn't performed as a fallback.

### Text mode

When the Text mode is used, a text-to-text search is performed:

* With an [external knowledge base with LivePerson AI](knowledgeai-external-knowledge-bases-external-kbs-with-liveperson-ai.html), the search algorithm checks the consumer's input against the title and tags.
* With an [internal knowledge base](knowledgeai-internal-knowledge-bases-introduction.html), the search algorithm checks the consumer's input against the title, summary, detail, [Knowledge Base intents](knowledgeai-internal-knowledge-bases-introduction.html#domain-intents-versus-knowledge-base-intents) (intent qualifiers), and tags.

You can improve the quality of your knowledge base answers by linking your articles to intents and performing intent-based searches. However, often this change is introduced gradually, as time and opportunity allow. Typically, Text searches are used when you haven’t yet linked your articles to intents.

Be aware that, when a Text search is performed, if a match for the search phrase is found, the associated confidence score is reduced to FAIR_PLUS if either of the following is true:

* The search phrase has less than three (3) words.
* The search phrase and the stored content don’t have matched words in sequence (with two deviations).

Therefore, if you’re using a Text search, LivePerson recommends that you test and tune the knowledge base using a threshold of FAIR_PLUS. If you aren’t satisfied with the results, increase the threshold to GOOD.