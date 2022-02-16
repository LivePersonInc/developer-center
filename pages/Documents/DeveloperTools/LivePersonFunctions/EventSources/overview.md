---
pagename: Overview
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Event Sources
permalink: liveperson-functions-event-sources-overview.html
indicator: both
---

LivePerson Functions can be connected to Conversational Cloud events at the creation time or integrated with conversational bots. Once those functions are deployed, they will be executed whenever these events are triggered.

### Events Integrations

Functions can be integrated with other LivePerson systems through events leveraging additional/custom functionalities that can be coded in a function.

{: .notice}
The amount of lambdas connected to a specific event is restricted and can be seen in the table below.

Each event has a specific input (payload) associated with it, that the triggering system will provide at runtime. When using the Invoke screen, this payload is shown on the left-hand side. During development, the event payload of the lambda is visible on the right-hand side at the sidebar-tab.
Currently the following event sources are supported:

#### Chat Post Survey

There is only a single event of Chat Post Survey that uses Functions to re-create one of our Legacy features, the ability to conditionally send out transcripts after a chat conversation ended. Please see details [here](liveperson-functions-event-sources-chat-post-survey.html).

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Chat Post Survey E-Mail Transcript|Triggered after a chat conversation is finished and CSAT survey has been submitted.|Chat Service|10|

#### Conversational commands

Conversational Command allows agents to invoke functions during a conversation in the Agent Workspace. please see details [here](liveperson-functions-event-sources-conversational-commands.html).

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Conversational Command|Use this event to implement a Conversational Command that can be invoked from within the agent workspace in Conversational Cloud by typing "/".|Agent Workspace (NAW only)|30|

#### System Messages

 System Messages (also known as Automatic Messages) allows brands to send custom messages during conversations at Conversational Cloud Events (E.g Conversation started, Agent joined conversation, etc.) When any of those events occur during a conversation a Function can be invoked if the there is a deployed function associated to that Event. Please see details [here](liveperson-functions-event-sources-system-messages.html).

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Messaging Conversation End|Triggered when the conversation is closed by agent/consumer/system.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Conversation Idle|Triggered when agent/consumer is not responsive or the conversation is in queue for over X secs/mins. Where Time X is configurable inside the Conversational Cloud UI, via the auto-messages feature.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Conversation Routing|Triggered when the conversation is transferred to a different skill.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Line in Off-Hours|Triggered when a conversation was *opened* during office-hours, but a new consumer line in the conversation is *written* during off-hours (essentially when a consumer sends an off-hour message).|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Consumer Step Up|Triggered when a consumer step up occurs, i.e. when a participant authenticates themselves during a conversation.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging New Conversation|Triggered for every new messaging conversation. **This event should not be used for routing. Use a routing bot instead.**|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging TTR (Time to Respond)|Triggered when the consumer marks a response as an urgent response, unmarks a response as urgent, or the agent manually updates the response time. |Controller Bot (Messaging Automatic Messages)|1|✅|

#### Post Conversation Survey

[Post conversation Survey Bots](conversation-builder-bots-post-conversation-survey-bots.html) collect consumers feedback at the end of a conversation. This integration with Functions occurs when the survey starts and ends. A Survey Bot can be configured in the Conversation Builder. Please see details [here](liveperson-functions-event-sources-system-messages.html).

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Messaging Survey Ended|Triggered when a messaging post survey ended.|Survey Bot|1|✅|
|Messaging Survey Started|Triggered when a messaging post survey started.|Survey Bot|1|✅|

#### Third Party Bots

Third party bot are managed through LivePerson's Conversational Cloud and can be displayed as a human agent or a LivePerson bot. You can leverage it with Functions to build custom integrations with other third party bot provider. Please see details [here](liveperson-functions-event-sources-third-party-bots.html).

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Third-Party Bots Custom Integration|Triggered when a bot, which is using the Third-Party Bots' Custom Integration receives a message.|Bot Connector|15|
|Third-Party Bots Post Hook|Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked after the vendor responded.|Bot Connector|15|
|Third-Party Bots Pre Hook|Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked before the vendor receives the payload.|Bot Connector|15|
|Third-Party Bots Error Hook|Triggered when a bot, which is using the Third-Party Bots' Error Hooks is having an issue.|Bot Connector|15|

### Integrations without events

There are other LivePerson systems that can invoke functions without an event associated. Currently Only Conversation Builded Bots can be configured to invoke Functions without event.

#### Conversation builder

Conversation Builder Bots can be integrated with Functions. If there is some custom logic that can be done with a function, you can do it with Conversation Builder.
The configured bot will invoke a function at dialog [interactions](conversation-builder-conversation-builder-interactions.html#integrations). You can select from all functions under your LivePerson account and there are not constrains here regarding lambdas limit. Please see details [here](liveperson-functions-event-sources-conversation-builder.html).

### Templates

Additionally, Functions offers a number of templates. They can be used as a sample to ease the development of custom scenarios. Some of them are connected to events which the template list below is grouped by. Templates which have the same name as the related event are to be considered the default template for an event.

|Event|Template Name|Template Description|
|--- |--- |--- |
|Chat Post Survey E-Mail Transcript|Chat Post Survey E-Mail Transcript|A template displaying some basic ways how the "Chat Post Survey E-Mail Transcript"-Event can be used.|
|Conversational Command|Conversational Command|A template displaying some basic ways how the "Conversational Command"-Event can be used.|
|Messaging Conversation End|Keyword Scanner|A template displaying how to use the Conversation Util to get a conversation and scan it for keywords.|
||Messaging Conversation End|A template displaying some basic ways how the "Messaging Conversation End"-Event can be used.|
||Replace Files for Conversation|A template displaying how to use the GDPR Util to replace all files of a conversation.|
|Messaging Conversation Idle|Messaging Conversation Idle|A template displaying some basic ways how the "Messaging Conversation Idle"-Event can be used.|
|Messaging Conversation Routing|Messaging Conversation Routing|A template displaying some basic ways how the "Messaging Conversation Routing"-Event can be used.|
|Messaging Line in Off-Hours|Messaging Line in Off-Hours|A template displaying some basic ways how the "Messaging Line in Off-Hours"-Event can be used.|
|Messaging Consumer Step Up|Messaging Consumer Step Up|A template displaying some basic ways how the "Messaging Consumer Step Up"-Event can be used.|
|Messaging New Conversation|Messaging New Conversation|A template displaying some basic ways how the "Messaging New Conversation"-Event can be used.|
|Messaging Participants Change|Messaging Participants Change|A template displaying some basic ways how the "Messaging Participants Change"-Event can be used.|
|Messaging Survey Ended|Messaging Survey Ended|A template displaying some basic ways how the "Messaging Survey Ended"-Event can be used.|
|Messaging Survey Started|Messaging Survey Started|A template displaying some basic ways how the "Messaging Survey Started"-Event can be used.|
|Messaging TTR|Messaging TTR|A template displaying some basic ways how the "Messaging TTR"-Event can be used.|
|No Event|Greeting Template|A simple "Hello World" example|
||HTTP Template|An example of how to execute a HTTP request.|
||Logging Template|An example of how to write logs during lambda execution.|
||Salesforce Template|An example of how to connect to Saleforce.|
||Secret Storage Template|An example of how to use the Secret Storage.|
|Third-Party Bots Custom Integration|Default Template|A template displaying some basic ways how the "Third-Party Bots Custom Integration"-Event can be used.|

