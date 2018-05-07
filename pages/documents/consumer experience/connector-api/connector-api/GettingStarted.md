---
title: Getting Started
level1:
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 2
indicator: both
permalink: connectorapi-getting-started.html
---

### Getting Started with the Connector API

1. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html){:target="_blank"} to retrieve this information by providing the following service name:

	* asyncMessagingEnt

2. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

3. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}

[comment]: <> (guides-retry-policy.html needs to be updated with Connector API as well)

**In order to use the Connector API, please follow the steps below:**

**Onboard your connector**

The connector is essentially an application residing on a server that is used to make REST calls on behalf of a consumer to LiveEngage. For that purpose, the application must be registered and known to LiveEngage for authorization and user validation.

In order to register your application, please contact your Account Management team. You will need to provide details regarding your Connector application, via a pre-determined JSON schema (otherwise known as the Application Installation Manifest).

Use the default [**App Installation Manifest**](AppInstallJSON.html) and replace/fill in the required information.

The main sections to be filled are (Refer to the [**JSON**](AppInstallJSON.html) for more information):

* Your connector/application name (`client_name` and `description`).

* **Webhooks URLs endpoints** which will be used as endpoints for LiveEngage to send its notification events to your connector.

* Engagement related fields - Optional, affecting the Engagement design possibilities on campaign for messaging.

After filling in the [JSON Template](AppInstallJSON.html) with the required data, please contact your Account Management team to register your connector application.

**Authorizing your Connector application**

After successfully registering your connector on **LiveEngage App Management** via a support ticket. You will be handed over with 2 important parameter values which you will serve you to authorize your connector application prior to using the Connector API:

	Installation id:  e.g 75588e18-0213-4e33-8174-883acac7e3c4

	Secret:  e.g kgvbkk7glku72jgtmpi6l4a872

Those will be used for the first authorization call to LiveEngage Application Identity Broker in order to identify your connector and provide it an **AppJWT**.

**Example**

```
https://{Sentine_Domain}/sentinel/api/account/{SiteID}/app/token?v=1.0&grant_type=client_credentials&client_id={Installation id}&client_secret={Secret}
```

Refer to [Getting an AppJWT](Create_AppJWT.html) for more information.

**Consumer Authentication**

An **AppJWT** is not sufficient to identify a consumer with the Messaging service. With a valid AppJWT you can obtain a consumer token (Java Web Signature, JWS):

**Example**

```
https://{domain}/api/account/{accountid}/consumer?v=1.0|
```

Refer to [Getting a ConsumerJWS](Create_ConsumerJWS.html) for more information.
