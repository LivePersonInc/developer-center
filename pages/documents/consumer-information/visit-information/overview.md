---
title: Overview
redirect_from:
  - rt-interactions-visit-information-overview.html
sitesection: Documents
level2: Consumer Information
level3: Visit Information API

level-order: 2
order: 1
permalink: visit-information-api-overview.html
root-link: true
indicator: chat
---
### Introduction

This API provides a way to pull data in real-time about the visitor, engagement and session to be used by the agent during the conversation, for example, referrer, engagement attributes, etc.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* smt

2. This API requires authorization using _either_ a login or an API key methodology.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html){:target="_blank"}. Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}



### Use cases

This API can be used to display context information to agents about the session, visitor and engagement in a brand’s built Agent Workspace application, examples are the click to call solution in which the voice agents are not LivePerson users or agents that don’t use LiveEngage workspace .

Example of how visitor information is displayed to agents within the LiveEngage worksapce:

![VisitInformation](img/visitinformation.png)
