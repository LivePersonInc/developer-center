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

On this page, we will introduce the different concepts that are relevant for the LivePerson Functions platform. As a user of the platform, it is important that you have a basic understanding of the information that is shared in the chapters below. Further, there are also important clarifications and details in them.

### Concurrency

The concurrency is describing how multiple requests happening at the same time are handled and processed. This is something important to Function-as-a-Service (FaaS) offerings. Looking at the common and big vendors in this sector, they are usually handling one requests in one instance. Meaning each individual request is handled by it's own instance running the logic. LivePerson Functions however operates a bit different in this regard, by batching multiple request together and handle them within one instance. Meaning that not each individual request is handled by it's own instance. This has the implication that blocking code may negatively impact other request that are handled at the time. Multiple instances will be spawned based on the overall traffic that is being received. If due to scaling there are more than one instance, traffic is distributed between them.

You may also consider that (local) changes to a function instance are not distributed to other instances. For example changing a environment variable at runtime will be not replicated to other running instances.

### Cold Start

A cold start is referring to the time cost that arises when a (new) function instance is spawned to handle an incoming request. Where the cold start penalty is basically the time window in which the function instance is spawned and waited for it to become ready to process. Given that we batch multiple calls as described in the [above chapter](#concurrency) we usually only see cold start occurring if there was not a call for a long time. If you run into issues where a cold start happen you always have the option to keep the instance warm by having scheduled invocation running, ensuring it never turns cold.

If you plan on implementing a [scheduled invocation](liveperson-functions-foundations-features.html#scheduling) to keep it warm, make sure that the "warming" logic is separated from your regular flow. As this might cause unexpected issues or behaviors.

### Execution Time(line)

In this chapter we will speak about the timeline for an invocation and also highlight which part of it counts towards our execution time limit of 30s. As highlighted by the graphic below the invocation process starts with the event raising by a [Trigger](#triggers). The event will be received by our services that will start invoking every function listening to the specific event. For simplicity we only considered one function. Our service will invoke the listening functions, which than starts processing based on the coding. With the receiving of the event by the function instance the 30s time limit starts ticking down. Once the processing is finished our service takes over the response and relays it to the triggering service. Which than will react on the response.

<img class="fancyimage" alt="Functions: Execution Timeline" src="img/functions/functions_concepts_timeline.png">

### Triggers

Triggers will usually invoke functions, this can happen in two ways. Either by calling a specific functions or raising an event. The main difference here is that for event based invocation, the trigger does not need to know any details of the function listening to the event. Those triggers are usually [Event Sources](liveperson-functions-event-sources-overview.html), therefore the words trigger and [Event Sources](liveperson-functions-event-sources-overview.html) will be used interchangeable. Opposed to events for a external/direct invocation the caller needs to know about the function and call it specifically. This are usually [scheduled invocations](liveperson-functions-foundations-features.html#scheduling), [external invocations](liveperson-functions-foundations-external-invocation.html) and also some event sources.

The following graph also shows the general invocation flow for both types of invocation styles.

<img class="fancyimage" alt="Functions: Event Invocation" src="img/functions/functions_concept_event_invocation.png">

Prior to raising an event the event source will actually check if there is any function listening for the specified event. Important is that for this only **productive** functions are considered. If there is any function listening to the event, the trigger will raise an event. Our platform will search all functions listening to the specified event and start calling them. Once all responses are received it will combine them and return it to the event source.

{:.notice}
Please be aware that a failing functions will abort the invocation chain for that event.

<img class="fancyimage" alt="Functions: Direct Invocation" src="img/functions/functions_concept_direct_invocation.png">

Prior to calling the external trigger may check if the function is productive. However, they can also decide to directly invoke the function and handle potential not-found error directly. For a direct call the caller needs to know the uuid, than it can be used to invoke a specific function. The response of the execution will be relayed from our platform to the calling trigger.
