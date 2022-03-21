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
  - liveperson-functions-scheduled-invocations.html
---

### Scheduling

Some usecases require a scheduled invocation of a function. Two examples for this would be OAuth 2.0 related refresh operations or scheduled invocation to keep [functions warm](liveperson-functions-foundations-concepts.html#cold-start). We allow the scheduling of functions based on CRON expressions, we suggest to leverage [this page](https://crontab.guru/) to verify your expression. Please be aware of the following limitation:

{: .important}
Scheduled invocations are always performed in **UTC** timezone and therefore might differentiate from your local time. Please keep that in mind when scheduling any function.

* The lowest frequency for scheduled invocations that we allow is once a minute
* Only productive functions can be scheduled
* A maximum of 10 lambdas can be scheduled at any given time
* Configurable Payload is limited to 8000 characters

{: .notice}
Undeploying a scheduled function will result in the **deletion** of the associated schedule. You will need to **recreate** it, once you redeployed the function.

Schedules can be created by heading to the "Schedule an Invocation"-page reachable via the "Watch"-icon on the sidebar. Here you will also see any existing Schedule. Further, it will show you the times for the last and next invocation in your **local** time. Along with the "STATE" column that will indicate if the last invocation was successful or a failure.

<img class="fancyimage" alt="Functions: Schedules" src="img/functions/functions_schedules_list.png">

To create a Schedule you will need to hit the "Create a schedule"-Button, than you can choose your productive functions from the drop down. After that provide a valid cron expression. The UI will always calculate the next invocation in your **local** time and display it to you. In case you used invalid expression the UI will provide you with valid example values. Furthermore, you may adjust the displayed payload. It will be than used for the scheduled invocation and therefore is available to the function during the invocation.

<img class="fancyimage" alt="Functions: Create Schedule" src="img/functions/functions_schedules_create.png">

### Toolbelt

In order to ease the solution of some common tasks, we introduced our runtime library the Toolbelt. It comes with a set of clients and features that allow the accomplishment of a wide variety of tasks. Following clients are included:

* MTLS Client: Allows MTLS based requests to be send, especially relevant for zero-trust environments
* HTTP Client: Allows http/https based requests
* Secret Client: Interaction with our Secret Store during runtime
* Context Service Client: Interaction with Conversation Context Store, right now only supports V1 of the API
* LP Client: Eases the interactions with common LivePerson APIs

In order to utilize the Toolbelt, you will need to import it as a dependency. This is achieved using the `require` functionality.

```javascript
    const { Toolbelt } = require("lp-faas-toolbelt");
```

Both the [UI](liveperson-functions-getting-started-deep-dive-ui.html#code-documentation--types) and the [CLI](liveperson-functions-getting-started-deep-dive-cli.html#code-snippets) come out-of-the-box with support of typings for our Toolbelt library. Nevertheless you should check out the [documentation](liveperson-functions-toolbelt-documentation-toolbelt.html) of the toolbelt.

### Secret Store

In this chapter we will highlight some important details around the Secret Store. If you want to learn how to setup a secret or how access within the function works then head over to the [configuration page](liveperson-functions-getting-started-configure.html#secrets). Make sure your user has the necessary [permissions](liveperson-functions-permission-system.html) to interact with our Secret store.

Our Secret Store allows you to securely store any credentials or secrets you may use in your function. The creation of secrets happens exclusively via the UI, not the CLI or from a function. Once a secret is created you will no longer be able to see its value in clear-text. Only the key will remain visible.

Modifications of existing secrets is only possible by a function. Be aware that if a secret is accessed & modified by multiple lambdas simultaneously, the last writer will win.

Deletion of a secret can only be performed via the UI. It's important that with the deletion it becomes unavailable immediately to any functions that are using it. Therefore you should make sure it is not used anywhere prior to deleting the secret.

{: .important}
During the [provisioning](liveperson-functions-provisioning.html) process of the account a couple of default secrets are created. Those are not displayed by default, but they are viewable for debugging purposes.

<img class="fancyimage" alt="Functions: Default Secrets" src="img/functions/functions_secret_defaults.png">

### Domain Whitelisting

As explained within our [networking foundation](liveperson-functions-foundations-networking.html) the communication between a function and external services is subject to a domain allow list, also called whitelist. The next paragraphs should highlight how to add new domains to the whitelist and also how to remove them. Furthermore, it will provide some important hints based on frequent questions received surrounding the whitelisting of domains.

#### Adding a domain to Whitelist

There are two ways for adding a domain to the whitelist: either during the creation process, which is shown [here](liveperson-functions-getting-started-deep-dive-ui.html#step-domain-whitelisting) or by heading to the "Settings"-Page and opening the "Domain Whitelist"-Tab (should be opened by default).

When adding a domain to the whitelist you should always look out for some common pitfalls. Firstly, make sure your domain is not redirecting, because in this case you also need to whitelist any domain that is part of the redirection chain. A good way to test if your domain redirecting, if you are unsure, is to leverage the following command:

```sh
    $ curl -v -L YOUR_DOMAIN 2>&1 | grep -i "^< location:"
```

Example:

The following example shows that when calling `http://google.com` a redirection to `http://www.google.com/` is performed.

```sh
    $ curl -v -L http://google.com 2>&1 | grep -i "^< location:"
    < Location: http://www.google.com/
```

Next make sure when working with subdomains that you whitelisted the correct domain. Let's say you are visiting `https://www.liveperson.com` and therefore whitelisted `liveperson.com`. Than you fell into a trap, because `www.` is a subdomain. Instead the correct domain to whitelist would be `www.liveperson.com` or `*.liveperson.com`.

Finally as shown above we do support the use of wildcards by setting `*`. But you should be aware that we only support one wildcard in the domain meaning that `*.*.liveperson.com` is not possible, while `*.liveperson.com` is possible.

<img class="fancyimage" alt="Functions: Add to whitelist" src="img/functions/functions_whitelist_add.png">

The domain is added by inserting it and then clicking the "Add"-Button next to the input field. Once it is saved it will be reflected in the domain list below.

{: .notice}
Be aware that adding a domain can take up to 5 minutes until being "active".

#### Removing a domain from Whitelist

Removing a domain whitelist entry is only possible from the "Domain Whitelist"-Tab located inside the "Settings"-Page. Simply click on the "Bin"-icon next to the entry that you want to remove.

<img class="fancyimage" alt="Functions: Remove from whitelist" src="img/functions/functions_whitelist_remove.png">
