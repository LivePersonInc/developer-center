---
title: Disclaimers
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Webhooks
order: 50
indicator: both
permalink: connector-api-webhooks-disclaimers.html
---

* Applications should consider that **data (event) loss is possible**. For example, when a failed notification request is retried, once the retry policy is exhausted (e.g. all the retry attempts fail) the event will be dropped.    

* Applications should consider that **events order is on best effort basis** - i.e. it is not guaranteed. For example, if a request notification of a certain event failed the first time and was only delivered successfully after one or more retries, then it is possible that a subsequent event will be delivered before.  

* Applications should consider that as long as the retry policy is not exhausted, then **events duplications are possible**. For example, if a notification request was received at the application endpoint but the response for that request was sent after more than 10 seconds, then in such a case the WH will consider that notification request as failed and will apply the configured retry policy on that notification - resulting in the same event being sent more than once.
