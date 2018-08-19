---
title: Overview
redirect_from:
  - administration-lobs-overview.html
keywords:
sitesection: Documents
level2: Admin
level3: LOBs API


level-order: 2
order: 9
permalink: lobs-api-overview.html
root-link: true
indicator: both
---
### Introduction

By creating individual Lines of Business (LoBs) within one single LiveEngage account, each with its own campaigns and engagements, brands are better able to track campaign success and engagement impact on each area of their business. Each Line of Business will be set up with unique and siloed campaigns and reports.  Campaigns will be assigned to a particular LoB, meaning that campaign managers will have access to all campaigns, with the ability to filter campaign lists and reports by LoB.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

### Use Cases for LoBs API

* Automatically update parameters of LoBs

* Automatically update, edit or delete LoBs

* Synch LoBs within LiveEngage with your internal HR or staffing systems.
