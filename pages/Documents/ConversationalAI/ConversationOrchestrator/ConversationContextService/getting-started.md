---
pagename: Getting Started
Keywords:
sitesection: Documents
categoryname: "Conversational AI"
documentname: Conversation Orchestrator
subfoldername: Conversation Context Service
permalink: conversation-orchestrator-conversation-context-service-getting-started.html
indicator: messaging
---

### Namespaces and sessions

Namespaces and sessions are the concept of a collection of properties. You can group properties of similar characteristics into one namespace, and you can also group properties obtained from the same task with different characteristics into a single session.

Namespaces and sessions are independent of each other, but since all properties must belong to a namespace, there is no session without a namespace. 

### Properties

Everything that is stored in the Conversation Context Service (CCS) consists of a property and value pair. Properties are grouped into Namespace and Session. All properties must belong to only one namespace. At the same time, properties can belong to only one session or not belong to any session. 

*Session properties* are those where the property belongs to one namespace and one session, and *namespace properties* are those where the property belongs to one namespace and does not belong to any session.

<img width="400" src="img/convorchestrator/co_ccs_properties.png">

Since properties cannot be moved to other namespaces or sessions, if you want to change the affiliation, you must delete the property and create a new one.

It is not necessary to have previously created a Namespace or Session to save the property. Namespace and Session are abstract concepts. They are stored as additional information of properties, so there is no creation process for namespaces and sessions.

One thing to note is that some names are reserved for internal use for the service and cannot be used for other purposes. If you use these namespaces it will cause 400 errors. Here is a list of namespaces reserved internally: 

* consumer
* operational
* conversation
* custom
* sde

### Time To Live (TTL)

You can set TTL on the namespace or session. Setting a TTL for each property currently is not supported in the current version.

The ttlSecond value indicates how many seconds the document will last after being created or modified. If ttlSecond is not specified, the default value of 0 is used, meaning that it will persist forever until manually deleted. TTL that has already been set can be updated through the API. One thing to note in this case is that the updated TTL does not apply to existing properties, but only to newly created or modified properties.

Since the TTL set on the session has a higher priority than the TTL set on the namespace, if the TTL is set on the session, the TTL on the namespace will be ignored for session properties.

### Developer Key

To use Conversation Context Service APIs you will need to create and use an API key. To get your unique key:  

1. Login to Conversation Orchestrator with your Conversational Cloud credentials and then navigate to **Developer Key**.

    <img class="fancyimage" width="800" src="img/convorchestrator/co_ccs_developerkey.png">

2. Copy and paste the key provided, and use it in your API headers. 

    To generate a new key, click the **Regenerate Key** button. This will invalidate the previous key. The key is shared for all Conversation Orchestrator APIs; therefore, you must use the new key wherever the APIs are being called.