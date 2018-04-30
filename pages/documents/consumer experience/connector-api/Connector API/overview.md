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

A connector is a piece of code which "connects" LiveEngage and an external messaging application (e.g. SMS gateway, Facebook, Apple Business Chat, LINE etc.) The Connector API enables server to server communication for any connectors developed by our customers by sending and receiving events via HTTPS (REST methods) to LiveEngage.

LiveEngage already provides out of the box connectors to Facebook, Google My Business, SMS via Twilio and Line with many more in the pipeline, including the Apple Business Chat connector. This API is meant for customers who want to connect with any other messaging platform of their choice, such as Viber, Skype, and SMS (not via Twilio). The API also allows brands to develop their own [**customized messaging connector**](create-connector.html){:target="_blank"} in collaboration with a third party partner.

**What is  the Connector API?**

The Connector API provides a HTTPS-based transport for asynchronous server-to-server communication with LivePerson Messaging. Brands can connect consumers via an external messaging gateway, e.g., a SMS gateway, to the LiveEngage platform.

The Connector API is split into two main components:

* **The Messaging Send API**: Send requests based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework.

* **[WebHooks](webhooks-overview.html){:target="_blank"} Notification Service**: Receive responses and notifications based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} framework via HTTPS-endpoints that are used by the customer's connector.

![JavascriptOverview](img/ConnectorAPI1.png)

Please note: A HTTP-based transport system for asynchronous communication requires that the brand expose their own HTTPS endpoints with authentication. For more details on WebHooks and how their authentication works, please refer to the [Webhooks documentation](webhooks-overview.html){:target="_blank"}.


**When should I use the Connector API?**

The Connector API should be used when planning to develop a server application which connects consumers with the LiveEngage platform. It should be used to build external consumer connectors. For example, you can integrate your own SMS gateway or Messaging application into LiveEngage.

The HTTPS-based transport in the Connector API is optimized for server-to-server communication. This means that it is optimized for developing a broker application between the messages and data of one platform (such as Facebook, Apple Business Chat, Twitter etc.) and LiveEngage messages and data.

In all other cases, such as when planning to develop a messaging frontend application, client application or a customized chat window, the [Messaging Window API](consumer-int-overview.html){:target="_blank"} is the preferred method.


|  																		 | **Connector API**           | **Messaging Window API**    |
| ------------------------------------ |:----------------------------|:----------------------------|
| **Transport protocol**               | HTTPS                             | WebSockets                  |
| **Application type**                 | Backend (server to server)        | Frontend                    |  
| **Modality**                         | Asynchronous, no realtime         | Asynchronous, near realtime |
| **Authentication**                   | As app w/ auth token (AppJWT)     | As consumer (ConsumerJWT)   |
| **Consumer communication**           | Yes                               | Yes                         |
| **Agent (bot) communication**        | No                           | No, see [Node Agent SDK](https://github.com/LivePersonInc/node-agent-sdk){:target="_blank"} for more info|
| **Compatibility with Function-as-a-Service (“Lambdas”)**  | Yes          | No                          |

**How does the Connector API differ from the Messaging Window API?**

The Connector API uses a different transport protocol: **HTTPS** instead of **Web Sockets**. However, the types of API requests, responses, and notifications are largely based on the Messaging Window API with several exceptions:

* There are no subscription requests. Subscriptions are specified when installing a client application.

* A consumer conversation is created with a dedicated endpoint and there is no connection initialization.

* The mechanisms for authentication and consumer identification are different.


### Use Cases

There are two primary reasons to utilize the Connector API:

1. **Consumers** - To **create** and **host** their own custom connectors - To enable their consumers to engage with them via many distribution channels while using more than one device. e.g Connector for **Facebook Messenger, Google my business, Apple Business Chat, LINE** etc.

[comment]: <> (<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>)


2. **Product solutions** -

	* Develop custom connectors for brands (e.g., SMS gateway) - For our customers that do not wish to use the default Twilio SMS Gateway. This gateway will be hosted at Live Person.


The Connector API allows the Connector to:

* Create Conversation and set SDEs in one step.

* Send messages (their content is determined by the Payload sent)

* Send Images

* Chat States Events (ACTIVE, INACTIVE etc.)

* Close Conversations

The Webhooks allows the connector to:

- Subscribe to notifications from messaging.

### Samples

Refer to the [Connector Sample App](connector-sample-app.html){:target="_blank"}.
