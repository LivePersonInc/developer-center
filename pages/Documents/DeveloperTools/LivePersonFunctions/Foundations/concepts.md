---
pagename: Concepts
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-concepts.html
indicator: both
redirect_from:
  - function-as-a-service-foundations-concepts.html
---

# Concepts

### Concurrency

Concurrency in our regards is referring to how multiple invocations/calls of functions are handled and processed. Looking at other Function-as-a-Service (FaaS) offerings this is usually one request is handled by one instance of a function. However, due to our implementation this is not the case for LivePerson Functions, instead multiple calls will be processed by a single instance. The instances will only scale out if the incoming traffic is enough to warrant a scaling of the function. If this occurs the incoming call will be distributed across all available instances.

You may also consider that (local) changes to a function instance are not distributed to other instances. For example changing a environment variable at runtime will be not replicated to other running instances.

### Cold Start

A cold start is referring to the time cost that arises when a (new) function instance is spawned to handle an incoming request. Where the cold start penalty is basically the time window in which the function instance is spawned and waited for it to become ready to process. Given that we batch multiple calls as described in the [above chapter](#concurrency) we usually only see cold start occurring if there was not a call for a long time. If you run into issues where a cold start happen you always have the option to keep the instance warm by having scheduled invocation running, ensuring it never turns cold.

If you plan on implementing a [scheduled invocation](liveperson-functions-foundations-features.html#scheduling) to keep it warm, make sure that the "warming" logic is separated from your regular flow. As this might cause unexpected issues or behaviors.


## Execution Time(line)

### Triggers

### Eventsources

Link to Eventsources

### External Invocation
