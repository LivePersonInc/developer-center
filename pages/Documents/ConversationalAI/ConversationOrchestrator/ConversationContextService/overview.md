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

### What is Conversation Context Service?

The Conversation Context Service (CCS) provides contextual memory to power AI experiences within Conversational Cloud. It enables spontaneous, context-aware conversations by being the central place where internal and external services can store and gather conversation context to further the dialog with consumers.

CCS is a cloud-based repository for storing and retrieving session state attributes that can be preserved and referenced throughout a consumer’s conversational journey. This feature allows all agents, whether human or bot, to access relevant information that has been previously uncovered to ensure the consumer has a seamless, thoughtful experience as they move through their conversations. By using the CCS as a single source of truth for a user’s context variables, we can craft a more personalized experience for the consumer, while reducing redundancy and limiting the potential for errors when re-entering information.

CCS provides a system to hierarchically organize data using *key-value pairs*. At the top of the hierarchy, brands can have multiple *namespaces* to specify sections based on different business use cases. Typically, namespaces group together related attributes, such as customer information or reporting dashboard data for your account. Brands can define as many attributes as needed within their namespace, and they can further organize and structure these attributes under session IDs within the namespace.

<img class="fancyimage" width="700" src="img/convorchestrator/co_ccs_namespace.png" alt="">

CCS stores data in key-value pairs and includes developer tools like js-libraries, LivePerson Functions support and REST APIs. These can be used to store data from other products within the Conversational Cloud and from external data sources.

### When to use the Conversation Context Service

{: .important}
Don’t store personally identifiable information (PII) in the Conversation Context Service.

CCS attributes can be used in a variety of ways to enhance the conversational experience of consumers. Attributes are accessible at any point in the conversational journey, and they can be used in the following ways:

* **Power contextual continuity between bots** - In this example, the intent and email is being saved into the CCS by one bot and is being retrieved by another bot to continue the conversation.

  <img class="fancyimage" width="700" src="img/convorchestrator/co_ccs_usecase1.png" alt="">

* **Perform context-based dynamic routing at scale** - In this example, a concierge bot saves the intent into the CCS. The CCS links to an external CRM to get customer tier information. A Dynamic Routing policy then makes use of the intent and tier information to power a routing decision.

  <img class="fancyimage" width="700" src="img/convorchestrator/co_ccs_usecase2.png" alt="">

* **Perform human-bot tango** - In this example, bots continue to build context about the consumer and the context information can be exposed to human agents through an agent-facing widget.

  <img class="fancyimage" width="700" src="img/convorchestrator/co_ccs_usecase3.png" alt="">

### How to use the Conversation Context Service

Each object within the CCS comes with full CRUD (Create, Read, Update, Delete) functionality to easily generate and access the needed information. When building bots using Conversation Builder, it is highly recommended to leverage the built in botContext scripting functions. These scripting functions provide straightforward methods to simplify each CRUD action for use in the bot and other Conversational Cloud services.

* [Manage the Conversation Context Service in Conversation Builder](conversation-builder-scripting-functions-manage-the-conversation-context-service.html)

Additionally, the CCS API offers a RESTful interface with methods to access the desired functionality from services other than Conversation Builder.

* [Conversation Context Service — Methods v1](conversation-orchestrator-conversation-context-service-methods-v1.html)
* [Conversation Context Service — Methods v2](conversation-orchestrator-conversation-context-service-methods-v2.html)

### API versions

v2 of the Conversation Orchestrator APIs was released in July 2021. The new version applies to both the Conversation Context Service and the [Next Actions API](conversation-orchestrator-next-actions-api-overview.html). v2 has the following additional benefits:

* Higher scalability
* Improved authorization mechanism
* Visibility into Dynamic Routing [policy execution logs](conversation-orchestrator-dynamic-routing-policy-logs-for-v2.html)
* Better APIs, e.g., update multiple context variables in a single call
* Better data security through improved encryption

All accounts will gradually be migrated from v1 to v2 starting July 2021. Please talk to your LivePerson account executive if you want to be moved to v2 sooner. The v1 APIs will be deprecated on December 31, 2022. Please refer to the [v1](conversation-orchestrator-conversation-context-service-methods-v1.html) or [v2](conversation-orchestrator-conversation-context-service-methods-v2.html) documentation as appropriate for your case.

{: .important}
You can know you are on v2 if you see OAuth 2.0 authentication on the **API Authorization** page, as discussed [here](conversation-orchestrator-api-authorization.html).
