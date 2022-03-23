---
pagename: Concepts
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-concepts.html
indicator: both
---

On this page, we will introduce the different concepts that are relevant for the LivePerson Functions platform. As a platform user, it is crucial that you have a basic understanding. The following chapters will help you build it. Further, there are also essential clarifications and details in them.

### Concurrency

The concurrency describes how multiple requests happening at the same time are handled and processed. This is something important to Function-as-a-Service (FaaS) offerings. Looking at the common and prominent vendors in this sector, they usually handle one request in one instance. Meaning each request is dealt with by its own instance running the logic. LivePerson Functions, however, operates a bit different in this regard by batching multiple requests together and handling them within one instance, which means that not each individual request is dealt with by its own instance. This implies that blocking code may negatively impact other requests that are handled at the time. The platform will spawn multiple instances based on the overall traffic that is being received. If there is more than one instance due to scaling, traffic is distributed between them.

You may also consider that (local) changes to a function instance are not distributed to other instances. For example, changing an environment variable at runtime will be not replicated to other running instances.

### Cold Start

A cold start refers to the time cost when a (new) function instance is spawned to handle an incoming request. Where the cold start penalty is the time window in which the function instance is spawned and waited for it to become ready to process. Given that we batch multiple calls as described in the [above chapter](#concurrency), we usually only see cold start occurring if there was not a call for a long time. If you run into issues where a cold start happens, you always have the option to keep the instance warm by having scheduled invocation running, ensuring it never turns cold.

If you plan on implementing a [scheduled invocation](liveperson-functions-foundations-features.html#scheduling) to keep it warm, make sure that the "warming" logic is separated from your regular flow. As otherwise, this might cause unexpected issues or behaviours.

### Execution Time(line)

In this chapter, we will speak about the invocation timeline and highlight which part of it counts towards our execution time limit of 30s. As highlighted by the graphic below, the invocation process starts with the event raising by a [Trigger](#triggers). Our services will receive the event that will begin invoking every function listening to the specific event. For simplicity, we only considered one function. Our service will invoke the listening functions, which then starts processing based on the coding. With the receiving of the event by the function instance, the 30s time limit starts ticking down. Once the processing is finished, our service takes over the response and relays it to the triggering service. Which then will react to the response.

<img class="fancyimage" alt="Functions: Execution Timeline" src="img/functions/functions_concepts_timeline.png">

### Triggers

Triggers will usually invoke functions, which happens in two ways. Either by calling specific functions or raising an event. The main difference here is that the trigger does not need to know any details of the function listening to the event for event-based invocation. Those triggers are usually [Event Sources](liveperson-functions-event-sources-overview.html). Therefore the words trigger and [Event Sources](liveperson-functions-event-sources-overview.html) will be used interchangeably. Opposed to events for an external/direct invocation, the caller needs to know about the function and call it specifically. These are usually [scheduled invocations](liveperson-functions-foundations-features.html#scheduling), [external invocations](liveperson-functions-foundations-external-invocation.html), and also some event sources.

The following graph also shows the general invocation flow for both invocation styles.

<img class="fancyimage" alt="Functions: Event Invocation" src="img/functions/functions_concept_event_invocation.png">

Before raising an event, the event source will check if there is a function listening for the specified event. Only **productive** functions are considered. If a function is listening to the event, the trigger will raise an event. Our platform will search all functions listening to the specified event and start calling them. Once all responses are received, they will be combined and returned to the event source.

{:.notice}
Please be aware that failing functions will abort the invocation chain for that event.

<img class="fancyimage" alt="Functions: Direct Invocation" src="img/functions/functions_concept_direct_invocation.png">

Before calling the external trigger, may check if the function is productive. However, they can also decide to invoke the function and directly handle the potential not-found error. For a direct call, the caller needs to know the function's uuid. The execution response will be sent from our platform to the calling trigger.
