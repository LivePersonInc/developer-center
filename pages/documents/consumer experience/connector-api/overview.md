---
title: Overview
level1: Documents
level2: Consumer Experience
level3: Connector API
order: 1
level-order: 8
root-link: true
indicator: both
permalink: connectorapioverview.html
---
### Introduction

Connector API Enable server to server communication for any consumer side connectors (e.g. SMS gateway, Facebook, Apple Business Chat, LINE etc.) by sending and receiving events via HTTPS to the LiveEngage.

LiveEngage already provides out of the box connectors to Facebook, Google My Business, SMS via Twilio and Line with many more in the pipeline, including the Apple Business Chat  connector which is scheduled for release in March.

For customers who want to connect with any other messaging platform of their choice, such as Viber, Skype, and SMS (not via Twilio), this API will allow them to get set up and start messaging with customers right away. The API also allows brands to develop their own [**customized messaging connector**](create-connector.html){:target="_blank"}. in collaboration with a third party partner.

The Connector API is a REST style API with relation links, and provides the main functionality for the consumer side connectors in LiveEngage.

### Getting Started with the Connector API

1. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

2. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}.

[comment]: <> (guides-retry-policy.html needs to be updated with Connector API as well)

**In order to use the Connector API, please follow the steps below:**

1. [**Onboard your connector**](connector-onboarding.html){:target="_blank"} - The connector is essentially an application residing on a server that is used to make REST calls on behalf a consumer to LiveEngage. For that purpose, the client must be registered and known to LiveEngage for authorization and user validation. For registering your Application please contact support and provide some details regarding your connector to be filled in the App Installation JSON, mainly your connector/application name and Webhooks URLs endpoints which will be used as endpoints for LiveEngage to send its notification events to your connector.

2. After successfully registering your connector on LiveEngge you will be handed over with 2 important values which you can use to make calls to LiveEnagge:
 
	* **Installation id**:  e.g 75588e18-0213-4e33-8174-883acac7e3c4
	
	* **Secret**:  e.g kgvbkk7glku72jgtmpi6l4a872

	Those will be used for the first authentication call to LiveEngage Identity Provider in order to 
    
    e.g https://{**IDP_Domain**}/sentinel/api/account/{**SiteID**}/app/token?v=1.0&grant_type=client_credentials&client_id={**Installation id**}&client_secret={**Secret**}


### Use Cases

There are two primary reasons to utilize the Connector API:

1. **Brands** - To **create** and **host** their own custom connectors - To enable their consumers enagege with them via many distribution channels while using more than one device. e.g Connector for **Facebook Messenger, Google my business, Apple Business Chat, LINE** etc.   

<iframe src="//players.brightcove.net/902047215001/default_default/index.html?videoId=5348329763001" allowfullscreen webkitallowfullscreen mozallowfullscreen height="280" width="500"></iframe>

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
