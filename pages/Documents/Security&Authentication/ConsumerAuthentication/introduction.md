---
pagename: Introduction
redirect_from:
  - authentication-introduction.html
  - guides-authentication-introduction.html
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Consumer Authentication
permalink: consumer-authentication-introduction.html
root-link: true
level-order: 6
order: 1
indicator: both
---
Authenticated Consumers federates(SSO) your existing consumer authentication to LivePerson's Conversational Cloud platform during conversations. Once authenticated, the conversational cloud assigns a profile that is uniquely identified across the consumer's engagements (cross channels, cross-device, cross-browser). Also, consumer's information can be embedded within the federated token (custom claims) which can later be used for easily making purchases for existing consumers or Facilitating billing and payment conversations, etc… Authenticated customer information gives brands the confidence that each consumer is who they say they are, and that the relevant data for a personal conversation is at the disposal of the agent.

All authenticated customer information is encrypted and transferred over SSL, using the OAuth 2.0 and OpenID Connect standards, via a JSON Web Token. This ensures your customers’ data is secured and cannot 
be manipulated.

![Authenticated Customer Information in the Agent Workspace](img/authintro.png)

### Why authenticate consumers?

Authenticated customer information increases the security of the communication as the customer’s identity is verified. It also increases the efficiency of agents and ensures that each consumer receives personalized service. Finally, it enables brands to expand the types of services they offer to consumers during conversations, for example:

*	**Making purchases easier for existing consumers**: Once the consumer has logged into the brand's website, Conversational Cloud automatically brings the consumer's PII to the Agent Workspace, including the account number, package details, billing history, and other relevant account info. The conversation can immediately proceed to the new purchase, without the consumer having to identify themselves or make explanations about their account.  The agent can manage the inquiry quickly as they don’t have to open another application to get the information they need.

*	**Facilitating billing and payment conversations**: Once the consumer has logged into the brand’s website and started a conversation with an agent, the agent can quickly identify the most cost-effective way for the consumer to pay, according to the PII exposed during the authenticated chat.

### Terminology

*	**OAuth 2.0**: A standard way in which a user (referred to as Resource Owner) of one service (referred to as Resource Server) can delegate access to another service (referred to as Client Application). In this case, the client application is LivePerson service, the resource server is the Authentication Service of the customer, and the user/resource_owner is the customer of the customer (the consumer).

*	**OpenID Connect**: A simple identity layer on top of the OAuth 2.0 protocol. In this case, the user delegates the access to their identity properties to the other service. OpenID Connect has been adopted by [numerous companies](http://openid.net/foundation/sponsoring-members/) including Google, Cisco, RSA, Verizon, PayPal, PingIdentity, Symantec, and more.

*   **ID Token**: The ID Token is a security token that contains Claims about the Authentication of an End-User by an Authorization Server when using a Client, and potentially other requested Claims. The ID Token is represented as a JSON Web Token (JWT). [Read more](https://openid.net/specs/openid-connect-core-1_0.html).  
Currently, LivePerson suppoirts two methods for passing the ID Token: [implicit](https://oauth.net/2/grant-types/implicit/) or [code flow](https://oauth.net/2/grant-types/authorization-code/). 

*	**OAuth 2.0 code**: In some flows, instead of directly receiving the access_token, the Authentication Server provides a code which can be used only along with other secret information in order to get the access token. This way, the intermediator that passes the OAuth 2.0 code is not able to gain access to the data.

*	**Code Flow**: An authentication flow in which LivePerson Service gets the authentication assertion directly from the customer authorization server. In OAuth 2.0, this flow is implemented using the OpenID Connect Code Flow. This flow is also called Server-to-Server flow, or simply Server Flow.

*	**Implicit Flow**: In this flow, LivePerson Service does not get the authentication assertion directly from the customer server, but through the user. The assertion is signed by the customer Authorization Service, and optionally encrypted using the LivePerson Service key. In OAuth 2.0, it is implemented using the OpenID Connect [Implicit Flow](http://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth). This flow is also called Client Flow or Envelope Flow.

### Principles

**Industry Standards**

The solution is based on two industry standards: OAuth 2.0 and OpenID Connect. For OpenID Connect, Code Flow and Implicit Flow are used. These flows are described in [a section of the OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#Authentication).


### Prerequisites

The following prerequisites are required to authenticate a consumer:

*	oAuth2.0 authorization server that supports Implicit flow and Code flow.

*   The oAuth2.0 authorization server must return a valid (OpenID Connect) id_token.

**_For mobile app implementation_:**

*	Your mobile app users should be authenticated within your app.

**_For web implementation_:**

*	All authentication requests are sent over https. Your web server should listen on port 443 (https).

*	For embedded chat window: Your webpage must contain a JavaScript method that will be called by the LivePerson SDK to get the OAuth 2.0 code or JWT, and optionally a redirect URI.

*	For popup chat window: Your Authentication Service must expose an OpenID Connect Authorization Endpoint URL.

*	For the embedded window, a client side developer is needed.
