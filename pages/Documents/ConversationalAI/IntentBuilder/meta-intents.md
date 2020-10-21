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

### What's a meta intent?

A meta intent is a wrapper that can contain many other standard [intents](intent-builder-intents.html). This functionality provides a powerful tool for when you want to funnel a variety of intents from your user into a single dialog. When a user responds with an utterance that matches one of the contained intents, both the standard intent and the meta intent are matched. Once created, the Assist tool inside Conversation Builder can associate a dialog directly with a meta intent, directing all matches for any of the contained intents to that specific dialog.

<img style="width:550px" src="img/ConvoBuilder/meta_intent.png">

<img style="width:800px" src="img/ConvoBuilder/meta_intent2.png">

### Add a meta intent

The process for creating a meta intent is very similar to [creating a standard intent](intent-builder-intents.html#add-an-intent). In the Add Intent panel, give your meta intent a name, and select “Meta Intent” as the **Intent Type**. Under **Intents**, use the dropdown menu to associate intents to the meta intent. As you add intents to the meta intent, they are removed from the dropdown menu; this is because an intent can belong to only one meta intent.

When you are finished, click **Save** in the lower-right corner. In the left panel, you can now see that the standard intents are nested under the newly created meta intent.

{: .important}
As meta intents are a grouping of related intents, you'll need to create at least one intent prior to creating a meta intent. 

### Train meta intents

Meta intents are not trained directly, as they are dependent on the intents contained within to be triggered. Continuing to train and tune your intents as you normally do will improve the scoring of your meta intent. Please see [this section](intent-builder-intents.html#best-practices) for best practices when training intents. 

To test user utterances against your intents and meta intents, use the debug tool provided in the lower-right corner of Intent Builder. Select the ‘Search in domain’ checkbox, and select ‘All’ from the search dropdown. Testing user input will now display search results for both intents and meta intents, which should result in identical scoring for the intent matched and the meta intent it belongs to.

<img style="width:500px" src="img/ConvoBuilder/meta_intent3.png">

### Example guide

For some practice with meta intents, complete the [Getting Started tutorial series](tutorials-guides-getting-started-with-bot-building-overview.html), which includes a [tutorial](tutorials-guides-bot-groups-other-techniques-meta-intents.html) on meta intents.