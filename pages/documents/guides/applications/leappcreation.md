---
title: Installing LiveEngage Applications
Keywords:
level1:
level2: Guides
level3: LiveEngage Applications
order: 20
permalink: guides-le-applications-installing.html
indicator:
---

### Overview

Currently, installation of LiveEngage Applications is performed by LivePerson's internal resources (account team, DevSupport, Tier 1, etc). In order to request this installation, you must first fill out the following schema according to your application needs. Once that is done, please contact the relevant LivePerson resource for your account and they will perform the installation.

Once the application has been installed, the LivePerson resource will send you your application key and secret which are required for OAuth2.0 authentication. In the future, installing an application will be possible on your own through LiveEngage, but currently the installation process must be followed.

**Note**: the Connector API is the only use case for LiveEngage Applications at the moment but we are planning to develop and launch more LiveEngage Applications related use cases in the future.

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

### LiveEngage Application Manifest Schema - Parameters

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|client_name | Choose the name for your Connector application | string| Yes | Unique. Max length: 100|
|description | App description | string | No| max length: 256|
|grant_types | Authorization grant according to OAuth 2.0 | array | No | supported values: "authorization_code", "implicit", "client_credentials"|
|redirect_uris | For web/native apps, the URIs to which the JWT/code will be sent after redirect | array of strings | No | max length: 128|
|response_types | OAuth 2.0 response type strings that the client can use at the authorization endpoint | array | No |supported values: "code", "implicit"|
|scope | Space-separated list of scope values that the client can use when requesting access tokens| string| No |max length: 128. Requires the value: "msg.consumer". Do not change. |
|logo_uri | URL string that references a logo for the client | string| No|max length: 128|
|capabilities| LiveEngage capabilities utilized by this app. This array defines the various LiveEngage services or applications that can interface with this application| object (See supported values structure in the tables below)| No | supported values: "webhooks", "engagement". <br /> <br /> webhooks: Contains the endpoints where UMS (Messaging Service) will send notifications <br /> <br />  engagement: This determines how the application interfaces with LiveEngage engagements and their creation |
|enabled | Whether the application is enabled or not | boolean | No | default value: true |

#### webhooks (optional object within capabilities object)

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|ms.MessagingEventNotification .ContentEvent | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ContentEvent. | webhook | No | |
|ms.MessagingEventNotification .RichContentEvent |  Indicates the HTTPS configuration endpoint of your server to receive notifications of type RichContentEvent. | webhook | No | |
|ms.MessagingEventNotification .AcceptStatusEvent |Indicates the HTTPS configuration endpoint of your server to receive notifications of type AcceptStatusEvent. |  webhook | No | |
|ms.MessagingEventNotification .ChatStateEvent | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ChatStateEvent. |  webhook | No | |
|ms.MessagingEventNotification .ExConversationChangeNotification | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ExConversationChangeNotification. |  webhook | No | |

#### webhook (optional object within webhooks object)

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|endpoint | The url to send the notification to, including query parameters | string| Yes |Starts by "https://"|
|max_retries | The max number of retry attempts to send the notification if it fails | integer| No| minimum value: 0, maximum value: 5|
|headers | List of http headers to add to the notification request | array of headers | No| Example value:  [{"header_name": "NAME1", "header_value": "VALUE1"},{"header_name": "NAME2", "header_value": "VALUE2"}]|

#### engagements

| Property | Description | Type | Required| Notes|
|--- | --- | ---|
|design_engagement |Toggles the ability to design the engagement button and apparence | boolean |Yes | |
|design_window | Toggles the ability to add an engagement window | boolean | Yes | |
|entry_point |  Indicates where to display the engagement which invites consumers to engage with you | array| Yes | supported values: section, url|
|visitor_behavior | The browsing behavior of visitors which is of interest to you.  | array| Yes | supported values: visited_location, time_on_location, flow, engaged_in_session, about_to_abandon, cart_value, visitor_error, viewed_products, service_activity|
|target_audience | The visitors you specifically want to target |  string | Yes | supported values: external_referral, search_keywords, ip, platform, geo_location, returning_visitors, marketing_source, customer_type, age,balance, customer_id,gender, store_zip_code, store_number, company_size, registration_date |
|goal |  Indicates what you want to achieve with the engagement | string| Yes |supported values: url, purchase_total, num_of_pages, lead, service_activity |
|consumer_identity | If the consumer does or doesn't have to be an authenticated user |  array| Yes | The value has to be set to auth. supported values: auth, unauth|
|language_selection | Indicates the possibility of language selection  |  boolean |Yes ||
