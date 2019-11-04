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

The first step to using the Knowledge Base tool is to add a knowledge base entity by clicking **Add Knowledge Base** in the upper-right corner of your screen, once you've selected Knowledge Base from the main Conversation Builder Platform page. You will then be prompted to choose a name for the Knowledge Base and to select whether you'd like to import a pre-configured knowledge base from a CSV file or a Google Spreadsheet. **Importing a knowledge base from a file is not mandatory. Simply click "next" without selecting a file if you'd like to start with a blank one**.

Once you've created a Knowledge Base, select it to enter its search view. In this default view, you can search the title, intent qualifiers and content of your different articles.

### Step 2: Add an article

Tap the Add New button at the top right corner to add your first article. Give your article a title that is a complete sentence and try to provide at least 5 intent qualifiers which our NLU engine will use to match the article to user input.

The next step is to enter a brief message to be sent to the user in the summary field. You can include web links in the summary though depending on the channel they may not display correctly. For SMS/Messaging, you may need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.

<div class="important">The detail field can be used to include longer messages to the user but for messaging, it is recommended to keep your responses as brief as possible.</div>

Next, add some tags that highlight the key nouns in your intent qualifiers and title. As mentioned above, these tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents which you created.

Your finished article should look something like this:

![](img/jonkb.png)

Tap Save when finished to save your article.

Back in the search view, you should now see your new article. Note that it has a “Pending” notation on it. We add this for new articles, and articles created by agents using the Agent Advisor widget so that a Manager or Supervisor can approve before the article gets include in the results. You can simply tap “Approve” to continue.

### Step 3: Train and tune

Before we add more articles, let’s test our Knowledge Base and see how our NLU will return results. In the search view, type something close to your article’s title or intent qualifiers. In the example we gave above, we'll type something like “my username isn’t working”.

![](img/trainingkb.png)

Even though this utterance was not exactly the same as what was added, it still matched the article with a VERY GOOD confidence.

If we try a different user input, like “my password is not letting me into my account”, this is different enough that the NLU engine will return as FAIR PLUS. Generally, we set the threshold to GOOD so in this new example, the article won't be shown to a user. However, we can easily “train” the article to respond to this input regardless, by tapping on the thumbs-up icon right beneath the result. This will add the utterance to a set of “Positive Learnings” that will be used in the matching. Once you tap the icon, resubmit the search and the article should now come back as VERY GOOD.

<div class="important">Keep in mind that when you are training your articles, it is <em>very</em> easy to use the thumbs up button. So easy, that you might <em>over</em> train the automation using lengthy or very specific intents just because you can. Try to keep your intent qualifiers as generalized as possible so that they have a high likelihood of matching many user utterances, not just one and use the training feature sparingly.</div>

What about thumbs-down? This should be used sparingly to differentiate between two articles that may have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help when that does occur, to indicate which of the two articles you'd like the NLU engine to match. Simply use the thumbs-down button on the article you'd like to de-prioritize, and the NLU engine will "prefer" the other one over it.

For more best practices, see [Training and Tuning your Intents and FAQs](conversational-ai-platform-natural-language-understanding-training-and-tuning-your-intents-and-faqs.html).

### Step 4: Use entities

[Entities](conversation-builder-intent-builder-entities.html) are keywords that refer to a number of synonyms. For example the entity `sports` may have a number of synonyms like walking, running, football, jogging, baseball, etc. When creating intent qualifiers and tags for your articles, you can leverage the power of entities as well.

Leveraging entities within your Knowledge Base provides the same benefits that doing so affords you elsewhere: they are a great way to make intents even broader, allowing the NLU to associate a group of words (like similar products, different misspellings of common words, and so on) with an entity instead of pattern matching to every single item in the group.

To use entities within your Knowledge Base, you'll need to connect your domain by going to the Knowledge Base Settings (the bottom icon in the Settings Toolbar), clicking on "KB Settings", then on More Settings, and selecting your domain from the Entity drop down list. Lastly, hit Update.

Let's assume that we have pre-created an entity called `credentials`. It contains the following values:

* log in

* login

* pass word

* password

* user name

* username

Now in our article, we are going to replace any word where we want our credentials entity to be substituted in, INCLUDING the tags. Like this:

![](img/kbentities.png)

Now, when someone says an utterance that includes any of our entity synonyms, they should match.

<div class="important">We do cache the entity values, so if you add a number of entities but they are not matching your articles right away, give them a minute or two and the cache should update.</div>