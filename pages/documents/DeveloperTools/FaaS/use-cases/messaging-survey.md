---
pagename: Messaging Conversation Survey
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Use Cases
permalink: liveperson-functions-use-cases-messaging-survey.html
indicator: both
redirect_from:
  - function-as-a-service-use-cases-messaging-survey.html
---

This guide explains how to enable LivePerson Functions for post conversation survey events.

With **Messaging Conversation Survey** you are able to invoke `lambdas` before & after a conversation survey. Along with the invocation, the function is sent a payload containing metadata related to the conversation survey which invoked the function. This payload can then be used in the function for further processing and referencing.

In comparison to the [chat post survey](function-as-a-service-use-cases-post-chat-survey-transcripts.html) this integration will not send any automated emails.

However, a similar scenario might be implemented by simply connecting LivePerson Functions to your external SMTP server and triggering the email via an API call from within the `lambda`.

<div class="important"> It is required that your account has the Post Survey Bot permissions enabled; please contact your account team in order to do this.</div>


### Messaging Conversation Survey events for Function Invocation

LiveEngage **Messaging Conversation Survey** offers two different triggering events:

#### Messaging Survey Started

This event is fired when a consumer initiates a messaging survey.

#### Messaging Survey Ended

This event is fired when a consumer finishes a messaging survey.

### Step-by-Step implementation guide

#### Step 1 - Create function

Create a new function using one of the messaging survey templates.

Currently, only one function per template type can be created. If there are multiple types of functionality needed that stem from the same event invocation, these should be coded into the same `lambda`.

#### Step 2 - Edit the Function

Adjust the code in the template according to your needs by modifying the function. On the right side you can see an example of the payload (in the sidebar, which you might need to open).

As mentioned above, the function can return a series of commands back to the invoker. In the template code you can see the current available commands.

In the event of the function not being threaded by the calling system, the function can simply return `ok` within the callback.

#### Step 4 - Deploy the function

Just like any other function, this function must be deployed before it can be used. [Please see this document](function-as-a-service-deploying-functions.html) for more information on how to deploy your function. At this point, you can also test your function.
