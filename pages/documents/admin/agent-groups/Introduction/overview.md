---
title: Overview
keywords:
level1: Documents
level2: Admin
level3: Agent Groups API

level-order: 3
order: 9
permalink: administration-agent-groups-overview.html
root-link: true
---
### Introduction

Businesses are often divided into groups that reflect their organization and hierarchy. A connection center can be thought of as group: in which sub-groups of agents are each responsible for a different area of support. To help you mirror your connection center structure in LiveEngage, we’ve created the Agent Groups capability.

![AgentGroupsOverview](img/agentgroupsoverview.png)

Brands can create and edit as many agent groups as required in order to mirror your contact center hierarchy.  The agent groups functionality is used by agent managers to view a shift operations as well as in the reporting and analytics.

![EditAgentGroup](img/editagentgroup.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/terms-of-use){:target="_blank"}.

### Use Cases for the Agent Groups API

* Automatically update names of agent groups

* Automatically update and edit agents’ assignments to groups

* Update or change group managers

* Synch agents groups within LiveEngage with your internal HR or staffing systems.
