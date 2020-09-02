---
pagename: Leveraging Analytics
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Analytics
permalink: bot-analytics-leveraging-analytics.html
indicator: both
---

### View matched intents and unmatched phrases

The Analytics portal can help you understand which of your intents are matching (or not) and give you the information you need to train and tune your intents.

To view your intent metrics, go to the Analytics portal, select your bot, and from the Overview page, select "Intents" from the dropdown menu.

The Analytics portal, by default, has a date range set to Yesterday. If you’d like to change it to Today or some custom range, tap the date picker on the right and change it. You can also change the time zone to your particular time, or even UTC time.

The Intents view lets you view both "Matched Intents" and “Unmatched Phrases” for your bot’s intents, patterns and attached knowledge bases. You can see all of them together, or you can select them individually in the Source dropdown menu on the left.

<img class="fancyimage" style="width:700px" src="img/ConvoBuilder/analytics_intentsView.png">

Here we’re looking at the matched intents for this bot. Most are coming from the knowledge base, but you can see a pattern for the greeting as well.

Tapping **Unmatched Phrases** displays the user utterances that didn't return any result from the bot patterns, intents or knowledge bases.

If you see utterances in the **Unmatched Phrases** that should be matching a particular intent or Knowledge Base article, you can add them to the training phrases for these items. Keep in mind the best practices for creating training phrases for [intents](intent-builder-intents.html#best-practices) and [LivePerson knowledge bases](knowledge-base-liveperson-knowledge-bases-best-practices.html).