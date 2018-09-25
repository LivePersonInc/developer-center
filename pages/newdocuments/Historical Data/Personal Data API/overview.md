---
pagename: Overview
redirect_from:
  - personal-data-deletion-overview.html
sitesection: Documents
categoryname: "Historical Data"
documentname: Personal Data Deletion API
level-order: 8
order: 1
permalink: personal-data-deletion-api-overview.html
root-link: true
indicator: both
---

### Introduction

Personal Data Deletion API allows brands to comply with the European Union's Right to be Forgotten requirement (a part of the GDPR). This API will permanently delete any personal data that the consumer requests to be deleted. Once the data has been deleted there is no way to restore it.

Personal data may include full conversation transcripts, hosted files or links sent by the consumer, survey free text answers and consumer's PII (personally identifiable information). Data will be deleted within 20 days from the time the deletion request was made final (explanation regarding when requests are made final can be found below).


**Note**: what this document refers to as "deletion" is actually the masking of specific, personal data by replacing it with generic text in the following format: *** LP deleted data ***

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* rtbf

2. This API requires authorization using API key or via login.

	* [Follow these instructions](guides-gettingstarted.html), to create and use an API key. The key is available under the Data section.

{:start="3"}
3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).


### Deletion Process

Once a deletion request is sent via the API, it will become final and irrevocable after a pre-defined time period (5 days by default). During that time period, it is possible for the brand to cancel the deletion request. this allows the brand to monitor the deletion requests that are issued on their behalf.
After the deletion request is made final (the default period of time elapses), the deletion process will start and we guarantee full deletion from all repositories within 20 days.

There is a limitation of the number of deletion requests that a brand can issue within a calendar month. By default, the requests threshold is set to 100 requests. If you wish to change this, please contact your LivePerson Account Team.

### Main flows

** Note ** : Only closed chats / conversations can be deleted.

**Chat**

This flow is initiated by the consumer requesting for one or all of his chats to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed some sort of identifying attribute to LiveEngage during these engagements which can be used to identify those engagements which were associated with the consumer making the request. This can be accomplished via [engagement attributes](engagement-attributes-overview.html), or through the [authentication flow](guides-authentication-detailedapi.html#openid-token-structure) (values are mapped onto engagement attributes).

2. Use the [Engagement History API](data-engagement-history-overview.html) to search for engagements with the identifying value. Find all relevant engagements and make note of the engagement id(s) to delete

3. Use the [Create Delete Request](personal-data-deletion-delete-request.html) method with the list of engagements to delete.

**Messaging - Flow #1**

This flow is initiated by the consumer requesting for one or all of his conversations to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed some sort of identifying attribute to LiveEngage during these engagements which can be used to identify those engagements which were associated with the consumer making the request. This can be accomplished via [engagement attributes](engagement-attributes-overview.html), or through the [authentication flow](guides-authentication-detailedapi.html#openid-token-structure) (values are mapped onto engagement attributes).

2. Use the [Messaging Interactions API](data-messaging-interactions-overview.html) to search for conversations with the identifying value. Find all relevant conversation id(s) for deletion.

3. Use the [Create Delete Request](personal-data-deletion-delete-request.html) method with the list of conversations to delete.

**Messaging - Flow #2**

This flow is initiated by the consumer requesting for all of his personal data to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed some sort of identifying attribute to LiveEngage during this consumer's engagements which can be used to identify those engagements which were associated with the consumer making the request. This can be accomplished via [engagement attributes](engagement-attributes-overview.html), or through the [authentication flow](guides-authentication-detailedapi.html#openid-token-structure) (values are mapped onto engagement attributes).

2. Use the [Messaging Interactions API](data-messaging-interactions-overview.html) to search for conversations with the identifying value. Find all relevant conversation ids and the relevant consumerId for deletion. The consumerId is identified in the Messaging Interactions API under consumerParticipant as participantId.

3. Use the [Create Delete Request](personal-data-deletion-delete-request.html) method and make two requests: one with the list of conversations to delete and another with the consumerId. This makes sure that both the conversation and the rest of the consumer's data is completely deleted.

**Ticketing**

Note: As the Ticketing system is a legacy system used by legavy (non LE 2.0) accounts, this API requires authorization using external OAuth 1.0 API key. ##This should be generated by Liveperson Support team.

This flow is initiated by the consumer requesting for one or all of his tickets to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed the ids of tickets it wishes to mask.

2. This can be accomplished by searching for the relevant ticket ids via the legacy agent console or via the dedicated Ticket Search page in the legacy admin area (provisioned on the Ticket Search feature) according to some identifying contact attributes like Name, Email, Phone and/or Keyword (free text field).
In the agent console the search is limited to 31 days sliding window up to 13 months back.
In the admin area the search is limited to 31 days sliding window with no historical limit.
   
3. Use the Create Delete Request method with the list of ticket ids (without the 'LTK' prefix and 'X' suffix) to delete.

The tickets themselves will not be deleted but rather the metadata which links the tickets to the requesting consumer,such as ticket message (email) headers, UDEs (legacy SDEs) and ticket contact info, will be masked.
Attachments in the relevant tickets will be deleted.

### Limitations:

This API is not aimed for massive deletion of data, there is an internal mechanism which will protect the system from such misuse of the API.
