---
pagename: Bot Invocations
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
permalink: liveperson-functions-bot-invocations.html
indicator: both
---

Users who are tasked with creating bots in Conversation Builder can easily integrate function calls within their dialog flows. Adding this kind of [integration interaction](conversation-builder-conversation-builder-interactions.html#integrations) to a dialog in a bot works just like adding any other type of integration interaction.

Before a function can be used in an interaction, users who are tasked with more technical work in Conversation Builder must first 1) [create and deploy the function](liveperson-functions-getting-started.html) in the LivePerson Functions UI, and then 2) [add a FaaS-type integration](conversation-builder-conversation-builder-integrations.html#add-a-faas-integration) to the bot. This makes the integration available for use in an interaction.

As part of the invocation, the bot can pass a payload into the function. This payload is specific to the triggered bot interaction. This means that, depending on the interaction, the function will have different data available as an input.

{: .important}
In the Functions UI, when you create a function that's intended for invocation by a bot, select "No Event" for the event. The use of FaaS events is *not* supported.