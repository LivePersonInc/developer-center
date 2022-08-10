---
pagename: Application Login Sample App
redirect_from:
  - authorizing-liveengage-applications-samples-application-login-sample-app.html
sitesection:
categoryname: "Security & Authentication"
documentname: Authorizing Conversational Cloud Applications
subfoldername: Samples
permalink: authorizing-conversational-cloud-applications-samples-application-login-sample-app.html
---

### Overview

This sample application allows you to use the API in a few simple steps:

1. Install a Conversational Cloud Application. Here is a [Conversational Cloud Applications installation guide](liveengage-applications-installing-liveengage-applications.html). After finishing the installation please retrieve the AppInstall ID and secret that you will need to use when calling this API's endpoints.

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* sentinel

3. Configure in a properties file the following:

	* OAUTH2_CLIENT_ID=[installation id provided after application registration]

	* OAUTH2_CLIENT_SECRET=[secret provided after application registration]

	* OAUTH2_CALLBACK_URL=http://localhost:3000/callback

	* OAUTH2_AUTHORIZATION_URL=https://[sentinel domain]/sentinel/api/account/[accountid]/authorize?v=1.0

	* OAUTH2_TOKEN_URL=https://[sentinel domain]/sentinel/api/account/[accountid]/token?v=2.0

4. Run the following [mock application](https://github.com/LivePersonInc/sample-app-authorization) with the configuration file you created. See the GitHub readme of the repository for more information on how to use it.

5. Open your browser on http://localhost:3000 and log in.
