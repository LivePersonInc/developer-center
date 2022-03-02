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


Third party bot are managed through LivePerson's Conversational Cloud and can be displayed as a human agent or a LivePerson bot. You can leverage it with Functions to build custom integrations with other third party bot provider. 

Third party bots connectors allows you to:

* send/receive text messages
* send structured content
* transfer the conversation to other skills
* change Time To Response for a messaging conversation
* close a conversation

<div class="important">Please follow the Third party bots [Getting Started guide](third-party-bots-getting-started.html) first to complete pre-requisite steps.</div>

### Custom integration

You can configure a bot connector using Functions instead nstead of a vendor, like IBM Watson for example, you can write your own custom bot and connect it to Conversational Cloud with **custom integration**.

In order perform the Custom integration with Functions, you need to create a function on **Third-Party Bots Custom Integration** event.

Please follow the complete guide about [Third party bots custom integration](third-party-bots-custom-integration.html)

### Hooks integration

You can configure hooks in a bot connector using Functions to modify vendor payloads, responses and read out errors.

There are the following events:

<table>
<thead><th>Event</th><th>Dscription</th></thead>
<tbody>
 <tr><td>Third-Party Bots Post Hook</td><td>Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked after the vendor responded.</td></tr>
  <tr><td>Third-Party Bots Pre Hook</td><td>Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked before the vendor receives the payload.</td></tr>
   <tr><td>Third-Party Bots Error Hook</td><td>Triggered when a bot, which is using the Third-Party Bots' Error Hooks is having an issue.</td></tr>
</tbody></table>

Pease follow the complete guide about [Third party bots hooks configuration](third-party-bots-hook-configuration.html)

### Bot conversation errors

These are the errors returned in a bot connector associated with Functions:

<table>
<thead><th>Error</th><th>Dscription</th></thead>
<tbody>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.invoke-lambda</td><td>This indicates an issue during Faas invocation..</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.missing-response-body</td><td>This happens if there is no response body provided.</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-hook</td><td>Indicates that the Faas hook could not be invoked.</td></tr>
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-faas-request</td><td>This indicates an issue during Faas invocation.
<tr><td>com.liveperson.bot-connectors-worker.error.aivendor.faas.failed-faas-request</td><td>This indicates an issue during Faas invocation.
</td></tr>
</tbody></table>


Pease follow the complete guide about [bot conversation errors](third-party-bots-bot-conversation-errors.html)
