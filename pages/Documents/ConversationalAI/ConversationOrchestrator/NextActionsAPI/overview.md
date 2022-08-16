---
pagename: Overview
redirect_from:
  - maven-askmaven-overview.html
  - maven-ai-askmaven-overview.html
  - maven-ai-recommendation-api-overview.html
  - conversation-orchestrator-recommendation-api-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Next Actions API
permalink: conversation-orchestrator-next-actions-api-overview.html
indicator: messaging
---

### What is the Next Actions API?

The Next Actions API is a REST API that allows you to ask Conversation Orchestrator for the next best actions (route to skill, send a response, etc.) for your bot/app. Accessing the API can be done via a [JavaScript method](conversation-builder-scripting-functions-askmaven.html) from within a Conversation Builder bot or via the REST API for external automations and apps.

### When to use the Next Actions API
A typical use case for using the Next Actions API is to get a routing decision to transfer to a skill from a bot or LOB app:

1. A brand’s concierge bot (for example, a bot built in Conversation Builder) handles branded greetings, dialogs, and intents.
2. It then calls the Next Actions API, which evaluates all the policies set up in Dynamic Routing and returns the next best action. 

    * If you're using the Conversation Orchestrator bot template, the ask maven call is already pre-configured for you, and you don’t have to do this.
    * If you're using a different Conversation Builder bot, you can use the [askMaven JavaScript method](conversation-builder-scripting-functions-askmaven.html). 
    * If you're using a third-party bot on any external platform (for example, Google Dialogflow), use the REST API.
  
    Please see Dynamic Routing's [Getting Started](conversation-orchestrator-dynamic-routing-getting-started.html) topic for more information.

3. The concierge bot then uses the action (for example, route to a skill) to transfer the conversation to that skill in Conversational Cloud.

    This is often used in conjunction with the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) to pass custom attributes to use in a policy (for example, intents).

### API versions

v2 of the Conversation Orchestrator APIs was released in July 2021. The new version applies to both the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) and the Next Actions API. v2 has the following additional benefits:

* Higher scalability
* Improved Better data security through OAuth 2.0 authorization mechanism
* Visibility into Dynamic Routing [policy execution logs](conversation-orchestrator-dynamic-routing-policy-logs-for-v2.html)
* Better APIs i.e. update multiple context variables in a single call
* Better data security through improved encryption

All accounts will gradually be migrated from v1 to v2 starting July 2021. Please talk to your LivePerson account executive if you want to be moved to v2 sooner. The v1 APIs will be deprecated on December 31, 2022. Please refer to the [v1](conversation-orchestrator-next-actions-api-methods-v1.html) or [v2](conversation-orchestrator-next-actions-api-methods-v2.html) documentation as appropriate for your case.

{: .important}
You can know you are on v2 if you see OAuth 2.0 authentication on the API Authorization page, as discussed [here](conversation-orchestrator-api-authorization.html).

### Getting started
To generate credentials for using the API, see [here](conversation-orchestrator-api-authorization.html).
