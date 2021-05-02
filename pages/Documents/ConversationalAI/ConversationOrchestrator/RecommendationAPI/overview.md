---
pagename: Overview
redirect_from:
  - maven-askmaven-overview.html
  - maven-ai-askmaven-overview.html
  - maven-ai-recommendation-api-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Recommendation API
permalink: conversation-orchestrator-recommendation-api-overview.html
indicator: messaging
---

### What is the Recommendations API?

The Recommendation API is a REST API that allows you to ask Conversation Orchestrator for the next best actions (route to skill, send a response, etc.) for your bot/app. Accessing the API can be done via a [JavaScript method](conversation-builder-scripting-functions-askmaven.html) from within a Conversation Builder bot or via the REST API for external automations and apps.

### When to use the Recommendations API
A typical use case for using the Recommendation API is to get a routing decision to transfer to a skill from a bot or LOB app:

1. A brand’s concierge bot (for example, a bot built in Conversation Builder) handles branded greetings, dialogs, and intents.
2. It then calls the Recommendation API, which evaluates all the policies set up in Dynamic Routing and returns the next best action. 

    * If you're using the Conversation Orchestrator bot template, the ask maven call is already pre-configured for you, and you don’t have to do this.
    * If you're using a different Conversation Builder bot, you can use the [askMaven JavaScript method](conversation-builder-scripting-functions-askmaven.html). 
    * If you're using a third-party bot on any external platform (for example, Google Dialogflow), use the REST API.
  
    Please see Dynamic Routing's [Getting Started](conversation-orchestrator-dynamic-routing-getting-started.html) topic for more information.

3. The concierge bot then uses the action (for example, route to a skill) to transfer the conversation to that skill in Conversational Cloud.

    This is often used in conjunction with the [Conversation Context Service](conversation-orchestrator-conversation-context-service-overview.html) to pass custom attributes to use in a policy (for example, intents).

### Getting started

1. Log in to Conversation Orchestrator with your Conversational Cloud credentials, and navigate to **Developer Key**.  
2. Copy and paste the key provided, and use it in your API headers. 

    <img class="fancyimage" width="800" src="img/convorchestrator/co_ccs_developerkey2.png">

    To generate a new key, click the **Regenerate Key** button. This will invalidate the previous key. The key is shared for all Conversation Orchestrator APIs; therefore, you must use the new key wherever the APIs are being called.