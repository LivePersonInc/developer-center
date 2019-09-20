---
pagename: Conversational AI
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Integrations
permalink: liveperson-functions-integrations-conversational-ai.html
indicator: both
---
### Maven Context Warehouse
The [Maven context warehouse](maven-context-warehouse-overview.html) is a centralized repository of brand, customer, conversational, session, and custom attributes. Those attributes can be used by [Maven](maven-overview.html) throughout the customer’s conversation journey or for routing policies.

Whith LivePerson Functions it is possible to [connect a custom attribute with a function](maven-context-warehouse-custom-static-or-function.html#create-a-liveperson-function-variable), which fetches the value of the attribute from an external source at runtime. For example this empowers Maven to retrieve customer information from a Salesforce CRM database in real time. 



### Conversation Builder
Users who are tasked with creating bots in Conversation Builder can easily integrate function calls within their dialog flows. Adding this kind of [integration interaction](conversation-builder-conversation-builder-interactions.html#integrations) to a dialog in a bot works just like adding any other type of integration interaction.

Before a function can be used in an interaction, users who are tasked with more technical work in Conversation Builder must first 1) [create and deploy the function](liveperson-functions-getting-started.html) in the LivePerson Functions UI, and then 2) [add a FaaS integration](conversation-builder-conversation-builder-integrations.html#add-a-faas-integration) to the bot in Conversation Builder. This makes the integration available for use in a bot interaction.

As part of the invocation, the bot can pass a payload into the function. This payload is specific to the triggered bot interaction. This means that, depending on the interaction, the function will have different data available as an input.

### Bot Connector
LivePerson Functions allow you to write your own custom bot and connect it to LiveEngage. By doing so no external vendors (e.g. IBM Watson) need to be used. See more information about [Custom Integration](third-party-bots-custom-integration.html).