---
pagename: Train & Tune NLU
redirect_from:
    - conversation-builder-best-practices-training-and-tuning-your-intents-and-faqs.html
    - conversational-ai-platform-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html
    - conversational-ai-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversational AI
subfoldername: Best Practices
permalink: conversation-builder-best-practices-train-tune-nlu.html
indicator: both
---

### Introduction

Within your Conversation Builder bot, you may be using intents and entities to trigger a dialog OR you may be using a Knowledge Base (KB) to return articles. Both of these require the use of our Natural Language Understanding (NLU) algorithms.

Below we outline some best practices to keep in mind while using intents, entities, and knowledge bases, and while troubleshooting any issues that might occur.

### Leveraging Bot Analytics

The Analytics portal will help you understand which of your intents are matching (or not) and give you the information you need to train and tune your intents.

To view your Intent metrics, go to the Analytics portal, select your bot and from the Overview page, select "Intents" from the dropdown menu.

The Analytics portal, by default, has a date range set to Yesterday. If you’d like to change it to Today or some custom range, tap on the date picker on the right and change. You can also change the time zone to your particular time, or even UTC time.

The Intents view lets you view both "Matched Intents" and “Unmatched Phrases” for your bot’s Intents, Patterns and attached Knowledge Bases. You can see all of them together, or you can select them individually in the Source dropdown menu on the left.

<img class="fancyimage" style="width:700px" src="img/hranalytics.png">

Here we’re looking at the Matched Intents for this bot. Most are coming from the KB, but you can see a Pattern for the greeting as well.

Tapping on Unmatched Phrases will show you user utterances that did not return any result from the bot Patterns, Intents or KBs.

If you see utterances in your Unmatched Phrases that should be matching a particular intent or KB articles, you can add it to the training phrases for these items. Keep in mind the best practices for creating training phrases.

### Training Phrases

There are a number of reasons why your intent or knowledge base might be failing to return a result as you would expect. One of the most common causes is a lack of adequate training phrases. The following are best practices that should be used when creating training phrases; these help to ensure your intents and knowledge bases are well-trained and return the results you expect.

#### One sentence, not multiple.

When creating training phrases for an Intent or KB article, keep them to one sentence. For example, "How do I activate my card?" is a much better training phrase than, “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences increase your risk of false positives.

#### How many training phrases do I need?

The number of training phrases that you need really depends upon your use case and type of intents.

Generally, for intents, it is recommended that you have between 10 - 25 good training phrases. For Knowledge Base articles, it is recommended that you have around 10 training phrases.

When you have more than 25 - 50 training phrases on an intent (or 10 - 15 on a KB article), it's likely that you have overtrained the intent, which might lead to false positives.

#### Tags in KB articles

Tags play a very important role in returning accurate results in your knowledge base. Where the training phrases should be intents (e.g., complete sentences), the tags should highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. When an utterance contains these keywords, it will be scored higher. Remember, these should be **words**, not sentences!

Also, if you find yourself needing a large number of tags, you most likely should be using an entity.

<img class="fancyimage" style="width:700px" src="img/tags.png">

### Testing, Training and Tuning

Training your intents or KB is generally done by testing utterances against it, reviewing the results, and adding more training phrases as needed if the returned responses are returning with lower than desired scores.

#### Training Intents

To test your intents, go to the Intent Builder, select the appropriate domain, tap on the tester icon (which looks like a bug) and enter an utterance into the tester. If you select a particular intent, then the tester will be testing against that specific intent. If you’d like to test across ALL intents in the domain, check the "Search in domain" box.

This is what a specific intent search looks like:

<img class="fancyimage" style="width:700px" src="img/retaildemo.png">

Here’s the results of a "domain" search:

<img class="fancyimage" style="width:700px" src="img/retaildemo1.png">

Tapping on each of the intent results will give you a more detailed results breakdown.

If the score is not where you’d like it, you can add more training phrases. In addition, using [entities](conversation-builder-intent-builder-entities.html) will help to increase the accuracy of your intents, as well as giving their score a boost. In the example above you can see that entities are used for ITEM_COLOR, PRODUCT_CATEGORY, etc.

#### Training a knowledge base

For training a knowledge base, the process is similar. Select the knowledge base, enter an utterance, and review the results. If you don't get any results for a particular utterance, you can adjust the filters by tapping the advanced search icon.

<img class="fancyimage" style="width:700px" src="img/hrfaqdemo.png">

By default, the Search Settings are set to **Intents** and **Fair Plus**. This means that the algorithm will first see if there are any matches using our NLU, with a threshold of Fair Plus. However, if it doesn’t find any, it will attempt a text search as well. Because of this, you may see a message like "No intent matched. Performed text search. 3 results found." This means you should add some more training phrases to an article to improve your results.

If you don’t want the follow up text search, you can change the Search Settings to "Intents Only" which will ONLY perform the intents search.

If you ONLY want to perform the text search, you can set the Settings to "All".

To add more training phrases (or Intent Qualifiers), you can manually add them to your article.

<img class="fancyimage" style="width:700px" src="img/qualifiers.png">

You can also use the Thumb Up and Down icons displayed in a search. Here we have an example where the utterance returned some results. The preferred result was only a FAIR match. By tapping the Thumbs Up icon, we automatically add the current utterance to a Positive Learning set for this article. Tapping the Thumbs Down will do the opposite.

<img class="fancyimage" style="width:700px" src="img/thumbsup.png">

If we rerun the search, now the article will return with a higher score. Here it is returned with VERY GOOD.

If we look at the article details, in the Advanced Settings, we can see that the utterance has been added.

#### Beware of Over Training

Something to keep in mind when training in general, and using the Thumbs Up/Down icons specifically, is that because they are so easy to use, they are often misused. Often we see people using Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down.

As mentioned earlier: anything over about 10 - 15 training phrases might begin to return false positives.

#### What is the intent score/threshold?

Because we want to return the best response to our users, our NLU has a threshold for which anything below this threshold will not be shown to the user. For intents and KB articles, this threshold is set to GOOD. This is based on our NLU’s level of confidence in the match.

The confidence score breakdown looks like this:

* VERY GOOD: 85-100% match

* GOOD: 70-85% match

* FAIR PLUS: 65-70% match

* FAIR: 50-65% match

By default, you cannot change the threshold when using intents, but you CAN do this for the Knowledge Base. Because the KB is used as an API, you can alter the "threshold" parameter in your KB integration to increase or decrease the desired level of NLU confidence. **NOTE**: we highly recommend that you do not go below FAIR PLUS to prevent false positives.

Use the following values for the threshold:

* VERY GOOD: vg

* GOOD: good or g

* FAIR PLUS: fp

* FAIR: f

### Using Entities

[Entities](intent-builder-entities.html) are keywords that refer to a number of synonyms or values. For example, the entity "sports" might have a number of synonyms like walking, running, football, jogging, baseball, etc. When creating intents or articles, you can leverage the power of entities as well. This dramatically increases the accuracy and flexibility of your responses.

To refresh on using entities with intents, check out [this tutorial](conversation-builder-getting-started-2-intents.html). For using entities with Knowledge Base articles, review [this tutorial](knowledge-base-tutorial.html).

### NLU Stop Words

Stop Words are words that are not used in the NLU to score an utterance. These words are essentially removed or ignored in the matching process.

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
