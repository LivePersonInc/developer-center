---
pagename: Introduction
redirect_from:
    - knowledge-base-internal-knowledge-bases-introduction.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: KnowledgeAI
subfoldername: Internal Knowledge Bases
permalink: knowledgeai-internal-knowledge-bases-introduction.html
indicator: both
---

### What's an internal knowledge base?

An internal knowledge base is a built-in knowledge base, i.e., one whose content you can create and manage directly within the KnowledgeAI application. You can:

* Start from scratch, and add articles directly within KnowledgeAI.
* Do a one-time import of articles from a CSV file, and maintain the articles thereafter within KnowledgeAI.
* Link the knowledge base to a Google sheet. You can maintain the Google sheet and sync the knowledge base to overwrite the knowledge base with the sheet’s contents. Or, you can add the knowledge base using the Google sheet and work thereafter entirely within KnowledgeAI.

An internal knowledge base always makes use of a [Natural Language Understanding (NLU) engine](intent-manager-natural-language-understanding-introduction.html) to [evaluate the articles](knowledgeai-using-intents-with-kbs.html#search-modes) in the knowledge base against the consumer’s utterance (the intent). The articles, which have associated intents, are matched and [scored](knowledgeai-using-intents-with-kbs.html#scoring-and-thresholds) by the engine, and the most accurate article is sent to the inquiring consumer.

### High-Level Workflow

When adding an internal knowledge base, follow this workflow:

1. In KnowledgeAI:
    1. [Add the internal knowledge base](knowledgeai-internal-knowledge-bases-knowledge-bases.html). In this step you can import articles from a CSV file or link to a Google sheet that contains them.
    2. [Add the articles](knowledgeai-internal-knowledge-bases-articles.html) if necessary.
    3. [Train](knowledgeai-using-intents-with-kbs.html) the articles to match consumer utterances.
2. Expose the articles to consumers by:
    * (Conversation Builder) [Adding a KnowledgeAI interaction](conversation-builder-interactions-integrations.html#knowledge-ai-interactions) in a bot
    * (Conversation Orchestrator) Adding a KnowledgeAI integration as a part of an [Conversation Assist](conversation-assist-overview.html) component

### Domain intents versus Knowledge Base intents

#### Domain intents
When dealing with a knowledge base, an intent is the question that the consumer has ("What's your return policy?") or a problem the user needs to solve ("I can't remember my password."). 

While the article's title represents the intent of the article, you can also specify the intent using alternate formats. You define these alternate formats in Intent Manager, within an intent in a domain. Here, they're called "training phrases":

<img style="width:300px" src="img/ConvoBuilder/kb_domain_intents1.png">

Once you've created your domain of intents for the knowledge base, over in the KnowledgeAI application, you create the knowledge base and specify the associated domain when you do: 

<img style="width:700px" src="img/ConvoBuilder/kb_domain_intents3.png">

Within the newly created knowledge base, you then link each article to an intent in the domain.

<img style="width:700px" src="img/ConvoBuilder/kb_domain_intents2.png">

With Domain intents like these, you can use any of the following [NLU engines](intent-manager-natural-language-understanding-introduction.html) for intent matching:
* LivePerson
* LivePerson (Legacy)
* A third-party NLU engine 

Domain intents make it possible for you to use the same domain in multiple ways, i.e., in knowledge bases, bots, or other features like Intent Manager's [Intent Analyzer](intent-manager-overview.html).

#### Knowledge Base intents

{: .important}
As of March 5, 2021, you can no longer create a knowledge base that uses Knowledge Base intents.

If you created your knowledge base before March 5, 2021, you might have chosen *not* to define the intents in a domain in Intent Manager. Instead, you might have specified the intent's alternate formats directly within the article itself. In this case, these alternative formats are called "intent qualifiers":

<img style="width:350px" src="img/ConvoBuilder/kb_kb_intents1.png">

Knowledge Base intents like these are a *legacy feature* that uses the LivePerson (Legacy) engine for intent matching. Knowledge Base intents don't allow for reuse, as the intent qualifiers themselves are defined within the articles in the knowledge base.

To take advantage of the benefits of performance and flexibility, you are encouraged to [convert a knowledge base from Knowledge Base intents to Domain intents](knowledgeai-internal-knowledge-bases-knowledge-bases.html#convert-knowledge-base-intents-to-domain-intents) as soon as possible, as **LivePerson will deprecate the LivePerson (Legacy) engine at the end of 2021**.

### Languages

#### Working with special language characters

If you need to support special language characters (e.g., ö, ü, ß), and you’re creating an internal knowledge base by importing a CSV file, ensure the import file is saved as a UTF-8 encoded CSV file beforehand.

### Active versus inactive articles

An article is either active or inactive. Active articles are returned in knowledge base searches in KnowledgeAI integrations while inactive articles aren't returned.

* An article is *active* if its **Enable Article** setting is turned on. If the article has **Valid From** and/or **Valid To** dates (optional, specified in [UTC](https://www.timeanddate.com/worldclock/timezone/utc)), it is only active during the specified time period. If no dates are specified, an enabled article is always active.
* An article is *inactive* if its **Enable Article** setting is turned off. It's also inactive if the setting is turned on, but the current date and time in UTC falls outside the time period specified by **Valid From** and/or **Valid To**.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_validDates.png">

In the KnowledgeAI application, you can easily identify an article's current status:

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/kb_articleStatus.png">

#### Using Valid From and Valid To dates

You can specify optional **Valid From** and/or **Valid To** dates when you [add an article](knowledgeai-internal-knowledge-bases-articles.html). 

For example, you might run a promotion over a holiday that has an associated FAQ, and that FAQ should only be used for a finite period of time. Or, you might have an article that you want to become active on a certain date and remain so indefinitely. You can satisfy requirements like these with **Valid From** and/or **Valid To**.

### Positive and negative learnings (legacy)

*Positive learnings* are phrases for which you want a match to the article to occur. *Negative learnings* are phrases for which you don't want the article to appear in the result even if it is matched to the consumer's intent.

{: .important}
As of April 19, 2021, you can no longer add new positive and negative learnings to articles. Existing learnings continue to work as expected, but they are read-only.<br><br>The alternative to adding a positive learning is to add a training phrase to the intent in the domain. Updating the domain itself is the preferred approach to boosting the match rate.<br><br>Negative learnings were primarily needed for knowledge bases using the LivePerson (Legacy) NLU engine, to support single-word negation (e.g., "I want to buy" versus "I don't want to buy"). To take advantage of the benefits of performance and flexibility offered by the LivePerson engine, you are encouraged to convert to the LivePerson engine as soon as possible. **LivePerson will deprecate the LivePerson (Legacy) engine at the end of 2021**.

#### How positive and negative learnings work

Positive and negative learnings play a role in intent detection regardless of whether you're using domain intents or knowledge base intents.

* When using domain intents with the LivePerson engine or a 3rd-party NLU engine, the positive learnings are applied (added) to the training phrases when the model is trained, and the negative learnings are applied during processing of user inputs.

* When using knowledge base intents or when using domain intents with LivePerson (Legacy) engine, positive and negative learnings are applied during processing of user inputs.