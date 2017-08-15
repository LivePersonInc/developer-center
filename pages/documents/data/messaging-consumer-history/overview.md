---
title: Overview
level1: Documents
level2: Consumer Experience
level3: Consumer Messaging history API (BETA)
level-order: 3
order: 1
permalink: consumer-experience-messaging-history-overview.html
root-link: true
indicator: messaging
---

**BETA**

### Introduction

The LiveEngage Consumer Messaging History API allows to retrieve up to 13 months of historical conversations data, both metadata and content, for a consumer. This includes both archived and closed conversations.

This API is based on the REST architecture and supports the HTTPS GET protocol, all retrieved data is returned in JSON format.

This API supports CORS which enables cross-domain data transfers.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* msgHist

2. This API requires authorization using JWT bearer token passed in the authorization header of the request. 

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use Cases

This is a complementary API for the Messaging Window API. It should be used to retrieve the historical conversations when using the Messaging Window API for the different use cases / scenarios described here  [LINK to the use cases] 

