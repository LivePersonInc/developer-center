---
title: Overview
level1: Documents
level2: Data
level3: Personal Data Deletion API

level-order: 6
order: 1
permalink: personal-data-deletion-overview.html
root-link: true
indicator: chat & messaging
---
### Introduction

Personal Data Deletion API allows brands to comply with the right to be forgotten requirement (that is part of the GDPR).
This API will delete permanently, with no way to restore it any personal data that is asked for deletion.
This includes full conversation's transcripts, hosted files or links sent by the consumer, survey free text answers and consumer's PII.
Data will be deleted within 30 days from the time of the request. There will be some approval process from LP side in the early stages to make sure we are deleting the correct data.

### Getting Started

A few things you'll need to get started with this API:

1. **Currently there's no need to reterive your domain for this API**.
Here are the different domains by geo location:

	* US accounts: va.data-mng.liveperson.net

	* UK accounts: lo.data-mng.liveperson.net

	* APAC accounts: sy.data-mng.liveperson.net


2. This API requires authorization using API key or using user's authentication (after granting it a specific privilege)

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Main flows

* Consumer requests for one or all of his conversations to be deleted.
For chat:


Pass customer identification value via authentication flow (mapped into engagement attribute) or via engagement attributes



Search in Engagement History API for engagements with the identification value
Find all relevant engagements and detect the engagement id to delete
Call Deletion Service API

You will need to retrieve the conversation id (for messaging) or engagement id (for chat) from the Messaging Interactions API or Engagement History API retrospectively by searching by your customer identification in the engagement attributes

* Messaging only - since LP stores data in the consumer level, it is possible to ask for this data to be deleted as well.
