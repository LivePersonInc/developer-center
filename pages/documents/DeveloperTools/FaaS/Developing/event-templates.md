---
pagename: "Events & Templates"
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-events-templates.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-events-templates.html
---
### Events
LivePerson Functions' `lambdas` can be connected to LiveEngage events at the time of [creation](function-as-a-service-getting-started.html#step-1-choose-a-template). Once those `lambdas` are deployed, they will be executed whenever these events are triggered. Each event comes with a set of connected templates that can be used as an initial scaffolding for the developing the `lambda`. **Note** that the amount of lambdas connected to a specific event is restricted and can be seen in the table below.

Currently the following events are supported:

<table style="width: 100%;">
<thead>
  <tr>---
pagename: "Events & Templates"
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-events-templates.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-events-templates.html
---
### Events
LivePerson Functions' `lambdas` can be connected to LiveEngage events at the time of [creation](function-as-a-service-getting-started.html#step-1-choose-a-template). Once those `lambdas` are deployed, they will be executed whenever these events are triggered. Each event comes with a set of connected templates that can be used as an initial scaffolding for the developing the `lambda`. **Note** that the amount of lambdas connected to a specific event is restricted and can be seen in the table below.

Currently the following events are supported:

<table style="width: 100%;">
<thead>
  <tr>
    <th>Event Name</th>
    <th>Event Description</th>
    <th>Lambda Limit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Chat Post Survey E-Mail Transcript</td>
    <td>Triggered after a chat conversation is finished and CSAT survey has been submitted.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Conversational Command</td>
    <td>Use this event to implement a <a href="liveperson-functions-integrations-conversational-commands.html">Conversational Command</a> that can be invoked from within the agent workspace in LiveEngage by typing "/".</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Messaging Conversation End</td>
    <td>Triggered when the conversation is closed by agent/consumer.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Conversation Idle</td>
    <td>Triggered when agent/consumer is not responsive or the conversation is in queue for over X secs/mins. Where Time X is configurable inside the LiveEngage UI, via the auto-messages feature.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Conversation Routing</td>
    <td>Triggered when the conversation is transferred to a different skill.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Line in Off-Hours</td>
    <td>Triggered when a consumer writes a message to a conversation that started in working hours, but is now in off-hours.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging New Conversation</td>
    <td>Triggered for every new messaging conversation.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Participants Change</td>
    <td>Triggered on every participant change (joins/leaves) of a messaging conversation.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Survey Ended</td>
    <td>Triggered when a messaging post survey ended.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Survey Started</td>
    <td>Triggered when a messaging post survey started.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging TTR</td>
    <td>Triggered when the consumer marks a response as an urgent response, unmarks a response as urgent, or the agent manually updates the response time</td>
    <td>1</td>
  </tr>
  <tr>
    <td>No Event</td>
    <td>Used for lambdas which only can be invoked <a href="liveperson-functions-external-invocations-overview.html">externaly</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>Third-Party Bots Custom Integration</td>
    <td>Triggered when a bot, which is using the Third-Party Bots' Custom Integration receives a message</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Third-Party Bots Post Hook</td>
    <td>Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked after the vendor responded</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Third-Party Bots Pre Hook</td>
    <td>Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked before the vendor receives the payload</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Third-Party Bots Error Hook</td>
    <td>Triggered when a bot, which is using the Third-Party Bots' Error Hooks is having an issue</td>
    <td>15</td>
  </tr>
</tbody>
</table>

Each of these events also has an event specific input (payload) associated with it, that the triggering system will provide at runtime. When using the [Invoke](function-as-a-service-deploying-functions.html#testing-your-function) screen, this payload is shown on the left-hand side. During development, the event payload of the `lambda` is visible on the right-hand side at the sidebar-tab. See the [Payload](function-as-a-service-developing-with-faas-overview.html#editor-sidebar) section for more information.

### Templates
Additionally, Functions offers a number of templates. They can be used as a sample to kick-start the development of custom scenarios. Some of them are connected to events which the template list below is grouped by. Templates which have the same name as the related event are to be considered the default template for an event.

<table style="width: 100%;">
<thead>
  <tr>
    <th>Event</th>
    <th>Template Name</th>
    <th>Template Description</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>Chat Post Survey E-Mail Transcript</td>
    <td>Chat Post Survey E-Mail Transcript</td>
    <td>A template displaying some basic ways how the "Chat Post Survey E-Mail Transcript"-Event can be used.</td>
  </tr>
  <tr>
    <td>Conversational Command</td>
    <td>Conversational Command</td>
    <td>A template displaying some basic ways how the "Conversational Command"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Conversation End</td>
    <td>Keyword Scanner</td>
    <td>A template displaying how to use the <a href="liveperson-functions-development-toolbelt.html#conversation-util">Conversation Util</a> to get a conversation and scan it for keywords.</td>
  </tr>
  <tr>
    <td></td>
    <td>Messaging Conversation End</td>
    <td>A template displaying some basic ways how the "Messaging Conversation End"-Event can be used.</td>
  </tr>
  <tr>
    <td></td>
    <td>Replace Files for Conversation</td>
    <td>A template displaying how to use the <a href="liveperson-functions-development-toolbelt.html#gdpr-util">GDPR Util</a> to replace all files of a conversation.</td>
  </tr>
  <tr>
    <td>Messaging Conversation Idle</td>
    <td>Messaging Conversation Idle</td>
    <td>A template displaying some basic ways how the "Messaging Conversation Idle"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Conversation Routing</td>
    <td>Messaging Conversation Routing</td>
    <td>A template displaying some basic ways how the "Messaging Conversation Routing"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Line in Off-Hours</td>
    <td>Messaging Line in Off-Hours</td>
    <td>A template displaying some basic ways how the "Messaging Line in Off-Hours"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging New Conversation</td>
    <td>Messaging New Conversation</td>
    <td>A template displaying some basic ways how the "Messaging New Conversation"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Participants Change</td>
    <td>Messaging Participants Change</td>
    <td>A template displaying some basic ways how the "Messaging Participants Change"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Survey Ended</td>
    <td>Messaging Survey Ended</td>
    <td>A template displaying some basic ways how the "Messaging Survey Ended"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Survey Started</td>
    <td>Messaging Survey Started</td>
    <td>A template displaying some basic ways how the "Messaging Survey Started"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging TTR</td>
    <td>Messaging TTR</td>
    <td>A template displaying some basic ways how the "Messaging TTR"-Event can be used.</td>
  </tr>
    <tr>
    <td>No Event</td>
    <td>Greeting Template</td>
    <td>A simple "Hello World" example</td>
  </tr>
  <tr>
    <td></td>
    <td>HTTP Template</td>
    <td>An example of how to execute a HTTP request.</td>
  </tr>
  <tr>
    <td></td>
    <td>Logging Template</td>
    <td>An example of how to write logs during lambda execution.</td>
  </tr>
  <tr>
    <td></td>
    <td>Salesforce Template</td>
    <td>An example of how to connect to Saleforce.</td>
  </tr>
  <tr>
    <td></td>
    <td>Secret Storage Template</td>
    <td>An example of how to use the Secret Storage.</td>
  </tr>
  <tr>
    <td>Third-Party Bots Custom Integration</td>
    <td>Default Template</td>
    <td>A template displaying some basic ways how the "Third-Party Bots Custom Integration"-Event can be used.</td>
  </tr>
</tbody>
</table>


    <th>Event Name</th>
    <th>Event Description</th>
    <th>Lambda Limit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Chat Post Survey E-Mail Transcript</td>
    <td>Triggered after a chat conversation is finished and CSAT survey has been submitted.</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Conversational Command</td>
    <td>Use this event to implement a <a href="liveperson-functions-integrations-conversational-commands.html">Conversational Command</a> that can be invoked from within the agent workspace in LiveEngage by typing "/".</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Messaging Conversation End</td>
    <td>Triggered when the conversation is closed by agent/consumer.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Conversation Idle</td>
    <td>Triggered when agent/consumer is not responsive or the conversation is in queue for over X secs/mins. Where Time X is configurable inside the LiveEngage UI, via the auto-messages feature.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Conversation Routing</td>
    <td>Triggered when the conversation is transferred to a different skill.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Line in Off-Hours</td>
    <td>Triggered when a consumer writes a message to a conversation that started in working hours, but is now in off-hours.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging New Conversation</td>
    <td>Triggered for every new messaging conversation.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Participants Change</td>
    <td>Triggered on every participant change (joins/leaves) of a messaging conversation.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Survey Ended</td>
    <td>Triggered when a messaging post survey ended.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Survey Started</td>
    <td>Triggered when a messaging post survey started.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging TTR</td>
    <td>Triggered when the consumer marks a response as an urgent response, unmarks a response as urgent, or the agent manually updates the response time</td>
    <td>1</td>
  </tr>
  <tr>
    <td>No Event</td>
    <td>Used for lambdas which only can be invoked <a href="liveperson-functions-external-invocations-overview.html">externaly</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>Third-Party Bots Custom Integration</td>
    <td>Triggered when a bot, which is using the Third-Party Bots' Custom Integration receives a message</td>
    <td>15</td>
  </tr>
</tbody>
</table>

Each of these events also has an event specific input (payload) associated with it, that the triggering system will provide at runtime. When using the [Invoke](function-as-a-service-deploying-functions.html#testing-your-function) screen, this payload is shown on the left-hand side. During development, the event payload of the `lambda` is visible on the right-hand side at the sidebar-tab. See the [Payload](function-as-a-service-developing-with-faas-overview.html#editor-sidebar) section for more information.

### Templates
Additionally, Functions offers a number of templates. They can be used as a sample to kick-start the development of custom scenarios. Some of them are connected to events which the template list below is grouped by. Templates which have the same name as the related event are to be considered the default template for an event.

<table style="width: 100%;">
<thead>
  <tr>
    <th>Event</th>
    <th>Template Name</th>
    <th>Template Description</th>
  </tr>
</thead>
<tbody>

  <tr>
    <td>Chat Post Survey E-Mail Transcript</td>
    <td>Chat Post Survey E-Mail Transcript</td>
    <td>A template displaying some basic ways how the "Chat Post Survey E-Mail Transcript"-Event can be used.</td>
  </tr>
  <tr>
    <td>Conversational Command</td>
    <td>Conversational Command</td>
    <td>A template displaying some basic ways how the "Conversational Command"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Conversation End</td>
    <td>Keyword Scanner</td>
    <td>A template displaying how to use the <a href="liveperson-functions-development-toolbelt.html#conversation-util">Conversation Util</a> to get a conversation and scan it for keywords.</td>
  </tr>
  <tr>
    <td></td>
    <td>Messaging Conversation End</td>
    <td>A template displaying some basic ways how the "Messaging Conversation End"-Event can be used.</td>
  </tr>
  <tr>
    <td></td>
    <td>Replace Files for Conversation</td>
    <td>A template displaying how to use the <a href="liveperson-functions-development-toolbelt.html#gdpr-util">GDPR Util</a> to replace all files of a conversation.</td>
  </tr>
  <tr>
    <td>Messaging Conversation Idle</td>
    <td>Messaging Conversation Idle</td>
    <td>A template displaying some basic ways how the "Messaging Conversation Idle"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Conversation Routing</td>
    <td>Messaging Conversation Routing</td>
    <td>A template displaying some basic ways how the "Messaging Conversation Routing"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Line in Off-Hours</td>
    <td>Messaging Line in Off-Hours</td>
    <td>A template displaying some basic ways how the "Messaging Line in Off-Hours"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging New Conversation</td>
    <td>Messaging New Conversation</td>
    <td>A template displaying some basic ways how the "Messaging New Conversation"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Participants Change</td>
    <td>Messaging Participants Change</td>
    <td>A template displaying some basic ways how the "Messaging Participants Change"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Survey Ended</td>
    <td>Messaging Survey Ended</td>
    <td>A template displaying some basic ways how the "Messaging Survey Ended"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging Survey Started</td>
    <td>Messaging Survey Started</td>
    <td>A template displaying some basic ways how the "Messaging Survey Started"-Event can be used.</td>
  </tr>
  <tr>
    <td>Messaging TTR</td>
    <td>Messaging TTR</td>
    <td>A template displaying some basic ways how the "Messaging TTR"-Event can be used.</td>
  </tr>
    <tr>
    <td>No Event</td>
    <td>Greeting Template</td>
    <td>A simple "Hello World" example</td>
  </tr>
  <tr>
    <td></td>
    <td>HTTP Template</td>
    <td>An example of how to execute a HTTP request.</td>
  </tr>
  <tr>
    <td></td>
    <td>Logging Template</td>
    <td>An example of how to write logs during lambda execution.</td>
  </tr>
  <tr>
    <td></td>
    <td>Salesforce Template</td>
    <td>An example of how to connect to Saleforce.</td>
  </tr>
  <tr>
    <td></td>
    <td>Secret Storage Template</td>
    <td>An example of how to use the Secret Storage.</td>
  </tr>
  <tr>
    <td>Third-Party Bots Error Hook</td>
    <td>Default Template</td>
    <td>A template displaying some basic ways how the "Third-Party Bots Error Hook"-Event can be used.</td>
  </tr>
    <tr>
    <td>Third-Party Bots Pre Hook</td>
    <td>Default Template</td>
    <td>A template displaying some basic ways how the "Third-Party Bots Pre Hook"-Event can be used.</td>
  </tr>
    <tr>
    <td>Third-Party Bots Post Hook</td>
    <td>Default Template</td>
    <td>A template displaying some basic ways how the "Third-Party Bots Post Hook"-Event can be used.</td>
  </tr>
    <tr>
    <td>Third-Party Bots Custom Integration</td>
    <td>Default Template</td>
    <td>A template displaying some basic ways how the "Third-Party Bots Custom Integration"-Event can be used.</td>
  </tr>
</tbody>
</table>
