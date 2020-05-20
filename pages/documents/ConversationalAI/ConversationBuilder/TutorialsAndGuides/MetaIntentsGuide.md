---
pagename: Using Meta Intents with Conversation Builder
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Builder
subfoldername: Tutorials & Guides
permalink: conversation-builder-tutorials-guides-using-meta-intents-with-conversation-builder.html
indicator: both
---

### Overview

The use of [meta intents](intent-builder-meta-intents.html) along with a knowledge base provides an alternative way to implement your knowledge base searches. A common design pattern is to have knowledge base searches occur in your [Fallback dialog](conversation-builder-dialogs-fallback-dialogs.html), performing that search prior to hitting your standard fallback procedure. While this approach works in many circumstances, it couples your knowledge base search directly with your fallback dialog and complicates your bot design, particularly when working with multiple fallback integrations. This guide will demonstrate an alternative approach to implementing a knowledge base search, placing it in its own dialog and simplifying your bot design.

To demonstrate this, we'll be using meta intents in conjunction with a “small talk” knowledge base in order to cleanly handle a typical user's small talk utterances. 

### Create the Small Talk domain in Intent Builder

<img class="fancyimage" style="width:550px" src="img/ConvoBuilder/guideMetaIntents_addDomain.png">

Our Small Talk knowledge base is going to be configured to use [domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents) for its articles, which means we need to start off by building the domain in Intent Builder. Select “New Domain” from Intent Builder, give your domain a name, and you’re ready to start adding your intents. 

Several intents need to be created that are related to common small talk that a user may utter to the bot during the course of their interaction. “How are you”, “Thank you”, and disagreement utterances should still be answered in an appropriate manner, so we want to make sure that we’re capturing these intents and processing them appropriately. We build these intents as usual, adding training phrases and entities to improve the results from the NLU. Once we have created some initial intents, we can create the Small Talk meta intent, which will contain our created intents.

Give your meta intent a name, select “Meta Intent” as the **Intent type**, and add your intents using the dropdown. Once completed, you'll see that your standard intents are now nested under the newly created meta intent.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideMetaIntents_metaIntentDetails.png">

Take this opportunity to test out some user inputs to make sure that the intents are being recognized appropriately. If everything is done correctly, your search results should show both the higher scoring intent and the meta intent as the best matches.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/guideMetaIntents_testUserInput.png">

### Connect the domain to the Small Talk knowledge base

Next, we’ll create the knowledge base that will house our small talk responses in the form of articles. We’ll start by creating a new knowledge base using [domain intents](knowledge-base-overview.html#knowlege-base-intents-versus-domain-intents), making sure to select "Domain Intents" as the **Intent Association**. This will provide a menu from which to select our newly created Small Talk domain.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/guideMetaIntents_kb.png">

With this configuration in place, we can now add articles to respond to users' small talk. When using domain intents, as opposed to knowledge base intents, you will link the intent directly to the article instead of having to write up your own intent training phrases. Creating our domain first, we have already done that work.

Each intent within our selected domain can only be tied to one article, and articles can only have one intent. We’ll want to make sure to create a new article and summary for each intent we have, to ensure that all utterances are responded to appropriately.

It is important to note that the intent we are tying to the article, should be one of the “child” intents and not the meta intent.

<img class="fancyimage" style="width:600px" src="img/ConvoBuilder/guideMetaIntents_article.png">

### Build out the Small Talk dialog in Conversation Builder

Let's now tie together everything we’ve done within Conversation Builder. Start by creating a new dialog named “Small Talk”. Using the NLU Assist tool on the User Says interaction, we want to connect our Small Talk domain as the trigger for this dialog flow. You’ll notice that all of the intents show as options to match our user input; however, we want to make sure that we are selecting the meta intent. Fortunately, meta intents are signified by an asterisk (*) to differentiate them from standard intents.

<img class="fancyimage" style="width:450px" src="img/ConvoBuilder/guideMetaIntents_NLUAssist.png">

With this in place, we can continue to build our knowledge base integration as we normally would, creating an integration to make a call to our knowledge base and returning the summary as the article. After tying our integration into the dialog flow, we have now completed the construction of our knowledge base search, outside of our fallback dialog.

Our Small Talk dialog is being triggered by our meta intent, which again captures any utterance that matches its nested intents. We then take our triggering phrase and feed it into our search to return the appropriate article. If we have correctly tied each of our intents to a knowledge base article, we should get the correct response we’re looking for every time.

<img class="fancyimage" style="width:1000px" src="img/ConvoBuilder/guideMetaIntents_smallTalkDialog.png">

{: .important}
If your use case requires taking action on the specific, child intent, you can determine this by using the [getDialogStarterIntent](conversation-builder-scripting-functions-get-set-contextual-data.html#get-matched-intent) scripting function.

```javascript
var intentName = botContext.getDialogStarterIntent();
botContext.printDebugMessage("INTENT FOUND: " + intentName);
```

### Conclusion

Adding meta intents to your developer toolkit will provide new and powerful ways to create and customize your dialog flows. When used correctly, meta intents simplify the structure of your bot and allow you to further optimize the functionality of the bot.