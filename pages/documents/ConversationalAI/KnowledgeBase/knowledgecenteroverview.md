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

A bot is a great way to provide help and information, and it's common for a bot to use a knowledge base as a fallback to answer a question that the bot itself can't answer.

The Knowledge Base application in the Conversation Builder platform lets you to create and manage knowledge bases and articles, which are then processed by an NLU engine. This allows the bot to leverage [intents](intent-builder-intents.html) and [entities](intent-builder-entities.html) to recommend the most accurate articles to an inquiring consumer. FAQ bots and Agent Advisor widgets are both driven by a knowledge base full of articles, intelligently delivering the right content to the consumer at the right time.

<img class="fancyimage" style="width:750px" src="img/beaut_kb_2.png">

### How a knowledge base works

The Knowledge Base uses two types of algorithms to match a consumer's input to articles and return an appropriate article.

First, an *exact match* search is performed. This checks the consumer's input against the titles, intent qualifiers (if used), and tags in the articles. If an exact match is found, the article is returned. Tags play an important role here; when an utterance contains one of these keywords, the match is scored higher.

If an exact match isn't found, the Knowledge Base then uses *Natural Language Understanding (NLU)* algorithms to match the consumer input to articles. If it finds a match to a reasonable degree of certainty, it returns the article. The article attributes against which the NLU engine compares the consumer's input include:

* Title
* Intents (either knowledge base intents or domain intents)
* Positive and negative learnings that the article has acquired

The Knowledge Base returns results scored as VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR.

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

When the exact match search is performed and an exact match is found, the knowledge base's language doesn't play a role. Whatever article is exactly matched is simply returned.

If no exact match is found, and therefore NLU is used to return a result, the knowledge base's language works differently based on how you've defined the knowledge base:

* If the knowledge base uses *knowledge base* intents, the knowledge base's language is used. In this case, only English and Spanish are supported.

* If the knowledge base uses *domain intents*, the domain's language is used instead. In this case, the languages supported depend on the domain's NLU provider.

### Settings toolbar

As you work on the articles in a knowledge base, you'll often access the toolbar in the lower-right corner. It provides access to the following panels:

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_chat.png"> **Chat**: Use this to select a bot you've previously created and linked to the knowledge base, and feed it test user input to see if it matches content as you'd expect.

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_tags.png"> **Tags**: This panel displays all tags you've previously used, so you can review them all in one place and reuse them in future articles.

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_categories.png"> **Categories**: This panel displays all categories you've previously used, so you can review them all in one place and reuse them in future articles.

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_test.png"> **Test User Input**: This panel is similar to the Chat panel but is divorced from a specific bot. Use it to feed user input directly into a knowledge base and test your content matching without the context of an actual dialog.

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_settings.png"> **Knowledge Base Menu**: Use this to access various knowledge base settings and features.

* <img style="width:30px" src="img/ConvoBuilder/icon_kb_intentAnalytics.png"> **Intents Analytics**: Use this to see historical information on the intents that were and weren't matched by bots to the knowledge base's articles.