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


3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Main flows

** Chat - Visitor requests for one or all of his chats to be deleted.

The brand will need to follow the bellow steps:
Step1: Pass customer identification value via authentication flow (mapped into engagement attribute) or via engagement attributes

Step 2: Search in Engagement History API for engagements with the identification value
Find all relevant engagements and detect the engagement id to delete

Step 3: Use {link ...} with the list of engagement to delete.

** Messaging - Consumer requests for one or all of his conversations to be deleted.

The brand will need to follow the bellow steps:
Step1: Pass customer identification value via authentication flow (mapped into engagement attribute) or via engagement attributes

Step 2: Search in Messaging Interactions API for conversations with the identification value. Find all relevant conversation ids for deletion.

Step 3: Use {link ...} with the list of conversations to delete.

** Messaging - Consumer requests for all of his personal data to be deleted.

The brand will need to follow the bellow steps:
Step1: Pass customer identification value via authentication flow (mapped into engagement attribute) or via engagement attributes

Step 2: Search in Messaging Interactions API for conversations with the identification value. Find all relevant conversation ids and the relevant consumerId for deletion. The consumerId is identified in the Messaging Interactions API under consumerParticipant as participantId.

Step 3: Use {link ...} and make two requests: one with the list of conversations to delete and another with the consumerId


### Limitations:
The following types are not supported in the current beta phase:
 - For messaging only - messaging conversations are still not deleted from one of the  messaging repositories
 - Unauthenticated engagement attributes - customer info and personal info
 - File sharing data
