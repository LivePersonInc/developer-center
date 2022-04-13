---
pagename: Overview
redirect_from:
  - administration-users-overview.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Users API


level-order: 1
order: 9
permalink: users-api-overview.html
root-link: true
indicator: both
---
### Introduction

Users within Conversational Cloud can be agents, agent managers, administrators or campaign managers.  For brands with large number of agents, the user list may need to be updated on a regular basis.  The user entity includes name, picture URL, password, skill and other important user information.

**Note: the current version of the API is 4.0. In order to avoid errors, please add a query parameter to your calls specifying the version, like so:**

`https://API_REQUEST?v=4.0`


![UsersOverview](img/usersoverview.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read only: accountConfigReadOnly

	* Read/Write: accountConfigReadWrite

2. This API requires authorization using _either_ a user login or a machine-to-machine authorization.

	* **A user token requires login into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* **For a machine-to-machine authorizion using OAuth 1.0 App Keys OAuth 2.0 Client Credentials flow**
		* **OAuth 1.0 App Keys** - [follow these instructions](create-oauth-1-0-api-keys.html), to create and use an App key.
		
		{:.important}
	For the Users API, select the Admisintration category and check Users

		* **OAuth 2.0 Client Credentials flow** - [follow these instructions](oauth-2-0-client-credentials.html), to register an OAuth 2.0 application and generate a JWT access token **(Using version 2 of the Authorization API)**.  

		{:.important}
	When registering an OAuth 2.0 application for using the Users API, use the 'users.read' and 'users.write' scopes

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

### Use Cases for Users API

* Automatically update user information such as profile picture, login name, or password

* Automatically update user assignments such as skills, max concurrent chats or max open messaging conversations

* Automatically add new agent users to the system

* Synchronize  any HR or staffing system users to Conversational Cloud
