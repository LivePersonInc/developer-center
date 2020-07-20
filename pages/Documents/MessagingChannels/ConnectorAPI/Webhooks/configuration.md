---
pagename: Configuration
redirect_from:
  - webhooks-configuration.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 21
indicator: messaging
permalink: connector-api-webhooks-configuration.html
---

Webhooks notifications are enabled by installing an [application](connector-api-getting-started.html#app-install-manifest-for-connectors) containing endpoints for each event type. If you have an admin account for your brand, use the [connector app hub](https://connector-api.dev.liveperson.net) to create applications. In any other case, please use your LivePerson contact to help you set up Webhooks. The connector app hub provides the following overview:

<img src="img/connectorapi/Connector-App-Hub-Overview.png" alt="Connector App Hub Overview" style="max-width:100%;mac-height:100%;">

Here you can see if an app is enabled, its creation data, name, id, secret and description. The id and secret are needed for using the [Send API](connector-api-send-api-overview.html). A new app can be added by clicking the *Create App* button in the upper right corner.

<img src="img/connectorapi/Connector-App-Hub-New-App.png" alt="Connector App Hub Overview" style="max-width:100%;mac-height:100%;">

Application name and description must be provided. Further, application name must be unique. If all event types should be sent to the same endpoint, you can add it after the description. Check the advanced configuration options to define an endpoint per event type and to add a retention time. After entering all the necessary information, install the app. Please note, it can take up to two minutes that your app was recognized by Webhooks. Further, make sure that your endpoints are reachable and respond within 2.5 seconds. Otherwise, they might be eligible for [disablement](connector-api-webhooks-disclaimers.html).  
