---
pagename: Overview
redirect_from:
  - rt-interactions-visit-information-overview.html
sitesection: Documents
categoryname: "Website Monitoring"
documentname: Visit Information API
level-order: 2
order: 1
permalink: visit-information-api-overview.html
root-link: true
indicator: chat
---

### Introduction

The Visit Information API provides a way to pull data in real-time, when a session is active and exists in memory. After a maximum of 6 hours, the session will expire and be removed from memory, so a 404 response (internal code 12) will be returned.

The data is about the visitor, engagement, and session to be used by the agent during the conversation. For example, referrer, engagement attributes, etc.

### Getting started

A few things you’ll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* smt

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into Conversational Cloud** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html).

### Use cases

This API can be used to display context information to agents about the session, visitor and engagement in a brand’s built Agent Workspace application. Examples include the click-to-call solution in which voice agents are not LivePerson users, or agents that don’t use Agent Workspace.

Example of how visitor information is displayed to agents within the Agent Workspace:

![Screenshot of the Agent Workspace](img/visitinformation.png)