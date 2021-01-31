---
pagename: Account-Level Performance
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Analytics
permalink: bot-analytics-account-level-performance.html
indicator: both
---

### Introduction
After you access Bot Analytics, the main dashboard is displayed. The dashboard is divided into two parts:

* At the top, there are account-level metrics and trend charts for all your bots regardless of environment (Demo, Production, and undeployed).
* At the bottom, there are bot-level metrics for each of the bots.

<img style="width:800px" src="img/ConvoBuilder/ba_dashboard.png">

{: .important}
The trend charts can show data for November 1, 2020 and later.

**Conversation** metrics and **Transfers** metrics are specific to deployed bots and exclude conversations conducted via the Preview tool. However, the rest of the metrics (**Messages**, **Users**, and **Intent Match Rate**) include conversations conducted via Preview. This means you can test a bot’s performance, for example, its intent matching, without having to deploy it.

Use the dashboard page to get a quick indication of the overall performance of your organization’s automation program.

{: .important}
If you have bots that are hosted in both the LivePerson cloud and the Amazon Web Services (AWS) cloud, you’ll only see the data for the bots within one cloud at a time, namely, the one you’re logged into.

### Date range and time zone

On the dashboard, the date range for the displayed data is shown in the upper-right corner.

<img style="width:600px" src="img/ConvoBuilder/ba_date_filter_main.png">

You can use this filter to show the data for any 7-day date range within the last 13 months. You can also use the date filter to change the time zone in use.

### Account-level metrics

* **Conversations**: The total number of closed and open Conversational Cloud conversations in which the bots participated.
* **Messages**: The total number of messages sent by the consumer and received by the bots. This can be useful for understanding how long it takes to resolve a conversation.
* **Users**: The total number of unique users that connected to the bots.
* **Intent Match Rate**: The percentage of consumer questions that were matched with intents, patterns, Regex, exact value matches, evaluated options, or Knowledge Base articles. Be aware that the system doesn’t make a determination as to whether a match was a false positive.
* **Transfers**: Previously called “escalations.” The total number of transfers to a human agent or another bot, across the bots.

### Bot-level metrics

* **Conversations**: The total number of closed and open Conversational Cloud conversations in which the bot participated.
* **Messages**: The total number of messages sent by the consumer and received by the bot.
* **Users**: The total number of unique users that connected to the bot. Note that this metric doesn’t combine visits, i.e., if a user starts a second conversation at a later time, that is treated as a new user.
* **Intent Match Rate**: The percentage of consumer questions that were matched with intents, patterns, Regex, exact value matches, evaluated options, or Knowledge Base articles. Be aware that the system doesn’t make a determination as to whether a match was a false positive.
* **Transfers**: Previously called “escalations.” The total number of transfers to a human agent or another bot.
* **Language**: The language of the bot as specified in the bot’s [Bot Language bot setting](conversation-builder-bots-bot-basics.html#configure-bot-settings).

### Perform a search
Use the search box in the upper-right corner to find a bot by bot name.

<img style="width:600px" src="img/ConvoBuilder/ba_search.png">