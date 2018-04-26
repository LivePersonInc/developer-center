---
title: Retry Policy
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 40
indicator: both
permalink: webhooks-retrypolicy.html
---

### Retry Policy

* Upon its registration to the WH service, an application can be configured to require a “retry send” of failed notification requests.

* It is possible to choose between 0 to 5 retries (the default is: 0, meaning “no retires”).

* The interval between retries is 30 seconds.

### Disclaimers

  * Applications should consider that **data (event) loss is possible**. For example, when a failed notification request is retried, once the retry policy is exhausted - e.g. all the retry attempts fail, the event will be dropped.    

  * Applications should consider that **events order is on best effort basis** - e.g. it is not guaranteed. For example, if a request notification of a certain event failed the first time and was only delivered successfully after one or more retries, then it is possible that a subsequent event will be delivered before.  

  * Applications should consider that as long as the retry policy is not exhausted, then **events duplications are possible**. For example, if a notification request was received at the application endpoint but the response for that request was sent after more than 10 seconds, then in such a case the WH will consider that notification request as failed and will apply the configured retry policy on that notification - resulting in the same event being sent more than once.
