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

### Events integrations

{: .notice}
The amount of lambdas connected to a specific event is restricted and can be seen in the table below.

Currently the following event sources are supported:

## Chat Post Survey

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Chat Post Survey E-Mail Transcript|Triggered after a chat conversation is finished and CSAT survey has been submitted.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-post-chat-survey-transcripts.html).|Chat Service (Consumer Post chat survey)|10|

## Conversational commands

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Conversational Command|Use this event to implement a Conversational Command that can be invoked from within the agent workspace in Conversational Cloud by typing "/".<br> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-conversational-commands.html). |Agent Workspace (NAW only)|30|

## System Messages

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Messaging Conversation End|Triggered when the conversation is closed by agent/consumer/system.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html).|Conversational Exchange Service (Messaging Auto Messages)|1|✅|
|Messaging Conversation Idle|Triggered when agent/consumer is not responsive or the conversation is in queue for over X secs/mins. Where Time X is configurable inside the Conversational Cloud UI, via the auto-messages feature.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html).|Conversational Exchange Service (Messaging Auto Messages)|1|✅|
|Messaging Conversation Routing|Triggered when the conversation is transferred to a different skill.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html).|Conversational Exchange Service (Messaging Auto Messages)|1|✅|
|Messaging Line in Off-Hours|Triggered when a conversation was *opened* during office-hours, but a new consumer line in the conversation is *written* during off-hours (essentially when a consumer sends an off-hour message). <br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html).|Conversational Exchange Service (Messaging Auto Messages)|1|✅|
|Messaging Consumer Step Up|Triggered when a consumer step up occurs, i.e. when a participant authenticates themselves during a conversation.<br/>For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html).|ControllerBot|1|✅|
|Messaging New Conversation|Triggered for every new messaging conversation. **This event should not be used for routing. Use a routing bot instead.** <br/>For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html).|ControllerBot|1|✅|
|Messaging TTR (Time to Respond)|Triggered when the consumer marks a response as an urgent response, unmarks a response as urgent, or the agent manually updates the response time.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversations.html). |Conversational Exchange Service (Messaging Auto Messages)|1|✅|

## Post Conversation Survey

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Messaging Survey Ended|Triggered when a messaging post survey ended.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversation-survey.html).|Post Survey Bot|1|✅|
|Messaging Survey Started|Triggered when a messaging post survey started.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-messaging-conversation-survey.html).|Post Survey Bot|1|✅|

## Third Party Bots

|Event Name|Event Description|Event Source|Lambda Limit| Supports Skills|
|--- |--- |--- |--- |---
|Third-Party Bots Custom Integration|Triggered when a bot, which is using the Third-Party Bots' Custom Integration receives a message.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-conversational-ai.html).|Bot Connector|15|
|Third-Party Bots Post Hook|Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked after the vendor responded.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-conversational-ai.html).|Bot Connector|15|
|Third-Party Bots Pre Hook|Triggered when a bot, which is using the Third-Party Bots' Post Hooks receives a message. The function will be invoked before the vendor receives the payload.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-conversational-ai.html).|Bot Connector|15|
|Third-Party Bots Error Hook|Triggered when a bot, which is using the Third-Party Bots' Error Hooks is having an issue.<br/> For more details on how to set up a function like this one, please see details [here](liveperson-functions-integrations-conversational-ai.html).|Bot Connector|15|

### Integrations with no event

There are other LivePerson systems that can invoke Function function without an event associated. Currently Only Conversation Builded Bots can be configured to invoke Functions at conversation time.

## Conversation builder

There are no constraints here; if there is some custom logic (a function) you want to invoke with a bot, you can do it with Conversation Builder.




