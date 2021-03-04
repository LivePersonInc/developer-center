---
pagename: Limitations & Restrictions
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-limitations-restrictions.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-limitations-restrictions.html
---

The following section describes the limitations and restrictions of the platform

- [Timeouts](#timeouts)
- [HTTP-Requests](#http-requests)
- [Lambda](#lambda)
- [Logging](#logging)

### Timeouts

The usage of `setTimeout()` in LivePerson Functions must be handled with care.
* Functions cannot exceed the runtime of **30 seconds**. The error `Lambda Execution is taking too long` will be thrown.
* If a function is at high load and it contains a `setTimeout()` call, the event loop of the service may fill up. Even functions with a lower execution time than 30 seconds could therefore take longer, may reach the execution time limit and fail. Because of this, it's important to double check if timeouts cannot be avoided in your use case.

### HTTP-Requests
* Certificates are not supported (e.g. mTLS).
* Max. 20 requests/sec (all beyond that are rejected with `429 - Too Many Requests`).

### Lambda

* The source code must not exceed the length of `100.000` characters.
* The resources of a lambda are limited. CPU is capped at `500m` and the memory at `256 MB`. So beware, if you want to use for example large file processing inside a function and reach this limit the function will stop immediately and the invocation will fail (no results will be saved).

### Logging

* Logs written during invocation are limited to 10 entries, with an overall maximum of `5000` characters per lambda invocation. If this limit is exceeded, only 1 error log will be stored.
* Be aware that logs written during manual test invocations will not be written into the storage. Logs with a Debug level will only be shown on manual test invocations and not written into the storage.
* The maximum timespan between Start Date and End Date of the `Investigate Function Logs` screen is restricted to 7 days.

<img src="img/faas-limitations-investigate-logs.jpg" alt="LivePerson Functions Logs" style="width:80%;"/>