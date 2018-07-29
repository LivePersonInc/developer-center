---
title: Overview
level1: Documents
level2: Data
level3: Messaging Operations API

level-order: 4
order: 1
permalink: data-messaging-operations-overview.html
root-link: true
indicator: messaging
---
### Introduction

The Messaging Operations API extracts data according to the search query. The API allows agent managers to extract information about their call center on the account, skill, and agent level. The data includes closed conversations and their associated attributes, such as customer satisfaction, average conversation length, resolved status and so on.

This API is based on the REST architecture style, which allows clients to send HTTP requests to view LiveEngage operational data. This API supports the HTTP GET functionality (data retrieval), and all data is returned in JSON format.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing either of the following service names:

	* leDataReporting (this domain is used for all methods **except** Estimated Wait Time)

	* msgEwtAPI (this domain is used for the **Estimated Wait Time method only**)

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use Cases

* Combine this information with other data sources to create your own real-time dashboard

* Analyze your contact center performance

LE dashboard that use the API:

![MessagingOperations](img/messagingoperations.png)
