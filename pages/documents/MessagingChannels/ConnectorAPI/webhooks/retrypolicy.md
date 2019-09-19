---
pagename: Retry Policy
redirect_from:
  - webhooks-retrypolicy.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 40
indicator: messaging
permalink: connector-api-webhooks-retry-policy.html
---
Webhooks provide two types of retry mechanisms; one based on the number of retries and one based on the time to live of a failed event. Using the first retry mechanism one can specify a number tries a failed event will be resend. The latter allows one to define the time a failed event will be kept in the retry mechanism. The difference between both mechanisms is, that the first one is only able to cope with an endpoint downtime of max. 2 1/2 minutes while the second one can bridge a gap of up to 3 days. The first retry mechanism will be deprecated and be replaced by the latter.

### Retry based on numbers

This retry mechanism was the first one introduced with Webhooks. One can configure between 0 and 5 retry attempts. Between each attempt, Webhooks will wait for 30 seconds. That is in total, there is a wait time of 2 1/2 minutes. Retries can be configured for each webhook independently. For example, consider the following configuration:

```json
{
    "client_name": "Example retry configuration",
    "capabilities": {
      "webhooks": {
        "ms.MessagingEventNotification.ContentEvent": {
          "endpoint": "https://www.application.endpoint.com/",
          "max_retries": 3
        },
         "ms.MessagingEventNotification.RichContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
         }
      }
    }
}
```

If an event of type `ms.MessagingEventNotification.ContentEvent` fails, it will be resend up to 3 times until it is either dropped or properly delivered. On the other hand, an event of type `ms.MessagingEventNotification.RichContentEvent` will be dropped immediately if the first attempt was unsuccessful.

#### Limitations

This approach to retries comes with some limitations:

* Applications should consider that data (event) loss is possible. For example, when a failed notification request is retried, once the retry policy is exhausted (e.g. all the retry attempts fail) the event will be dropped.

* Applications should consider that events order is on best effort basis - i.e. it is not guaranteed. For example, if a request notification of a certain event failed the first time and was only delivered successfully after one or more retries, then it is possible that a subsequent event will be delivered before.

* Applications should consider that as long as the retry policy is not exhausted, then events duplications are possible. For example, if a notification request was received at the application endpoint but the response for that request was sent after more than 10 seconds, then in such a case the WH will consider that notification request as failed and will apply the configured retry policy on that notification - resulting in the same event being sent more than once.   

### Retry based on time to live

This retry mechanism was recently introduced as an alternative to the retry based on numbers. During the Different to before, one configures the time how long a failed event should be retried. This timespan can be up to three days. 
