---
pagename: Overview
redirect_from:
  - authorizing-liveengage-applications-overview.html
Keywords:
sitesection:
categoryname: "Security & Authentication"
documentname: Authorizing Conversational Cloud Applications
permalink: authorizing-conversational-cloud-applications-overview.html
root-link: true
indicator: both
---

### Introduction

This API authorizes users for your application. This is needed so that your application can interact with Conversational Cloud on behalf of your users in a secure and authorized way. The application should be installed in the context of your account.

This API provides standard OAuth 2.0 endpoints to receive and refresh access tokens. Please see the [OAuth 2.0 RFC reference](https://tools.ietf.org/html/rfc6749) for more information.

The API also provides the identity of the authenticated user for the purpose of personalization.

### Getting Started

1. Install a Conversational Cloud Application. Here is a [guide to installing Conversational Cloud Applications](guides-le-applications-installing.html). The following two fields are mandatory for this flow, `grant_types` and `redirect_uris`. In addition, all normally mandatory fields, as detailed in the guide above, should be populated as well. Here is an example showing how to configure them:

```json
{"client_name": "<YOURAPPNAME>",
"grant_types": [
   "authorization_code",
   "refresh_token"
 ],
 "redirect_uris": [
   "http://{YOURAPPLICATIONDOMAIN}/{CALLBACK_PATH}"
 ]
}
```

After finishing the installation, please retrieve the AppInstall ID and secret that you will need to use when calling this API's endpoints.

2. **Retrieve your domain**. Use the [LivePerson Domain API](agent-domain-domain-api.html) to retrieve this information by providing the following service name:

	* sentinel

The flow goes like this:

1. User launches your application. We expect this flow to be the first thing the application does.
2. User is redirected to the LivePerson Identity Service. If they have an existing Conversational Cloud session (they have logged in previously in the same browser from which they're accessing the application), a code will be provided immediately. If they don't have an existing Conversational Cloud session, they will be redirected to a login page. Once they login, they'll receive the code from the Identity Service. This is achieved by using the [authorize method](/authorizing-liveengage-applications-methods-authorization-request.html).
3. Users are redirected back to the application site with the code provided in Step 1.
4. Your application accesses the LE Applications Authorization API to request a token with the user's code provided in Step 1. This is achieved by using the [token request](/authorizing-liveengage-applications-methods-token-request.html).
5. Your application receives an access token with which it can access Conversational Cloud services.
