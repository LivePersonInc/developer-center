---
pagename: Overview
redirect_from:
  - data-messaging-interactions-overview.html
sitesection: Documents
categoryname: "Reporting"
documentname: Messaging Interactions API

level-order: 3
order: 1
permalink: messaging-interactions-api-overview.html
root-link: true
indicator: messaging
---
### Introduction

{: .notice}
This API is intended for reporting and information purposes, not for real-time decisions, such as routing.

<div class="important">
<p>The Messaging Interaction API exposes Open and Closed conversations with <b>near real-time data freshness</b>. The API has an inherent delay due to its nature and architecture as a historical API. This means that it has a delay of up to 1 minute.</p>
<p>In addition, SDEs will be available in the response in near real-time, but the ability to search on SDEs is only available after 2 hours. The All Conversations tab in Conversational Cloud is also built on top of this API.</p>
</div>

The Conversational Cloud Messaging Interactions API retrieves the most up to date information available about contact center messaging interactions. This API makes it possible to search, filter and analyze data and transcripts of open and closed conversations.

The API returns the conversation’s transcripts and all of its related metadata such as start time, end time, MCS, CSAT, summary, participated agents, the reason the conversation was closed etc.

This API supports the HTTP POST functionality (data retrieval), and all data is returned in JSON format.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* msgHist

2. This API requires authorization using API key or via login.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key. Temporarily, please utilize the same key as the Engagement History API.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

### Use Cases

* Extract all chat transcripts and accompanying data in order to integrate with any 3rd party application or database

* Extract types of conversations (e.g. low CSAT score, high MCS) and take an action on them.

Example of interactive tool created based on Messaging Interactions API.  This example utilizes the information to filter, sort and read through various transcripts:

![MessagingInteractions](img/messaginginteractions.png)
