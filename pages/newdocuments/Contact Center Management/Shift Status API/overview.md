---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Shift Status API
permalink: shift-status-api-overview.html
indicator: messaging
---

This API allows clients to check whether the requested skill, or all skills of the account, are currently in an active shift - based on the skill's configuration (whether defined on the account level via the account shift scheduler or overriden by the skill's configuration).

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name: 

	* asyncMessagingEnt

2. This API requires authorization using _either_ a login or an API token methodology.

	* When fetching data using the API on the account level, you need to use the login methodology. **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* When fetching data using the API on the skill level, you need to use the API token methodology. **Use the Authentication API** to pass the external token and get an API token (JWT).
	
3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

