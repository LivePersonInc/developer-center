---
title: Getting Started
level1:
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 8
indicator: both
permalink: connectorapi-getting-started.html
---

### Getting Started with the Connector API

1. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

2. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}.

[comment]: <> (guides-retry-policy.html needs to be updated with Connector API as well)

**In order to use the Connector API, please follow the steps below:**

1. **Onboard your connector** - The connector is essentially an application residing on a server that is used to make REST calls on behalf of a consumer to LiveEngage. For that purpose, the application must be registered and known to LiveEngage for authorization and user validation.

In order to register your application, please contact your Account Management team. You will need to provide details regarding your Connector application, via a pre-determined JSON schema (otherwise known as the Application Installation Manifest).

Use the default [**App Installation Manifest**](AppInstallJSON.html){:target="_blank"} and replace/fill in the required information.

The main sections to be filled are (Refer to the [**JSON**](AppInstallJSON.html){:target="_blank"} for more information):

* Your connector/application name (`client_name` and `description`).

* **Webhooks URLs endpoints** which will be used as endpoints for LiveEngage to send its notification events to your connector.

* Engagement related fields - Optional, affecting the Engagement design possibilities on campaign for messaging.

After filling in the JSON with the required data, please contact your Account Management team to register your connector application.

{:start="2"}
2. After successfully registering your connector on LiveEngge you will be handed over with 2 important values which you will need to make calls to LiveEngage prior to using the Connector API:

	* **AppInstallationId**:  e.g 75588e18-0213-4e33-8174-883acac7e3c4

	* **Secret**:  e.g kgvbkk7glku72jgtmpi6l4a872

	Those will be used for the first authentication call to LiveEngage Identity Provider in order to identify your connector.

**Example authentication call**

```
https://{**IDP_Domain**}/sentinel/api/account/{**SiteID**}/app/token?v=1.0&grant_type=client_credentials&client_id={**Installation id**}&client_secret={**Secret**}
```
