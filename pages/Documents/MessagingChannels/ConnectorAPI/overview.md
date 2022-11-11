---
pagename: Overview
redirect_from:
  - connector-api-api-reference-overview.html
  - connector-onboarding.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
indicator: messaging
permalink: connector-api-overview.html
order: 1
---

<div class="alert alert-warning" role="alert">
  <h2>New developer resources available</h2>
  <p>In addition to the following API reference, we have published a new how-to guide and a demo tool. The how-to guide provides step-by-step instructions for your first connector application. The demo tool enables you to experience the API on your developer account. You can open the resources in a new tab by clicking on the buttons below.</p>
  <hr>
  <a class="btn btn-primary btn-m active" href="https://livepersoninc.github.io/lp-devassist-connectors/" target="_blank" role="button">Go to How-to Guide</a>
  <a class="btn btn-primary btn-m active" href="https://connector-api.dev.liveperson.net/" target="_blank"  role="button">Go to Demo Tool</a>
</div>

### Introduction

The Connector API enables you to build applications that connect common messaging channels (such as Facebook Messenger, WeChat, Viber, Slack and so on) with Conversational Cloud. This gives you the ability to build your own connector application which can, as an example, open/close conversations and send messages to Conversational Cloud on behalf of your consumers.

A connector is a broker between Conversational Cloud data and a messaging channel's (e.g. Facebook Messenger, WhatsApp, LINE, etc.) messages and data. The connector receives messages and events from a messaging platform, transforms them into the Conversational Cloud language and passes it to the agent via the [Send API](connector-api-reference-overview.html). The connector can also create/open and close conversations and set the consumer profile upon conversation creation. The connector can also make sure that the consumer will be notified of agent activity during the conversation, and vice versa, using [Webhooks](webhooks-overview.html) notifications (for example, if the agent/consumer is typing, sent a message, read the message etc.).

**Why do we need the Connector API?**

Conversational Cloud already provides out of the box connectors to Facebook, Google My Business, Apple Messages for Business, LINE, SMS via Twilio with many more in the pipeline. This API can be used by brands looking to connect with any other messaging channel, such as an SMS Gateway of their choice (not via Twilio). The API also allows brands to develop their own customized messaging connector in collaboration with a third party partner.

**What is the Connector API?**

The Connector API consists of two main components:

1. **The Messaging Send API**: Send HTTPS requests based on the [Messaging Window API](consumer-int-overview.html) framework. This component of the Connector API handles communication between the Connector and Conversational Cloud. It has two API endpoints, create conversation ([CONVERSATION](sendapi-create.html)) and send message ([SEND](sendapi-send.html)) (close conversation is a send message with a closing context in the payload). These calls communicate events from the third party application to Conversational Cloud.

2. **[Webhooks](webhooks-overview.html) Notification Service**: This component sends notifications from Conversational Cloud based on the [Messaging Window API](consumer-int-overview.html) framework to the connector Webhooks HTTPS-endpoints. These notifications communicate any messaging events both from the agent and consumer to the connector, such as agent/consumer replied, closed conversation, is typing and so on.

Please note: as part of using the Connector API, brands will be required to expose their Webhooks' HTTPS-endpoints. The Webhooks component allows the connector to register for notifications on LivePerson (LP) events. For more information on using Webhooks, please refer to the [Webhooks Overview](webhooks-overview.html).

### Capabilities enabled by the Connector API

#### On the **consumer** side

| Capability | Achieved by | Endpoint |
| :-- | :--- | :--- |
| Create a new conversation and send SDEs in one step | [Messaging SEND API](connector-api-overview.html) | [CONVERSATION](sendapi-create.html) |
| Send text messages | [Messaging SEND API](connector-api-overview.html) | [SEND](sendapi-send.html) |
| Send images | [Messaging SEND API](connector-api-overview.html) | [SEND](sendapi-send.html) |
| See SENT, READ and RECEIVED indications | [Webhooks](webhooks-overview.html) | N/A |
| Send chat state events (COMPOSING (i.e. Consumer is typing), ACTIVE, INACTIVE etc.) | [Messaging SEND API](connector-api-overview.html) | [SEND](sendapi-send.html) |
| See chat state events (COMPOSING (i.e. Agent is typing), ACTIVE, INACTIVE etc.) | [Webhooks](webhooks-overview.html) | N/A |
| Send conversation metadata - [Structured content identifier metadata](guides-conversation-metadata-guide.html#structured-content-identifier-externalid) | [Messaging SEND API](connector-api-overview.html) | [SEND](sendapi-send.html) |
| Close conversation | [Messaging SEND API](connector-api-overview.html) | [SEND](sendapi-send.html) |
| Send CSAT (Customer Satisfaction) and FCR (First Contact Resolution) ratings | [Messaging SEND API](connector-api-overview.html) | [SEND](sendapi-send.html) |

#### On the **agent** side

* Resume a conversation

* Transfer a conversation to a different skill

* Send a text message

* Send [structured content](/rich-messaging-structured-content-card.html)

* See SENT, READ and RECEIVED indications

* See indication that the consumer is typing

* Close a conversation

<br>

**Note:** The Connector API was developed for applications/connectors on the **Consumer** side only. Hence, the consumer side capabilities described above are enabled via the **Messaging SEND API** and **Webhooks** components (which are the building blocks of the Connector API). On the Agent side, the capabilities described above are the ones already provided out of the box by Conversational Cloud and the **Agent Workspace** and that are currently supported by the Connector API. In other words, the Connector API brings new functionality (via the Messaging SEND API and Webhooks) only to the consumer side. On the agent side, it simply supports some of the already existing Conversational Cloud capabilities and allows them to be used in connector applications.

### Use Cases

**There are two primary reasons to utilize the Connector API**:

1. **Brands** - To **create** their own custom connectors. This will enable their consumers to engage with them via many distribution channels whilst using more than one device, e.g. a connector for **WeChat, Twitter, Slack, Snapchat, Viber** etc. Another example would be a connector for an SMS Gateway of their choice (not via Twilio). A connector developed by a brand would normally be hosted on the brand's servers.

2. **Product solutions** - These are connector applications that will be developed by LivePerson. Their functionality is the same as the above use case except that they are developed by LivePerson and not the brand. A connecter developed by LivePerson would normally be hosted on LivePerson servers.

<img loading="lazy" class="zoomimg" src="img/Connector API - Simplified View.svg" alt="connectoroverview">

[comment]: <> <iframe src="https://players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>

### Samples

Refer to the [Connector Sample App](connector-sample-app.html).
