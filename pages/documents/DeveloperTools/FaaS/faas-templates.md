---
pagename: Templates
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-templates.html
indicator: both
---

[Conditioned-Based Email Transcript via LiveEngage Chat](function-as-a-service-use-cases-post-conversation-survey-with-faas.html)

This integration lets you trigger functions following the submission of a Post Chat Survey. The contents of the chat survey are passed into the `lambda` as a payload. You can then create conditions and send a response back to the LivePerson server with a command to send a transcript of the chat to an email configured in the `lambda`.

[Messaging Conversations with Faas](function-as-a-service-use-cases-messaging-conversations-with-faas.html)

FaaS can be invoked using a set of standard Messaging conversational state change events. A state change analyzer listens to these conversation events and invokes functions that are subscribed to them. This allows for custom logic to be created around the state of the conversation, such as when an agent or a consumer leave the conversation, when a conversation is started, etc.
