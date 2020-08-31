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

### Introduction

A knowledge base is a repository of articles that support a particular classification in your business (e.g., Human Resources FAQs).

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_overview.png">

A knowledge base is a great tool to answer questions about a variety of topics specific to a bot's area of expertise. Typically, in Conversation Builder, you might add a knowledge base integration in a Fallback dialog to provide simple answers to topics not covered elsewhere in the bot. Alternatively, you might have an FAQ bot that is driven by a knowledge base full of articles.

In the Knowledge Base application, you add and manage knowledge bases. These either contain articles, or they integrate with an external content source that contains them. In the Conversation Builder application, you integrate the knowledge bases with your bots.

### Content sources
You can create knowledge bases using a variety of content sources:

* Content management system (CMS)
* Google sheet
* CSV file

You can also start from scratch and author articles directly in a knowledge base.

#### Content management systems (CMS)
If you have a CMS with well-curated content that you want to leverage in bot conversations, you can add a CMS knowledge base. This is one where the content is authored and managed entirely within the external CMS application.

You can integrate with any CMS that has the capability, i.e., an API connector. Notable examples include Salesforce and Zendesk. Integrating with your CMS lets your content creators use familiar tools and workflows to author and manage the content.

Within the Knowledge Base application, a CMS knowledge base serves as a connector to the CMS. You can choose to use LivePerson AI (recommended) or use the CMS’ query and answer API to select and serve the content. If you use LivePerson AI, read-only article information is displayed in the knowledge base to assist you as you do some configuration work. If you use the CMS’ API instead, read-only article information isn’t displayed except when testing the knowledge base.

#### Google sheets
If your tool of choice is a simple Google sheet, you can add a LivePerson knowledge base and link the sheet to it. Once you add the knowledge base using the sheet, you can follow one of two workflows:

* Add and update the articles in the linked Google sheet as needed, and then sync the knowledge base to overwrite the knowledge base with the contents in the sheet.
* Add and update the articles directly in the knowledge base as needed. They are editable within the UI to support this workflow. Sync plays no role in this workflow.

#### CSV files
If your tool of choice is a simple CSV sheet, you can add a LivePerson knowledge base and import the contents of the CSV file when you do. Note that the import is a one-time operation when you add the knowledge base. Thereafter, you add and update the articles directly in the knowledge base.

#### Starting from scratch
If you’re starting a knowledge base from scratch, and you prefer to work directly in the Knowledge Base application, you can do this. Simply add a LivePerson knowledge base and start adding articles.

### Access Knowledge Base

**To access the Knowledge Base application**

1. On the left sidebar in Conversational Cloud, click the <img style="width:30px" src="img/ConvoBuilder/icon_cb.png"> icon.
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

When the Knowledge Base uses Natural Language Understanding (NLU) algorithms to evaluate a consumer's input against a knowledge base, it scores the articles based on the confidence level of the match: VERY GOOD, GOOD, FAIR PLUS, FAIR, or POOR. If you're using Knowledge Base intents, the confidence score breakdown for LivePerson NLU v1 is used. If you're using Domain intents, the breakdown for the NLU engine used by the domain is used. For the breakdowns, see [here](intent-builder-domains.html#what-is-the-intent-scorethreshold).

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

### Active versus inactive articles

An article is either active or inactive. Active articles are returned in knowledge base searches in Knowledge Base integrations while inactive articles aren't returned.

* An article is *active* if its **Enable Article** setting is turned on. If the article has **Valid From** and/or **Valid To** dates (optional, specified in [UTC](https://www.timeanddate.com/worldclock/timezone/utc)), it is only active during the specified time period. If no dates are specified, an enabled article is always active.
* An article is *inactive* if its **Enable Article** setting is turned off. It's also inactive if the setting is turned on, but the current date and time in UTC falls outside the time period specified by **Valid From** and/or **Valid To**.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_validDates.png">

In the Knowledge Base application, you can easily identify an article's current status:

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_articleStatus.png">

#### Using Valid From and Valid To dates

You can specify optional **Valid From** and/or **Valid To** dates when you [add an article](knowledge-base-articles.html#add-an-article). 

For example, you might run a promotion over a holiday that has an associated FAQ, and that FAQ should only be used for a finite period of time. Or, you might have an article that you want to become active on a certain date and remain so indefinitely. You can satisfy requirements like these with **Valid From** and/or **Valid To**.