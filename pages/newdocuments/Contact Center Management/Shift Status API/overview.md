---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Shift Status API
permalink: shift-status-api-overview.html
indicator: both
---
### Introduction

This API allows clients to ask whether the requested skill (or all skills of the account) is currently working or not - based on the configuration in the account shift scheduler.
For skills who did not override the account default workdays, the shift status will be taken from the account level.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name: _asyncMessagingEnt_

2. This API requires authorization using _either_ a login or an API token methodology.

	* API by account: **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* API by skill: **Use the Authentication API** to pass the external token and get an API token (JWT).
	
3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

