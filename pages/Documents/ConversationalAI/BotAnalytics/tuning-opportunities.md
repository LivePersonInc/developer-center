---
pagename: Tuning Opportunities
redirect_from:
    - bot-analytics-leveraging-analytics.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Analytics
permalink: bot-analytics-tuning-opportunities.html
indicator: both
---

### Intents
Intent tuning is an important step in optimizing a bot for high performance. 

You can readily determine that there are opportunities for intent tuning if you see a low **Intent Match Rate** for the account overall, or for a specific bot.

A bot’s **Intents** view displays both “matched intents” and “unmatched phrases” for your bot’s intents, patterns and attached knowledge bases. You can see all of them together, or you can view them individually using the **Source** dropdown menu on the left.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ba_views_intent.png">

Above, we’re looking at the matched intents for this bot. Tapping **Unmatched Phrases** displays the user utterances that didn’t return any result from the bot patterns, intents or knowledge bases.

If you see utterances in the **Unmatched Phrases** that should be matching a particular intent or Knowledge Base article, you can add them to the training phrases for these items. Keep in mind the best practices for creating training phrases for [intents](intent-builder-intents.html#best-practices) and [internal knowledge bases](knowledge-base-internal-knowledge-bases-best-practices.html).