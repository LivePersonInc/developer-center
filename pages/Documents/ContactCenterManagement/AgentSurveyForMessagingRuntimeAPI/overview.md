---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Runtime API 

permalink: agent-survey-for-messaging-runtime-api-overview.html
indicator: messaging
---
### Introduction

The Agent Survey for Messaging, enables brands to categorize, qualify and collect feedback from agents about the conversation. Brands are using this information to optimize their operation: improve campaigns, train agent, reduce the need for transfer etc. <br> 
The Agent Survey is delivered in a dedicated widget, during the conversation, to drive higher completion rates and provide the agents with the best experience possible.<br>
<br>
This API allows you to manage the Agent Survey lifecycle, from the beginning of the conversation and until it expires, by getting the agent survey, manage the state and of course, submit or dismiss the survey.
The agent survey will expired on conversation close after configured timeout.
This api has two versions: 1.0 & 2.0. In the latest version was added  save state for multiple agents/agent manager. Also header 'x-lp-state-rev' not required for PUT requests from version 2.0
If during submit or dismiss request you received status code 409 that means the Agent Survey state was changed since you get it last time and you need to send get state request in order to update your current state 

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* Read/Write: runtimeFormLogic

2. This API requires authorization using a login.

	* **Log a user into LiveEngage** using the [Login Service API](login-getting-started.html). Provide a username and password, and receive an authorization token (bearer). Use this token as your authorization header in all API requests.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

4. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

### Use Cases for Agent Survey Runtime API

* Agent Survey's runtime lifecycle management

* Get full Agent Survey configuration

* Get Agent Survey next sequence

* Save / Get Agent Survey state

* Submit / Dismiss Agent Survey