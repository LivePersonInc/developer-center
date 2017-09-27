---
title: Overview
keywords:
level1: Documents
level2: Admin
level3: Profiles API


level-order: 4
order: 9
permalink: administration-profiles-overview.html
root-link: true
indicator: both
---
### Introduction

Profiles within LiveEngage can be Admin, Agent Manager, Agent, Campaign Manager or customized profile. The profile entity includes name, description, role and permissions. This API allows you to manipulate such profiles, by creating new ones, updating them or simply retrieving information on which profiles are available and their metadata.

![ProfilesOverview](img/profiles.png)


### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use Cases for Skills API

* Automatically update parameters of profiles

* Automatically update, edit or delete profiles
