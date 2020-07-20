---
pagename: Overview
redirect_from:
  - administration-agentsurvey-config-api-overview.html
keywords:
sitesection: Documents
categoryname: "Contact Center Management"
documentname: Agent Survey For Messaging Configuration API
permalink: agent-survey-for-messaging-configuration-api-overview.html

indicator: messaging

---
### Introduction

The Agent Survey for Messaging, enables brands to categorize, qualify and collect feedback from agents about the conversation. Brands are using this information to optimize their operation: improve campaigns, train agent, reduce the need for transfer etc. <br> 
The Agent Survey is delivered in a dedicated widget, during the conversation, to drive higher completion rates and provide the agents with the best experience possible.<br>
<br>
This API allows you to manipulate such Agent Surveys, by creating new ones, updating them or simply retrieving information on which Agent Surveys are available and their metadata.

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

### Use Cases for Agent Survey API

* Create Agent Surveys

* Update, edit or delete Agent Surveys