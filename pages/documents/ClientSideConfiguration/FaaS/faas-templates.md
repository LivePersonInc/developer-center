---
pagename: Templates
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-templates.html
indicator: both
---

### FaaS template integrations

[Conditioned-Based Email Transcript via LiveEngage Chat](https://docs.google.com/document/d/17XAu-iF38U_Tr3eW9Pm1NdntTUZZo5YgHAeNMgkX0O0/edit#heading=h.6nowu7h8lkfe)

This integration lets you trigger functions following the submission of a Post Chat Survey. The contents of the chat survey is passed into the `lambda` as a payload. You can then create conditions and send a response back to Denver (the application server that handles chats) with a command to send a transcript of the chat to an email configured in the Lambda.

[Messaging Conversations with Faas](https://docs.google.com/document/d/1nseVvHXhmkdQUFWR0-oihCAUAqwtx_ZOLS4dI3a7aXE/edit#heading=h.6nowu7h8lkfe)

FaaS can be invoked by a set of standard Messaging conversational state changes. A state change analyser, listens to the conversation events and invokes functions that are subscribed to those events. This allows for custom logic to be created around the state of the conversation.
