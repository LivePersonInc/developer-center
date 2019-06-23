---
pagename: Overview
redirect_from:
  - data-usage-audit-api-overview.html
sitesection: Documents
categoryname: "Historical Data"
documentname: Data Usage Audit API

level-order: 3
order: 1
permalink: data-usage-audit-api-overview.html
root-link: true
indicator: auditlogs
---
### Introduction

The LiveEngage Data Usage Audit API retrieves the most up to date information available about transcript searches and exports usage via history APIs. This API makes it possible to understand
 what data was exposed by history API user.

This API supports the HTTP GET functionality (data retrieval), and all auditing logs are returned in JSON format aggregated per account, api type, user id and per hour.


### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* auditlog

2. This API requires authorization using API key.

	* Use LE GUI to create API key: Administration -> AuditTrail.

3. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).



### Use Cases

* Retrieve audit logs of chat transcripts data exposing
* Retrieve audit logs of messaging transcripts data exposing
* Retrieve audit logs of chat transcript exports requests



