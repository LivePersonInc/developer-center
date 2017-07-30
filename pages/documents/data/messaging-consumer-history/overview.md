---
title: Overview
level1: Documents
level2: Consumer Experience
level3: Consumer Messaging history API
level-order: 3
order: 1
permalink: consumer-experience-messaging-history-overview.html
root-link: true
indicator: messaging
---

### Introduction

The LiveEngage Consumer Messaging History API allows to retrieve up to 13 months of historical conversations data, both metadata and content, for a consumer. This includes both archived and closed conversations.

This API is based on the REST architecture and supports the HTTPS POST protocol (data retrieval), all retrieved data is returned in JSON format.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* msgHist

2. This API is aimed to be used with JWT authentication. The JWT should be passed in the authorization header of the request.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use Cases

* Extract all chat transcripts and accompanying data in order to integrate with any 3rd party application or database

* Extract a type of conversation (e.g. low CSAT score, high MCS) and take an action on them.

Example of interactive tool created based on Messaging Interactions API.  This example utilizes the information to filter, sort and read through various transcripts:

![MessagingInteractions](img/messaginginteractions.png)
