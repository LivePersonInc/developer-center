---
pagename: Overview
redirect_from:
    - conversation-builder-knowledge-base.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-overview.html
indicator: both
---

In Conversation Builder, a knowledge base is a great tool to answer questions about a variety of topics specific to your bot's area of expertise. One would typically add a [knowledge base integration](conversation-builder-integrations-knowledge-base-integrations.html) in a fallback dialog to provide simple answers to topics not covered elsewhere in the bot.

The Knowledge Base application in the Conversation Builder platform lets you to create and manage knowledge bases and articles, which are then processed by an NLU engine. This allows the bot to leverage [intents](intent-builder-intents.html) and [entities](intent-builder-entities.html) to recommend the most accurate articles to an inquiring consumer. FAQ bots and Agent Advisor widgets are both driven by a knowledge base full of articles, intelligently delivering the right content to the consumer at the right time.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_overview.png">

### Access the Knowledge Base

**To access the Knowledge Base application**

1. On the left sidebar in LiveEngage, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
2. In the Conversational AI dashboard, click **Knowledge Base**.

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

When the Knowledge Base uses Natural Language Understanding (NLU) algorithms to evaluate a consumer's input against a knowledge base, it scores the articles based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR, or POOR. The confidence score breakdown looks like this:

* VERY GOOD: 85-100% match

* GOOD: 70-85% match

* FAIR PLUS: 65-70% match

* FAIR: 50-65% match

When you integrate a knowledge base with a bot via a [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html), you specify the minimum score that a result must have in order to be returned. (The highest performing article with that threshold is returned.) You can select from VERY GOOD, GOOD, or FAIR PLUS. The default value is GOOD. If you downgrade the threshold to FAIR PLUS, be sure to test whether the quality of the results meets your expectations. It's generally recommended to keep the quality above FAIR PLUS.

### Knowlege Base intents versus Domain intents

When dealing with a knowledge base, an intent is the question that the consumer has ("What's your return policy?") or a problem the user needs to solve ("I can't remember my password."). 

While the article's title represents the intent of the article, you can also specify the intent using alternate formats. You can do this right inside the article by adding what are called "intent qualifiers":

<img style="width:475px" src="img/ConvoBuilder/kb_intents_KB.png">

Or, you can define these alternate formats in a domain in Intent Builder. Here, they're called "training phrases":

<img style="width:525px" src="img/ConvoBuilder/kb_intents_IB.png">

When you [add a knowledge base](knowledge-base-knowledge-bases.html#add-a-knowledge-base), you'll specify which configuration approach you're using for the knowlege base:

<img class="fancyimage" style="width:400px" src="img/ConvoBuilder/kb_intentAssociation.png">

* **Knowledge Base Intents**: Select if this if you're using intents (i.e., intent qualifiers) that reside in the article itself.
* **Domain Intents**: Select this if you're using intents from a domain that's defined in Intent Builder.

### Languages

When you [add a knowledge base](knowledge-base-knowledge-bases.html#add-a-knowledge-base), you'll specify its language.

When a text-to-text search is performed and a match is found, the knowledge base's language doesn't play a role. Whatever article is matched is simply returned.

When an NLU search is performed, the knowledge base's language works differently based on how you've defined the knowledge base:

* If the knowledge base uses *Knowledge Base* intents, the knowledge base's language is used. In this case, only English and Spanish are supported.

* If the knowledge base uses *Domain* intents, the domain's language is used instead. In this case, the languages supported depend on the domain's [NLU provider](intent-builder-natural-language-understanding.html).