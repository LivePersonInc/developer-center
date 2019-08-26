---
pagename: Bot Invocations
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
permalink: liveperson-functions-bot-invocations.html
indicator: both
---

Users who are tasked with creating bots (automations) in Conversation Builder can easily integrate function calls within the dialog flows of bots. Adding this kind of [integration interaction](conversation-builder-conversation-builder-interactions.html#integrations) to a dialog works just like adding any other type of integration interaction.

Users who are tasked with more technical work in Conversation Builder can easily add function (FaaS) integrations, so they are available for use. For information on this, see [Add a FaaS integration](conversation-builder-conversation-builder-integrations.html#add-a-faas-integration).

As part of the invocation, the bot can pass a payload into the function. This payload is specific to the triggered event. This means that, depending on the event, the function will have different data available as an input.