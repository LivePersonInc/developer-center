---
title: Overview
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 1
level-order: 8
root-link: true
indicator: both
permalink: connector-api-connector-api-overview.html
---
### Introduction

The Connector API enables you to build applications that connect common messaging channels (such as Facebook Messenger, WeChat, Viber, Slack and so on) with LiveEngage. This gives you the ability to build your own connector application which can, as an example, open/close conversations and send messages to LiveEngage on behalf of your consumers.

A connector is a broker between LiveEngage data and a messaging channel's (e.g. Facebook Messenger, WhatsApp, LINE, etc.) messages and data. The connector receives messages and events from a messaging platform, transforms them into the LiveEngage language and passes it to the agent via the [Send API](connector-api-overview.html). The connector can also create/open and close conversations and set the consumer profile upon conversation creation. The connector can also make sure that the consumer will be notified of agent activity during the conversation, and vice versa, using [WebHooks](webhooks-overview.html){:target="_blank"} notifications (for example, if the agent/consumer is typing, sent a message, read the message etc.).

**Why do we need the Connector API?**

LiveEngage already provides out of the box connectors to Facebook, Google My Business, Apple Business Chat, LINE, SMS via Twilio with many more in the pipeline. This API can be used by brands looking to connect with any other messaging channel, such as an SMS Gateway of their choice (not via Twilio). The API also allows brands to develop their own customized messaging connector in collaboration with a third party partner.

**What is the Connector API?**

The Connector API consists of two main components:

1. **The Messaging Send API**: Send HTTPS requests based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework. This component of the Connector API handles communication between the Connector and LiveEngage. It has two API endpoints, create conversation ([CONVERSATION](sendapi-create.html){:target="_blank"}) and send message ([SEND](sendapi-send.html){:target="_blank"}) (close conversation is a send message with a closing context in the payload). These calls communicate events from the third party application to LiveEngage.

2. **[WebHooks](webhooks-overview.html){:target="_blank"} Notification Service**: This component sends notifications from LiveEngage based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework to the connector Webhooks HTTPS-endpoints. These notifications communicate any messaging events both from the agent and consumer to the connector, such as agent/consumer replied, closed conversation, is typing and so on.

Please note: as part of using the Connector API, brands will be required to expose their Webhooks' HTTPS-endpoints. The Webhooks component allows the connector to register for notifications on LivePerson (LP) events. For more information on using Webhooks, please refer to the [Webhooks Overview](webhooks-overview.html){:target="_blank"}.

### Capabilities enabled by the Connector API

#### On the **consumer** side

| Capability | Achieved by | Endpoint |
| :-- | :--- | :--- |
| Create a new conversation and send SDEs in one step | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [CONVERSATION](sendapi-create.html){:target="_blank"} |
| Send text messages | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [SEND](sendapi-send.html){:target="_blank"} |
| Send images | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [SEND](sendapi-send.html){:target="_blank"} |
| See SENT, READ and RECEIVED indications | [Webhooks](webhooks-overview.html){:target="_blank"} | N/A |
| Send chat state events (COMPOSING (i.e. Consumer is typing), ACTIVE, INACTIVE etc.) | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [SEND](sendapi-send.html){:target="_blank"} |
| See chat state events (COMPOSING (i.e. Agent is typing), ACTIVE, INACTIVE etc.) | [Webhooks](webhooks-overview.html){:target="_blank"} | N/A |
| Send conversation metadata - [Structured content identifier metadata](guides-conversation-metadata-guide.html#structured-content-identifier-externalid){:target="_blank"} | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [SEND](sendapi-send.html){:target="_blank"} |
| Close conversation | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [SEND](sendapi-send.html){:target="_blank"} |
| Send CSAT (Customer Satisfaction) & FCR (First Contact Resolution) ratings | [Messaging SEND API](connector-api-overview.html){:target="_blank"} | [SEND](sendapi-send.html){:target="_blank"} |

#### On the **agent** side

* Resume a conversation

* Transfer a conversation to a different skill

* Send a text message

* Send [structured content](/rich-messaging-structured-content-card.html){:target="_blank"}

* See SENT, READ and RECEIVED indications

* See indication that the consumer is typing

* Close a conversation

<br>

**Note** - The Connector API was developed for applications/connectors on the **Consumer** side only. Hence, the consumer side capabilities described above are enabled via the **Messaging SEND API** and **Webhooks** components (which are the building blocks of the Connector API). On the Agent side, the capabilities described above are the ones already provided out of the box by LiveEngage and the **Agent Workspace** and that are currently supported by the Connector API. In other words, the Connector API brings new functionality (via the Messaging SEND API and Webhooks) only to the consumer side. On the agent side, it simply supports some of the already existing LiveEngage capabilities and allows them to be used in connector applications.

### Use Cases

**There are two primary reasons to utilize the Connector API**:

1. **Brands** - To **create** their own custom connectors. This will enable their consumers to engage with them via many distribution channels whilst using more than one device, e.g a connector for **WeChat, Twitter, Slack, Snapchat, Viber** etc. Another example would be a connector for an SMS Gateway of their choice (not via Twilio). A connector developed by a brand would normally be hosted on the brand's servers.

2. **Product solutions** - These are connector applications that will be developed by LivePerson. Their functionality is the same as the above use case except that they are developed by LivePerson and not the brand. A connecter developed by LivePerson would normally be hosted on LivePerson servers.

<img class="zoomimg" src="img/ConnectorAPI2.png" alt="connectoroverview">

[comment]: <> (<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>)

### Samples

Refer to the [Connector Sample App](connector-sample-app.html){:target="_blank"}.
