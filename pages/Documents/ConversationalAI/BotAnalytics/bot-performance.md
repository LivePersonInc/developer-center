---
pagename: Bot Performance
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Bot Analytics
permalink: bot-analytics-bot-performance.html
indicator: both
---

### Introduction
Clicking a bot name on the main dashboard takes you to the bot’s **Overview** page. This provides a summary of the bot’s performance.

<img style="width:800px" src="img/ConvoBuilder/ba_bot_overview.png">

### Date range and time zone
In any bot-level view, the date range for the displayed data is shown in the upper-right corner.

<img style="width:600px" src="img/ConvoBuilder/ba_date_filter_bot.png">

You can use this date filter to show the data for any 60-day date range within the last 13 months. You can also use the date filter to change the time zone in use.

### Views and measures
From the **Overview**, you can access additional views for more detailed information. A few, important views are accessible directly from the menu bar; the rest are accessible from the dropdown menu.

<img style="width:700px" src="img/ConvoBuilder/ba_views.png">

Use the views to understand how consumers are interacting with the bot. For example, you can use the **Conversations** and **Users** views to understand and compare volume. These views can show you daily trends that reveal traffic patterns during business hours and off hours, and so on. Additionally, a review of transcripts via the [Transcripts](bot-analytics-transcripts.html) view is a great way to identify opportunities for tuning.

Some measures that are useful to assess while monitoring and improving your bots include:

#### Usage  
* What day and time were your bots active the most?
* How many users were presented and connected to the bot? 
* How many interactions did the bot have with the consumer?
* Is usage tied to any known external issues, e.g., service outages, supply chain issues, or social disruption?

#### Intents
* Which intents do you successfully serve through the bot today?
* Which intents perform better than others?
* Does the bot design misunderstand the way consumers express their intents?
* Does the bot fail? How often does it happen?
* What is the bot’s intent match rate?

#### Engagement 
* How many users stayed through the entire bot flow?
* Did they make it through what you consider the complete happy path to intent resolution?
* Did they express any negative feedback or run into unforeseen problems?
* How many conversations encountered fallback? 

#### Escalations
* Was the bot equipped with all the resources needed to satisfy the consumer's intent?
* How often did an experience end up getting transferred from a bot to a human agent?

#### Bot Operations
* Is the system performing as designed?
    * Showing dialogs and transferring users through the intended path
    * Presenting accurate information at the desired time
    * Handling the quantity of interactions in an efficient manner

### Download data
All bot views except the **Overview** let you download the results to a CSV file. Click the **Download** link in the upper-right corner.

<img style="width:400px" src="img/ConvoBuilder/ba_download.png">

You can query for and download data for any 60-day time period in the last 13 months. If you need to download at one time the data for a longer time period, use [Analytics Builder](https://knowledge.liveperson.com/data-reporting-report-builder-report-builder-overview.html).

{: .important}
All downloaded data represents dates and times in UTC.
