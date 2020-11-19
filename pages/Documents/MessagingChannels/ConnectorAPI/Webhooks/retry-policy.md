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
Webhooks provide two types of retry mechanisms; one based on the number of retries and one based on the time to live of a failed event. Using the first retry mechanism one can specify a number of tries a failed event will be resend. The latter allows one to define the time a failed event will be kept in the retry mechanism. The three main differences between both mechanisms are the recoverable downtime, the ordering guarantee and the recoverable unit. Retry based on numbers does not guarantee the order of events, is only able to cope with an endpoint downtime of max. 2 1/2 minutes, and concentrates on events as recoverable units. On the other hand, retry based on the time to live guarantees the order of events within conversations, can bridge a downtime of up to 3 days and regards conversations as recoverable units. The first retry mechanism is deprecated and will be replaced by the latter one in a future release.

### Retry based on numbers

Retry based on numbers was the first mechanism introduced with Webhooks. For each webhook, one can configure up to 5 retry attempts. Between each attempt, Webhooks will wait for 30 seconds. That is a maximum wait time of 2 1/2 minutes. For example, consider the following configuration:

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

* Applications should consider that data (event) loss is possible. For example, when a failed event is retried, once the retry policy is exhausted (e.g. all the retry attempts fail) the event will be dropped.

* Applications should consider that events order is on best effort basis - i.e. it is not guaranteed. For example, if an event failed the first time and was only delivered successfully after one or more retries, then it is possible that a subsequent event will be delivered before.

* Applications should consider that as long as the retry policy is not exhausted, events duplications are possible. For example, if an event was received at the endpoint but the response takes more than 10 seconds, then Webhooks will consider that event as failed and will apply the retry policy - resulting in the same event being sent more than once.   

### Retry based on time to live

Retry based on time to live was introduced as an alternative to retry based on numbers. There are two main drivers for this mechanism; order of events within conversations and significantly longer recoverability. Keeping the order of events within a conversation lifts one from the burden to reorder the events on the receiving side. Further, having a recover time of up to 3 days enables one to fix the root cause of a failing endpoint without fearing data loss. Failed events are stored for a configurable amount of time with periodically retry attempts. The configuration looks as follows:

```json
{
    "client_name": "Example retry configuration",
    "capabilities": {
      "webhooks": {
        "retry": {
          "retention_time": 86400
        },
        "ms.MessagingEventNotification.ContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
        },
         "ms.MessagingEventNotification.RichContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
         }
      }
    }
}
``` 

If any event of type `ms.MessagingEventNotification.ContentEvent` or `ms.MessagingEventNotification.RichContentEnvent` cannot be send, all events belonging to the same conversation will be resend multiple times within the next 24 hours (86400 seconds) until they are either delivered or dropped. That is, retry based on time to live does not affect a single webhook but all webhooks at once. For convenience, we refer to all webhooks as app install. For example, an app install fails if at least one webhook fails.

The time between retries increases exponentially. The first retry attempt is made after 2 seconds, the second after 4 and the third after 8. The maximum gap between two consecutive retries is 5 minutes. The retention time is configured in seconds with a minimum of 2 seconds and a  maximum of 3 days (259200 seconds). When an app install recovered from a failure, events in the retry mechanism are sent in the order, they were stored. New conversations are directly send to the webhook endpoint without delay. If a webhook recovers mid-conversation all events of the conversation are send in the right order. That is, in the order they were received from Conversational Cloud. For a more detailed explanation of the different states of an app install consider the following drawing:

```
                            +----------------------------------------------------+
                            |                                                    |
                            |   +------------------------+                       |
                            |   |                        |                       |
                            v   v                        |                       |
+------------+           +------------+           +------------+           +-----------+
|            |           |            |           |     IN     |           |           |
|     UP     +---------->+   FAILED   +---------->+ TRANSITION +---------->+ RECOVERED |
|            |           |            |           |            |           |           |
+------------+           +------------+           +------------+           +-----------+
     ^                                                                           |
     |                                                                           |
     +---------------------------------------------------------------------------+
```

An app install can be in four states: *Up*, *Failed*, *In Transition* and *Recovered*. 
- **Up** An app install is up, when all webhook endpoints accept data within 10 seconds and are responding with 200 (OK) or 201 (CREATED). 
- **Failed** An app install fails, when at least one webhook endpoint is not responding within 10 seconds or is not replying with 200 or 201. If an app install fails, all events for each webhook endpoint are stored in the retry mechanism, regardless if the endpoint works or not. 
- **In Transition** An app install is in transition, when all webhook endpoints are responding properly again and there are events stored in the retry mechanism. Events for new conversations are directly sent to the corresponding endpoint. If the endpoint fails again, the app install fails again. Events for conversations in the retry mechanism are appended. All events in the retry mechanism are resent to their endpoints. 
- **Recovered** An app install is recovered, when all stored events could be sent. The retry mechanism will now resend those events which were stored during the transition from state *In Transition* to *Recovered*. This period is called drain period. Conversations affected by the drain period are called drain conversations. When an event for a drain conversation should be forwarded by Webhooks, it will wait for 4 second before it sends the event. If all stored events of the drain conversation could be send within this time, the order guarantee is kept, otherwise it is dropped. An app install is up again, when the drain period ends. An app install fails again, when at least one webhook endpoint fails.

#### Limitations

* Applications should consider that when an app install is in transition, the corresponding endpoints will receive all data which is stored in the retry mechanism. This can potentially overload an endpoint.

* Applications should consider that data (event) loss is possible. For example, when a failed notification request is retried, once the retry policy is exhausted (e.g. the time to live is exceeded) the event will be dropped.

* Applications should consider that the order of events within a conversation is guaranteed to be the same as they were received from Conversational Cloud. Ordering guarantee of a drain conversation is dropped, when its app install recovered but an event is sent within the drain period. 

* Applications should consider that as long as the retry policy is not exhausted, events duplications are possible. For example, if an event was received at the endpoint but the response takes more than 10 seconds, then Webhooks will consider that event as failed and will apply the retry policy - resulting in the same event being sent more than once.   

### Numbers vs. time to live

Retry based on time to live takes precedence over retry based on numbers. When the `retention_time` is set, the retry based on time to live will be triggered regardless of the configuration for the retry based on numbers. For example, consider the following configuration:

```json
{
    "client_name": "Example retry configuration",
    "capabilities": {
      "webhooks": {
        "retry": {
          "retention_time": 86400
        },
        "ms.MessagingEventNotification.ContentEvent": {
          "endpoint": "https://www.application.endpoint.com/",
          "max_retries": 1 
        },
         "ms.MessagingEventNotification.RichContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
         }
      }
    }
}
``` 

According to the retry mechanism based on numbers, events of type `ms.MessagingEventNotification.ContentEvent` should be retried once. However, as the `retention_time` is set, the retry mechanism based on time to live will be applied.

### Prevent failing endpoints to trigger Time To Live mechanism

While using the retry mechanism based on time to live, one can prevent the retry mechanism to be triggered when an endpoint fails. Consider the following configuration:

```json
{
    "client_name": "Example retry configuration",
    "capabilities": {
      "webhooks": {
        "retry": {
          "retention_time": 86400
        },
        "ms.MessagingEventNotification.ContentEvent": {
          "endpoint": "https://www.application.endpoint.com/",
          "max_retries": 0 
        },
         "ms.MessagingEventNotification.RichContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
         }
      }
    }
}
``` 

Having a `retention_time` results in the application of the retry mechanism based on time to live. However, as the `max_retries` for events of type `ms.MessagingEventNotification.ContentEvent` is set to 0, failing events of this type will not cause the retry mechanism to be triggered and will be dropped instead. If the corresponding app install is already failing, these events will be put in the retry mechanism and will be resend when the endpoints recover.
