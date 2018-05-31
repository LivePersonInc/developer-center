---
title: Overview
level1: Documents
level2: Data
level3: Data Access API (BETA)

level-order: 1
order: 1
permalink: data-data-access-overview.html
root-link: true
indicator: chat
---

**BETA**

### Introduction

The LiveEngage Data Access API provides brands with the ability to address specific Goals and KPIs while also extending the reporting capabilities of their account by accessing their entire raw data. The data includes full information about their agents’ activities and visitors’ journeys.

Brands can use this data in data warehouse systems as well as create customized reports from a combination of their own data, data provided by LiveEngage advanced analytics and other 3rd parties data system they are working with.

Data access is not a default function of LiveEngage; it must be configured separately for each account.
The four types of data supported and configurable in each account are as follows:

* Agent Activity
* Web Session
* Engagement
* Survey

The Data Access API retrieves historical data. This API is based on the REST architecture style and supports the HTTPS GET protocol (data retrieval), all retrieved data is returned in JSON format.

**Note** 

Data Access retention will soon be reduced to a 30 days period in order to comply with the GDPR. The GDPR (General Data Protection Regulation) is a new European Union regulation that is aimed to protect personal data of individuals within the EU that will be enforced by May 25th 2018.

Part of the regulation requires the ability for a consumer to ask for their personal data to be deleted ("Right to be Forgotten") and in order to meet this requirement we will need to reduce the Data Access retention policy to 30 days (instead of 100 days as it was prior to this change).

This means that data access files will be deleted 30 days from the time they were created. This still provides sufficient time for customers to pull their data from LiveEngage and store it in their own data warehouse.

The new retention policy will be enforced by May 13th 2018.

### Getting Started

A few things you'll need to get started with this API:

1. **There's no need to reterive your domain for this API**. Here are the different domains by geo location:

	* US accounts: va.da.liveperson.net

	* UK accounts: lo.da.liveperson.net

	* APAC accounts: sy.da.liveperson.net

2. This API requires authorization using API key that is available in the LiveEngage API Keys tab.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. This is a private beta that is available to a limited number of customers.  Please contact your account manager if you’d like to be considered for inclusion.  You’ll need to sign a beta agreement with LivePerson in order to participate.  

5. This API requires backend enablement, please contact your account manager to do so. 

6. This beta software may be released in production as a final product at LivePerson’s discretion.  While it is in beta, we are making it available to you for use “as is” and for testing purposes only.



### Architecture

![DataAccessAPI](img/dataaccess.png)

JSON-Generating Data Flow Process:

1. Every visitor and/or agent action triggers an event.
2. Events are stored in HDFS (Hadoop File System).
3. Job processes the events (in the Hadoop environment) and generates a grouping of all the events related to each session once they are considered “closed”.
4. A data access job then runs

![DataAccessAPI02](img/Data access-02.png)


### Use Cases

1. Brands that handles multiple contact centers in different regions can now pull the agent activity data per region and review their agents’ utilization. The data contains information on status change the agent has made during his shift. The brand can then integrate the data with specific regional information from their workforce management system.

2. If a brand has a customer membership programs, they can learn whether their premium members are indeed the heaviest buyers. They can use the order value variable from LivePerson against their own customer membership data and compare the Average Order Value for each membership segment.
