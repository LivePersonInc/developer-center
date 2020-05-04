---
pagename: Disclaimers
redirect_from:
  - webhooks-disclaimers.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 50
indicator: messaging
permalink: connector-api-webhooks-disclaimers.html
---

### Response times and disablements

Endpoints receiving notifications, should always respond within 2.5 seconds. That is the time the endpoint accepts the notification until Webhooks receives a response. If an endpoint does not comply for more than 2 minutes, the corresponding app install can be disabled at any time. Depending on the circumstances, you will be notified. This means, when you plan your implementation make sure to have the right capacity for the anticipated load. Further, consider an asynchronous design of your application where accepting and responding to a request are done separately from processing it. It is better to respond with a failure code instead of not responding at all.

### Data loss, duplication and order  

Notifications might get dropped. For example, when a notification fails to be delivered and the retry policy is exhausted, the event will be dropped. Depending on the [retry policy](connector-api-webhooks-retry-policy.html) the order of notifications is on best effort basis. For example, if a request fails for the first time and was only delivered successfully after one or more retries, then it is possible that a subsequent event will be delivered before. Applications should consider that as long as the retry policy is not exhausted, event duplications are possible. For example, if an endpoint responds with a failure code but still processes the notification Webhooks will retry the notification resulting in the same event being sent more than once.
