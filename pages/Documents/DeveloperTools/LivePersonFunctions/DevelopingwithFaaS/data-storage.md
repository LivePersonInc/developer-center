---
pagename: Data Storage
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-data-storage.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-data-storage.html
---
To store data beyond the duration of an invocation and even to transfer data back and forth between different functions, LivePerson Functions uses the [Context Session Store](conversation-orchestrator-context-warehouse-context-session-store.html).

This service is typically used to store conversation session state data (e.g. agent notes) in the Conversational Cloud. Because of its versatility, it is also well suited to act as a temporary data storage in the context of LivePerson Functions.

### Toolbelt Client
The toolbelt offers a [Context Service Client](liveperson-functions-developing-with-faas-toolbelt.html#context-service-client) to make interaction with the Context Session Store as easy as possible for function developers.

### Prerequisites/Installation
The following steps need to be performed before using the Context Service Client in a function:
* Create a Developer Key as described [here](conversation-orchestrator-context-warehouse-context-session-store.html#developer-key)
*  Save it to the [Secret Storage](liveperson-functions-developing-with-faas-storing-secrets.html) with an appropriate name (e.g. `context-store-api-key`)
* [Whitelist](liveperson-functions-developing-with-faas-whitelisting-domains.html) the domain `*.context.liveperson.net`. (covers all domains needed on the production environment and Alpha)

### Code Snippets
An additional jump start for the implementation are the [code snippets](liveperson-functions-developing-with-faas-snippets.html) that demonstrate the use of the mentioned client:
* [Create Context Session Store
](liveperson-functions-developing-with-faas-snippets.html#create-context-session-store)
* [Read Context Session Store
](liveperson-functions-developing-with-faas-snippets.html#read-context-session-store)
* [Update Context Session Store
](liveperson-functions-developing-with-faas-snippets.html#update-context-session-store)
* [Delete Context Session Store
](liveperson-functions-developing-with-faas-snippets.html#delete-context-session-store)
