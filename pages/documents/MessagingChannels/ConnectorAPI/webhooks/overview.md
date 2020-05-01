---
pagename: Overview
redirect_from:
  - webhooks-overview.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 19
indicator: messaging
permalink: connector-api-webhooks-overview.html
---

Webhooks are a mechanism allowing your application to register for notifications on LivePerson events. Its purpose is to ensure notifications are sent to the configured endpoints. Examples of such applications include connectors, like a Facebook connector, any brand-developed bot implementation, or the integration of an SMS gateway. Please note, notifications and events are used interchangeable in the documentation and refer to the data sent to endpoints. For more information about the type of events, please have a look at the [events](connector-api-webhooks-events.html) section.  

The registration of Webhooks endpoints for your account is done via [installing an app](webhooks-configuration.html). Endpoints of your app should always respond within 2.5 seconds. If your application fails to respond within this time frame for more than 2 minutes, your app is eligible for disablement. The [disclaimers](connector-api-webhooks-disclaimers.html) section contains more points you should consider before using Webhooks.
