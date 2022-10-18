---
pagename: Search Methods
redirect_from:
    - knowledgeai-search-modes.html
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
permalink: knowledgeai-search-methods.html
indicator: both
---

### Introduction

When a consumer asks a question or makes an intentful statement, and you pass that query to a knowledge base to find an answer, the answer can be retrieved in one of two ways:

* AI Search
* Intent Match

In actuality, it’s a little more nuanced than this (more on this later), but these are the primary search methods.

### AI Search

{: .note}
Currently, AI Search is available to a small number of brands. We plan to make it generally available soon, so stay tuned!

AI Search is KnowledgeAI’s powerful, one-size-fits-all search method that’s based on the latest research in deep learning. Key characteristics of this search include the following:

* **There’s no setup required**: This is some of the best news. AI Search works right out of the box. Don’t want to invest the time in creating and tuning intents in Intent Manager? No problem. You don’t have to. Just add your content to the knowledge base, add the KnowledgeAI interaction to the bot, and that’s it.
* **It gets to the intent**: The AI Search isn’t a type of search that just looks at the words for matches found between the consumer query and the answer. The search also makes a best attempt to determine the *meaning* behind those words: What is the consumer trying to convey?
* **It’s context-aware**: The search considers the whole of the consumer query (and nothing more at this time). So, for example, “I want to book a flight” is understood differently from “Can I borrow a second book at the library?” Homonyms like these are handled.
* **It’s phrasing-agnostic**: Synonyms are handled too: “I want to buy a ticket” and “I want to purchase a ticket” are understood similarly. Keep in mind that certain niche or archaic synonyms, especially abbreviations, might not be supported (unless you add them directly to the articles).
* **It returns multiple answers**: If more than one good answer is found, multiple answers can be returned. This means you can use the [KnowledgeAI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) to populate a “carousel” of good answers to the consumer, providing a better consumer experience.

#### Language support

To use AI Search, the language of knowledge base must be:

* English

However, language support is handled gracefully: AI Search always runs a text search as a final, fallback search. So, if your knowledge base uses an unsupported language, that text search is used to retrieve answers.

### Intent Match search

An Intent Match search is one that makes use of Natural Language Understanding or NLU to find the right answer to the consumer’s query. NLU leverages AI to identify various attributes of a message: meaning, sentiment, and more.

To use this type of search, you must add a set of intents in [Intent Manager](intent-manager-overview.html) and tune them for optimal answer retrieval. Then, back in KnowledgeAI, you must [tie your articles to the intents](knowledgeai-using-intents-with-kbs.html).

Like the AI Search, the Intent Match search is powerful and effective.

### Choosing a search method

One common question we get is, “Which search method do I use: Intent Match or AI Search?” This is a good question, and our answer to this is to use them both if you can, and if it meets your needs. They are better together.

#### Benefits of AI Search

* Works right out of the box. No setup is required.
* Performs well when handling consumer queries that are similar to articles in knowledge bases. The broader the coverage, the higher the probability that there will be a match to the consumer query.
* Makes up for issues that can occur when using intents. Since intents are trained by humans, an intent model might have some flaws: There might be gaps in the coverage. There might be an overlap in the coverage. Or, an intent might not be trained well enough. In other words, there’s an article that could be returned, but the match to the input query doesn’t meet the threshold required to return the article. Using the AI Search as a fallback to the Intent Match search is a good, recommended strategy to address issues like these.

#### Benefits of Intent Match search

* Lets you manipulate outcomes by tuning the answer retrieval yourself. This gives you a layer of control.
* Can outperform AI Search. NLU is better at making predictions. So, if you take the time to tune an intent well, the intent will likely outperform the AI Search. (That said, there’s a tradeoff here, as it’s a fairly significant effort to add and tune intents. Keep in mind that the AI Search performs well on its own.)
* More suitable for specialized scenarios. Conversations that use a highly specific vocabulary do better when intents are used. 
* Sometimes, only an Intent Match does the job. Scenarios can exist where the consumer query properly matches to an article that doesn’t have any content that relates to the query.

#### Search offerings

When you select an answer retrieval method in various parts of the UI, the following choices are offered:

* KnowledgeAI (recommended)
* Intent match only
* AI search only

Here’s an example:

<img class="fancyimage" style="width:800px" alt="The list of search offerings in the Answer Tester" src="img/ConvoBuilder/kb_searchofferings.png">

{: .note}
The “Intent match only” and “AI search only” options are primarily intended for testing and for diagnosing issues during troubleshooting. In Production, we recommend that you use the “KnowledgeAI” offering.

##### “KnowledgeAI” option

{: .note}
The “KnowledgeAI” option is what’s used by the [KnowledgeAI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) in Conversation Builder.

1. Runs an exact match search.
2. Runs the Intent Match search.
3. Runs the AI Search.

##### “Intent match only” option

1. Runs an exact match search.
2. Runs the Intent Match search.

##### “AI search only” option

1. Runs an exact match search.
2. Runs the AI Search.

If a result meeting or exceeding a certain threshold is found at any step, it’s returned.

### Match scores and thresholds

#### Match scores

Whenever a knowledge base is searched for an article match to a consumer query, the results receive scores. The score indicates the level of confidence in the match: VERY GOOD, GOOD, and so on.

The AI Search assigns scores as follows:

* VERY GOOD: 85-100% match
* GOOD: 70-85% match
* FAIR PLUS: 65-70% match
* FAIR: 50-65% match
* POOR: 0-50% match

The Intent Match search assigns scores as follows:

| If the knowledge base is... | Then... |
| --- | --- |
| An external knowledge base with LivePerson AI | The [scoring breakdown for the NLU engine used by the associated domain](intent-manager-key-terms-concepts.html#confidence-score-and-threshold) is used |
| An internal knowledge base with Domain intents | The [scoring breakdown for the NLU engine used by the associated domain](intent-manager-key-terms-concepts.html#confidence-score-and-threshold) is used |
| An internal knowledge base with Knowledge Base intents (intent qualifiers) | The [scoring breakdown for LivePerson (Legacy)](intent-manager-key-terms-concepts.html#confidence-score-and-threshold) is used |

#### Thresholds

Other applications in the Conversational AI suite let you specify a threshold &mdash; that is, a minimum score &mdash; that a result must have for it to be returned as an answer.

* You might be sending answers to consumers in automated conversations with bots. In this case, you can specify a threshold in the [KnowledgeAI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) within the bot in Conversation Builder.
* Or, you might be recommending answers to agents inline in their conversations with consumers. And, in this case, you can likewise specify an [answer threshold](conversation-assist-recommendation-sources-configuring-settings.html#answer-confidence) in Conversation Assist’s settings.

Regardless of the integration, if you lower the threshold, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS.

### FAQs

#### Which search method do I use: Intent Match or AI Search?

[Which search method is best](knowledgeai-search-methods.html#choosing-a-search-method) depends on the use case, your requirements, and your resources. KnowledgeAI’s AI Search works very well on its own and requires no setup. But use them both if you can; they are better together.

#### The AI Search isn’t performing as well as I’d like. What can I do?

If you have a consumer query for which there isn’t a relevant article to serve as the answer, just add that article.

While it’s unlikely that an existing, relevant article won’t yield results, it might happen. In this case, improve the article’s title and/or add tags to the article.

#### How does the AI Search work?

| In… | The input query is checked against… |
| -- | -- |
| An external knowledge base with LivePerson AI | title, tags |
| An internal knowledge base | title, summary, detail, tags |

#### How does the Intent Match search work?

| In… | The input query is checked against… |
| An external knowledge base with LivePerson AI | title, domain intents |
| An internal knowledge base | title, domain intents |

#### How does the exact match search work?

| In… | The input query is checked against… |
| -- | -- |
| An external knowledge base with LivePerson AI | title |
| An internal knowledge base | title |
