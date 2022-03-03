---
pagename: Third Party Bots
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-third-party-bots.html
indicator: both
---

Third Party Bots are managed through LivePerson's Conversational Cloud and can be displayed as a human agent or a LivePerson bot. You can leverage it with Functions to build custom integrations with other third party bot provider. Third Party Bots connectors allows you to:

* Send/receive text messages.
* Send structured content.
* Transfer the conversation to other skills.
* Change Time To Response for a messaging conversation.
* Close a conversation.

There are two types of LivePerson Functions integrations supported by Third Party Bots: **Custom integration** and **Hooks integration**.

{: .important}
Please follow the Third Party Bots [Getting Started guide](third-party-bots-getting-started.html) first to complete pre-requisite steps.

### Custom integration

You can configure a bot connector using Functions instead of a vendor, like IBM Watson for example, you can write your own custom bot and connect it to Conversational Cloud with **custom integration**.

In order  to perform the Custom integration with Functions, you need to create a function on **Third-Party Bots Custom Integration** event. Please follow this guide about [Third Party Bots custom integration](third-party-bots-custom-integration.html).

### Hooks integration

You can configure hooks in a bot connector using Functions to modify vendor payloads, responses and read out errors. Pease follow this guide about [Third Party Bots hooks configuration](third-party-bots-hook-configuration.html). These are the following hooks events:

 **Third-Party Bots Error Hook** : Triggered when a bot, which is using the Third-Party Bots' Error Hooks is having an issue.

{: .important}
**Third-Party Bots Error Hook** event won't send back any payload to the bot.

**Third-Party Bots Pre Hook**: Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked before the vendor receives the payload. The `Lambda` gets invoked on every message the customer sends. It allows to modify or expand the payload, the vendor receives.

**Third-Party Bots Post Hook**: Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked after the vendor responded. The `Lambda` gets invoked on every message the customer sends. It allows to modify or expand the response of the payload.

### Bot conversation errors

{: .important}
Please follow the complete guide about [Third Party Bots conversation errors](third-party-bots-bot-conversation-errors.html) for more details and solutions.

These are the errors returned in a bot connector associated with Functions:

<table>
<thead><th>Error</th><th>Description</th></thead>
<tbody>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.invoke-lambda</td><td>This indicates an issue during Faas invocation.</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.missing-response-body</td><td>This happens if there is no response body provided.</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-hook</td><td>Indicates that the Faas hook could not be invoked.</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-faas-request</td><td>This indicates an issue during Faas invocation.</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-faas-request</td><td>This indicates an issue during Faas invocation.</td></tr>
</tbody></table>
