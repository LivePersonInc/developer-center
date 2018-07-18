---
title: Overview
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 19
indicator: messaging
permalink: webhooks-overview.html
---

### Introduction

The "Webhooks" (WH) is a mechanism which allows LiveEngage applications to register for notifications on LivePerson (LP) events. Its purpose is to continuously consume (read) LP events, filter only those events which are "of interest" to the consumer and make sure they get sent to the pre-configured endpoint of a LiveEngage application. Examples of relevant LiveEngage applications that would be interested in such notifications would be Connectors, such as the "Facebook" connector, the "LINE" connector, SMS connectors (all developed by LP R&D) or any brand-developed bot implementation, connector or SMS gateway.

The registration of Webhooks for your account is done via the App Installation process. See more information on this process via the  [Getting Started](connectorapi-getting-started.html.html){:target="_blank"} document and the [Webhooks configuration section](webhooks-configuration.html){:target="_blank"} document.

At the end of this process you will have to supply your account manager an Installation Manifest for your Application. The [manifest](app-install-manifest-connectors.html){:target="_blank"} should contain the "webhooks" array under the "capabilities” object. In return, you will get from the account manager an **Installation id** (client_id) and **Secret** (client_secret) that will allow you to identify and authenticate the Webhooks calls.
