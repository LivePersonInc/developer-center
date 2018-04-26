---
title: Introduction
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 11
indicator: both
permalink: webhooks-overview.html
---

### Introduction

The "WebHooks" (WH) is a mechanism which allows LiveEngage applications to register for notifications on LivePerson (LP) events. Its purpose is  continuously consume (read) LP events, filter only those events which are "of interest" and make sure they get sent to the pre-configured endpoint of the LiveEnage application. Examples of relevant LiveEngage applications that would be interested in such notifications would be “Connectors”, such as the "Facebook" connector, the "LINE" connector, SMS connectors (all developed by LP R&D) or any brand-developed bot implementation.

The registration of webhooks for you account is done by App Installation process, see more information on [Getting Started](connectorAPIGettingStarted.html){:target="_blank"} and on [Webhooks configuration section](webhooks-configuration.html){:target="_blank"}. In this process the you will have to supply your account manager a manifest of the App. The [manifest](AppInstallJSON.html){:target="_blank"} should contain the “webhook capability”. In return you will get from the account manager client_id and client_secret that will let you identify and authenticate the webhooks calls.
