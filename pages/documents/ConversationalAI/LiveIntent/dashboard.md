---
pagename: Dashboard
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: LiveIntent
permalink: liveintent-dashboard.html
indicator: messaging
---

This document will explain all of the various aspects of the LiveIntent dashboard.

All tables in the dashboards can be sorted by clicking on any of the headers.

### Autorefresh

The autorefresh setting allows you to set how often the dashboard refreshes. Setting it to the lowest time of 15 seconds will give you a live view into your intents.

### Search

The search bar will limit data to only its results across all dashboards and views of LiveIntent.

You are able to search for keywords in messages or metadata like conversation IDs. 

When searching, you can use special operators like `AND`, `OR`, and `AND NOT`.

Example: 
    `"This message" AND "that intent" AND NOT "some other text"`

### Filters

The filter options will limit data across all dashboards and views of LiveIntent. 

#### Add Filter

When you add a filter, you will see many different data points to filter by.

Skills, Groups, and Agents allow you to ensure that the right intents are occurring in the right places.

Domains, Meta-Intents, and Intents allow you to hone in on specific intents.

Selecting User Types will allow you to optimize bot-specific or human-only conversations.

MCS, Confidence Score, and CSAT will allow you to specifically dive into performance of intents.

#### Time Range

You have three options to select a time range to filter your intent data.

Quick Select will provide you with the most common time ranges.

Relative gives you a rolling window of time.

Absolute lets you use LiveIntent as historical reporting.

### Intent Trends

The Intent trends view gives a high level view of which intents are happening in your contact center

<img class="fancyimage" style="width:750px" src="img/liveintent_dashboard_home.png">

#### Topline Metrics

At a glance, see how your intent detection is doing

#### Top Intents

The volume and historical trend of your top 5 intents

#### Intents with Lowest Confidence Score

The lowest 5 intents in terms of matching confidence by the NLU. 

If intents have a low confidence score, that means that they may need better or more training phrases.

#### Intents with Lowest MCS

The lowest 5 intents in terms of poor customer sentiment.

If intents show up here, there likely needs to be changes made to operational processes with bots or human agents.

#### All Intents and KPIs

Tabular view of all data above, not limited to top or lowest 5 intents.


### Conversation Details

The converation details view is where you go to dig in to explore the messages and conversations with intent

<img class="fancyimage" style="width:750px" src="img/liveintent_dashboard_convo_details.png">

#### Topline Metrics

At a glance information about your messages with intent

#### Messages with Intent

All messages with intent that match your filters. 

Only shows up to 500 items.

Clicking on the Conversation ID, filters the dashboard via the [search bar](#search) to just that conversation. For example, see [agent conversations](#agent-conversations-and-transcripts) will be filtered to just that one.

#### Agent Conversations and Transcripts

This are is for exploring into specific instances of intent detection. The conversations displayed will be determined by the [filters](#filters) or [search](#search).

The transcript data can be useful for determining improvements in training phrases.

<!--
### Glossary

| Term | Definition |
| --- | ---- |
| High Impact Intents | todo |
| MCS | Meaningful Connection Score |
-->