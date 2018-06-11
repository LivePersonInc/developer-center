---
title: App Install Manifest for Connectors
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 3
indicator: both
permalink: AppInstallJSON.html
---

### Connector Onboarding

#### App Install for Send-Api object description

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
        "max_retries": 3,
        "headers": [{"header_name": "NAME", "header_value": "VALUE"}]
      },
      "ms.MessagingEventNotification.RichContentEvent": {
        "endpoint": "https://your/webhooks/endpoint",
        "max_retries": 5,
        "headers": [{"header_name": "NAME", "header_value": "VALUE"}]
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

**Note**: the below configurations are correct only when using this schema in the context of the Connector API. Other LiveEngage applications may use this schema in a different way. Use the below **only** when configuring a Connector application. Where specific values are required, they are required for a Connector application only.

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|client_name | Choose the name for your Connector application. | string| Yes | Unique. Max length: 100|
|description | App description | string | No| max length: 256|
|grant_types | Authorization grant according to OAuth 2.0 | array | Yes | Requires the value: "client_credentials". Do not change.|
|scope | Space-separated list of scope values that the client can use when requesting access tokens| string| Yes |max length: 128. Requires the value: "msg.consumer". Do not change. |
|logo_uri | URL string that references a logo for the client | string| No|max length: 128|
|capabilities| LiveEngage capabilities utilized by this app. This array defines the various LiveEngage services or applications that can interface with this application| Object. (Contains the properties webhooks and engagement)| Yes| Required values: webhooks and engagement. webhooks: Contains the endpoints where UMS will send notifications <br /> engagement: This determines how the application interfaces with LiveEngage engagements and their creation|

#### The Webhooks array

| Property | Description | Type |
|--- | --- | ---|
|ms.MessagingEventNotification .ContentEvent | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ContentEvent. | webhook |
|ms.MessagingEventNotification .RichContentEvent |  Indicates the HTTPS configuration endpoint of your server to receive notifications of type RichContentEvent. | webhook |
|ms.MessagingEventNotification .AcceptStatusEvent |Indicates the HTTPS configuration endpoint of your server to receive notifications of type AcceptStatusEvent. |  webhook |
|ms.MessagingEventNotification .ChatStateEvent | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ChatStateEvent. |  webhook |
|ms.MessagingEventNotification .ExConversationChangeNotification | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ExConversationChangeNotification. |  webhook |

#### A specific Webhook object

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|endpoint | The url to send the notification to, including query parameters | string| Yes |Starts by "https://"|
|max_retries | The max number of retry attempts to send the notification if it fails | integer| No| minimum value: 0, maximum value: 5|
|headers | List of http headers to add to the notification request | Array of Headers | No| Example value:  [{"header_name": "NAME1", "header_value": "VALUE1"},{"header_name": "NAME2", "header_value": "VALUE2"}]|

#### Engagements

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|design_engagement |Toggles the ability to design the engagement window | Boolean. Should be set to false |Yes | Do not change.|
|design_window | Toggles the ability to add an engagement window | Boolean. Should be set to false| Yes |Do not change.|
|entry_point |  Indicates where to display the engagement which invites consumers to engage with you | Array| Yes |Possible values: section, url. Do not change.|
|visitor_behavior | The browsing behavior of visitors which is of interest to you.  | Array| Yes |Possible values: visited_location, time_on_location, flow, engaged_in_session, about_to_abandon, cart_value, visitor_error, viewed_products, service_activity. Do not change. |
|target_audience | The visitors you specifically want to target |  string| Yes |Possible values: external_referral, search_keywords, ip, platform, geo_location, returning_visitors, marketing_source, customer_type, age,balance, customer_id,gender, store_zip_code, store_number, company_size, registration_date. Do not change. |
|goal |  Indicates what you want to achieve with the engagement | string| Yes |Possible values: url, purchase_total, num_of_pages, lead, service_activity |
|consumer_identity | If the consumer does or doesn't have to be an authenticated user |  Array| Yes | The value has to be set to auth. Possible values: auth, unauth|
|language_selection | Indicates the possibility of language selection  |  Boolean |Yes ||
