---
pagename: Meta Intents
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Builder
permalink: intent-builder-meta-intents.html
indicator: both
---

### What is a meta intent?

A meta intent is a wrapper that can contain many other standard [intents](intent-builder-intents.html). This functionality provides a powerful tool for when you want to funnel a variety of intents from your user into a single dialog. When a user responds with an utterance that matches one of the contained intents, both the standard intent and the meta intent are matched. Once created, the Assist tool inside Conversation Builder can associate a dialog directly with a meta intent, directing all matches for any of the contained intents to that specific dialog.

<img style="width:550px" src="img/ConvoBuilder/meta_intent.png">

{: .important}
For a step-by-step example guide on using meta-intents with Conversation Builder, see [here](conversation-builder-tutorials-guides-using-meta-intents-with-conversation-builder.html).

<img style="width:900px" src="img/ConvoBuilder/meta_intent2.png">

### Creating a meta intent

The process for creating a meta intent is very similar to creating standard intents. From the Add Intent panel in your Domain View, give your meta intent a name, and select “Meta Intent” as the intent type. The ‘Add training phrase’ field below will now display a ‘Select intent to add’ dropdown menu, which will allow you to associate intents to your meta intent. As you add your intents, they will be removed from the dropdown menu, as an intent can belong to only one meta intent. When finished, click the **Add Intent** button in the lower-right corner, and you will see that your standard intents are now nested under the newly created meta intent in the left panel. 

{: .important}
As meta intents are a grouping of related intents, you'll need to create at least one intent prior to creating a meta intent. 

### Training meta intents

Meta intents are not trained directly, as they are dependent on the intents contained within to be triggered. Continuing to train and tune your intents as you normally do will improve the scoring of your meta intent. Please see [this section](intent-builder-intents.html#best-practices) for best practices when training intents. 

To test user utterances against your intents and meta intents, use the debug tool provided in the lower-right corner of Intent Builder. Select the ‘Search in domain’ checkbox, and select ‘All’ from the search dropdown. Testing user input will now display search results for both intents and meta intents, which should result in identical scoring for the intent matched and the meta intent it belongs to.

<img style="width:550px" src="img/ConvoBuilder/meta_intent3.png">