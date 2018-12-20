---
pagename: Creating a New Knowledge Base
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: FAQ Bot Use Case
permalink: conversation-builder-faq-bot-use-case-creating-a-new-knowledge-base.html
indicator: both
---

FAQ automations and Agent Advisor widgets are driven by a Knowledge Base full of articles. Before we create the automations, we should create the Knowledge Base.

![image alt text](img/faqbot/image_1.png)

After you have logged into the platform, tap on the Knowledge Base icon. Here you will see all the available knowledge bases in your org.

![image alt text](img/faqbot/image_2.png)

* Tap on the ADD KNOWLEDGE BASE button to create a new KB.

* Give your knowledge base a unique name and hit Add.

![image alt text](img/faqbot/image_3.png)

* While it is possible to create a knowledge base from a CSV export or a Google Sheet, we are going to create ours manually.

* You should now be seeing your empty KB.

Before we add our content we need to "publish" our Knowledge Base to our org.

* Tap on the Settings icon ![image alt text](img/faqbot/image_4.png) and select KB Settings.

* Tap on More Settings and look for Publish Knowledge Base. Select your org from the drop down menu and hit Save.

As mentioned earlier, the Knowledge Base uses our Natural Language Understanding (NLU) algorithms to match the articles. To increase the quality of your content matches, please take a moment to review these Knowledge Base training best practices:

1. The key attributes which the NLU uses for matching are the article Title, Intent Qualifiers, Summary, Tags and any Positive or Negative learnings an article may have acquired.

2. The Title and the Intent Qualifiers are **intents** and should be **full sentences** eg: "How do I reset my password?"

3. As a rule you should have at LEAST 5 - 8 Intent Qualifiers per article which provide different ways people ask for this article.

4. Tags are used to highlight the key noun in the intent. For instance "How do I reset my password?" would have a tag of “password” and perhaps “reset”.

5. When you add training intents to an article, they should be relatively generic. If they are too specific the likelihood they will match another user’s utterance is slim.

6. The Knowledge Base will return results scored VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR. Generally we set the responder to return results that are GOOD or better. You can downgrade the threshold to FAIR PLUS but be sure to test to make sure the quality of the returned results meets your expectations.

Now, with these best practices in mind, tap on the Add New button to add your first article.

![image alt text](img/faqbot/image_5.png)

* Let’s give it a title that is a complete sentence.

* Provide at least 5 intent qualifiers.

* Enter a brief solution in the summary field. You can include web links in the summary though depending on the channel they may not display correctly. For SMS/Messaging, you may need to show the URL by itself, not wrapped in HTML.

* **NOTE:** The detail field can be used for longer messages but for messaging it is recommended to keep your responses as brief as possible. We will not be using the detail for this exercise.

* Add some tags that highlight the key noun in your intent qualifiers.

* Your finished article should look something like this:

![image alt text](img/faqbot/image_6.png)

* Tap Save when finished.

* Back in the search view, you should now see your new article. Note that it has a "Pending" notation on it. We add this for new articles, and articles created by agents using the Agent Advisor widget so that a Manager or Supervisor can approve before the article gets include in the results. You can simply tap “Approve” to continue.

![image alt text](img/faqbot/image_7.png)

### Training and Tuning Your KB

Before we add more articles, let’s test it and see how our NLU will return results.

In the search view, type something close to your article’s title or intent qualifiers. In our case, something like "my username isn’t working".

 ![image alt text](img/faqbot/image_8.png)

Even though this utterance was not exactly the same as what was added, it still matched the article with a VERY GOOD confidence. Try a few more utterances and see what results you get.

If I try something like "my password is not letting me into my account" this is different enough that it returns as FAIR PLUS. Generally we set the threshold to GOOD so this may not be shown to a user. However, we can easily “train” the article by tapping on the thumbs-up![image alt text](img/faqbot/image_9.png)icon . This will add the utterance to a set of “Positive Learnings” that will be used in the matching. Once you tap the icon, resubmit the search and the article should now come back as VERY GOOD.

**NOTE**: Keep in mind that when you are training your articles, it is VERY easy to use the thumbs up button. So easy, that you might OVER train the bot using lengthy or very specific intents just because you can. Try to keep your intent qualifiers as generalized as possible so that they have a high likelihood of matching many user utterances, not just one.

What about thumbs-down? This should be used sparingly to differentiate between two articles that may have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help.

### Using Entities with your KB

As you may recall from the Router Bot tutorial or from elsewhere in our documentation, entities are keywords that refer to a number of synonyms. For example the entity "sports" may have a number of synonyms like walking, running, football, jogging, baseball, etc. When creating intent qualifiers and tags for your articles, you can leverage the power of entities as well.

Previously, we had created a domain and an entity for some of our options (eg: billing). We can use this or you can feel free to create another entity. For my password/username article I will create an entity called "credentials". Note the addition of various spellings (or misspellings) of words. Entities can be very helpful for catching those.

![image alt text](img/faqbot/image_10.png)

* Exit the Knowledge Base and return to the Intent Builder

* Create a new entity or use an existing one

* Return to your Knowledge Base and connect your domain by going to the KB Settings, More Settings, and selecting your domain from the Entity drop down list.

* Hit Update.

* Now in our article, we are going to replace any word where we want our credentials entity to be substituted in, INCLUDING the tags. Like this:

![image alt text](img/faqbot/image_11.png)

* Now, when someone says an utterance that includes any of our entity synonyms, they should match.

* **NOTE**: We do cache the entity values, so if you add a number of entities but they are not matching your articles right away, give them a minute or two and the cache should update.

Now that you understand how to train and tune your knowledge base articles, **add some more articles** and be sure to train them well.
