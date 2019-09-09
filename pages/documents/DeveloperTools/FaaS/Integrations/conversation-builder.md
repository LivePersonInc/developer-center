---
pagename: Conversation Builder
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Integrations
permalink: liveperson-functions-integrations-conversation-builder.html
indicator: both
---

Users who are tasked with creating bots in Conversation Builder can easily integrate function calls within their dialog flows. Adding this kind of [integration interaction](conversation-builder-conversation-builder-interactions.html#integrations) to a dialog in a bot works just like adding any other type of integration interaction.

Before a function can be used in an interaction, users who are tasked with more technical work in Conversation Builder must first 1) [create and deploy the function](liveperson-functions-getting-started.html) in the LivePerson Functions UI, and then 2) [add a FaaS integration](conversation-builder-conversation-builder-integrations.html#add-a-faas-integration) to the bot in Conversation Builder. This makes the integration available for use in a bot interaction.

As part of the invocation, the bot can pass a payload into the function. This payload is specific to the triggered bot interaction. This means that, depending on the interaction, the function will have different data available as an input.