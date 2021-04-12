---
pagename: Overview
redirect_from:
  - maven-ai-powered-routing-overview.html
  - maven-ai-ai-powered-routing-overview.html
  - maven-ai-dynamic-routing-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Dynamic Routing
permalink: conversation-orchestrator-dynamic-routing-overview.html
indicator: messaging
---

### What is Dynamic Routing?

The consumer shift from voice to messaging has increased volume and made it challenging for brands to get consumers with specific inquiries to the right agents as quickly as possible, often resulting in abandonment, channel switching, and loss of revenue/increased costs. To ensure consumers are connected to the most qualified agent (human or bot), brand routing has become very complex, supporting hundreds or thousands of agents servicing various consumer needs. When making routing decisions, brands that account for factors like consumer intent, loyalty tier, past interactions, consumer inputs and more provide hyper-personalized experiences that delight consumers.

Dynamic Routing provides brands the infrastructure to perform this intelligent routing at scale. Creating and enabling policies using intent and contextual data accessed via APIs lets brands create highly personal and custom connections.

### When to use Dynamic Routing

Dynamic Routing can be used for a variety of use cases. Here are a few examples: 

* Connecting consumers to their personal loan officer throughout the loan application and funding process, providing a personalized experience that results in higher NPS.

* Routing travelers to automated assistants during a high-contact volume period caused by an urgent weather condition or natural disaster, allowing faster assistance while alleviating contact center load.

* Directing consumers to device upsell specialists when they have repeat troubleshooting contacts and they are eligible for an upgrade, resulting in increased contract renewals and upsells.

### How to use Dynamic Routing

Before starting with Dynamic Routing, familiarize yourself with [Conversation Builder](tutorials-guides-getting-started-with-bot-building-overview.html) and [Intent Builder](intent-builder-overview.html). This documentation makes references to both bots and intents, so prior knowledge is helpful. One great way to gain exposure to these applications is to complete the [Getting Started with Bot Building](tutorials-guides-getting-started-with-bot-building-overview.html) tutorial series.

Dynamic Routing requires the following components to operate:
* Routing bot
* Policies
* Conversation Context Service (CCS)
* Recommendations API

Here is a representation of how the various components integrate:
<img class="fancyimage" width="800" src="img/convorchestrator/co_dr_components.png">

#### Routing bot
You need to have a routing bot either on Conversation Builder or on external automation platforms. The routing bot, connected to the primary messaging skill, receives the conversations, calls the Recommendations API, and executes the policies defined in the Policy Manager, to direct incoming conversations to the right agent skill. Liveperson provides a Conversation Orchestrator bot template which makes it easy for brands to get started. The Conversation Orchestrator bot is pre-wired to both the Conversation Context Service and the Recommendations API. You are welcome to use your own routing bot but will have to manually integrate both the Conversation Context Service and the Recommendations API. You can also use a routing bot on a different automation platform like Google DialogFlow. In such cases, you need to use the Recommendations API to receive recommendations on those external platforms. 

#### Policies
The Policy Management interface provides the UI to [create routing policies](conversation-orchestrator-dynamic-routing-creating-and-managing-policies.html). Policies contain conditions and actions. Conditions are configured using attributes, logical operators, and values. Some attributes like conversation attributes and authenticated SDEs are directly available for routing. Other attributes, including custom data, can be configured by developers using the Conversation Context Service. Actions are configured to transfer to skills or agents, or even to send messages. The interface allows users to enable, disable, and prioritize policies. 

#### Conversation Context Service
The [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) (CCS) provides the contextual memory to leverage data for routing. The service provides REST APIs and JavaScript wrappers that can be used to get data from both internal and external data sources like CRMs. For custom scenarios, the CCS can integrate inputs from LivePerson Functions, making the platform very extendable. 

#### Recommendations API
The [Recommendations API](conversation-orchestrator-recommendation-api-overview.html), when invoked, returns the next best action. At run time, the Recommendations API executes policies in the defined priority order and returns an action for the policy with the matching condition. The API is public and can be leveraged to control routing on external AI platforms (Google DialogFlow, IBM Watson, etc.), thereby enabling brands to manage all their automations from one single place.
