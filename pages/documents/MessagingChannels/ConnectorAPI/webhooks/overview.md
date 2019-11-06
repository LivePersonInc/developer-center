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

<div class="alert alert-warning" role="alert">
  <h2>New developer resources available</h2>
  <p>In addition to the following API reference, we have published a new how-to guide and a demo tool. The how-to guide provides step-by-step instructions for your first connector application. The demo tool enables you to experience the API on your developer account. You can open the resources in a new tab by clicking on the buttons below.</p>
  <hr>
  <a class="btn btn-primary btn-m active" href="https://livepersoninc.github.io/lp-devassist-connectors/" target="_blank" role="button">Go to How-to Guide</a>
  <a class="btn btn-primary btn-m active" href="https://connector-api.dev.liveperson.net/" target="_blank"  role="button">Go to Demo Tool</a>
</div>

### Introduction

The "Webhooks" (WH) is a mechanism which allows LiveEngage applications to register for notifications on LivePerson (LP) events. Its purpose is to continuously consume (read) LP events, filter only those events which are "of interest" to the consumer and make sure they get sent to the pre-configured endpoint of a LiveEngage application. Examples of relevant LiveEngage applications that would be interested in such notifications would be Connectors, such as the "Facebook" connector, the "LINE" connector, SMS connectors (all developed by LP R&D) or any brand-developed bot implementation, connector or SMS gateway.

The registration of Webhooks for your account is done via the App Installation process. See more information on this process via the  [Getting Started](connectorapi-getting-started.html) document and the [Webhooks configuration section](webhooks-configuration.html) document.

At the end of this process you will have to supply your account manager an Installation Manifest for your Application. The [manifest](app-install-manifest-connectors.html) should contain the "webhooks" array under the "capabilities” object. In return, you will get from the account manager an **Installation id** (client_id) and **Secret** (client_secret) that will allow you to identify and authenticate the Webhooks calls.
