---
title: Overview
level1:
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 1
level-order: 8
root-link: true
indicator: both
permalink: connectorapioverview.html
---
### Introduction

The Connector API enables you to build applications that connect common messaging channels (such as Facebook Messenger, LINE, Skype and so on) with LiveEngage. This gives you the ability to build your own connector application which can, as an example, open/close conversations and send messages to LiveEngage on behalf of your consumers.

A connector is a broker between LiveEngage data and a messaging channel's (e.g. Facebook, WhatsApp, LINE, etc.) messages and data. The connector receives messages and events from a messaging platform, transforms them into the LiveEngage language and passes it to the agent via the Send API. The connector can also open and close conversations and transmit the first message upon creation. The connector also makes sure that the consumer will be notified of agent activity using WebHooks notifications (for example, if the agent is typing, etc.).

**Why do we need the Connector API?**

LiveEngage already provides out of the box connectors to Facebook, Google My Business, Apple Business Chat, SMS via Twilio and LINE with many more in the pipeline. This API can be used by brands looking to connect with any other messaging platform, such as an SMS Gateway of their choice (not via Twilio). The API also allows brands to develop their own customized messaging connector in collaboration with a third party partner.

**What is the Connector API?**

The Connector API is split into two main components:

1. **The Messaging Send API**: Send HTTPS requests based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework. This component of the Connector API handles communication between the Connector and LiveEngage. It has two main calls, create conversation and send message (close conversation is a send message with a closing context in the payload). These calls communicate events from the third party application to LiveEngage.


#### On the **consumer** side, the Send API allows:

* Create Conversation and send SDEs in one step.

* Send Text Messages

* Send Images

* See SENT, READ and RECEIVED indications

* Send Chat State Events (COMPOSING, ACTIVE, INACTIVE etc.)

* Close conversation

* Send CSAT (Customer Satisfaction) & FCR (First Contact Resolution)

#### On the **agent** side, the Send API allows:

* Resume a conversation

* Transfer a conversation to a different skill

* Send a text message

* Send structured content

* See SENT, READ and RECEIVED indications

* See indication that the consumer is typing

* Close a conversation

{:start="2"}
2. **[WebHooks](webhooks-overview.html){:target="_blank"} Notification Service**: This component receives notifications from LiveEngage based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework via HTTPS-endpoints. These notifications communicate agent events to the Connector, such as agent replied, closed conversation, is typing and so on.

Please note: as part of using the Connector API, brands will be required to expose their webhooks' HTTPS-endpoints. For more details on Webhooks and how their authentication works, please refer to the [Webhooks documentation](webhooks-overview.html){:target="_blank"}.

### The Webhooks component allows the connector to:

* Register for notifications on LivePerson (LP) events.

For more information, please refer to the [Webhooks Overview](webhooks-overview.html){:target="_blank"}.

### Use Cases

**There are two primary reasons to utilize the Connector API**:

1. **Brands** - To **create** their own custom connectors. This will enable their consumers to engage with them via many distribution channels while using more than one device, e.g a connector for **Facebook Messenger, Google my business, Apple Business Chat, LINE** etc. Another example, would be a connector for an SMS Gateway of their choice (not via Twilio). This connector would normally be hosted on the brands servers.

2. **Product solutions** - These are connector applications that will be developed by LivePerson. Their functionality is the same as the above use case except that they are developed by LivePerson and not the brand. This connector would normally be hosted on Live Person servers.

![JavascriptOverview](img/ConnectorAPI2.png)

[comment]: <> (<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>)

### Samples

Refer to the [Connector Sample App](connector-sample-app.html){:target="_blank"}.
