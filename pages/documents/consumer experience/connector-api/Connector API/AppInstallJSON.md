---
title: App Install for Send-Api object description
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 8
indicator: both
permalink: AppInstallJSON.html
---

#### App Install for Send-Api object description

```javascript
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
        "endpoint": "https://your/webhooks/endpoint"
        "max_retries": 5,
        "headers": [{"header_name": "NAME", "header_value": "VALUE"}]
      },
      "ms.MessagingEventNotification.AcceptStatusEvent": {
        "endpoint": "https://your/webhooks/endpoint"
        "max_retries": 1,
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

Attribute | Description | Notes
--- | --- | ---
client_name | Installation name. In most of the cases equals to the app name. | <ul><li>Type: string </li><li>Required </li><li>Unique</li><li>max length: 100</li></ul>
description | App description | <ul><li>Type: string</li><li>max length: 256</li></ul>
grant_types | Type strings that the client can use at the token endpoint | <ul><li>Type: array</li> <li>Requires the value: "client_credentials"</li></ul>
scope | space-separated list of scope values that the client can use when requesting access tokens| <ul><li>Type: string</li><li>max length: 128</li><li>value required: "msg.consumer"</li></ul>
logo_uri | URL string that references a logo for the client | <ul><li>Type: string</li><li>max length: 128</li></ul>
capabilities| LiveEngage capabilities implemented by this app. This field will be used by other apps to discover this app based on the implemented capabilities.| <ul><li>Type: Object. (Contains the properties webhooks and engagement) </li><li>Ref-Webhooks: Contains the endpoints where UMS will send notifications </li> <li>Ref-engagement: The app is capable of engaging the consumer based on LiveEngage engagements API</li></ul>

#### Webhooks    
Attribute | Description | Notes
--- | --- | ---
ms.MessagingEventNotification .ContentEvent | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ContenEvent. | <ul><li>Type: webhook </li></ul>
ms.MessagingEventNotification .RichContentEvent |  Indicates the HTTPS configuration endpoint of your server to receive notifications of type RichContentEvent. | <ul><li>Type: webhook </li></ul>
ms.MessagingEventNotification .AcceptStatusEvent |Indicates the HTTPS configuration endpoint of your server to receive notifications of type AcceptStatusEvent. |  <ul><li>Type: webhook </li></ul>
ms.MessagingEventNotification .ChatStateEvent | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ChatStateEvent. |  <ul><li>Type: webhook </li></ul>
ms.MessagingEventNotification .ExConversationChangeNotification | Indicates the HTTPS configuration endpoint of your server to receive notifications of type ExConversationChangeNotification. |  <ul><li>Type: webhook </li></ul>

#### Webhook

Attribute | Description | Notes
--- | --- | ---
endpoint | The url to send the notification to, including query parameters | <ul><li>Type: string </li><li>Required</li><li>Starts by "https://"</li></ul>
max_retries | The max number of retry attempts to send the notification if it fails | <ul><li>Type: integer </li><li>min: 0, max: 5</li></ul>
headers | List of http headers to add to the notification request | <ul><li>Type: Array of Headers </li><li> Example value:  [{"header_name": "NAME1", "header_value": "VALUE1"},{"header_name": "NAME2", "header_value": "VALUE2"}]</li</ul>

#### Engagements    
Attribute | Description | Notes
--- | --- | ---
design_engagement | Indicates the the possibilty to change the desing of your engagement window | <ul><li>Type: Boolean. Should be set to false </li><li>Required</li></ul>
design_window | Possibility to add an engagement window | <ul><li>Type: Boolean. Should be set to false </li><li>Required</li></ul>
entry_point |  Indicates where to display your engagement to invite consumers to engage with you | <ul><li>Type: Array </li><li>Required</li><li>Possible values: section, url</li</ul>
visitor_behavior | The browsing behavior of visitors which is of interest to you.  | <ul><li>Type: Array </li><li>Required</li><li>Possible values: visited_location, time_on_location, flow, engaged_in_session, about_to_abandon, cart_value, visitor_error, viewed_products, service_activity </li></ul>
target_audience | The visitors you specifically want to target |  <ul><li>Type: string </li><li>Required</li><li>Possible values: external_referral, search_keywords, ip, platform, geo_location, returning_visitors, marketing_source, customer_type, age,balance, customer_id,gender, store_zip_code, store_number, company_size, registration_date </li></ul>
goal |  Indicates what you want to achieve | <ul><li>Type: string </li><li>Required</li><li>Possible values: url,purchase_total, num_of_pages, lead, service_activity </li></ul>
consumer_identity | If the consumer has to be or not authenticated |  <ul><li>Type: Array </li><li>Required. The value has be set to auth.</li><li>Possible values: auth, unauth</li</ul>
language_selection | Indicates the possibility of language selection  |  <ul><li>Type: string</li><li>Required</li></ul>
