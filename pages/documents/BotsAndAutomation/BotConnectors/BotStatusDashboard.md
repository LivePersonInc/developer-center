---
pagename: Bot Status Dashboard
redirect_from:
sitesection: Documents
categoryname: "Agent Experience & Bots"
documentname: Bot Connectors
permalink: bot-connectors-bot-status-dashboard.html
indicator:
---

### Overview

The bot status dashboard provides a detailed overview for the most important bot KPIs. It features a chronological history of 

different bot states events, such as online and interruptions and provides a calculated uptime for the bot. To track the efficiency of the bot,

the dashboard features an overview for the number of handled conversation in a timeline graph. The dashboard can be accessed by clicking on bot's name (1) as seen in *Figure 1.1*

<img class="fancyimage" style="width:600px" src="img/botstatusdashboard/bot-status-select.png">

Figure 1.1 How to access the bot status dashboard

### Limitations

If the bot is restarted, all previous dashboard data will be cleared. 

For a running bot, conversation data storage is limited to max 7 days in the past. 

### Dashboard overview

The user will see the following screen after clicking on the bot's name. 

<img class="fancyimage" style="width:600px" src="img/botstatusdashboard/bot-status-overview.png">

Figure 2.1 Dashboard overview

In section 1, as seen in *Figure 2.1*, the dashboard provides a short configuration overview for the selected bot. The user can see the connection type to LiveEngage (either Chat or Messaging),

the configured A.I. Vendor, the failover skill and the skills which are assigned to this bot.

### Status

In section 2, as seen in *Figure 2.1*, the dashboard provides a chronological history of bot states events and an overview of the bot's overall uptime. 

<img class="fancyimage" style="width:600px" src="img/botstatusdashboard/bot-status-online-state.png">

Figure 3.1 Bot Status overview

In section 1 of *Figure 3.1* the user can see the overall calculated uptime, the bot's start time and online runtime.

In section 2 of *Figure 3.1* the user can see different bot states events. The bot can have 4 different states: Online, Vendor Interruption, Service Interruption and Offline.

The Vendor Interruption state indicates that there is an error reaching the configured AI vendor. In this case the bot will escalate each conversation to the configured failover skill.

In case of a Service Interruption the bot is non functioning at all. In this state the bot cannot accept new conversation nor handle existing conversations. This state indicates problems with Liveperson APIs.

Each interruption state event provides a specific error code which can be copied by clicking on the "Copy error details" link as seen in section 3 of *Figure 3.1*. 

The error details contain a human readable error message, the error code and an unique error id, which will help support in identifying the root cause of the error.

### Conversation Metrics

In section 3, as seen in *Figure 2.1*, the bot status dashboard provides an overview of specific bot conversation metrics. 

<img class="fancyimage" style="width:600px" src="img/botstatusdashboard/bot-status-metrics.png">

Figure 4.1 Bot conversation metrics

On the left side in section 1 of *Figure 4.1* the user can see the accumulated metrics over the last 7 days. There are currently 4 KPIs:

* Total Conversations: Total number of conversation which were handled by the bot
* Closed Conversations: Percentage of total conversations which were closed by the bot or the consumer
* Transferred Conversations: Percentage of total conversations which were transferred to a different skill
* Escalated Conversations: Percentage of total conversations which were escalated due to an error with the bot

On The right side in section 2 of *Figure 4.1* the user can see a timeline representation of the conversation metrics. The user can select between various time scales, the smallest is last ten minutes and the biggest is last week.
