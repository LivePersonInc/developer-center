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

In order to ease to ease the solution of some common tasks we introduced our runtime library the Toolbelt. It comes with a set of clients and features that allow the accomplishment of a wide variety of tasks. Following clients are included:

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

#### Adding a domain to Whitelist

There are two ways for adding a domain to the whitelist either during the creation process, which is shown [here](liveperson-functions-getting-started-deep-dive-ui.html#step-domain-whitelisting). Or by heading to the "Settings"-Page and opening the "Domain Whitelist"-Tab (should be opened by default).

When adding a domain to the whitelist you should always consider some pitfalls. First make sure your domain is not redirecting, because in this case you also need to whitelist any domain that is part of the redirection chain. A good way to test if your domain redirecting, if you are unsure, is to leverage the following command:

```sh
    $ curl -v -L YOUR_DOMAIN 2>&1 | grep -i "^< location:"
```

Example:

The following example shows that when calling `http://google.com` a redirection to `http://www.google.com/` is performed.

```sh
    $ curl -v -L http://google.com 2>&1 | grep -i "^< location:"
    < Location: http://www.google.com/
```

Next make sure when working with subdomains that you whitelisted the correct domain. Lets say you are visiting `https://www.liveperson.com` and therefore whitelisted `liveperson.com`. Than you fell into the trap, because `www.` is a subdomain, instead the correct domain to whitelist would be `www.liveperson.com` or `*.liveperson.com`.

Finally as shown above we do support the use of wildcards by setting `*`. But you should be aware that we only support one wildcard in the domain meaning that `*.*.liveperson.com` is not possible, while `*.liveperson.com` is possible.

The domain is added by inserting it and than clicking the "Add"-Button next to the input field. Once it is saved it will be reflected in the domain list below.

{: .notice}
Please be aware that adding a domain can take up to 5 minutes until being "active"

#### Removing a domain from Whitelist

Removing a domain whitelist entry is only possible from the "Domain Whitelist"-Tab located inside the "Settings"-Page. Simply click on the "Bin"-icon next to the entry that you want to remove.

### Basic Alerting (CPU warning)