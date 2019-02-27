---
pagename: Knowledge Base
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Conversation Builder
permalink: conversation-builder-knowledge-base.html
indicator: both
---

<<<<<<< HEAD
<img style="width:750px" src="img/ConvoBuilder/knowledgebase_main.png">
=======
<img class="fancyimage" style="width:750px" src="img/ConvoBuilder/knowledge_center.png">
>>>>>>> 6ba9ae659da2e58af93feb66df19ddbc0f88fb10

The Conversation Builder Platform's Knowledge Base tool allows you to export an existing Knowledge Base or create new Knowledge Base articles which will then be processed by our NLU engine. This allows your automation to leverage [intents](conversation-builder-intent-builder-overview.html) and [entities](conversation-builder-intent-builder-entities.html) in order to recommend the most accurate Knowledge Base articles to an inquiring user. FAQ automations and Agent Advisor widgets are driven by a Knowledge Base full of these articles, intelligently delivering the right content to the user at the right time.

### Adding a Knowledge Base

The first step to using the Knowledge Base tool is to add a knowledge base entity by clicking the **ADD KNOWLEDGE BASE** panel on the left side of your screen, once you've selected Knowledge Base from the main Conversation Builder Platform page. You will then be prompted to choose a name for the Knowledge Base and to select whether you'd like to import a pre-configured knowledge base from a CSV file or a Google Spreadsheet. **Importing a knowledge base from a file is not mandatory. Simply click "next" without selecting a file if you'd like to start with a blank one**.

Once you've created a Knowledge Base, select it to enter its search view. In this default view, you can search the title, intent qualifiers and content of your different articles. On the right hand side, you'll find a Setting Toolbar which includes the following panels:

* The Automation Test panel. This panel allows you to select a automation which you've previously created and linked to the Knowledge Base and feed it test user input to see if it matches content as you'd expect.

* The Tags panel. This panel displays all tags which you've previously used, so you can review all of them in one place and reuse them in any future articles.

* Categories. This panel displays all categories which you've previously used, so you can review all of them in one place and reuse them in any future articles.

* The Test User Input panel. This panel is similar to the first panel but is divorced from a specific automation. You can use it to feed user input directly into your Knowledge Base and test your content matching without the context of an actual pre-created dialog.

* The Intents Data panel. This panel shows you more historical information on which intents were and weren't matched to your Knowledge Base articles by bots/automations.

* The Settings panel. Includes various Knowledge Base settings, like its name.

### How Does a Knowledge Base Work?

As mentioned earlier, the Knowledge Base uses our Natural Language Understanding (NLU) algorithms to match the articles to the user input. Each article has a title and a series of intent qualifies, against which the NLU engine compares the user's input. If it finds a match to a reasonable degree of certainty, it will "serve" the appropriate article to your user.

To increase the quality of your content matches, please take a moment to review these Knowledge Base training **best practices**:

* The key attributes which the NLU uses for matching are the article Title, Intent Qualifiers, Summary, Tags and any Positive or Negative learnings an article may have acquired.

* The Title and the Intent Qualifiers are [intents](conversation-builder-intent-builder-overview.html) and should be full sentences e.g., “How do I reset my password?”

* As a rule you should have at *LEAST* 5 to 8 Intent Qualifiers per article which provide different ways people ask for this article.

* Tags are used to highlight the key nouns in the intent and title. For instance “How do I reset my password?” would have a tag of “password” and perhaps “reset”.

* When you add training intents to an article, they should be relatively generic. If they are too specific the likelihood they will match another user’s utterance is slim. Since users can phrase their questions in many ways, we need to make that our intents are broad, to allow the NLU a chance to match as many possible versions of the sentence as possible.

* The Knowledge Base will return results scored VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR. Generally we set the responder to return results that are GOOD or better. You can downgrade the threshold to FAIR PLUS but be sure to test to make sure the quality of the returned results meets your expectations.

### Adding Your First Article

Now, with these best practices in mind, tap on the Add New button at the top right corner to add your first article. Give your article a title that is a complete sentence and try to provide at least 5 intent qualifiers which our NLU engine will use to match the article to user input.

The next step is to enter a brief message to be sent to the user in the summary field. You can include web links in the summary though depending on the channel they may not display correctly. For SMS/Messaging, you may need to show the URL by itself, not wrapped in HTML, since the HTML will be sent as plain text over these channels.

<div class="important">The detail field can be used to include longer messages to the user but for messaging, it is recommended to keep your responses as brief as possible.</div>

Next, add some tags that highlight the key nouns in your intent qualifiers and title. As mentioned above, these tags assist the NLU engine in matching intents, your content, and the user input by highlighting the key sections of the user's message in regards to the intents which you created.

Your finished article should look something like this:

![](img/jonkb.png)

Tap Save when finished to save your article.

Back in the search view, you should now see your new article. Note that it has a “Pending” notation on it. We add this for new articles, and articles created by agents using the Agent Advisor widget so that a Manager or Supervisor can approve before the article gets include in the results. You can simply tap “Approve” to continue.

### Training and Tuning Your Knowledge Base

Before we add more articles, let’s test our Knowledge Base and see how our NLU will return results. In the search view, type something close to your article’s title or intent qualifiers. In the example we gave above, we'll type something like “my username isn’t working”.

![](img/trainingkb.png)

Even though this utterance was not exactly the same as what was added, it still matched the article with a VERY GOOD confidence.

If we try a different user input, like “my password is not letting me into my account”, this is different enough that the NLU engine will return as FAIR PLUS. Generally, we set the threshold to GOOD so in this new example, the article won't be shown to a user. However, we can easily “train” the article to respond to this input regardless, by tapping on the thumbs-up icon right beneath the result. This will add the utterance to a set of “Positive Learnings” that will be used in the matching. Once you tap the icon, resubmit the search and the article should now come back as VERY GOOD.

<div class="important">Keep in mind that when you are training your articles, it is <em>very</em> easy to use the thumbs up button. So easy, that you might <em>over</em> train the automation using lengthy or very specific intents just because you can. Try to keep your intent qualifiers as generalized as possible so that they have a high likelihood of matching many user utterances, not just one and use the training feature sparingly.</div>

What about thumbs-down? This should be used sparingly to differentiate between two articles that may have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help when that does occur, to indicate which of the two articles you'd like the NLU engine to match. Simply use the thumbs-down button on the article you'd like to de-prioritize, and the NLU engine will "prefer" the other one over it.

### Using Entities With Your Knowledge Base

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
