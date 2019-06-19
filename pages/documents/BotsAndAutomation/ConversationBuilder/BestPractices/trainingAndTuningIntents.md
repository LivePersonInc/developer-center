---
pagename: Training and Tuning Your Intents and FAQs
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
subfoldername: Best Practices
permalink: conversation-builder-best-practices-training-and-tuning-your-intents-and-faqs.html
indicator: both
---

### Introduction

Within your automation, you may be using intents and entities to trigger a dialog OR you may be using a Knowledge Base (KB) to return articles. Both of these require the use of our Natural Language Understanding (NLU) algorithms. You can find the basics of how to [Use Intents](conversation-builder-getting-started-2-intents.html) and  [Train & Tune KBs](conversation-builder-knowledge-base.html#training-and-tuning-your-knowledge-base) on our Developers' Community.

In this document we will outline some best practices to keep in mind while using intents, entities, the Knowledge Base and troubleshooting any issues that may occur.

### Leveraging Bot Analytics

The Analytics portal will help you understand which of your intents are matching (or not) and give you the information you need to train and tune your intents.

To view your Intent metrics, go to the Analytics portal, select your bot and from the Overview page, select "Intents" from the dropdown menu.

The Analytics portal, by default, has a date range set to Yesterday. If you’d like to change it to Today or some custom range, tap on the date picker on the right and change. You can also change the time zone to your particular time, or even UTC time.

The Intents view lets you view both "Matched Intents" and “Unmatched Phrases” for your bot’s Intents, Patterns and attached Knowledge Bases. You can see all of them together, or you can select them individually in the Source dropdown menu on the left.

<img class="fancyimage" style="width:700px" src="img/hranalytics.png">

Here we’re looking at the Matched Intents for this bot. Most are coming from the KB, but you can see a Pattern for the greeting as well.

Tapping on Unmatched Phrases will show you user utterances that did not return any result from the bot Patterns, Intents or KBs.

If you see utterances in your Unmatched Phrases that should be matching a particular intent or KB articles, you can add it to the training phrases for these items. Keeping in mind the aforementioned best practices for creating training phrases, of course.

### Training Phrases

There are a number of reasons why your intent or Knowledge Base may be failing to return a result as you would expect. One of the most common causes is a lack of adequate training phrases. The following sections lists best practices that should be used when creating training phrases which can help make sure your intents and Knowledge Base are well trained and return the results you expect.

#### One sentence, not multiple.

When creating training phrases for an Intent or KB article, keep them to one sentence. For example, "How do I activate my card?" is much better training phrase than “How do I activate my card? I am having trouble at the ATM. Can you help me?” Multiple sentences will increase your risk of false positives.

#### How many training phrases do I need?

It really depends upon your use case and type of intents. Generally, for intents, it is recommended that you have between 10 - 25 good training phrases.

For Knowledge Base articles, it is recommended that you have around 10 training phrases.

When you have more than 25 - 50 training phrases on an intent (or 10 - 15 on a KB article) it is likely that you have over trained the intent which may lead to false positives.

#### Tags in KB articles

Tags play a very important role in returning accurate results in your Knowledge Base. Where the training phrases should be intents (eg: complete sentences), the tags should highlight the key noun(s) or word(s) in the training phrases. For example, for an article about health insurance, the tags should be "health", “insurance”, “benefits”. When an utterance contains these keywords, it will be scored higher. Remember, these should be **words**, not sentences!

Also, if you find yourself needed a large number of tags, you most likely should be using an entity.

<img class="fancyimage" style="width:700px" src="img/tags.png">

### Testing, Training and Tuning

Training your intents or KB is generally done by testing utterances against it, reviewing the results and adding more training as needed if the returned responses are returning with lower than desired scores.

#### Training Intents

To test your intents, go to the Intent Builder, select the appropriate domain, tap on the tester icon (which looks like a bug) and enter an utterance into the tester. If you select a particular intent, then the tester will be testing against that specific intent. If you’d like to test across ALL intents in the domain, check the "Search in domain" box.

This is what a specific intent search looks like:

<img class="fancyimage" style="width:700px" src="img/retaildemo.png">

Here’s the results of a "domain" search:

<img class="fancyimage" style="width:700px" src="img/retaildemo1.png">

Tapping on each of the intent results will give you a more detailed results breakdown.

If the score is not where you’d like it, you can add more training phrases. In addition, using [entities](conversation-builder-intent-builder-entities.html) will help to increase the accuracy of your intents, as well as giving their score a boost. In the example above you can see that entities are used for ITEM_COLOR, PRODUCT_CATEGORY, etc.

#### Training a KB

For training your Knowledge Base, the process is similar. Select your KB, enter an utterance, and review the results. If you do not get any results for a particular utterance, you can adjust the filters by tapping on the advanced search icon.

<img class="fancyimage" style="width:700px" src="img/hrfaqdemo.png">

By default, the Search Settings are set to **Intents** and **Fair Plus**. This means that the algorithm will first see if there are any matches using our NLU, with a threshold of Fair Plus. However, if it doesn’t find any, it will attempt a text search as well. Because of this, you may see a message like "No intent matched. Performed text search. 3 results found." This means you should add some more training phrases to an article to improve your results.

If you don’t want the follow up text search, you can change the Search Settings to "Intents Only" which will ONLY perform the intents search.

If you ONLY want to perform the text search, you can set the Settings to "All".

To add more training phrases (or Intent Qualifiers), you can manually add them to your article.

<img class="fancyimage" style="width:700px" src="img/qualifiers.png">

You can also use the Thumb Up and Down icons displayed in a search. Here we have an example where the utterance returned some results. The preferred result was only a FAIR match. By tapping on the Thumbs Up icon, we automatically add the current utterance to a Positive Learning set for this article. Tapping on the Thumbs Down will do the opposite.

<img class="fancyimage" style="width:700px" src="img/thumbsup.png">

If we rerun the search, now the article will return with a higher score. Here it is returned with VERY GOOD.

If we look at the article details, in the Advanced Settings, we can see that the utterance has been added.

#### Beware of Over Training

Something to keep in mind when training in general, and using the Thumbs Up/Down icons specifically, is that because they are so easy to use, they are often mis-used. Often we see people using Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down.

As mentioned earlier: anything over about 10 - 15 training phrases may begin to return false positives.

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

As you may recall, entities are keywords that refer to a number of synonyms or values. For example, the entity "sports" may have a number of synonyms like walking, running, football, jogging, baseball, etc. When creating intents or articles, you can leverage the power of entities as well. This will dramatically increase the accuracy and flexibility of your responses.

To refresh on using entities with intents, check out [this tutorial](https://developers.liveperson.com/conversation-builder-getting-started-2-intents.html). For using entities with KB articles, review [this tutorial](https://developers.liveperson.com/conversation-builder-knowledge-base.html#using-entities-with-your-knowledge-base).

#### Can I detect entities using JavaScript?

There is a JS method to detect which entities have been picked up by the NLU called [getNamedEntities();](https://developers.liveperson.com/conversation-builder-conversation-builder-scripting-functions.html#get-named-entities) This will return an array of entities for a particular entity name. For example, the following will return an array of toppings found. So in an utterance like "I would like a pizza with pepperoni, sausage and peppers" it would return [pepperoni, sausage, peppers]:


```javascript
var toppingObjects = botContext.getNamedEntities('toppings');

var toppings = [];

if (toppingObjects != null && toppingObjects.length > 0) {

    for (j = 0; j < toppingObjects.length; j++) {

        toppings.push(toppingObjects[j].getPhrase)

    }

}
```

#### Can an entity return a different value?

Sometimes you will want an entity match to return a value, say for sending to an API. For example, if you have an entity for "color" with values like red, blue, green, yellow, black but your API is expecting a numeric data values like red: 10, blue: 11, green: 12, yellow: 13, black: 14 how would you create this mapping?

In the Intent Builder, when creating your entities, you can provide data with additional values by adding a "~" between the phrase and the data value like this: red~10, blue~11, etc. When calling the entity you would use the following to get the data value:


```javascript
var color = botContext.getNamedEntities('colors');

var whichColor = '';

if (color != null && color.length > 0) {

    for (j = 0; j < color.length; j++) {

        whichColor = color[j].getDataValue();

    }

}
```

#### How do I use multiple entities to map to a single value?

Sometimes you need a number of entities to map to a single value. For instance, multiple mis-spellings or alternative utterances that all mean the same thing. Let’s take this Airport example where we want to detect different ways people might enter names of airports. We can use the data value to be the unifier for these different possible utterances.

Using a similar script to the above color example, which returns the data value, would get you the "LAX" or “DFW” you need.

#### How do entities affect the NLU score?

The more entities in a training phrase that match, the higher the score. This can be a powerful way to increase your matching accuracy, but if over used, can lead to a lot of false positives.

You can see from the example below, that having 2 entities match the training phrases causes a 30% jump in score from the single entity matches. So use them for the really key elements of your intent, but don’t over use.

<img class="fancyimage" style="width:400px" src="img/testuserinput.png">

### NLU Stop Words

Stop Words are words that are not used in the NLU to score an utterance. These words are essentially removed or ignored in the matching process.

If you want to ADD stop words to your Knowledge Base you can in the Settings. These words will be ignored by our NLU algorithms. This is generally used for words or phrases like your company name or brand, which usually is not needed or helping the scoring of an utterance. Below is a list of default stop words:

* "a"
* "about"
* "above"
* "after"
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
* "before"
* "being"
* "below"
* "between"
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
* "down"
* "during"
* "each"
* "few"
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
* "off"
* "on"
* "once"
* "only"
* "or"
* "other"
* "ought"
* "our"
* "ours
* "ourselves"
* "out"
* "over"
* "own"
* "same"
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
* "under"
* "until"
* "up"
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
