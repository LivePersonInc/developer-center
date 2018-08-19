---
title: Best Practices and Known Issues
redirect_from:
  - watson-best-practices.html
keywords:
sitesection: Solutions
level2: Channels
level3: Watson with LiveEngage
order: 40
permalink: watson-with-liveengage-best-practices-and-known-issues.html
indicator: messaging
---

* It is not recommended to *Join* a conversation managed by a bot. If human involvement is required in a bot conversation, the *Takeover* option should be used.  

* A conversation should not be transferred to the Watson bot skill.

* Conversations may be assigned to a bot while the connector is disabled. Once the connector is enabled, the bot will address the consumer's lines one by one. This could result in a somewhat disjointed experience for the consumer if they sent multiple lines while the connector was disabled.

* If messaging warm up is used, it is recommended to limit the duration to 5 minutes in order to minimize the warm up effect on bot agents.
