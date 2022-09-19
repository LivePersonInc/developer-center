---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: Agent Activity API
permalink: agent-activity-api-overview.html
indicator: both
---

{: .note}
This API is currently in an early adoption phase. To participate in this program, please reach to your LivePerson representative.

{: .alert}
This API is intended for reporting and information purposes, not for real-time decisions, such as routing.


{: .notice}
In V1: Each page in the API response is limited to 20 state changes * limit parameter * query days. For example, if the limit is set to 10 (agents), 1-day query then limitation per page = 200 state changes. <br/>
In case of excessive state changes, some of the states/agents may be truncated based on the maximum state’s limitation. <br/>
In v2 the API response contains all state changes in a flat response (not grouped by agent). This has been done to resolve the limitation in V1.

### Introduction

The Agent Activity API provides an historical raw data solution to track agent adherence on both messaging and chat channels.

The API allows its consumer to track the agent login and logout hours, and also the state changes during the login hours, including predefined custom states as defined by the brand.

**Note:** At this point, away states are not calculated based upon productive and non-productive away status.

The API is based on HTTPS GET functionality, and all data is returned in a JSON format.

### Getting started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* agentActivityDomain

2. This API requires authorization using an API key methodology.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.
	
	* To access this API, the API key must have the `Data → Workforce Management → Agent Activity API` permission.  

3. Note the [API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy](guides-retry-policy.html).

### Use cases

* Evaluate how much time agents spend in each away state.
  
* Measures agent schedule adherence by monitoring agent login and logout behavior.

* Tracking agent behavior by monitoring agent status updates.

* Tracking and assessing agent and team productivity and correlating against other productivity metrics (e.g. online hours, quantity of closed conversations.
