---
pagename: Configuration
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Consumer Delegation
permalink: consumer-delegation-configuration.html
order: 2
indicator: both
---

### Conversational Cloud UI

Only the following parameters should be defined:

*	Code Flow

*	OAuth 2.0 Token Endpoint

*	OAuth 2.0 Client ID

*	OAuth 2.0 Client Secret

* 	JWT Public Key - Set field value to: "CONSUMER_DELEGATION"  

To define the OAuth 2.0 delegation:

1.	In Conversational Cloud, select Campaign Builder. In the footnote, select Data sources.

2.	In the Connectors area, next to the authentication server, click Configure. The Authentication Server page is displayed.

![Selecting Code Flow](img/authenticationserver.png)

{:start="3"}
3.	From the dropdown menu, select your preferred authentication method, and then complete the required fields

### Brand's Authorization Service Implementation

The brand's Authorization Service should have to register configuration of LivePerson’s authentication client:

*	Produce a client_id and secret for the LivePerson application

*	Set required scope for accessing the relevent APIs used by the Bots API Integration

*	Define LivePerson's redirect URI: https://{domain}/callback/{account_id}/redirectCode  
	**Note:** To retrieve your domain, use the [LivePerson Domain API](agent-domain-domain-api.html) and provide the service name “IDP”.
