---
pagename: Third-Party Bots
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-third-party-bots.html
indicator: both
---

Third-Party Bots are managed through LivePerson's Conversational Cloud and can be displayed as a human agent or a LivePerson bot. You can leverage it with Functions to build Custom Integrations with another Third-Party Bot provider. Third-Party Bots connectors allow you to:

* Send/receive text messages.
* Send structured content.
* Transfer the conversation to other Skills or a specific agent.
* Change Time To Response for a messaging conversation.
* Close a conversation.
* Send quick replies.
* Send private messages.
* Invoke an additional LivePerson Function.

There are two types of LivePerson Functions integrations supported by Third-Party Bots: **Custom Integration** and **Hooks integration**. Please follow the [Third-Party Bots Getting Started guide](third-party-bots-getting-started.html) to complete the pre-requisite steps.

### Custom Integration

You can configure a bot connector to use Functions to write your custom bot and connect it to Conversational Cloud with **Custom Integration** instead of a third-party vendor (e.g. IBM Watson).

To perform the Custom Integration with Functions, you need to create a function on the **Third-Party Bots Custom Integration** event. Please follow this guide about [Third-Party Bots Custom Integration](third-party-bots-custom-integration.html).

### Hooks integration

You can configure hooks in a bot connector using Functions to modify vendor payloads, responses and readout errors. Please follow this guide about [Third-Party Bots Hook Configuration](third-party-bots-hook-configuration.html). These are the following hooks events:

 **Third-Party Bots Error Hook**: Triggered when a bot using the Third-Party Bots Error Hooks is having an issue.

{: .note}
**Third-Party Bots Error Hook** event will not send back any payload to the bot.

**Third-Party Bots Pre Hook**: Triggered when a bot using the Third-Party Bots Post Hooks receives a message. The function will be invoked before the vendor gets the payload. The function receives invoked on every message the customer sends. It enables you to modify or expand the payload the vendor gets.

**Third-Party Bots Post Hook**: Triggered when a bot using the Third-Party Bots Post Hooks receives a message. The function will be invoked after the vendor responds. The function gets invoked on every message the customer sends. It enables you to modify or expand the response of the payload.

### Bot conversation errors

{: .note}
Please follow the complete guide about [Third-Party Bots conversation errors](third-party-bots-bot-conversation-errors.html) for more details and solutions.

These are the errors returned in a bot connector associated with Functions:

|Error|Description|
|--- |--- |
|com.liveperson.bot-connectors-worker.error.aivendor.faas.invoke-lambda|This indicates an issue during Faas invocation.|
|com.liveperson.bot-connectors-worker.error.aivendor.faas.missing-response-body|This happens if there is no response body provided.|
|com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-hook|Indicates that the Faas hook could not be invoked.|
|com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-faas-request|This indicates an issue during Faas invocation.|
|com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-bot-action|This indicates an issue during the invocation of an additional LivePerson Function.|
|com.liveperson.bot-connectors-worker.error.aivendor.faas.testConnection|This happens when the LivePerson Function is not responding in time or with a bad status .|
|com.liveperson.bot-connectors-worker.error.aivendor.faas.parse-message.malformed-alternative-intents|This indicates a wrong parsing of alternative intents inside the LivePerson Function .|
