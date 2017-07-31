---
title: Configuration
level1: Documents
level2: Guides
level3: Authentication

permalink: guides-authentication-configuration.html
order: 3
indicator: both
---

### LiveEngage UI

For each account, the following parameters should be defined:

*	Implicit or Code Flow

*	OAuth 2.0 Authentication Endpoint (when web external window is used)

*	JS method name and context (when LiveEngage embedded window is used in Web)

*	OAuth 2.0 Token Endpoint (when Code Flow is used)

*	OAuth 2.0 Customer JWT customer public key

*	OAuth 2.0 ClientID

*	OAuth 2.0 ClientSecret (when Code Flow is used)

To define the OAuth 2.0 authentication:

1.	In LiveEngage, select Campaigns. In the footnote, select Data sources.

2.	In the Connectors area, next to the authentication server, click Configure. The Authentication Server page is displayed.

[Selecting Implicit Flow or Code Flow](img/authenticationserver.png)

{:start="3"}
3.	From the dropdown menu, select your preferred authentication method, and then complete the required fields

### Brand's Authorization Service Implementation

The brand's Authorization Service should have to register configuration of LivePerson’s authentication client:

*	LP-clientID

*	LP-clientSecret (when Code Flow is used)

*	LP Popup redirect URI (when external web window is used)

*	LP-Public key (when Implicit Flow with encryption is used)
