---
pagename: Tutorial
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Knowledge Base
permalink: knowledge-base-tutorial.html
indicator: both
---

This tutorial is designed to familiarize you with Knowledge Base.

### Step 1: Add a knowledge base

1. In the Dashboard, click **Add Knowledge Base** in the upper-right corner.
2. For **Data source name**, enter a name for the knowledge base, e.g., "Tutorial KB."
3. Click **Add**.

### Step 2: Add an article

1. Click **Add New** in the upper-right corner.

    The Add Article page appears.

2. Specify the following:
    * **Title**: Enter a title that is a complete sentence, for example, "I can't log in to my account."
    * **Intent Qualifiers**: Add the following intent qualifiers (training phrases) that the NLU engine will use to match the article to user input:

        * `My username doesn't work`
        * `My password doesn't work`
        * `I can't remember my username`
        * `I can't remember my password`
        * `I am locked out of my account`


    * **Summary**: Enter the following brief message to be sent to the user: `Try the steps in the "Forgot Account ID" section of the <a href="http://www.mycompany.com/username">Sign-in troubleshooting</a> article to recover your account credentials.`

        You can include web links in the summary, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.

    * **Tags**: Add the following tags that highlight the key nouns in your intent qualifiers and title:

        * `account`
        * `username`
        * `password`

        Tags help to increase the accuracy of Knowledge Base search results by highlighting the key sections of the user's message in regard to the intents that you created.

6. Click **Save**.

Back in the search view, you should now see your new article, which should look something like this:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_tutorial4.png">

Note that the article has a “Pending” notation on it. We add this for new articles and for articles created by agents using the Agent Advisor widget, so that a manager or supervisor can approve them before they are included in the results.

To continue with this tutorial, click the **Approve** link over on the right.

### Step 3: Train and tune

Let’s test our knowledge base and see how the NLU will return results.

1. In the search view, type something close to your article’s title or intent qualifiers, e.g., “my login doesn't work."

    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_tutorial5.png">

    Even though this utterance was not exactly the same as what was added, it still matched the article with a VERY GOOD confidence.

2. Try a different user input, like, “my password is not letting me into my account”.
    
    <img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_tutorial6.png">

    This is different enough that the NLU engine will return as FAIR PLUS. Generally,in a Knowledge Base integration in a bot, we set the threshold to GOOD, so, in this new example, the article won't be shown to a user. However, we can easily “train” the article to respond to this input by clicking the thumbs-up icon that's beneath the result.

3. Click **thumbs up**.
    
    This adds the utterance to a set of “positive learnings” that are used in the matching.

4. Resubmit the search.

    The article should now come back as VERY GOOD.

<div class="important">Keep in mind that when you are training articles, it's <em>very</em> easy to use the thumbs-up button. It's so easy that you might <em>over</em> train the bot using lengthy or very specific intents just because you can. Try to keep your intent qualifiers as generalized as possible so that they have a high likelihood of matching many user utterances, not just one. Overall, use the training feature sparingly.</div>

What about **thumbs down**? This should be used sparingly to differentiate two articles that might have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help when that does occur, to indicate which of the two articles you'd like the NLU engine to match. Simply use the thumbs-down button on the article you'd like to de-prioritize, and the NLU engine will "prefer" the other one over it.

For more best practices, see [Training and Tuning your Intents and FAQs](conversation-builder-best-practices-train-tune-nlu.html).

### Step 4: Use entities

[Entities](conversation-builder-intent-builder-entities.html) are keywords that refer to a number of synonyms. For example, the entity `sports` might have a number of synonyms, like walking, running, football, jogging, baseball, etc. When creating intent qualifiers and tags for your articles, you can leverage the power of entities as well.

Leveraging entities within a knowledge base provides the same benefits that doing so affords you elsewhere: They are a great way to make intents even broader, allowing the NLU to associate a group of words (like similar products, different misspellings of common words, and so on) with an entity instead of pattern matching to every single item in the group.

#### Create the domain

1. Exit Knowledge Base, and open Intent Builder.
2. Click **New domain** in the upper-right corner.
3. Enter a name for the domain, e.g., "Tutorial Domain."
4. Click **Add Domain**.

#### Create the entity

1. Inside the domain you just created, click **Entities** in the upper-right corner.
2. Specify the following:
    
    * **Entity name**: Enter "credentials."
    * **Entity values**: Add the values below:

        * `log in`
        * `login`
        * `pass word`
        * `password`
        * `user name`
        * `username`
        * `pin`

3. Click **Add Entity**.

#### Connect the domain to the knowledge base

To use entities within a knowledge base, you'll need to connect the domain to the knowledge base.

1. Exit Intent Builder, and return to Knowledge Base.
2. Open the knowledge base.
3. Click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> in the lower-right corner.
4. Click **KB Settings**.
5. Scroll down, and click **More Options**.
6. In the **Associated Domain for Entity** field, select the name of the domain you just created.
7. Click **Update**.

#### Use the entities in the knowledge base

In your article, go ahead and replace any word where you want the "credentials" entity to be substituted in, **including** the tags. This might make some intent qualifiers and tags redundant, which means you can (and should) delete them. Things should look like this:

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/kb_tutorial8.png">

{: .important}
You don't need to enter entities using all capital letters like we've done here, but it does help you to identify the words that are entities.

Now, when someone says an utterance that includes any of the entity synonyms, they should match. Try entering, "My pin doesn't work." This should return with a score of GOOD.

<div class="important">The entity values are cached, so if you add a number of entities but they aren't matching your articles right away, wait a minute or two. The cache should update.</div>