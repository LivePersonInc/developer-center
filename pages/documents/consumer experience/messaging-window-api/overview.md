---
title: Overview
redirect_from:
  - consumer-int-overview.html
level1: Documents
level2: Consumer Experience
level3: Messaging Window API

level-order: 5
order: 0
permalink: messaging-window-api-overview.html
root-link: true
indicator: messaging
---
### Getting Started

A few things you'll need to get started with this API:

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

3. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

### Introduction


LiveEngage offers messaging windows both for Mobile App Messaging as well as web messaging out of the box.  Brands can customize the window behavior and look and feel completely.

For complete control over the messaging window look, behavior and implementation source, utilized the Messaging Window API to create your window from scratch.

### Use Cases

* Offer in-app mobile messaging on an OS not supported by the LivePerson Mobile App Messaging SDKs (IOS/Android)

* Create a messaging window experience that is completely different than the out of the box window LIveEngage offers - for example - a window that takes up the entire screen.

* Utilize a different platform to manage the user view of the messaging conversation and integrate LiveEngage window logic

* Control and manage the window resources on your systems
