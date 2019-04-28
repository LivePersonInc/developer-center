---
pagename: "Events & Templates"
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Developing with FaaS
permalink: function-as-a-service-developing-with-faas-events-templates.html
indicator: both
---

FaaS functions can be connected to LiveEngage events at [creation](function-as-a-service-getting-started.html#step-1-choose-a-template) time. Once those lambdas are deployed, they will be executed whenever these events are triggered. Each event comes with a set of connected templates that can be used as a initial scaffolding of the lambda development. **Note** that the amount of lambdas connected to a specific event is restricted and visible in the table below.

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
    <td>Triggered after a chat conversation is finished and CSAT survey has been collected.</td>
    <td>10</td>
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
    <td>Triggered when the consumer is asking/canceling an urgent response or the agent manually updates the response time</td>
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
    <td>Triggered when a consumer writes a message to a conversation that started in working hours, but in meantime the contact center switched to off hours.</td>
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

Each of those events also has an event specific input (payload) associated with it, that the triggering system will provide at runtime. When using the [Invoke](function-as-a-service-deploying-functions.html#testing-your-function) screen, this payload is shown on the left-hand side. During development, the event payload of the lambda is visible on the right-hand side at the sidebar-tab [Payload](function-as-a-service-developing-with-faas-overview.html#editor-sidebar).

Additionally, FaaS offers a bunch of templates that are not connected to events and can be used as a sample to faster kick-start the development of dedicated scenarios:

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
</tbody>
</table>
