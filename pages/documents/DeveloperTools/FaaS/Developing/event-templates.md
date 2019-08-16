---
pagename: "Events & Templates"
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-events-templates.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-events-templates.html
---

LivePerson Functions' `lambdas` can be connected to LiveEngage events at the time of [creation](function-as-a-service-getting-started.html#step-1-choose-a-template). Once those `lambdas` are deployed, they will be executed whenever these events are triggered. Each event comes with a set of connected templates that can be used as an initial scaffolding for the developing the `lambda`. **Note** that the amount of lambdas connected to a specific event is restricted and can be seen in the table below.


Currently the following events are supported:

<table>
<thead>
  <tr>
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
    <td>Use this event to implement a Conversational Command that can be invoked from within the agent workspace in LiveEngage by typing "/".</td>
    <td>30</td>
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
    <td>Messaging TTR</td>
    <td>Triggered when the consumer marks a response as an urgent response, unmarks a response as urgent, or the agent manually updates the response time</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Conversation Idle</td>
    <td>Triggered when agent/consumer is not responsive or the conversation is in queue for over X secs/mins.</td>
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
    <td>Messaging Conversation End</td>
    <td>Triggered when the conversation is closed by agent/consumer.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Survey Started</td>
    <td>Triggered when a messaging post survey started.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Messaging Survey Ended</td>
    <td>Triggered when a messaging post survey ended.</td>
    <td>1</td>
  </tr>
</tbody>
</table>

Each of these events also has an event specific input (payload) associated with it, that the triggering system will provide at runtime. When using the [Invoke](function-as-a-service-deploying-functions.html#testing-your-function) screen, this payload is shown on the left-hand side. During development, the event payload of the `lambda` is visible on the right-hand side at the sidebar-tab. See the [Payload](function-as-a-service-developing-with-faas-overview.html#editor-sidebar) section for more information.

Additionally, Functions offers a number of templates that are not connected to events and can be used as a sample to kick-start the development of custom scenarios:

<table>
<thead>
  <tr>
    <th>Template Name</th>
    <th>Template Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Greeting Template</td>
    <td>A simple "Hello World" example</td>
  </tr>
  <tr>
    <td>HTTP Template</td>
    <td>An example of how to execute a HTTP request.</td>
  </tr>
  <tr>
    <td>Logging Template</td>
    <td>An example of how to write logs during lambda execution.</td>
  </tr>
  <tr>
    <td>Salesforce Template</td>
    <td>An example of how to connect to Saleforce.</td>
  </tr>
  <tr>
    <td>Secret Storage Template</td>
    <td>An example of how to use the Secret Storage.</td>
  </tr>
  <tr>
    <td>Email Client Template</td>
    <td>An example of how to use SMTP client.</td>
  </tr>
</tbody>
</table>
