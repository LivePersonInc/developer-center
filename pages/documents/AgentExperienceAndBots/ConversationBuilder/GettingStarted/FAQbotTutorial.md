---
pagename: FAQ Bot Tutorial
sitesection: Documents
categoryname: "Agent Experience & Bot"
documentname: Conversation Builder
subfoldername: Use Case Tutorials
permalink: conversation-builder-getting-started-faq-bot-tutorial.html
indicator: both
---

### Introduction

This guide will help step you through setting up a Knowledge Base (KB), and an FAQ Bot.

A good place to start with Conversation Builder is the [getting started tutorial](conversation-builder-getting-started-create-a-new-bot.html) and [conversation libraries tutorial](conversation-builder-conversation-libraries-getting-started-tutorial.html).

For more in-depth information on the various parts of the product covered here see the Conversation Builder [component breakdown](conversation-builder-conversation-builder-overview.html).

### What is an FAQ Bot?

The Conversation Builder Platform's Knowledge Base feature is described in depth [elsewhere in these documents](conversation-builder-knowledge-base-overview.html). However, that is an FAQ Bot? An FAQ Bot is a bot/automation which listens to [intents](conversation-builder-intent-builder-overview.html) in user input and attempts to match these intents with Knowledge Base article. An FAQ Bot can thus help your customers who are looking to dive deeper into your product by finding the right content at the right time, analyzing their intent to serve them with the most relevant content instead of forcing them to search for it on their own.

FAQ automations and Agent Advisor widgets are driven by a Knowledge Base full of articles. Before we create the automations, we should create the Knowledge Base.

### Create a KB

<img src="img/faqbot/image_1.png" style="width:600px">


After you have logged into the platform, tap on the Knowledge Base icon. Here you will see all the available knowledge bases in your org.

<img src="img/faqbot/image_2.png" style="width:600px">

* Tap on the ADD KNOWLEDGE BASE button to create a new KB.

* Give your knowledge base a unique name and hit Add.

<img src="img/faqbot/image_3.png" style="width:600px">

* While it is possible to create a knowledge base from a CSV export or a Google Sheet, we are going to create ours manually.

* You should now be seeing your empty KB.

Before we add our content we need to "publish" our Knowledge Base to our org.

* Tap on the Settings icon <img src="img/faqbot/image_4.png" style="width:40px"> and select KB Settings.

* Tap on More Settings and look for Publish Knowledge Base. Select your org from the drop down menu and hit Save.

As mentioned earlier, the Knowledge Base uses our Natural Language Understanding (NLU) algorithms to match the articles. To increase the quality of your content matches, please take a moment to review these Knowledge Base training best practices:

1. The key attributes which the NLU uses for matching are the article Title, Intent Qualifiers, Summary, Tags and any Positive or Negative learnings an article may have acquired.

2. The Title and the Intent Qualifiers are **intents** and should be **full sentences** eg: "How do I reset my password?"

3. As a rule you should have at LEAST 5 - 8 Intent Qualifiers per article which provide different ways people ask for this article.

4. Tags are used to highlight the key noun in the intent. For instance "How do I reset my password?" would have a tag of “password” and perhaps “reset”.

5. When you add training intents to an article, they should be relatively generic. If they are too specific the likelihood they will match another user’s utterance is slim.

6. The Knowledge Base will return results scored VERY GOOD, GOOD, FAIR PLUS, FAIR and POOR. Generally we set the responder to return results that are GOOD or better. You can downgrade the threshold to FAIR PLUS but be sure to test to make sure the quality of the returned results meets your expectations.

Now, with these best practices in mind, tap on the Add New button to add your first article.

<img src="img/faqbot/image_5.png" style="width:600px">

* Let’s give it a title that is a complete sentence.

* Provide at least 5 intent qualifiers.

* Enter a brief solution in the summary field. You can include web links in the summary though depending on the channel they may not display correctly. For SMS/Messaging, you may need to show the URL by itself, not wrapped in HTML.

{: .important}
The detail field can be used for longer messages but for messaging it is recommended to keep your responses as brief as possible. We will not be using the detail for this exercise.

* Add some tags that highlight the key noun in your intent qualifiers.

* Your finished article should look something like this:

<img src="img/faqbot/image_6.png" style="width:600px">

* Tap Save when finished.

* Back in the search view, you should now see your new article. Note that it has a "Pending" notation on it. We add this for new articles, and articles created by agents using the Agent Advisor widget so that a Manager or Supervisor can approve before the article gets include in the results. You can simply tap “Approve” to continue.

<img src="img/faqbot/image_7.png" style="width:600px">

### Training and Tuning Your KB

Before we add more articles, let’s test it and see how our NLU will return results.

In the search view, type something close to your article’s title or intent qualifiers. In our case, something like "my username isn’t working".

<img src="img/faqbot/image_8.png" style="width:600px">

Even though this utterance was not exactly the same as what was added, it still matched the article with a VERY GOOD confidence. Try a few more utterances and see what results you get.

If I try something like "my password is not letting me into my account" this is different enough that it returns as FAIR PLUS. Generally we set the threshold to GOOD so this may not be shown to a user. However, we can easily “train” the article by tapping on the thumbs-up <img src="img/faqbot/image_9.png" style="width:50px"> icon . This will add the utterance to a set of “Positive Learnings” that will be used in the matching. Once you tap the icon, resubmit the search and the article should now come back as VERY GOOD.

{: .important}
Keep in mind that when you are training your articles, it is VERY easy to use the thumbs up button. So easy, that you might OVER train the bot using lengthy or very specific intents just because you can. Try to keep your intent qualifiers as generalized as possible so that they have a high likelihood of matching many user utterances, not just one.

What about thumbs-down? This should be used sparingly to differentiate between two articles that may have intents that are close in meaning. NLU is not a specific pattern match, but more fuzzy, so having articles with similar intents but different content should be discouraged. That said, using thumbs down can help.

### Using Entities with your KB

As you may recall from the Router Bot tutorial or from elsewhere in our documentation, entities are keywords that refer to a number of synonyms. For example the entity "sports" may have a number of synonyms like walking, running, football, jogging, baseball, etc. When creating intent qualifiers and tags for your articles, you can leverage the power of entities as well.

Previously, we had created a domain and an entity for some of our options (eg: billing). We can use this or you can feel free to create another entity. For my password/username article I will create an entity called "credentials". Note the addition of various spellings (or misspellings) of words. Entities can be very helpful for catching those.

<img src="img/faqbot/image_10.png" style="width:400px">

* Exit the Knowledge Base and return to the Intent Builder

* Create a new entity or use an existing one

* Return to your Knowledge Base and connect your domain by going to the KB Settings, More Settings, and selecting your domain from the Entity drop down list.

* Hit Update.

* Now in our article, we are going to replace any word where we want our credentials entity to be substituted in, INCLUDING the tags. Like this:

<img src="img/faqbot/image_11.png" style="width:650px">

* Now, when someone says an utterance that includes any of our entity synonyms, they should match.

{: .important}
We do cache the entity values, so if you add a number of entities but they are not matching your articles right away, give them a minute or two and the cache should update.

Now that you understand how to train and tune your knowledge base articles, **add some more articles** and be sure to train them well.

### Importing the FAQ Template

In the Conversation Builder, tap on the NEW BOT icon and give your bot a unique name and description. Then select FAQ Bot from the template area below and hit Save.

### Initial Bot Setup

**Before you do anything else**, we need to "Publish" the bot to your Organization. (For those with multiple Org access, the bot will default to your “Home Org”, which is why we want to change it.)

* Tap the gear icon in the lower right and then Bot Settings. Scroll down and tap "More Settings".

* Where it says "Publish Bot" change to the appropriate Org and hit Save.

<img src="img/faqbot/image_12.png" style="width:700px">

### Connecting to the Knowledge Base

Your automation will use an API integration to connect to the Knowledge Base. Setting up the API is straight forward.

<img src="img/faqbot/image_13.png" style="width:600px">

You will need the source id for the Knowledge Base you’re using. Navigate to your KB and launch it. In the browser address bar, select the source id (see above) and copy it. We’ll be using it shortly.

Return to the Conversation Builder and in the upper left corner of the Conversation Builder, tap on the API Integration <img src="img/faqbot/image_14.png" style="width:40px"> icon.

* In the left integration list, tap on the "FAQs" integration and verify the following:

  * The Integration Name: FAQs

  * The Response Data Variable Name: FAQs

  * The Method: GET

  * The URL: https://botbuilder2-dataservice.botcentralapi.com/knowledge-0.1/articles/phraseSearch

* **Request Parameters:**

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>source</td>
    <td>Paste in your KB source id</td>
  </tr>
  <tr>
    <td>phrases</td>
    <td>{$query}</td>
  </tr>
  <tr>
    <td>mode</td>
    <td>intents</td>
  </tr>
  <tr>
    <td>threshold</td>
    <td>good</td>
  </tr>
</tbody>
</table>


* **Custom Data Fields:**

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>article</td>
    <td>{$.api_FAQs.successResult.success[i].summary}</td>
  </tr>
</tbody>
</table>


After you have reviewed, and tweaked, hit Save

### Testing Your Bot

Let’s test our connection to the Knowledge Base. Return to the dialog editor by tapping on the <img src="img/faqbot/image_15.png" style="width:40px"> icon in the upper left. Tap on the Chat preview on the right sidebar

<img src="img/faqbot/image_16.png" style="width:400px">

Type "**restart**", hit enter. Then type “hi” to trigger the initial Welcome message. Restart clears all variables to start fresh.

Now, type an intent that should match an article in the Knowledge Base. You should be seeing your knowledge base response. Tapping/typing "yes" will respond with “Glad I could help.” Typing/tapping “no” will escalate.

If you enter an utterance that is not recognized by your Knowledge Base, you will see the "fail" dialog.