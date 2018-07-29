---
title: Overview
redirect_from:
  - data-messaging-agent-metrics-overview.html
level1: Documents
level2: Data
level3: Agent Metrics API

level-order: 2
order: 1
permalink: agent-metrics-api-overview.html
root-link: true
indicator: messaging
---
### Introduction

The LiveEngage Messaging Agent Metrics API provides information about the current state of messaging agents in the contact center. This API exposes different metrics for an overview of the agents’ behavior and performance including: current status, number of open conversations, agent’s skills, load etc.

LE Messaging Agents list use the Agent Metrics API:

![AgentMetrics](img/agentmetrics.png)

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* msgHist

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key. Please use the Engagement History / Messaging Interactions keys.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use Cases

* Workforce Management integration (WFM)

* Combine this information with other data source in order to create your own real-time dashboard

For more information and instructions, please see [creating custom dashboards](products-data-custom-dashboard-overview.html){:target="_blank"}
