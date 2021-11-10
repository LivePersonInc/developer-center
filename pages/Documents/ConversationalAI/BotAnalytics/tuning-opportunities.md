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

You can use Bot Analytics to evaluate a bot's performance and thereby identify tuning opportunities. There are a few key approaches to the data: MACS and intents. <!-- There are a few key approaches to the data: conversation status, MACS, and intents. -->

<!-- 
### Conversation status

The conversation status is the end state of the bot conversation, which can be:
* Bot Disengaged
* Consumer Disengaged
* Intended Transfer
* Unintended Transfer
* Bot Contained

For an explanation of each status, see [here](bot-analytics-key-terms-concepts.html#containment-of-bot-conversations).

Use the **Conversations** view to examine a bot's conversation status data, so you can understand how well the bot contains conversations.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ba_conversationsview1.png">

Select a data point in the table to display a list of conversations with a given conversation status on a specific date.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ba_conversationsview2.png">

Use the conversations list to easily perform a targeted review of transcripts. This is an efficient way to identify not only opportunities for bot tuning, but also missed opportunities for automation.
-->

### MACS

Review of a bot's Meaningful Automated Conversation Score (MACS) data is a great way to identify opportunities for bot/intent tuning. 

* For an introduction to MACS, its benefits, its scoring, and more, see [here](https://knowledge.liveperson.com/data-reporting-meaningful-automated-conversation-score-(macs).html) in the Knowledge Center.
* For information on using MACS within Bot Analytics, see [here](bot-analytics-macs.html) in this Developer Center.

### Intents
Intent tuning is an important step in optimizing a bot for high performance. 

You can readily determine that there are opportunities for intent tuning if you see a low **Intent Match Rate** for the account overall, or for a specific bot.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ba_low_intentmatchrate.png">

A bot’s **Intents** view displays both “matched intents” and “unmatched phrases” for your bot’s intents, patterns and attached knowledge bases. You can see all of them together, or you can view them individually using the **Source** dropdown menu on the left.

<img class="fancyimage" style="width:800px" src="img/ConvoBuilder/ba_views_intent.png">

Above, we’re looking at the matched intents for this bot. Tapping **Unmatched Phrases** displays the user utterances that didn’t return any result from the bot patterns, intents or knowledge bases.

If you see utterances in the **Unmatched Phrases** that should be matching a particular intent or Knowledge Base article, you can add them to the training phrases for these items. Keep in mind the best practices for creating training phrases for [intents](intent-manager-best-practices.html) and [internal knowledge bases](knowledgeai-internal-knowledge-bases-best-practices.html).