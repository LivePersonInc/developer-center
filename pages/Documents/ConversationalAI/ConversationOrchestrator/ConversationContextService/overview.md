---
pagename: Overview
redirect_from:
  - maven-context-warehouse-overview.html
  - maven-ai-context-warehouse-overview.html
  - conversation-orchestrator-context-warehouse-overview.html
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-overview.html
indicator: messaging
---

### What is Conversation Context Service

The Conversation Context Service is a centralized repository of brand, customer, conversational, session, and custom attributes that can be used to build customized conversation solutions. 

Conversation Orchestrator provides three types of Context Attributes:

1. Inbox System Attributes (e.g. conversation history)
2. Custom attributes with static data or external system integrations with [Functions](liveperson-functions-overview.html)
3. Conversation Context Service with APIs to store and retrieve session context and carry them over the conversational journeys

<img class="fancyimage" width="800" src="img/maven/Context Warehouse Diagram.png">

### Use Cases

Conversation Context Service attributes can be used in several ways:

1. Save conversation session state info in Conversational Cloud (e.g. agent notes), and retrieve them later in a different conversation session.
2. Save contextual attributes in concierge bot (e.g.) intents and carry over context to another bot or human skill.
3. Use intents and entities from a bot, and use them in conjunction with system inbox attributes, or custom static or FaaS to create complex routing policies. Please see [Dynamic Routing](maven-ai-powered-routing-overview.html) to learn more about how to create such policies. 