---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: NHT API
permalink: nht-api-overview.html
indicator: both
---

### Introduction

**BETA version**

Net Handle Time (NHT) is a metric produced by a heuristic calculation, which is designed to provide an approximation of the average human agent's effort time to service a single consumer interaction (agent segment) across a skill in a one-hour interval.

Net Handle time uses agent-handled agent segments, login time, agent load, and the number of messages sent to consumers to create this heuristic. This can then be inserted into workforce management calculations in place of the voice metric ‘Average Handle Time’ to ascertain the required human agent headcount per hourly interval.


### Getting started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* leDataReporting

2. This API requires authorization using an API key methodology.

	* [Follow these instructions](create-oauth-1-0-api-keys.html), to create and use an API key.
	
	* To access this API, the API key must have the appropriate permission for the method. See the documentation page for the method for more details. 

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy](guides-retry-policy.html)

### Use cases

* Accurate prediction of required full-time equivalent (FTE) to service a skill within an hour interval.

* Skill level heuristic approximation of actual agent ‘net effort’ time to service an individual conversation within an interval, independent of high/low volume impact to metrics like Closed Conversations Per Login/Online Hour (CCPLH/CCPOH).

* General benchmarking of increases/decreases in effort required to service a conversation on a skill.
