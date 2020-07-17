---
pagename: Getting Started
redirect_from:
  - connectorapi-getting-started.html
  - connector-api-first-steps-getting-started.html
  - connector-api-first-steps-app-install-manifest-for-connectors.html
sitesection: Documents
categoryname: "Messaging Channels"
documentname: Connector API
order: 2
indicator: messaging
permalink: connector-api-getting-started.html
---

### Getting Started with the Connector API

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou).

3. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html)

[comment]: <> (guides-retry-policy.html needs to be updated with Connector API as well)


**In order to use the Connector API, please follow the steps below:**

1. **Onboard your connector**

	The connector is a server application that is used to make HTTPS calls on behalf of consumers to Conversational Cloud. For that purpose, the application must be registered and known to Conversational Cloud for authorization and user validation. This process can happen before even writing one line of code.

	In order to register your application, please contact your Account Management team. You will need to provide details regarding your connector application, via a pre-determined JSON schema (otherwise known as the Application Installation Manifest). Use the default [App Installation Manifest](#app-install-manifest-for-connectors) and replace or fill in the required information.

	The main sections to be filled are (Refer to the [JSON](#app-install-manifest-for-connectors) for more information):

	* Your **connector/application name** (`client_name` and optionally also the `description`).

	* **Webhooks URL endpoints** which will be used as URL endpoints for Conversational Cloud to send its notification events to your connector.

	* **Engagement related fields** - this affects the Engagement design possibilities when designing a campaign for messaging. Without a clear reason to change them, you can use the default values found in the schema.

	After filling in the [JSON Template](#app-install-manifest-for-connectors) with the required data, please contact your Account Management team to register your connector application.

2. **Getting an application JWT** - After successfully registering your connector, you will be given two important parameter values which will serve to authorize your connector application prior to using the Connector API:

	* An app installation id (`client_id`; for example 75588e18-0213-4e33-8174-883acac7e3c4), and

	* A secret (`client_secret`; for example kgvbkk7glku72jgtmpi6l4a872)

	These will be used for the first authorization request to Conversational Cloud in order to identify your connector and provide it with an **AppJWT**. Refer to [Getting an AppJWT](connector-api-send-api-authorization-and-authentication.html#get-appjwt) for more information.

3. **Getting a consumer JWS** - An **AppJWT** is not sufficient to identify a consumer with Conversational Cloud. With a valid AppJWT, you can obtain a consumer JWS (Java Web Signature) to identify the consumer in Conversational Cloud:

	**Request Example**

	 https://[{domain}](/agent-domain-domain-api.html)/api/account/{accountid}/consumer?v=1.0|

	Refer to [Getting a ConsumerJWS](connector-api-send-api-authorization-and-authentication.html#get-consumerjwt) for more information.

4. **Develop and run your connector** - refer to the [API Overview](connector-api-overview.html) to get started.

	**Note**: The above **AppJWT** and **ConsumerJWS** will be passed in the request headers of every API call to Conversational Cloud for authorization of the connector and identification of the consumer.

### App Install Manifest for Connectors

Below, you will find an example of an Application Install Manifest. This JSON format instructs Conversational Cloud in how to install your application and make sure it can communicate with Conversational Cloud services. You can simply copy and paste the below Connector app manifest template, making sure to populate the following keys:

* `client_name`  - name of your Connector Application. This will also be shown to the agent as the source of the conversation in the Consumer Info widget.

* `description` - this is an optional key. Here you can describe your application.

* **Webhooks URL endpoints** - these will be used as URL endpoints for Conversational Cloud to send its notification events to your connector. **Note**: these endpoints must be exposed as HTTPS.

* `max_retries` - optional key. Use this field to configure the maximum number of retries which our Webhooks service will attempt in case of a failed request. For more information, please see the [Retry Policy](webhooks-retrypolicy.html) page.

After filling in the JSON Template with the required data, please contact your Account Management team to register your connector application. If you're interested in more in-depth information on how this schema is built and why, please refer to the [general Application Install Manifest document](guides-le-applications-installing.html).

### Conversational Cloud Application Manifest Schema - Example Using the Connector API

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
