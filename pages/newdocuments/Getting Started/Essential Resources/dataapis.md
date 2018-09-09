---
pagename: Getting Started with Data APIs
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-getting-started-with-data-apis.html
order: 30
indicator: both
---

LivePerson offers a variety of Data APIs that are available for our customers to use in order to retrieve their contact center’s information. Each API has its own specific attributes and can be used for different use cases. The purpose of this document is to give an overview of the different APIs and when they should both be used; for more detailed information on how to use them, please see each API's documentation.

**Note**: not all APIs work with both Messaging and Chat; the type of interactions that a certain API works with is listed next to its title. In addition, the **Personal Data Deletion API** is not covered in this document since it functions differently than the rest of the Data APIs. Please see [its documentation](/personal-data-deletion-overview.html) for more info.

### Messaging Interactions API (Messaging only)

[Documentation](data-messaging-interactions-overview.html)

This API exposes open and closed conversations, including their transcript and related data. This enables searching, filtering and the ability to keep copies of the data. It is possible to retrieve only partial data of conversations (by passing specific SDEs to the API).

| Freshness | Format | Granularity |
|-----------|--------|-------------|
| Near real-time | JSON | Raw data, no aggregation is done when exposing the data |

#### Use Cases

* Extract all messaging transcripts and accompanying data in order to integrate with any 3rd party application or database.

* Extract a type of conversation (e.g. low CSAT score, high MCS) and perform an action on them.

* The **All Connections** tab in LiveEngage is also built on top of this API.


#### Limitations

* Engagement attributes comprised of numbers that contain more than three consecutive digits cannot currently be searched for.

* While the engagement attributes are exposed in near real-time, the ability to search according to them is only available after two hours.


### Agent Metrics API (Messaging only)

[Documentation](data-messaging-agent-metrics-overview.html)

This API exposes the current state of the messaging agents who are online, including their status, number of open conversations, load etc. This allows you to get the snapshot of the agent's current state.

| Freshness | Format | Granularity |
|-----------|--------|-------------|
| Real-time | JSON | Raw data, no aggregation is done when exposing the data |

#### Use Cases

* Workforce Management integration (WFM).

* Combine this information with other data sources in order to create your own real-time dashboard.

* The **Messaging Agents** tab in LiveEngage is also built on top of this API.

#### Limitations

* Available for online agents only.

### Messaging Operations API

[Documentation](data-messaging-agent-metrics-overview.html)

This API exposes information about the contact center at the account, skill, and agent level. This data includes closed conversations and their associated attributes, such as customer satisfaction, average conversation length, resolved status and the current queue state.

| Freshness | Format | Granularity |
|-----------|--------|-------------|
| Real-time | JSON | Aggregated data |

#### Use Cases

* Combine this information with other data sources to create your own real-time dashboard.

* Analyze your contact center performance.

* The **data bar and dashboard** in LiveEngage are also built on top of this API.


### Engagement History API (Chat)

[Documentation](data-engagement-history-overview.html)

This API exposes closed chats with all their related data (including transcripts). This enables searching, filtering and the ability to keep copies of the data.

| Freshness | Format | Granularity |
|-----------|--------|-------------|
| Near real-time | JSON | Raw data, no aggregation is done when exposing the data|

#### Use Cases

* Extract all chat transcripts and accompanying data in order to integrate with any 3rd party application or database.

* Extract a type of chat (e.g. long chats, high MCS) and perform an action on them.

* The **Web History** tab in LiveEngage is also built on top of this API.

#### Limitations

* Engagement attributes comprised of numbers that contain more than three consecutive digits cannot currently be searched for.

* Engagement attributes are available for up to 2 hours after a chat has ended.

### Data Access API (Chat)

[Documentation](data-data-access-overview.html)

Expose raw data about the agent activity & visitor journey (including engagements and surveys).

| Freshness | Format | Granularity |
|-----------|--------|-------------|
| Historical | JSON | Raw data, no aggregation is done when exposing the data|

#### Use Cases

* Pull the full agent activity data and review agents’ utilization and integrate the data with information from your workforce management system.

* Retrieve visitors' full data, including the possibility to explore the visitor journey on the site, analyze how many visitors arrived from each campaign, what kind of engagements they are clicking on and so on.

#### Limitations

* Requires significant development effort to retrieve the files.

* Need to consume large amount of data.

* In case the account is encrypted, need to provide a PGP key in order to retrieve the encrypted data ([click here](data-data-access-pgp-encryption.html) for more information).

### Operational Real-time API (Chat)

[Documentation](data-operational-realtime-overview.html)

Expose aggregated real-time information about contact center performance.

| Freshness | Format | Granularity |
|-----------|--------|-------------|
| Real-time | JSON | Aggregated data|

#### Use Cases

* Integrations with workforce management tools to evaluate agent activity.

* Create real-time dashboard to monitor the chat queue state and the agent performance.

#### Limitations

* Expose data for up to the last 24 hours in specific intervals.

* No ability to drill down to the raw data (chat level).
