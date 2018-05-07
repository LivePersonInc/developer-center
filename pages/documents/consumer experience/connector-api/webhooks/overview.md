---
title: Overview
level1:
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 11
indicator: both
permalink: webhooks-overview.html
---

### Introduction

The "WebHooks" (WH) is a mechanism which allows LiveEngage applications to register for notifications on LivePerson (LP) events. Its purpose is to continuously consume (read) LP events, filter only those events which are "of interest" to the consumer and make sure they get sent to the pre-configured endpoint of a LiveEngage application. Examples of relevant LiveEngage applications that would be interested in such notifications would be Connectors, such as the "Facebook" connector, the "LINE" connector, SMS connectors (all developed by LP R&D) or any brand-developed bot implementation, connector or SMS gateway.

The registration of webhooks for you account is done via the App Installation process. See more information on this process via the  [Getting Started](connectorAPIGettingStarted.html){:target="_blank"} document and the [Webhooks configuration section](webhooks-configuration.html){:target="_blank"} document.

At the end of this process you will have to supply your account manager an Installation Manifest for your Application. The [manifest](connector-onboarding.html){:target="_blank"} should contain the “webhook capability” object. In return, you will get from the account manager client_id and client_secret that will allow you to identify and authenticate the webhooks calls.
