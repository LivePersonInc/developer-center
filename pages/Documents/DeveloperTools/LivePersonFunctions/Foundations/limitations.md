---
pagename: Limitations
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-limitations.html
indicator: both
redirect_from:
  - function-as-a-service-foundations-limitations.html
---

This page will offer you a high-level overview of all limitations in place. It should help you determine if your use case is feasible and you want to move forward with the LivePerson Functions platform.

### Allowlisting

* You may not have more than one wildcard
  * `*.*.liveperson.com` is not allowed while `*.liveperson.com` is
* Calls to unallowed domains will be aborted
* Changes to the allowed domain list can take up to 5 minutes before being reflected
* Domains need to be valid based on [RFC 1035](https://datatracker.ietf.org/doc/html/rfc1035)

### Function

* Source Code must not exceed 100.000 characters
* A single functions instance [handles multiple requests](liveperson-functions-foundations-concepts.html#concurrency)
* Resources of a function instance are limited to 500m units of CPU and 256 MB of RAM
  * Exceeding the resource limit will result in the immediate stopping of the function, failing any request being processed by it
* Only the last five deployments will be stored
* Execution time is limited to 30s. Some [event sources](liveperson-functions-event-sources-overview.html) may have a lower time limit

#### Timeouts

This is not a direct limitation but a strong discouragement from our side. Please avoid the usage of `setTimeout` in your code. Given that a single function instance might handle more than one request, running timeouts may negatively impact performance. Such issues can arise when the function is experiencing high traffic volumes. Generally, any code that blocks or fills up the [event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) should be avoided.

### Communication

* HTTP/HTTPS are the only allowed protocols
* Any used [domain needs to be allowed](liveperson-functions-foundations-features.html#domain-allowlisting) before using it
  * Changes to the allowlist of domains may take up to 5 minutes
  * Please be aware of potential redirects of your used domains, as the whole redirect chain needs to be allowlisted
* mTLS is supported, but certificate handling and monitoring needs to be performed by you
* Outbound traffic is limited to 20 requests/second per function. Every request beyond that limit will yield a 429

### Logging

* You must not write more than 10 logs during a single invocation
* You must not exceed 6000 characters across all logs per invocation. Both message and extras count towards this limit
* Logs written as part of a test invocation are not persisted. Further, they may also inform you about issues with your logging (e.g. exceeding any limit)
* Logs are pushed directly from the function to our services, meaning if a function is crashing or timing out, logs may be lost
* Debug logs are never persisted
* Maximum time window for the [Investigate Function Logs screen](liveperson-functions-getting-started-monitoring.html#reviewing-logs) is seven days