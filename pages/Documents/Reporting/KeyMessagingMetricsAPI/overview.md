---
pagename: Overview
redirect_from:
  - 
sitesection: Documents
categoryname: "Reporting"
documentname: Key Messaging Metrics API

level-order: 2
order: 1
permalink: key-messaging-metrics-api-overview.html
root-link: true
indicator: messaging
---
### Introduction

{: .notice}
This API is intended for reporting and information purposes, not for real-time decisions, such as routing

The key messaging metrics API retrieves core messaging metrics at the account, skill or agent group level, for up to the last 24 hours.

Combining this information with other data sources enables you to create your own customized real-time dashboard. Here are some example use cases of the API, that can assist you in analyzing your contact center performance:

- Track how many of your agents are currently available (online, away, back soon) at the skill or group level

- Track how many conversations were resolved and how

- Track the response times of agents by group or skill

- Track consumers waiting times by group or skil

- Retrieve metrics at the group level and automatically include their sub groups

The API is being used today in the LivePerson Conversational Cloud to display the agent manager workspace:

![](img/amws.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* agentManagerWorkspace

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html), to create and use an API key. Please use the Data -> Key Messaging Metrics keys.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).



### Use Cases

* Combine this information with other data source in order to create your own real-time dashboard
