---
title: Overview
level1: Documents
level2: Data
level3: Personal Data Deletion API
level-order: 8
order: 1
permalink: personal-data-deletion-overview.html
root-link: true
indicator: both
---

**BETA**

### Introduction

Personal Data Deletion API allows brands to comply with the European Union's Right to be Forgotten requirement (a part of the GDPR). This API will permanently delete any personal data that the consumer requests to be deleted. Once the data has been deleted there is no way to restore it.

This data can include full conversation transcripts, hosted files or links sent by the consumer, survey free text answers and consumer's PII (personally identifiable information). Data will be deleted within 30 days from the time of the request. There will be some approval process on LivePerson's side in the early stages to make sure we are deleting the data as requested.
Only closed conversations can be deleted.

**Note**: what this document refers to as "deletion" is actually the masking of specific, personal data by replacing it with generic text in the following format: *** LP deleted data ***

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* rtbf

2. This API requires authorization using API key or via login.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key. The key is availbale under the Data section.

{:start="3"}
3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

{:start="4"}
4. This is a private beta that is available to a limited number of customers. Please contact your account manager if you’d like to be considered for inclusion. You’ll need to sign a beta agreement with LivePerson in order to participate.

### Main flows

**Chat**

This flow is initiated by the consumer requesting for one or all of his chats to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed some sort of identifying attribute to LiveEngage during these engagements which can be used to identify those engagements which were associated with the consumer making the request. This can be accomplished via [engagement attributes](https://developers.liveperson.com/engagment-attributes-overview.html), or through the [authentication flow](https://developers.liveperson.com/guides-authentication-detailedapi.html#openid-token-structure) (values are mapped onto engagement attributes).

2. Use the [Engagement History API](https://developers.liveperson.com/data-engagement-history-overview.html) to search for engagements with the identifying value. Find all relevant engagements and make note of the engagement id(s) to delete

3. Use the [Create Delete Request](personal-data-deletion-delete-request.html) method with the list of engagements to delete.

**Messaging - Flow #1**

This flow is initiated by the consumer requesting for one or all of his conversations to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed some sort of identifying attribute to LiveEngage during these engagements which can be used to identify those engagements which were associated with the consumer making the request. This can be accomplished via [engagement attributes](https://developers.liveperson.com/engagment-attributes-overview.html), or through the [authentication flow](https://developers.liveperson.com/guides-authentication-detailedapi.html#openid-token-structure) (values are mapped onto engagement attributes).

2. Use the [Messaging Interactions API](https://developers.liveperson.com/data-messaging-interactions-overview.html) to search for conversations with the identifying value. Find all relevant conversation id(s) for deletion.

3. Use the [Create Delete Request](personal-data-deletion-delete-request.html) method with the list of conversations to delete.

**Messaging - Flow #2**

This flow is initiated by the consumer requesting for all of his personal data to be deleted.

The brand will need to follow the below steps to achieve this:

1. The brand will need to have passed some sort of identifying attribute to LiveEngage during this consumer's engagements which can be used to identify those engagements which were associated with the consumer making the request. This can be accomplished via [engagement attributes](https://developers.liveperson.com/engagment-attributes-overview.html), or through the [authentication flow](https://developers.liveperson.com/guides-authentication-detailedapi.html#openid-token-structure) (values are mapped onto engagement attributes).

2. Use the [Messaging Interactions API](https://developers.liveperson.com/data-messaging-interactions-overview.html) to search for conversations with the identifying value. Find all relevant conversation ids and the relevant consumerId for deletion. The consumerId is identified in the Messaging Interactions API under consumerParticipant as participantId.

3. Use the [Create Delete Request](personal-data-deletion-delete-request.html) method and make two requests: one with the list of conversations to delete and another with the consumerId. This makes sure that both the conversation and the rest of the consumer's data is completely deleted.


### Limitations:

1. The following is not supported in the current beta phase:

 * For messaging:
    - Messaging conversations are still stored in one of LP's messaging repositories and therefore, if you enter a closed conversation from the “All Connections” tab to view the conversation in its full view, you will be able to see the entire transcript even after the deletion process.
    - Messaging consumer data is not deleted from all repositories.

 * Photo / file sharing data is not deleted.

 * Secure form data is not deleted.

2. This API is not aimed for massive deletion of data, there is an internal mechanism which will protect the system from such misuse of the API.
