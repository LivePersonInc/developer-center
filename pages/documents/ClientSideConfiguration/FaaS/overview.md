---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-overview.html
indicator: both
---

<div class="important">FaaS is currently enabled by LivePerson account team's only. Please contact your account team if you wish to enable the platform. Until you do so, you will not be able to utilize FaaS.</div>

Function as a Service (FaaS) is a LivePerson features which enables brands to develop custom behaviors within the LiveEngage platform. Among other capabilities, this feature enables integrations of externally developed services, while hosting these services on LivePerson’s infrastructure with the security, stability and scalability that infrastructure comes with. By offering these capabilites, FaaS enables you to write a simple function (otherwise known as `Lambda`), deploy it to LivePerson's infrastructure and make it available to your LivePerson account in minutes.

This overview document will define the basic components of the FaaS platform as well as other key terminology. When using FaaS, there are three main components that a developer should consider:

### Function

Functions (or `Lambdas`) are code snippets that accomplish certain tasks. Using Javascript, a developer can write custom code that will run upon being triggered by the invoker (essentially the source from which the function is triggered, see below for more information on invocations). The payload that is passed from the invoker into the function can also be used within the function. Developers can use the data from the payload as part of the function logic, allowing them to react to dynamic information passed when the function is triggered.

### Invocation

Functions are triggered by services that have integrations with the FaaS platform. Depending on the type of function that is used, different triggers will be used. These triggers can be an internal LivePerson event for example, such as a conversation state change, or an external service action (for example, when a message is received on an external platform, trigger a LiveEngage conversation as well). As part of the invocation, the integrated invokers can pass a payload into the function when the invocation occurs. This payload is specific to the invocation method. This means that depending on which invoker triggered the function, the function will have different available data in the payload.

To see the available invocation methods and integrations with FaaS, please see the [External Invocations document](function-as-a-service-external-invocations.html).

### Response / Action

Functions also have the ability to respond back to the invoker if needed. The invoker can then perform an action based on the response of the function. For example, if a service invokes a function which triggers a chat, the response from the function could tell the external service to send out an email transcript of the chat. In order for the invoking service to take action based on the response, this needs to be developed as part of the invocation process of the service. 

Functions also have the ability to leverage both LivePerson APIs as well as external ones. This allows developers to extend the brand’s LiveEngage platform with custom integrations. Because the FaaS infrastructure resides inside the LivePerson cloud and adheres to the security, stability and scalability measures as offered by the LP private cloud, these custom integrations will enjoy the same robustness as other LiveEngage services. For example, the platform self-monitors the activity and scales in a self-sufficient manner based on resource demand. This means that if a certain function is experiencing high load during peak hours, the infrastructure scales automatically to provide it with more resources and to ensure performance.
