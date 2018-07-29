---
title: Overview
redirect_from:
  - overview.html
keywords:
level1: Documents
level2: Admin
level3: Skills API


level-order: 2
order: 9
permalink: skills-api-overview.html
root-link: true
indicator: both
---
### Introduction

Your agents are trained to help visitors according to your business needs. An agent’s area of expertise is referred to as a skill. For example, you can create the skill, Sales, for agents who are sales representatives. When visitors click an engagement assigned to Sales, they are routed to the first available Sales agent.

Skills are assigned to agents as well as to engagements.  This creates the 'link’ between the right topic of conversation and the agent best equipped to handle it.

![SkillsOverivew](img/skillsoverview.png)


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



### Use Cases for Skills API

* Automatically update parameters of skills

* Automatically update, edit or delete skills

* Synch skills within LiveEngage with your internal HR or staffing systems.
