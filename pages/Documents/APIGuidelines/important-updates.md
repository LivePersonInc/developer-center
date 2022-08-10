---
pagename: Important Updates
sitesection: Documents
categoryname: "API Guidelines"
permalink: important-updates.html
redirect_from:
    - essential-resources-messaging-features-capabilities-comparison.html
    - api-guidelines-important-updates.html
order: 11
indicator: both
---

### Messaging Agent SDK upgrade available
LivePerson empowers external Bot Vendors and Bot Builders to build fully customized bots with LivePerson's Conversational Cloud, leveraging the Messaging Agent SDK for Node.js.

We’re excited to share that we have released a new version of NodeAgent SDK which will improve resilience and stability of your third-party bots. Please upgrade to the [new NodeAgent SDK](https://github.com/LivePersonInc/node-agent-sdk) as soon as possible to realize these improvements.

With the upgrade to the latest version, we recommend auditing your integration to ensure compliance with the [best practices](https://github.com/LivePersonInc/node-agent-sdk/wiki/NodeAgentSDK-Connection-Best-Practices) around managing connections with LivePerson’s Conversational Cloud.

### Messaging/Engagement History API — Adding source name to API calls
As part of our continuous effort to improve troubleshooting and reporting in the historical and operational APIs, we are planning to require a `source name` parameter as part of any API calls. This will apply for both internal and external calls. 

### Why do we require a source name in an API call?
* Align with API standards, source name is a common practice when building data APIs.
* Improve monitoring and better control over the traffic. This change will improve the ability to take data-driven actions based on customer source and not by all customer traffic. For example throttling per source.
* Secure and identify unwanted traffic.
* Provide more accurate traffic reports to brands.

### What are the APIs in scope?
All historial API consumers:

* [Messaging Interactions API](https://developers.liveperson.com/messaging-interactions-api-overview.html)
* [Engagement History API](https://developers.liveperson.com/engagement-history-api-overview.html)
* [Consumer Messaging History API](https://developers.liveperson.com/consumer-messaging-history-api-overview.html)
