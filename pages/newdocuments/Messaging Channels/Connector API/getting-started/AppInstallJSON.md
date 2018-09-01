---
pagename: App Install Manifest for Connectors
redirect_from:
  - app-install-manifest-connectors.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
subfoldername: Connector API
order: 3
indicator: messaging
permalink: connector-api-connector-api-app-install-manifest-for-connectors.html
---

Below, you will find an example of an Application Install Manifest. This JSON format instructs LiveEngage in how to install your application and make sure it can communicate with LiveEngage services. You can simply copy and paste the below Connector app manifest template, making sure to populate the following keys:

* `client_name`  - name of your Connector Application. This will also be shown to the agent as the source of the conversation in the Consumer Info widget.

* `description` - this is an optional key. Here you can describe your application.

* **Webhooks URL endpoints** - these will be used as URL endpoints for LiveEngage to send its notification events to your connector. **Note**: these endpoints must be exposed as HTTPS.

* `max_retries` - optional key. Use this field to configure the maximum number of retries which our Webhooks service will attempt in case of a failed request. For more information, please see the [Retry Policy](webhooks-retrypolicy.html) page.

After filling in the JSON Template with the required data, please contact your Account Management team to register your connector application. If you're interested in more in-depth information on how this schema is built and why, please refer to the [general Application Install Manifest document](guides-le-applications-installing.html).

### LiveEngage Application Manifest Schema - Example Using the Connector API

```json
{
  "client_name": "App name",
  "description": "App description",
  "grant_types": [
    "client_credentials"
  ],
  "scope": "msg.consumer",
  "logo_uri": "/src/modules/campaigns/assets/img/software/Mobile-App.png",
  "capabilities": {
    "webhooks": {
      "ms.MessagingEventNotification.ContentEvent": {
        "endpoint": "https://your/webhooks/endpoint",
        "max_retries": 3
      },
      "ms.MessagingEventNotification.RichContentEvent": {
        "endpoint": "https://your/webhooks/endpoint",
        "max_retries": 5
      },
      "ms.MessagingEventNotification.AcceptStatusEvent": {
        "endpoint": "https://your/webhooks/endpoint",
        "max_retries": 1
      },
      "ms.MessagingEventNotification.ChatStateEvent": {
        "endpoint": "https://your/webhooks/endpoint"
      },
      "cqm.ExConversationChangeNotification": {
        "endpoint": "https://your/webhooks/endpoint"
      }
    },
    "engagement": {
      "design_engagement": false,
      "design_window": false,
      "entry_point": [
        "section"
      ],
      "visitor_behavior": [
        "visited_location",
        "time_on_location",
        "flow",
        "engaged_in_session",
        "about_to_abandon",
        "cart_value",
        "cart_items",
        "visitor_error",
        "viewed_products",
        "service_activity"
      ],
      "target_audience": [
        "external_referral",
        "search_keywords",
        "ip",
        "platform",
        "geo_location",
        "returning_visitors",
        "marketing_source",
        "customer_type",
        "age",
        "balance",
        "customer_id",
        "gender",
        "store_zip_code",
        "store_number",
        "company_size",
        "registration_date"
      ],
      "goal": [
        "url",
        "purchase_total",
        "num_of_pages",
        "lead",
        "service_activity"
      ],
      "consumer_identity": [
        "auth"
      ],
      "language_selection": false
    }
  }
}
```
