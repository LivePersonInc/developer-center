---
title: Getting Started
level1: Documents
level2: Consumer Experience
level3: Connector API
level4: Connector API
order: 8
indicator: both
permalink: connectorAPIGettingStarted.html
---

### Getting Started with the Connector API

1. [Here are the API terms of use](https://www.liveperson.com/policies/apitou){:target="_blank"}.

2. When using this API, it is recommended that you implement our [Retry Policy and KeepAlive best practices](guides-retry-policy.html){:target="_blank"}.

[comment]: <> (guides-retry-policy.html needs to be updated with Connector API as well)

**In order to use the Connector API, please follow the steps below:**

1. **Onboard your connector** - The connector is essentially an application residing on a server that is used to make REST calls on behalf a consumer to LiveEngage. For that purpose, the client must be registered and known to LiveEngage for authorization and user validation.

For registering your Application please contact support and provide some details regarding your connector application.
Use the default [**App Installation JSON**](AppInstallJSON.html){:target="_blank"} to replace/fill in the required information.
The main sections to be filled: (Refer to the [**JSON**](AppInstallJSON.html){:target="_blank"} to read further)
	* Your connector/application name (**client_name**) and **description**.
	* **Webhooks URLs endpoints** which will be used as endpoints for LiveEngage to send its notification events to your connector.
	* Engagement related fields - Optional, affecting the Engagement design possibilities on campaign for messaging.

After filling in the JSON with the required data please contact support to register your connector application while providing the file.

2. After successfully registering your connector on LiveEngge you will be handed over with 2 important values which you can use to make calls to LiveEnagge:

	* **Installation id**:  e.g 75588e18-0213-4e33-8174-883acac7e3c4

	* **Secret**:  e.g kgvbkk7glku72jgtmpi6l4a872

	Those will be used for the first authentication call to LiveEngage Identity Provider in order to

    e.g https://{**IDP_Domain**}/sentinel/api/account/{**SiteID**}/app/token?v=1.0&grant_type=client_credentials&client_id={**Installation id**}&client_secret={**Secret**}
