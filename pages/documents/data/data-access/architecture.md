---
pagename: Architecture
redirect_from:
  - data-data-access-architecture.html
sitesection: Documents
categoryname: Data
documentname: Data Access API
order: 2
permalink: data-access-api-architecture.html
indicator: chat
---


### JSON-Generating Data Flow Process

1.	Every visitor and/or agent action triggers an event.
2.	Events are stored in HDFS (Hadoop File System).
3.	Job processes the events (in the Hadoop environment) and generates a grouping of all the events related to each session once they are considered "closed".
4.	A data access job then runs on the above grouped data in 1 hour intervals and generates the JSON files.

![Flow](/img/Flow.png)

Data access is not a default function of LiveEngage; it must be configured separately for each account.
The four types of data supported and configurable in each account are as follows:

- Agent Activity
- Web Session
- Engagement
- Survey

The Data Access API retrieves historical data. The SLA for data retrieval can be up to 6 hours from the time the data is considered "closed" (for 99.5% of the data).

This API supports the HTTPS GET protocol (data retrieval), and all retrieved data is returned in JSON format based on the AVRO schema.
