---
title: Overview
level1: Documents
level2: Data
level3: Messaging Interactions API

level-order: 3
order: 1
permalink: data-messaging-interactions-overview.html
root-link: true
---
### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* msgHist

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key. Temporarily, please utilize the same key as the Engagement History API.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use){:target="_blank"}.

### Introduction

The LiveEngage Messaging Interactions API retrieves the most up to date information available about contact center messaging interactions. This API makes it possible to search, filter and analyze data and transcripts of open and closed conversations.

The API returns the conversation’s transcripts and all of its related metadata such as start time, end time, MCS, CSAT, summary, participated agents, the reason the conversation was closed etc.

This API supports the HTTP POST functionality (data retrieval), and all data is returned in JSON format.

### Use Cases

* Extract all chat transcripts and accompanying data in order to integrate with any 3rd party application or database

* Extract a type of conversation (e.g. low CSAT score, high MCS) and take an action on them.

Example of interactive tool created based on Messaging Interactions API.  This example utilizes the information to filter, sort and read through various transcripts:

![MessagingInteractions](img/messaginginteractions.png)
