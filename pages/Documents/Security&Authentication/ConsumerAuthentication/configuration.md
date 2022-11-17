---
pagename: Configuration
redirect_from:
  - guides-authentication-configuration.html
  - authentication-configuration.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Consumer Authentication
permalink: consumer-authentication-configuration.html
order: 3
indicator: both
---

### Consumer Identity Provider

#### To define the OAuth 2.0 authentication

1.	In Conversational Cloud, go to [Management Console](https://knowledge.liveperson.com/admin-settings-management-console-overview.html)

2.	Search for "Consumer Identity Provider"

![Search for Consumer Identity Provider in the Management Console](img/mgmt_search_consumer_idp.png)

![Consumer Identity Provider in the Management Console](img/mgmt_consumer_idp.png)


{:start="3"}
3.  Click on 'Click to configure'

![Click to configure the Consumer Identity Provider](img/mgmt_consumer_idp_configure.png)

{:start="4"}
4. In section #2 — "Configure identity providers auth settings", select the preferred OAuth 2.0 Authentication Type, and then complete the required fields

![Select consumer authentication type](img/consumer_idp_select_type.png)

The following parameters should be defined:

* **OAuth 2.0 Authentication Type** - Implicit / Code Flow

* **Issuer Display Name** - The presentation name for the identity provider issuer

* **JWT issuer (iss)** - The identifier of the principal that issued the JWT. The 'iss' value is a case-sensitive string containing a URL value.

* **Authentication Endpoint** - An HTTPS URL OAuth 2.0 Authorization Endpoint that is used by LivePerson to initiate the authentication flow with your idenitity principal. (this endpoint is invoked in case the conversation window opens as an external window)

* **Token Endpoint** - An HTTPS URL for token exchange. used in Code Flow.

* **Client ID** - Used in Access Token Request

* **Client Secret** - Used in Access Token Request

* **Choose IDP Certificate Type** - JWT Public Key / JWKS Endpoint

* **JS Method Name** - The method that LivePerson will invoke on your pages to receive a code/id_token

* **JS Context** - An indicator of the method location when the Conversational Cloud embedded window is used in Web

### RFC Compliance

There are actually 2 versions to our Auth service — the "openID" (backwards compatible — default) version, and the "OAuth 2 RFC" (non default) version. If you already have a working consumer identity provider configured — chances are you're working with the "openID" version. If you're setting up a consumer identity provider for the first time — chances are you want the "OAuth 2 RFC" version.

Starting with version 9.3.0 of the Unified Window (May 2018) - all newly created consumer identity providers will use the "OAuth 2 RFC" version by default.

#### What's the difference

There are some small changes in the flow/implementation. All changes are only relevant to External windows and the way they interact with the Authentication Endpoint and the Token Endpoint:

*   In the "openID" version (External window) we call the Authentication Endpoint with a "redirect_uri" query parameter that redirects to the external window, and it contains encoded query parameters that the window needs. In the "OAuth 2 RFC" version the "redirect_uri" query param is clean and contains no query params of its own. What we used to pass as query parameters we now pass as a separate encoded "state" query parameter, which is parsed by our external window. To support this — the Authorization Endpoint must pass the "state" query param which it receives to the external window as is.

*   In the "openID" version (External code flow) we pass a single redirect_uri to the Token Endpoint (either provided by the customer page or "https://liveperson.net" by default), while the Authorization Endpoint uses the redirect_uri to redirect to the external window. In the "OAuth 2 RFC" version we always pass the location of the external window as the redirect_uri — to both the Authorization Endpoint and the Token Endpoint.

*   In the "openID" version (External implicit flow) we call the Authorization Endpoint with a query parameter "response_type=token" to denote that it's implicit flow and we expect to receive a JWT. In the "OAuth 2 RFC" version we use "response_type=id_token".

#### How to use the "OAuth 2 RFC" version for old connectors

Please contact your account team at LivePerson support.

### Brand's Authorization Service Implementation

The brand's Authorization Service should have to register configuration of LivePerson’s authentication client:

*	LP-clientID

*	LP-clientSecret (when Code Flow is used)

*	LP Popup redirect URI (when external web window is used)

*	LP-Public key (when Implicit Flow with encryption is used)