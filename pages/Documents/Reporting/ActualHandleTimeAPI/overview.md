---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
permalink: actual-handle-time-api-overview.html
indicator: both
---

### Introduction

{: .notice}
This API is currently in its beta version and might require a few adjustments. A primary purpose of this beta version is to obtain feedback on the API performance and accuracy.

Actual Handle Time metric tracks events within the agent workspace. The metric is based on an internal algorithm that looks at several factors to give the most accurate view of handle time effort at an individual segment level. (In essence, it tracks time whenever an agent has a conversation selected on the screen that is awaiting their response.)
This API is an offline API. The data in this API is available up to 24 hours from the moment the segments were closed.

### Getting started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* agentActivityDomain

2. This API requires authorization using an API key methodology.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.
	
	* To access this API, the API key must have the `Data → Workforce Management → Agent Activity API` permission.  

3. Note the [API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy](guides-retry-policy.html).

{: .important}
This API is not available by default. To enable it please contact your account manager.

### Use cases

* Tracking Contact Center teams activity/BPOs performance ( Online hours, Quality, Quantity ) to renegotiate contracts and gain insights on the agent activity level.
  
* Resource planning and staffing based on historical data, historical agent adherence, and "away" reason values provide actual shrinkage for more accurate planning.

* Identify overstaffing/understaffing.
