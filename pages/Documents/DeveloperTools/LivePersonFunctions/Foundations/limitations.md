---
pagename: Limitations
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-limitations.html
indicator: both
redirect_from:
  - function-as-a-service-foundations-limitations.html
---

This page will offer you with a high level overview about all limitations that are in place. This should help you determine if your use-case is feasible and you want to move forward with the LivePerson Functions platform.

### Whitelisting

* You may not have more than one wildcard
  * `*.*.liveperson.com` is not allowed while `*.liveperson.com` is
* Calls to none allowed domains will be aborted
* Changes to the allowed domain list can take up to 5 minutes before being reflected
* Domain name needs to be valid based on [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035)

### Function

* Source Code must not exceed 100.000 characters
* Multiple requests are handled by a single functions instance
* Resources of a function instance are limited to 500m units of CPU and 256 MB of RAM
  * Exceeding the resource limit will result in the immediate stopping of the function, failing any request being processed by it
* Only the last 5 deployments will be stored
* Execution time is limited to 30s, some [event sources](liveperson-functions-event-sources-overview.html) may have a lower time limit

#### Timeouts

This is not a direct limitation, but a strong discouragement from our side. Please avoid the usage of `setTimeout` in your code. Given that a single function instance me handle more than one request, having timeouts running may negatively impact performance. Especially when the function is experiencing high traffic volumes. Generally any coding that blocks or fills up the event loop is something that should be avoided. If that is a deal breaker for you, we advice to look into an alternative solution.

### Communication

* HTTP/HTTPS are the only allowed protocols
* Any used [domain needs to be allowed](liveperson-functions-foundations-features.html#domain-whitelisting) prior to using it
  * Changes to the allow list of domains may take up to 5 minutes
  * Please be aware of potential redirects of your used domains, as the whole redirect-chain needs to be whitelisted
* MTLS is supported, but certificate handling and monitoring needs to be performed by you
* Outbound traffic is limited to 20 requests/second per function, every request beyond that limit will be yielding a 429

### Logging

* You must not write more than 10 logs during a single invocation
* You must not exceed 6000 characters across all logs, both message and extras count towards this limit
* Logs written as part of a test invocation are not persisted, further they may also inform you about issues with your logging (exceeding any limit etc.)
* Logs are pushed directly from the function to our services, meaning if a function is crashing or timing out logs may be lost
* Debug logs are never persisted
* Maximum time window for the [Investigate Function Logs screen](liveperson-functions-getting-started-monitoring.html#reviewing-logs) is 7 days
