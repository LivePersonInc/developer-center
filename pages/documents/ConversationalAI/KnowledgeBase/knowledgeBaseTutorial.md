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
2. Choose a name for the knowledge base, and select whether you'd like to import a pre-configured knowledge base from a CSV file or a Google spreadsheet. **Importing a knowledge base from a file isn't mandatory. Simply click "Add" without selecting a file if you'd like to start with a blank one**.
3. Click **Add**.

    The search view appears. In this default view, you can search the title, intent qualifiers and content of articles.

### Step 2: Add an article

1. Click **Add New** in the upper-right corner.
2. In the **Title** field, enter a title that is a complete sentence, e.g., "I can't remember my password."
3.  Under **Intent Qualifiers**, try to add at least 5 intent qualifiers that our NLU engine will use to match the article to user input.
4. In the **Summary** field, enter a brief message to be sent to the user. You can include web links in the summary, although depending on the channel they might not display correctly. For SMS/Messaging, you might need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.
5. Under **Tags**, add some tags that highlight the key nouns in your intent qualifiers and title. These tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents that you created.
6. Click **Save**.

<div class="important">The **Detail** field can be used to include longer messages to the user. For messaging, it's recommended that you keep the responses as brief as possible.</div>

Back in the search view, you should now see your new article, which should look something like this:

![](img/jonkb.png)

Note that the article has a “Pending” notation on it. We add this for new articles and for articles created by agents using the Agent Advisor widget, so that a manager or supervisor can approve them before they are included in the results.

Click **Approve** to continue.

### Step 3: Train and tune

Before we add more articles, let’s test our knowledge base and see how our NLU will return results.

1. In the search view, type something close to your article’s title or intent qualifiers. In the example we gave above, we'll type something like “my username isn’t working”.

    ![](img/trainingkb.png)

    Even though this utterance was not exactly the same as what was added, it still matched the article with a VERY GOOD confidence.

2. Try a different user input, like, “my password is not letting me into my account”.
    
    This is different enough that the NLU engine will return as FAIR PLUS. Generally, we set the threshold to GOOD, so, in this new example, the article won't be shown to a user. However, we can easily “train” the article to respond to this input regardless by clicking the thumbs-up icon right beneath the result.

3. Go ahead and click **thumbs up** now.
    
    This adds the utterance to a set of “positive learnings” that are used in the matching.

4. Resubmit the search.

    The article should now come back as VERY GOOD.

<div class="important">Keep in mind that when you are training articles, it's <em>very</em> easy to use the thumbs-up button. It's so easy that you might <em>over</em> train the bot using lengthy or very specific intents just because you can. Try to keep your intent qualifiers as generalized as possible so that they have a high likelihood of matching many user utterances, not just one. Overall, use the training feature sparingly.</div>

What about **thumbs down**? This should be used sparingly to differentiate two articles that might have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help when that does occur, to indicate which of the two articles you'd like the NLU engine to match. Simply use the thumbs-down button on the article you'd like to de-prioritize, and the NLU engine will "prefer" the other one over it.

For more best practices, see [Training and Tuning your Intents and FAQs](conversation-builder-best-practices-train-tune-nlu.html).

### Step 4: Use entities

[Entities](conversation-builder-intent-builder-entities.html) are keywords that refer to a number of synonyms. For example, the entity `sports` might have a number of synonyms, like walking, running, football, jogging, baseball, etc. When creating intent qualifiers and tags for your articles, you can leverage the power of entities as well.

Leveraging entities within a knowledge base provides the same benefits that doing so affords you elsewhere: They are a great way to make intents even broader, allowing the NLU to associate a group of words (like similar products, different misspellings of common words, and so on) with an entity instead of pattern matching to every single item in the group.

#### Connect the domain to the knowledge base

To use entities within a knowledge base, you'll need to connect the domain. Let's assume you've completed this step (created a domain and connected it to the knowledge base), but for reference you can do it as follows:

1. Click <img style="width:25px" src="img/ConvoBuilder/icon_kb_settings.png"> in the lower-right corner.
2. Click **KB Settings**.
3. Scroll down, and click **More Options**.
4. In the **Associated Domain for Entity** field, select the domain.
5. Click **Update**.

Let's further assume that the domain includes an entity called `credentials`. It contains the following values:

* log in

* login

* pass word

* password

* user name

* username

#### Use the entities in the knowledge base

In your article, go ahead and replace any word where you want the credentials entity to be substituted in, **including** the tags. Things should look like this:

![](img/kbentities.png)

Now, when someone says an utterance that includes any of the entity synonyms, they should match.

<div class="important">The entity values are cached, so if you add a number of entities but they aren't matching your articles right away, wait a minute or two. The cache should update.</div>