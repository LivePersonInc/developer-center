---
pagename: Overview
redirect_from:
  - consumer-experience-messaging-history-overview.html
sitesection: Documents
categoryname: Reporting
documentname: Consumer Messaging History API
level-order: 7
order: 1
permalink: consumer-messaging-history-api-overview.html
root-link: true
indicator: messaging
---
### Introduction

{: .attn-alert}
Our Data APIs enable you to retrieve many attributes and information types. Please refer to [API Data Metrics](https://developers.liveperson.com/api-data-metrics.html) for the different types of information and attributes which are retrievable via both our Historical and Real Time Data APIs.

The Conversational Cloud Consumer Messaging History API allows retrieval of up to 13 months of historical conversations data, both metadata and content, for a specific consumer. This includes both archived and closed conversations.

This API is based on the REST architecture and supports the HTTPS GET protocol. All retrieved data is returned in JSON format. This API supports CORS which enables cross-domain data transfers.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* msgHist

2. This API requires authorization using a JWT token passed in the authorization header of the request. Please see our [Authentication document](guides-authentication-introduction.html) and [Token creation document](consumer-int-getting-started.html) for more info.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

### Use Cases

This is a complementary API for the [Messaging Window API](consumer-int-overview.html). It should be used to retrieve the historical conversations when using the Messaging Window API for the different use cases / scenarios described [here](consumer-int-overview.html#use-cases).
