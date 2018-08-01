---
title: Using APIs to Build the Toolkit
redirect_from:
  - products-mcs-usingtheapis.html
level1: Solutions
level2: Data
level3: MCS Toolkit

order: 20
permalink: mcs-toolkit-using-apis-to-build-the-toolkit.html
indicator:
---

### Login Service API

The Login Service API provides developers with the ability to login and take advantage of LiveEngage services outside of the standard LiveEngage application.

This means that once an official LiveEngage user account is provided. That user account, and its applicable access permissions, can then be utilized with custom solutions that leverage any of the supported LiveEngage APIs.

Alternatively, LiveEngage also supports the use of key based authentication using the oAuth1.0a standard - however, this solution does carry with it a dependency of creating a set of application keys via Data Sources in LiveEngage and persisting these keys to generate the authentication between LiveEngage and the custom API based solution. [More info on this method of logging in can be found here](guides-authentication-introduction.html){:target="_blank"}.

In the case of the MCS Toolkit, a simple prompt asks the user to enter their credentials, ensuring that each session is securely authenticated and allowing the user to only need to remember their login and password rather than a set of obscurer keys.

### Messaging Interactions API & Engagement History API

The [Messaging Interaction (Messaging)](data-messaging-interactions-conversations.html){:target="_blank"} and [Engagement History (Chat)](data-engagement-history-overview.html) APIs provide data associated with interactions between a consumer and agent (API data depends on a connection having taken place) and includes the conversation history (i.e. transcript) and associated metadata of the engagement (e.g Surveys, Campaign, Device, Source, etc). These APIs were used to access the actual MCS and other data of the interactions in order to display them in the toolkit.

### Features

These APIs were utilized in this project since they provide an excellent extract of raw engagement level data, which is what the MCS Toolkit is primarily concerned with, and with some transformational logic applied over the top, many additional metrics can be derived.

* Engagement level data includes each message line, with timestamps and associated context such as message Meaningful Connection Score, agent / skill / group names, etc

* Message lines can be traversed programmatically to summarize and aggregate additional data points, such as Consumer or Agent Response Times

* APIs include extensive filter capabilities, allowing for database queries that return more relevant data quicker

* Metadata of the overall interaction can be used to aggregate information by interesting attributes, such as by Agent, by Campaign, by Device, etc.

### Limitations

In some cases, the data aggregation required to represent a KPI for a certain granularity or attribute may necessitate extracting more data than is immediately required.  This processing consumes both time and memory on either the server or client.

When working with the Data APIs, it's important to consider what metrics are necessary, and the application investment to derive the metrics and impact this has on the user experience.

Pre-calculation of additional metrics or aggregation of data is a common alternative to on-the-fly calculation, but depends on a persistent layer of data, introducing the complexity of data storage and retrieval outside of the current LivePerson data API offering.
