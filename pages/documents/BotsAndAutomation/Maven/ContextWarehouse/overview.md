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

### Overview

The context warehouse is a centralized repository of various context attributes used by the Maven AI engine. 

Maven provides three types of Context Attributes:

1. Use Inbox System Attributes (e.g. user, conversation history, and operational context)

2. Define custom attributes with static data or external system integrations with [Functions](liveperson-functions-overview.html)

3. Use APIs to store and retrieve session attributes to carry over custom context throughout the conversational journeys

<img class="fancyimage" width="600" src="img/maven/image_34.png">

Context warehouse attributes can be used in several ways. 

Some examples include:

1. Save conversation session state info in LiveEngage (e.g. agent notes), and retrieve them later in a different conversation session.

2. Save contextual attributes in concierge bot (e.g.) intents and carry over context to another bot or human skill.

3. Use intents and entities from a bot, and use them in conjunction with system inbox attributes, or custom static or [LivePerson Function](liveperson-functions-overview.html) to create complex routing policies. Please see section on AI Powered Routing to learn more how to create such policies. 