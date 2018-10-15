---
pagename: Configuration
redirect_from:
  - guides-authentication-configuration.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Authentication

permalink: authentication-configuration.html
order: 3
indicator: both
---

### LiveEngage UI

For each account, the following parameters should be defined:

*	Implicit or Code Flow

*	OAuth 2.0 Authentication Endpoint (when separate browser window is used)

*	OAuth 2.0 Token Endpoint (when Code Flow is used)

*	OAuth 2.0 JWT Public Key

*	OAuth 2.0 Client ID

*	OAuth 2.0 Client Secret (when Code Flow is used)

*	JS method name and context (when LiveEngage embedded window is used in Web)

To define the OAuth 2.0 authentication:

1.	In LiveEngage, select Campaigns. In the footnote, select Data sources.

2.	In the Connectors area, next to the authentication server, click Configure. The Authentication Server page is displayed.

![Selecting Implicit Flow or Code Flow](img/authenticationserver.png)

{:start="3"}
3.	From the dropdown menu, select your preferred authentication method, and then complete the required fields

### RFC Compliance

There are actually 2 versions to our Auth service - the "openID" (backwards compatible - default) version, and the "OAuth 2 RFC" (non default) version. If you already have a working authentication configured - chances are you're working with the "openID" version. If you're setting up authentication for the first time - chances are you want the "OAuth 2 RFC" version.

Starting with version 9.3.0 of the Unified Window (May 2018) - all newly created authentication connectors will use the "OAuth 2 RFC" version by default.

#### What's the difference

There are some small changes in the flow/implementation. All changes are only relevant to External windows and the way they interact with the Authentication Endpoint and the Token Endpoint:

*   In the "openID" version (External window) we call the Authentication Endpoint with a "redirect_uri" query parameter that redirects to the external window, and it contains encoded query parameters that the window needs. In the "OAuth 2 RFC" version the "redirect_uri" query param is clean and contains no query params of its own. What we used to pass as query parameters we now pass as a separate encoded "state" query parameter, which is parsed by our external window. To support this - the Authorization Endpoint must pass the "state" query param which it receives to the external window as is.

*   In the "openID" version (External code flow) we pass a single redirect_uri to the Token Endpoint (either provided by the customer page or "https://liveperson.net" by default), while the Authorization Endpoint uses the redirect_uri to redirect to the external window. In the "OAuth 2 RFC" version we always pass the location of the external window as the redirect_uri - to both the Authorization Endpoint and the Token Endpoint.

*   In the "openID" version (External implicit flow) we call the Authorization Endpoint with a query parameter "response_type=token" to denote that it's implicit flow and we expect to receive a JWT. In the "OAuth 2 RFC" version we use "response_type=id_token".

#### How to use the "OAuth 2 RFC" version for old connectors

Please contact your account team at LivePerson support.

### Brand's Authorization Service Implementation

The brand's Authorization Service should have to register configuration of LivePerson’s authentication client:

*	LP-clientID

*	LP-clientSecret (when Code Flow is used)

*	LP Popup redirect URI (when external web window is used)

*	LP-Public key (when Implicit Flow with encryption is used)
