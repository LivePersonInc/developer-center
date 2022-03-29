---
pagename: Overview
sitesection: Documents
categoryname: Reporting
documentname: Actual Handle Time API
permalink: actual-handle-time-api-overview.html
indicator: both
---

{: .important}
This API is currently in an early adoption phase. To participate in this program, please reach to your LivePerson representative.
 
{: .notice}
This API is not available by default. To enable it please contact your account manager.

### Introduction

Actual Handle Time metric tracks events within the agent workspace. The metric is based on a complex algorithm that looks at several factors to give the most accurate view of handle time effort at an individual segment level. (In essence, it tracks time whenever an agent has a conversation selected on the screen that is awaiting their response.)

### Getting started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* agentActivityDomain

2. This API requires authorization using an API key methodology.

	* [Follow these instructions](guides-gettingstarted.html), to create and use an API key.
	
	* To access this API, the API key must have the `Data > Workforce Management > Agent Activity API` permission.  

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy](guides-retry-policy.html)

### Use cases

* Tracking Contact Center teams activity/BPOs performance ( Online hours, Quality, Quantity ) to renegotiate contracts and gain insights on the agent activity level.
  
* Resource planning and staffing based on historical data, historical agent adherence, and "away" reason values provide actual shrinkage for more accurate planning.

* Identify overstaffing/understaffing.
