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

LivePerson Functions may listen to Conversation Cloud events or are directly linked to conversational bots. Functions will start reacting to events once they are successfully deployed until they do not have an effect.

{: .notice}
The number of functions connected to a specific event is restricted, and documented in the tables below.

### Event Integrations

Functions can be integrated with other LivePerson systems through events enabling the tailoring of the Conversational Cloud to your brand's needs. They are creating flows and functionality that are not available out of the box.

Each event has a specific input (payload) that the triggering system will provide at runtime. Further, we provide a sample payload particular to the event, which will be displayed during the development or on the invocation screen. Currently, the following event sources are supported:

#### Automatic Messages

 Automatic Messages (also known as System Messages) allow brands to send custom messages during conversations based on Conversational Cloud Events (e.g. conversation started, agent joined the conversation). 
Only productive functions will react to these events. Head to the [Automatic Messages chapter](liveperson-functions-event-sources-automatic-messages.html) to learn more.

|Event Name|Event Description|Event Source|Function Limit| Supports Skills|
|--- |--- |--- |--- |---
|Messaging Conversation End|Triggered when the conversation is closed by agent/consumer/system.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Conversation Idle|Triggered when agent/consumer is not responsive or the conversation is in the queue for over X secs/mins. Time X is configurable inside the Conversational Cloud UI via the auto-messages feature.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Conversation Routing|Triggered when the conversation is transferred to a different skill.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Line in Off-Hours|Triggered when a conversation was *open* during office hours and a new message is **sent** during off-hours (essentially when a consumer sends an off-hour message).|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging Consumer Step Up|Triggered when a consumer step-up occurs, i.e. when participants authenticate themselves during a conversation.|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging New Conversation|Triggered for every new messaging conversation. **This event should not be used for routing. Use a routing bot instead.**|Controller Bot (Messaging Automatic Messages)|1|✅|
|Messaging TTR (Time to Respond)|Triggered when the consumer marks a response as an urgent response, unmarks a response as urgent, or the agent manually updates the response time. |Controller Bot (Messaging Automatic Messages)|1|✅|

#### Post Conversation Survey

[Post conversation Survey Bots](conversation-builder-bots-post-conversation-survey-bots.html) collect consumer feedback at the conversation's end. This integration with Functions occurs when the survey starts and ends. A Survey Bot can be configured [in the Conversation Builder](conversation-builder-bots-post-conversation-survey-bots.html).

|Event Name|Event Description|Event Source|Function Limit| Supports Skills|
|--- |--- |--- |--- |---
|Messaging Survey Started|Triggered when a messaging post-survey started.|Survey Bot|1|✅|
|Messaging Survey Ended|Triggered when a messaging post-survey ended.|Survey Bot|1|✅|

#### Conversational commands

Conversational Commands allow agents to [invoke functions in the Agent Workspace conversation](liveperson-functions-event-sources-conversational-commands.html).

|Event Name|Event Description|Event Source|Function Limit| Supports Skills|
|--- |--- |--- |--- |---
|Conversational Command|Use this event to implement a Conversational Command that can be invoked from within the Agent Workspace in Conversational Cloud by typing "/".|Agent Workspace |30|

#### Third-Party Bots

Third-Party Bots are managed through LivePerson's Conversational Cloud and can be displayed as a human agent or a LivePerson bot. You can leverage it with Functions to [build Custom Integrations with another Third-Party Bot provider](liveperson-functions-event-sources-third-party-bots.html).

|Event Name|Event Description|Event Source|Function Limit| Supports Skills|
|--- |--- |--- |--- |---
|Third-Party Bots Custom Integration|Triggered when a bot using the Third-Party Bots' Custom Integration receives a message.|Bot Connector|15|
|Third-Party Bots Post Hook|Triggered when a bot using the Third-Party Bots' Post Hooks receives a message. The function will be invoked after the vendor responds.|Bot Connector|15|
|Third-Party Bots Pre Hook|Triggered when a bot using the Third-Party Bots' Post Hooks receives a message. The function will be invoked before the vendor gets the payload.|Bot Connector|15|
|Third-Party Bots Error Hook|Triggered when a bot using the Third-Party Bots' Error Hooks is having an issue.|Bot Connector|15|

#### Chat Post Survey

There is only a single event of Chat Post Survey that uses Functions to re-create one of our legacy features, the ability to [send out transcripts after a chat conversation ends conditionally](liveperson-functions-event-sources-chat-post-survey.html).

|Event Name|Event Description|Event Source|Function Limit| Supports Skills|
|--- |--- |--- |--- |---
|Chat Post Survey E-Mail Transcript|Triggered after a chat conversation is finished, and CSAT survey has been submitted.|Chat Service|10|

### Integrations without events

Other LivePerson systems can invoke functions without an event associated. Only Conversation Builder Bots can be configured to invoke Functions without events as there is usually a direct link between the bot and the function.

#### Conversation builder

Conversation Builder Bots can be integrated with Functions. If there is some custom logic not supported by the conversation builder platform, this can be done with a function.

The configured bot will invoke a function at dialogue [interactions](conversation-builder-interactions-interaction-basics.html). You can select from all functions within your LivePerson account, and there are no limits regarding the number of assigned functions. Please see details [here](liveperson-functions-event-sources-conversation-builder.html) for more information.

### Templates

Functions offer several templates. They can be used as a sample to ease the development of custom scenarios. Some of them are connected to events, as shown below.

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
||HTTP Template|An example of how to execute an HTTP request.|
||Logging Template|An example of how to write logs during function execution.|
||Salesforce Template|An example of how to connect to Salesforce.|
||Secret Storage Template|An example of how to use the Secret Storage.|
|Third-Party Bots Custom Integration|Default Template|A template displaying some basic ways how the "Third-Party Bots Custom Integration"-Event can be used.|
