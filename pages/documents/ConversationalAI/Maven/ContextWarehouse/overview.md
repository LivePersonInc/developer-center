---
pagename: Overview
redirect_from:
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Maven
subfoldername: Context Warehouse
permalink: maven-context-warehouse-overview.html
indicator: messaging
---

### What is Context Warehouse

The context warehouse is a centralized repository of brand, customer, conversational, session, and custom attributes that can be used to build customized conversation solutions. 

Maven provides three types of Context Attributes:

1. Inbox System Attributes (e.g. conversation history)
2. Custom attributes with static data or external system integrations with [Functions](liveperson-functions-overview.html)
3. Context session store with APIs to store and retrieve session context and carry them over the conversational journeys

<img class="fancyimage" width="800" src="img/maven/Context Warehouse Diagram.png">

### Use Cases

Context warehouse attributes can be used in several ways:

1. Save conversation session state info in LiveEngage (e.g. agent notes), and retrieve them later in a different conversation session.
2. Save contextual attributes in concierge bot (e.g.) intents and carry over context to another bot or human skill.
3. Use intents and entities from a bot, and use them in conjunction with system inbox attributes, or custom static or FaaS to create complex routing policies. Please see [AI Powered Routing](maven-ai-powered-routing-overview.html) to learn more about how to create such policies. 