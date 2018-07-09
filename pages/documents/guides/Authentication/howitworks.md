---
title: How It Works
level1: Documents
level2: Guides
level3: Authentication

permalink: authentication-how-it-works.html
order: 4
indicator: both
---

### Sign-on Flow: Web Code Flow (Embedded window)

1.	A consumer logs into the authenticated area, and clicks on a chat invitation.

2.	The LivePerson Web SDK calls the configured webpage JavaScript method to supply an Authorization Code. The web app verifies that the consumer is logged in (otherwise it asks the user to log in according to the brand’s standards), and then issues an Authorization Code. The Authorization Code is supplied back to the LivePerson Web SDK via a callback method.

3.	The authorization code is passed to the LivePerson Service by the embedded window while sending the chat request.

4.	The LivePerson Service processes the chat request, and queries the brand’s Token Endpoint with the Authentication Code it just received. In response, the brand's Token Endpoint Service validates the Authentication Code and sends an OpenID Connect token with all visitor attributes.

5.	When the OpenID Connect token is successfully received by the LivePerson Service, the chat process starts.

_Notes_:

*	_For external window, the consumer clicks the chat invitation and a login screen (the Authentication Endpoint) is opened. After logging in the consumer is redirected to the external window with the Authorization code provided as a query/hash param_.
*	_Visitor attributes can be added to the OpenID Connect token. Those visitor attributes will be displayed to the agent in the Agent Workspace, next to a "secure" icon_.
*	_Consumers who are not currently logged in, or whose login effort failed, are unable to start a conversation with the designated agent. Instead, they are redirected to the Offline survey_.

### Sign-on Flow: Web Implicit Flow

Implicit Flow is very similar to Code Flow, but with the following two differences:

*	Instead of generating an Authorization Code, the Brand Service generates an OpenID Connect token. This type of token contains the user information and is not just a reference. The user information is signed using the brand keys and can also be encrypted for LivePerson.

*	When the LivePerson Service receives this token, instead of validating it with the Brand Service, it verifies the signature and decrypts its content.

*	For external widnow, when the Authorization Endpoint redirects to the external window it passes the token as a query/hash param "code", "token" or "id_token".

_Note: Consumers who are not currently logged in are unable to start a conversation with the designated agent. Instead, they are redirected to the Offline survey_.

![Implicit Flow with external (popup) window](img/implicitpopup.png)

![Implicit Flow with embedded window](img/implicitembedded.png)

### Sign-on Flow: Mobile SDK Code Flow

1.	The brand’s mobile app initiates and sets up the LivePerson SDK.

2.	The LivePerson SDK starts an unauthenticated session by connecting to the LivePerson Service.

3.	The SDK triggers a callback that requests the OAuth 2.0 code from the mobile app for authentication purposes.

4.	The app generates the OAuth 2.0 code. This process is usually completed using the authorization endpoint in the brand’s Authorization Server. The exact flow is dependent upon the brand’s decisions.

5.	The SDK informs the LivePerson Service that it can authenticate the session and attaches the OAuth 2.0 code.

6.	The LivePerson Service processes the chat request, and queries the brand’s Visitor Authentication Service with the Authentication Code it just received. In response, the brand's Visitor Authentication Service validates the Authentication Code and sends an OpenID Connect token with all visitor attributes.

7.	The brand’s Authorization Server responds with the token and JWT.

_**Important note: In the current implementation of the SDK the host app should provide the OAuth 2.0 code as a parameter when starting the conversation and should not rely on step [3]**_.

![Mobile SDK Code Flow](img/mobilesdkcodeflow.png)

### Sign-on flow: Mobile SDK Implicit Flow

1.	The customer mobile app calls the LivePerson SDK.

2.	The LivePerson SDK starts an unauthenticated session by connecting to the LivePerson Service.

3.	The LivePerson Service asks the LivePerson SDK to authenticate the user since it is demanded in the customer configuration.

4.	The SDK triggers a callback that requests the id_token(JWT) from the mobile app for authentication purposes.

5.	The app generates the JWT. This process is usually completed using the authorization endpoint in the brand’s Authorization Server. The exact flow is dependent upon the brand’s decisions.

6.	The SDK informs the LivePerson Service that it can authenticate the session and attaches the JWT.

7.	The LivePerson Service unpacks and decrypts (if needed) the JWT, validates the authentication assertion, and then uses it.

8.	The LivePerson Service informs the SDK when the JWT expires (returns to step 4).

_**Important note: In the current implementation of the SDK the host app should provide the id_token(JWT) as a parameter when starting the conversation and should not rely on step [4]**_.

![Implicit Flow in the mobile SDK. Demonstrates how expiration and user logout is handled](img/mobilesdkimplicitflow.png)

### Authentication Expiration Flow

Every JWT will contain an expiration time. Upon JWT expiration, the customer side will be asked to provide a refreshed JWT.
