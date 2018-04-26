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
permalink: connectorapioverview.html
---
### Introduction

Connector API Enable server to server communication for any consumer side connectors (e.g. SMS gateway, Facebook, Apple Business Chat, LINE etc.) by sending and receiving events via HTTPS to the LiveEngage.

LiveEngage already provides out of the box connectors to Facebook, Google My Business, SMS via Twilio and Line with many more in the pipeline, including the Apple Business Chat connector.

For customers who want to connect with any other messaging platform of their choice, such as Viber, Skype, and SMS (not via Twilio), this API will allow them to get set up and start messaging with customers right away. The API also allows brands to develop their own [**customized messaging connector**](create-connector.html){:target="_blank"}. in collaboration with a third party partner.

**What is Connector API?**

The Connector API provides a HTTPS-based transport for asynchronous server-to-server communication with LivePerson Messaging. Brands can connect consumers via an external messaging gateway, e.g., a SMS gateway, to the LiveEngage platform.

Connector API is split into two main components:

* **Messaging Send API**: Send requests based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"}
* **Webhooks [WebHooks](webhooks-overview.html){:target="_blank"} Notification Service**: Receive responses and notifications based on the [Messaging Window API](consumer-int-overview.html){:target="_blank"} via a HTTPS-endpoint that is exposed by the brand’s connector.

![JavascriptOverview](img/ConnectorAPI1.png)

Please note: A HTTP-based transport for asynchronous communication requires that a brand exposes their own HTTPS endpoint with authentication. For more details on WebHooks, please refer to the [Webhooks documentation](webhooks-overview.html){:target="_blank"}.


**When should I use Connector API?**
Connector API should be used when planning to develop a server application which connects consumers with the LiveEngage platform. It should be used to build external consumer connectors. For example, you can integrate your own SMS gateway or Messaging application into LiveEngage.

The HTTPS-based transport in Connector API is optimized for server-to-server communication. Meaning, for developing a broker application between the messages and data of one platfotm (such as Facebook, Apple Business Chat, Twitter etc.) and LiveEngage messages and data.
When planning to develop a messaging frontend application, client application or a customized chat window, [Messaging Window API](consumer-int-overview.html){:target="_blank"} is the preferred method.


|                                                           | **Connector API**                 | **Messaging Window API**    |
| --------------------------------------------------------- |:----------------------------------|:----------------------------|
| **Transport protocol**                                    | HTTPS                             | WebSockets                  |
| **Application type**                                      | Backend (server to server)        | Frontend                    |  
| **Modality**                                              | Asynchronous, no realtime         | Asynchronous, near realtime |
| **Authentication**                                        | As app w/ auth token (AppJWT)     | As consumer (ConsumerJWT)   |
| **Consumer communication**                                | Yes                               | Yes                         |
| **Agent (bot) communication**                             | No                                | No See [Node Agent SDK](https://github.com/LivePersonInc/node-agent-sdk){:target="_blank"}|
| **Compatibility with Function-as-a-Service (“Lambdas”)**  | Yes                               | No                          |

**How does Connector API differ from the Messaging Window API?**

Connector API uses a different transport protocol: **HTTPS** instead of **Web Sockets**. The types of API requests, responses, and notifications are largely based on the Messaging Window API with several exceptions:
* There are no subscription requests. Subscriptions are specified when installing a client application.
* A consumer conversation is created with a dedicated endpoint and there is no connection initialization.
* The mechanisms for authentication and consumer identification are different.


### Use Cases

There are two primary reasons to utilize the Connector API:

1. **Brands** - To **create** and **host** their own custom connectors - To enable their consumers enagege with them via many distribution channels while using more than one device. e.g Connector for **Facebook Messenger, Google my business, Apple Business Chat, LINE** etc.   

[comment]: <> (<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>)

**Simplified Solution Outline**

![JavascriptOverview](img/ConnectorAPI2.png)

{:start="2"}

2. **Product solutions** -

	* Develop custom connectors for brands (e.g., SMS gateway) - For our customers that wish not to use the default Twilio SMS Gateway. will be hosted at Live Person.

	* Build...

	The Connector API allows the Connector to:

	- Create Conversation and set SDEs in one step.
	- Send message (content decided via PayLoad)
	- Send Image
	- Chat States Events (ACTIVE, INACTIVE etc.)
	- Close Conversation

    The Webhooks allows the connector to:

    - Subscribe for notifications from messaging.





	**Notes:**

	- **aaaaa**
	-

### Samples

Refer to the [Connector Sample App](connector-sample-app.html){:target="_blank"}.
