---
pagename: Configuration
redirect_from:
  - webhooks-configuration.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Webhooks
order: 21
indicator: messaging
permalink: connector-api-webhooks-configuration.html
---

Webhooks notifications are enbaled by adding the *webhooks* capability to an [application](app-install-manifest-connectors.html). For example, consider the following application configuration:

```json
{
    "client_name": "Example webhooks configuration",
    "enabled": true,
    "capabilities": {
      "webhooks": {
        "ms.MessagingEventNotification.ContentEvent": {
          "endpoint": "https://www.application.endpoint.com/",
          "max_retries": 1
        },
         "ms.MessagingEventNotification.RichContentEvent": {
          "endpoint": "https://www.application.endpoint.com/"
         },
         "ms.MessagingEventNotification.ChatStateEvent": {
          "endpoint": "https://www.application.endpoint.com/"
        },
        "cqm.ExConversationChangeNotification": {
          "endpoint": "https://www.application.endpoint.com/",
	  "max_retries": 3
        }
      }
    }
}
```

When this configuration is applied successfully, it is called an application installation, or app install. The terms *app install* and *app* are used interchangeable and refer to an application installation, if not stated otherwise. The `client_name` attribute is the name of the app. An app can be enabled or disabled using the flag `enabled`. The `capabilites` section describes what kind of capabilities are exposed by the app. The `webhooks` section contains a webhook for any [supported event type](connector-api-webhooks-events.html). The `endpoint` attribute contains the endpoint URL. The `max_retries` attribute describes [how often an event for the endpoint should be tried](connector-api-webhooks-retry-policy.html) to be resend until it is dropped. Per default there are no retries.

In the example above, the app install is enabled and configures one webhook for each of the following events: `ms.MessagingEventNotification.ContentEvent`, `ms.MessagingEventNotification.RichContentEvent`, `ms.MessagingEventNotification.ChatStateEvent` and `cqm.ExConversationChangeNotification`. Events of type `ContentEnvent` and `ExConversationChangeNotification` are retried once or thrice, respectively. For example, if endpoint `https://www.application.endpoint.com/` fails to respond within 10 seconds or does not not return an HTTP code of `200` or `201`, the corresponding `ContentEvent` is sent a second time before it is dropped.  

### Summary

The `enabled` key expects a boolean value to enable or disable an app install. The `webhooks` key exects a map value. Each entry describes a webhook and consists of the following:
* key (string) - the event type (for example, `ms.MessagingEventNotification.ContentEvent`)
* value (object) - the attributes of the notification, including:
  * endpoint (string - mandatory) - the TLS secured URL to which to send the notification
  * max_retries (number - optional) - maximum number of retry attempts for a failed notification request (possible values: 0 - 5; default value: 0)
