---
pagename: Meta Intents
redirect_from:
    - intent-builder-meta-intents.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Intent Manager
subfoldername: Build
permalink: intent-manager-build-meta-intents.html
indicator: both
---

### What's a meta intent?

For an explanation of a meta intent, see [here](intent-manager-key-terms-concepts.html#meta-intents).

{: .note}
For some practice with meta intents, complete the [Bot Groups & Other Techniques](tutorials-guides-bot-groups-other-techniques-overview.html) tutorial series.

### Add a meta intent

The process for creating a meta intent is very similar to [creating a standard intent](intent-manager-build-intents.html#add-an-intent). In the Add Intent panel, give your meta intent a name, and select “Meta Intent” as the **Intent Type**. Under **Intents**, use the dropdown menu to associate intents to the meta intent. As you add intents to the meta intent, they are removed from the dropdown menu; this is because an intent can belong to only one meta intent.

When you are finished, click **Save** in the lower-right corner. In the left panel, you can now see that the standard intents are nested under the newly created meta intent.

{: .note}
As meta intents are a grouping of related intents, you'll need to create at least one intent prior to creating a meta intent. 

### Train meta intents

Meta intents are not trained directly, as they are dependent on the intents contained within to be triggered. Continuing to train and tune your intents as you normally do will improve the scoring of your meta intent. Please see [this section](intent-manager-best-practices.html) for best practices when training intents. 

To test user utterances against your intents and meta intents, use the **Test User Input** tool provided in the "Build" area of Intent Manager. Select the ‘Search in domain’ checkbox, and select ‘All’ from the search dropdown. Testing user input will now display search results for both intents and meta intents, which should result in identical scoring for the intent matched and the meta intent it belongs to.

<img style="width:500px" src="img/ConvoBuilder/meta_intent3.png">

### Example guide

For some practice with meta intents, complete the [Getting Started tutorial series](tutorials-guides-getting-started-with-bot-building-overview.html), which includes a [tutorial](tutorials-guides-bot-groups-other-techniques-meta-intents-knowledge-bases.html) on meta intents.