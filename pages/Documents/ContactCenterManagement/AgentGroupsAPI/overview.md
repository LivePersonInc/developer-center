---
pagename: Overview
redirect_from:
  - administration-agent-groups-overview.html
  - admin-settings-skills-groups-set-the-agent-group-hierarchy.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Groups API

level-order: 3
order: 9
permalink: agent-groups-api-overview.html
root-link: true
indicator: both
---

### Introduction

Businesses are often divided into groups that reflect their organization and hierarchy. A connection center can be thought of as group: in which sub-groups of agents are each responsible for a different area of support. To help you mirror your connection center structure in Conversational Cloud, we’ve created the Agent Groups capability.

![AgentGroupsOverview](img/agentgroupsoverview.png)

Brands can create and edit as many agent groups as required in order to mirror your contact center hierarchy.  The agent groups functionality is used by agent managers to view a shift operations as well as in the reporting and analytics.

![EditAgentGroup](img/editagentgroup.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.

3. Note the [API terms of use](https://www.liveperson.com/policies/terms-of-use).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html).

### Use Cases for the Agent Groups API

* Automatically update names of agent groups

* Automatically update and edit agents’ assignments to groups

* Update or change group managers

* Synch agents groups within Conversational Cloud with your internal HR or staffing systems.
