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

The Connector API enables you to perform a range of actions on the LivePerson messaging platform (LiveEngage), e.g. the ability to build your own connector application which can, as an example, open/close and send messages to LiveEngage on behalf of your consumers.

A connector is a broker between the LiveEngage messages and data and the messaging channel messages and data. The connector receives messages and events from a messaging channel, transforms them into the LiveEngage language and passes it to the agent via a Send API. The connector can open and close conversations in addition to enabling the ability to send text messages. The connector also ensures that the consumer will be notified of agent activity using WebHooks notifications.

**Why do we need it?**

LiveEngage already provides out of the box connectors to Facebook, Google My Business, Apple Business Chat, SMS via Twilio and LINE with many more in the pipeline. This API is meant for brands who wish to connect with any other messaging platform, such as Viber, Skype and an SMS Gateway of their choice (not via Twilio). The API also allows brands to develop their own customized messaging connector in collaboration with a third party partner.

**What is  the Connector API?**

The Connector API provides an HTTPS-based transport for asynchronous server-to-server communication with LiveEngage, LivePerson messaging platform. Brands can connect consumers via an external messaging gateway, e.g. SMS gateway to the LiveEngage platform.

The Connector API is split into two main components:

* **The Messaging Send API**: Send requests based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework.

* **[WebHooks](webhooks-overview.html){:target="_blank"} Notification Service**: Receive responses and notifications based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework via HTTPS-endpoints that are used by the customer's connector.

![JavascriptOverview](img/ConnectorAPI1.png)

Please note: A HTTP-based transport system for asynchronous communication requires that the brand expose their own HTTPS Webhooks endpoints with authentication. For more details on Webhooks and how their authentication works, please refer to the [Webhooks documentation](webhooks-overview.html){:target="_blank"}.


**When should I use the Connector API?**

The Connector API should be used when planning to develop a server application which connects consumers with the LiveEngage platform. It should be used to build external consumer connectors. For example, you can integrate your own SMS gateway or Messaging application into LiveEngage.

The HTTPS-based transport in the Connector API is optimized for server-to-server communication. This means that it is optimized for developing a broker application between the messages and data of one platform (such as Facebook, Apple Business Chat, Twitter etc.) and LiveEngage messages and data.


### Use Cases

**There are two primary reasons to utilize the Connector API**:

1. **Brands** - To **create** their own custom connectors - To enable their consumers to engage with them via many distribution channels while using more than one device. e.g Connector for **Facebook Messenger, Google my business, Apple Business Chat, LINE** etc. Or connector for SMS Gateway of their choice (not via Twilio). This connector would normally be hosted on the brands servers.

2. **Product solutions** - Develop custom connectors for brands (e.g., SMS gateway) - For LivePerson customers who wish to connect with their customers via SMS Gateway of their choice (not via Twilio) and wish that this will be developed by LivePerson. This connector would normally be hosted be hosted at Live Person.

![JavascriptOverview](img/ConnectorAPI2.png)

[comment]: <> (<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>)

### The Connector API allows the **Consumer** to:

		* Create Conversation and send SDEs in one step.

		* Send Text Messages

		* Send Images

		* See SENT, READ and RECIEVED indications

		* Send Chat States Events (COMPOSING, ACTIVE, INACTIVE etc.)

		* Close conversation

		* Send CSAT (Customer Satisfaction) & FCR (First Contact Resolution)

### The connector API allows the **Agent** to:

		* Resume a conversation

		* Transfer a conversation to a different skill

		* Send a text message

		* Send structured content

		* See sent, read and received indications  

		* See indication that the consumer is typing

		* Close a conversation



### The Webhooks allows the connector to:

* Register for notifications on LivePerson (LP) events.

For more information, please refer to the [Webhooks Overview](webhooks-overview.html){:target="_blank"}.


### Samples

Refer to the [Connector Sample App](connector-sample-app.html){:target="_blank"}.
