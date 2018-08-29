---
pagename: Overview
redirect_from:
  - administration-users-overview.html
keywords:
sitesection: Documents
categoryname: Admin
documentname: Users API


level-order: 1
order: 9
permalink: users-api-overview.html
root-link: true
indicator: both
---
### Introduction

Users within LiveEngage can be agents, agent managers, administrators or campaign managers.  For brands with large number of agents, the user list may need to be updated on a regular basis.  The user entity includes name, picture URL, password, skill and other important user information.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

`https://API_REQUEST?v=4.0`


![UsersOverview](img/usersoverview.png)


### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html), to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)


### Use Cases for Users API

* Automatically update user information such as profile picture, login name, or password

* Automatically update user assignments such as skills, max concurrent chats or max open messaging conversations

* Automatically add new agent users to the system

* Synchronize  any HR or staffing system users to LiveEngage
