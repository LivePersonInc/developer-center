---
pagename: Overview
sitesection: Documents
categoryname: "Reporting"
documentname: Data Usage Audit API
permalink: data-usage-audit-api-overview.html
root-link: true
indicator: both
---

### Introduction

{: .attn-alert}
Our Data APIs enable you to retrieve many attributes and information types. Please refer to [API Data Metrics](https://developers.liveperson.com/api-data-metrics.html) for the different types of information and attributes which are retrievable via both [our Historical and Real Time Data APIs](overview.html).

The Conversational Cloud Data Usage Audit API retrieves the most up-to-date information available about transcript searches and exports usage via LivePerson's other historical data APIs. This API makes it possible to understand what data were exposed and to which API user.

This API supports the HTTP GET functionality (for data retrieval). All auditing logs are returned in a JSON format, aggregated per account, API type, user id (which accessed the API) and hour.

### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* auditlog

2. This API requires authorization using API key.

	* Use LE GUI to create API key: Administration → AuditTrail.

3. Note the [API terms of use](https://www.liveperson.com/policies/apitou).

### Use Cases

* Retrieve audit logs of which chat transcripts were exposed, when, and to which user.
* Retrieve audit logs of which messaging transcripts were exposed, when, and to which user.
* Retrieve audit logs of requests to expose transcripts, when they were made, and which user made them.