---
pagename: Features
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-features.html
indicator: both
redirect_from:
  - function-as-a-service-foundations-features.html
---

### Scheduling

### Toolbelt

In order to ease to ease the solution of some common tasks we introduced our runtime library the Toolbelt. It comes with a set of clients and features that allow the accomplishment of a wide variety of tasks. Following features/clients are included:

* MTLS Client: Allows MTLS based requests to be send, especially relevant for zero-trust environments
* HTTP Client: Allows http/https based requests
* Secret Client: Interaction with our Secret Store during runtime
* Context Service Client: Interaction with Conversation Context Store, right now only supports V1 of the API
* LP Client: Eases the interactions with common LivePerson Api's

In order to start leveraging the Toolbelt, you will need to import it as a dependency. This is achieved using the `require` functionality.

```javascript
    const { Toolbelt } = require("lp-faas-toolbelt");
```

Both the [UI](liveperson-functions-getting-started-deep-dive-ui.html#code-documentation--types) and the [CLI](liveperson-functions-getting-started-deep-dive-cli.html#code-snippets) come with out of the box support of typings for our Toolbelt library. Nevertheless you should check out the [documentation](liveperson-functions-toolbelt-documentation-toolbelt.html) of the toolbelt.

### Secret Store

### Domain Whitelisting

As explained within our [networking foundation](liveperson-functions-foundations-networking.html) the communication between a function and external services is subject to a domain allow list, also called whitelist. The next paragraphs should highlight how to add new domains to the whitelist and also how to remove them. Further it will provide some important hints based on frequent questions received surrounding the whitelisting of domains.


### Basic Alerting (CPU warning)