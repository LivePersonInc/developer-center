---
pagename: Overview
redirect_from:
  - administration-profiles-overview.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Profiles API

level-order: 4
order: 9
permalink: profiles-api-overview.html
root-link: true
indicator: both
---
### Introduction

Profiles within Conversational Cloud can be Admin, Agent Manager, Agent, Campaign Manager or customized profile. The profile entity includes name, description, role and permissions. This API allows you to manipulate such profiles, by creating new ones, updating them or simply retrieving information on which profiles are available and their metadata.

![ProfilesOverview](img/profiles.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html).

### Use Cases for Profiles API

* Automatically update parameters of profiles

* Automatically update, edit or delete profiles
