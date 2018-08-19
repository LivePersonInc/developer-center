---
title: Overview
redirect_from:
  - data-operational-realtime-overview.html
sitesection: Documents
level2: Data
level3: Operational Realtime API

level-order: 5
order: 1
permalink: operational-realtime-api-overview.html
root-link: true
indicator: chat
---
### Introduction

The LiveEngage Operational Real-Time API provides real-time information about contact center performance.

Using this API, Agent Managers can measure contact center performance at account level, at skill level, or even drill down to agent level. Data is provided for the previous 24 hours, up to the last 5 minutes, with a refresh rate of 10 seconds.

The Operational Real-Time API is based on the REST architecture style, which allows clients to send HTTP requests to view LiveEngage operational data. This API supports the HTTP GET functionality (data retrieval), and all data is returned in JSON format.

Agent Managers can also leverage the Operational Real-Time API to build new real-time dashboards, integrate with existing dashboards solutions, or even connect to workforce management systems (WFM). The Operational Real-Time API is based on the REST architecture style, which allows clients to send HTTP requests to view LiveEngage operational data. This API supports the HTTP GET functionality (data retrieval), and all data is returned in JSON format.

It is possible to leverage the Operational Real-Time API to build your own real-time dashboards, integrate with existing dashboards solutions, or even connect to workforce management systems (WFM).

*Benefits*:

* Combine different data sources to a unified contact center dashboard.

* Customize your manager and executive dashboards and alerts.

* Monitor performance at account level, skill level or agent level.

_Note: LiveEngage and our report builder functionality provide you with a slew of reports and dashboards. Before you invest time in developing your own dashboards, we recommend that you first review what’s available to ensure your needs are not already met out of the box. For more info on our report builder, please [click here](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/AM/Report+Builder+User+Guide.pdf)._

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* leDataReporting

2. This API requires authorization using API key.

	* [Follow these instructions](guides-gettingstarted.html){:target="_blank"}, to create and use an API key.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.



### Use cases

* Integrations with WFM  (workforce management) tools such as  NICE IEX and Verint WFM. This provides real-time visibility into the agent status in LE system. This enables the brand to track scheduling adherence  and take early action in order to solve issues.

* Create your own real-time dashboard

Example of a dashboard created with this data:

![OperationalRealtime](img/operationalrealtime.png)

For more information and instructions, please see [creating custom dashboards](products-data-custom-dashboard-overview.html){:target="_blank"}
