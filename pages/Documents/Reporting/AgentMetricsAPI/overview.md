---
pagename: Overview
redirect_from:
  - data-messaging-agent-metrics-overview.html
sitesection: Documents
categoryname: "Reporting"
documentname: Agent Metrics API
level-order: 2
order: 1
permalink: agent-metrics-api-overview.html
root-link: true
indicator: messaging
---
### Introduction

{: .attn-alert}
This API is intended for reporting and information purposes, not for real-time decisions, such as routing

{: .attn-note}
Our Data APIs enable you to retrieve many attributes and information types. Please refer to [API Data Metrics](https://developers.liveperson.com/api-data-metrics.html) for the different types of information and attributes which are retrievable via both our Historical and Real Time Data APIs.

The Conversational Cloud Messaging Agent Metrics API provides information about the current state of messaging agents in the contact center. This API exposes different metrics for an overview of the agents’ behavior and performance including: current status, number of open conversations, agent’s skills, load etc.

LE Messaging Agents list use the Agent Metrics API:

![AgentMetrics](img/agentmetrics.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* msgHist

2. This API requires authorization using API key.

	* [Follow the instructions](guides-gettingstarted.html), to create and use an API key. Please use the Engagement History / Messaging Interactions keys.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

### Use Cases

* Workforce Management integration (WFM)

* Combine this information with other data source in order to create your own real-time dashboard
