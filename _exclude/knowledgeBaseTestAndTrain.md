---
pagename: Testing & Training
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-testing-training.html
indicator: both
---

### Train a knowledge base


**To train a knowledge base**

1. Select the knowledge base.
2. Enter an utterance.
3. Review the results.
    If you don't get any results for the utterance, try adjusting the search filters.
4. If necessary, add more intent qualifiers or training phrases to the article to improve the results.
5. Add positive and/or negative learnings if appropriate.

{: .important}
Keep in mind the best practices discussed farther below on this page.

#### What is the intent score/threshold?

Because we want to return the best response to our users, our NLU has a threshold for which anything below this threshold is not shown to the user. For intents and Knowledge Base articles, this threshold is set to GOOD. This is based on the NLU’s level of confidence in the match. The confidence score breakdown looks like this:

* VERY GOOD: 85-100% match
* GOOD: 70-85% match
* FAIR PLUS: 65-70% match
* FAIR: 50-65% match

You can't change the threshold when using intents, but you *can* do this for the knowledge bases. Because the Knowledge Base is used as an API, you can alter the "threshold" parameter in your specific [Knowledge Base integration](conversation-builder-integrations-knowledge-base-integrations.html) to increase or decrease the desired level of NLU confidence.

#### Search filters


#### Positive and negative learnings

Q - Why add a positive learning instead of adding an intent qualifier or training phrase?

Positive learnings are phrases for which you want a match to the article to occur. Negative learnings are phrases for which you don't want the article to appear in the result even if it is matched to the consumer's intent.

Theese are best understood by way of an example. Examine the image below that shows some returned results. The preferred result was only a FAIR match.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_posNegLearnings1.png">

If you click the **Thumbs Up** icon:

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_posNegLearnings2.png">

This adds the current utterance to a Positive Learning set for the article. Now, if you rerun the search, the article is returned with a higher score. Here it is returned with VERY GOOD.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_posNegLearnings4.png">

Negative learnings work similarly. Clicking **Thumbs down** adds the current utterance to the Negative Learning set for the article, which means it won't be returned in the result even if it is matched to the consumer's intent. This should be used sparingly to differentiate two articles that might have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help when that does occur, to indicate which of the two articles you want the NLU engine to match. Use the Thumbs Down button on the article you want to de-prioritize, and the NLU engine will "prefer" the other one over it.

You can see an article's positive and negative learnings in the Advanced Settings of the article.

<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_posNegLearnings3.png">

### Preview a knowledge base with a bot

Q - Is this equivalent to preview in CB? Why use one over the other?

If you have a bot that's linked to a knowledge base, you can feed it test user input to see if it matches content as you'd expect.

**To preview a knowledge base with a bot**

1. Select the knowledge base, and then click <img style="width:30px" src="img/ConvoBuilder/icon_kb_chat.png"> (Chat) in the lower-right corner.
2. At the top of the Preview window, select the bot.
3. Feed the bot test user input and evaluate the results.

    <img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_preview.png">

### Test user input

<img style="width:30px" src="img/ConvoBuilder/icon_kb_test.png">
<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_testUserInput1.png">
<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/kb_testUserInput2.png">

### Best practices

#### Beware of overtraining

The Thumbs Up and Thumbs Down icons are so easy to use that they are often misused. Often we see people using Thumbs Up for extremely specific or lengthy utterances that, although said by an end user, are not great training phrases because they would never match another user’s utterance. Over time, the addition of these utterances (often 50+ added) skew the results in a negative way. The same is true when using Thumbs Down.

Try to keep your intent qualifiers or training phrases as generalized as possible so that they have a high likelihood of matching many user utterances, not just one. As mentioned [here](knowledge-base-liveperson-knowledge-bases-best-practices.html), anything over 10 - 15 intent qualifiers or training phrases might begin to return false positives.