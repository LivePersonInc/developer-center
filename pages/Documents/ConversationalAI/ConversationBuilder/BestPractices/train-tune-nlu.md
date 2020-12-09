---
pagename: Train & Tune NLU
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Best Practices
redirect_from:
    - conversation-builder-best-practices-training-and-tuning-your-intents-and-faqs.html
    - conversational-ai-platform-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html
    - conversational-ai-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html
permalink: conversation-builder-best-practices-train-tune-nlu.html
indicator: both
---

### Introduction

Within a bot, you might be using intents and entities to trigger a dialog, or you might be using a knowledge base to return articles. Both of these require the use of Natural Language Understanding (NLU) algorithms.

Below are some best practices to keep in mind while using intents, entities, and knowledge bases, and while troubleshooting any issues that might occur.

### Leverage bot analytics

The Analytics portal can help you understand which of your intents are matching (or not) and give you the information you need to train and tune your intents. For help with leveraging analytics in this way, see [here](bot-analytics-tuning-opportunities.html).

If you see utterances in the **Unmatched Phrases** that should be matching a particular intent or Knowledge Base article, you can add them to the training phrases for these items. Keep in mind the best practices for creating training phrases for [intents](intent-builder-intents.html#best-practices) and [internal knowledge bases](knowledge-base-internal-knowledge-bases-best-practices.html).

### Use good training phrases

There are a number of reasons why your intent or knowledge base might be failing to return a result as you would expect. One of the most common causes is a lack of adequate training phrases. Follow best practices when creating training phrases; these help to ensure your intents and knowledge bases are well-trained and return the results you expect.

* [Best practices for intents](intent-builder-intents.html#best-practices)
* [Best practices for internal knowledge bases](knowledge-base-internal-knowledge-bases-best-practices.html)

### Test, train and tune

Training your intents or knowledge base is generally done by testing utterances, reviewing the results, and adding more training phrases as needed if the responses are returning with lower than desired scores.

* [Training intents](intent-builder-testing-single-utterance-testing.html)
* [Training a knowledge base](knowledge-base-using-intents-with-kbs.html)

### Use entities

[Entities](intent-builder-entities.html) are keywords that refer to a number of synonyms or values. For example, the entity "sports" might have a number of synonyms like walking, running, football, jogging, baseball, etc. When creating intents or articles, you can leverage the power of entities as well. This dramatically increases the accuracy and flexibility of your responses.

To refresh on using entities with intents, check out the [Intents tutorial](tutorials-guides-getting-started-with-bot-building-overview.html). For information on using entities with Knowledge Base articles, see [here](knowledge-base-internal-knowledge-bases-articles.html#using-entities-in-a-knowledge-base).

### NLU stop words

Stop words are words that are not used in the NLU to score an utterance. These words are essentially removed or ignored in the matching process.

If you want to ADD stop words to your Knowledge Base you can in the Settings. These words will be ignored by our NLU algorithms. This is generally used for words or phrases like your company name or brand, which usually is not needed or helping the scoring of an utterance. Below is a list of default stop words:

* "a"
* "about"
* "again"
* "against"
* "all"
* "am"
* "an"
* "and"
* "any"
* "are"
* "as"
* "at"
* "be"
* "because"
* "been"
* "being"
* "both"
* "but"
* "by"
* "I"
* "can"
* "cannot"
* "could"
* "did"
* "do"
* "does"
* "doing"
* "during"
* "each"
* "for"
* "from"
* "further"
* "had"
* "has"
* "have"
* "having"
* "he"
* "her"
* "here"
* "here's"
* "hers"
* "herself"
* "him"
* "himself"
* "his"
* "how"
* "how's"
* "i"
* "if"
* "in"
* "into"
* "is"
* "isn't"
* "it"
* "its"
* "itself"
* "me"
* "more"
* "most"
* "my"
* "myself"
* "no"
* "nor"
* "of"
* "on"
* "once"
* "only"
* "or"
* "other"
* "ought"
* "our"
* "ours
* "ourselves"
* "she"
* "should"
* "so"
* "some"
* "such"
* "than"
* "that"
* "the"
* "their"
* "theirs"
* "them"
* "themselves"
* "then"
* "there"
* "these"
* "they"
* "this"
* "those"
* "through"
* "to"
* "too"
* "very"
* "was"
* "we"
* "were"
* "what"
* "when"
* "where"
* "which"
* "while"
* "who"
* "whom"
* "why"
* "with"
* "would"
* "you"
* "your"
* "yours"
* "yourself"
* "yourselves"
