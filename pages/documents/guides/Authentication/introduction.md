---
title: Introduction
level1: Documents
level2: Guides
level3: Authentication

permalink: guides-authentication-introduction.html
root-link: true
level-order: 6
order: 1
indicator: both
---
With Authenticated Customer Information, consumers that have logged into your website or app and initiated a chat show up as being authenticated. The Agent Workspace then displays, in real-time, the correct and verified PII (Personally Identifiable Information) of the authenticated consumer. Agents are able to easily identify which consumer data is authenticated in the CRM, and which has arrived from the page.

[//]: # (TODO:Cleanup - This is the introduction to authentication, but we start off by discussing customer information and PII - we should start by discussing security, identity and logging in. Also, we probably shouldn't call the feature "Authenticated Customer Information", but just "Authentication". Verify with product.)

All authenticated customer information is encrypted and transferred over SSL, using the OAuth 2.0 and OpenID Connect standards, via a JSON Web Token. This ensures your customers’ data stays safe and cannot be manipulated.

Authenticated Customer Information gives brands the confidence that each consumer is who they say they are, and that the relevant data for a personal conversation is at the disposal of the agent.

![Authenticated Customer Information in the Agent Workspace](img/authintro.png)

This document describes the main components and high level architecture of the consumer SSO solution for LivePerson messaging and chat, for both mobile and web.

### Why use Authenticated Customer Information?

Authenticated Customer Information increases the security of the communication as the customer’s identity is verified. It also increases the efficiency of agents and ensures that each consumer receives a personalized service. Finally, it enables brands to expand the types of services they offer to consumers during conversations, for example:

*	**Making purchases easier for existing consumers**: Once the consumer has logged into the brand's website, LiveEngage automatically brings the consumer's PII to the Agent Workspace, including the account number, package details, billing history, and other relevant account info. The conversation can immediately proceed to the new purchase, without the consumer having to identify themselves or make explanations about their account.  The agent can manage the inquiry quickly as they don’t have to open another application to get the information they need.

*	**Facilitating billing and payment conversations**: Once the consumer has logged into the brand’s website and started a conversation with an agent, the agent can quickly identify the most cost-effective way for the consumer to pay, according to the PII exposed during the authenticated chat.

### Terminology

*	**OAuth 2.0**: A standard way in which a user (referred to as Resource Owner) of one service (referred to as Resource Server) can delegate credentials to another service (referred to as Client Application). In this case, the client application is LivePerson Service, the resource server is the Authentication Service of the customer, and the user/resource_owner is the customer of the customer (the consumer).

*	**OpenID Connect**: A simple identity layer on top of the OAuth 2.0 protocol. In this case, the user delegates the access to their identity properties to the other service. OpenID Connect has been adopted by [numerous companies](http://openid.net/foundation/sponsoring-members/){:target="_blank"} including Google, Cisco, RSA, Verizon, PayPal, PingIdentity, Symantec, and more.

*	**OAuth 2.0 code**: In some flows, instead of directly receiving the access_token, the Authentication Server provides a code which can be used only along with other secret information in order to get the access token. This way, the intermediator that passes the OAuth 2.0 code is not able to gain access to the data.

*	**Code Flow**: An authentication flow in which LivePerson Service gets the authentication assertion directly from the customer authorization server. In OAuth 2.0, this flow is implemented using the OpenID Connect Code Flow. This flow is also called Server-to-Server flow, or simply Server Flow.

*	**Implicit Flow**: In this flow, LivePerson Service does not get the authentication assertion directly from the customer server, but through the user. The assertion is signed by the customer Authorization Service, and optionally encrypted using the LivePerson Service key. In OAuth 2.0, it is implemented using the OpenID Connect [Implicit Flow](http://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowAuth){:target="_blank"}. This flow is also called Client Flow or Envelope Flow.

### Principles

**Industry Standards**

The solution is based on two industry standards: OAuth 2.0 and OpenID Connect. For OpenID Connect, Code Flow and Implicit Flow are used. These flows are described in [a section of the OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#Authentication){:target="_blank"}.

[Google OpenID Connect](https://developers.google.com/identity/protocols/OpenIDConnect?hl=en){:target="_blank"} will be used as a reference implementation for the Code Flow. This means that the LivePerson solution will be built and tested against Google OpenID Connect servers. Our beta environments will use the Google Identity provider for our end-to-end tests. Customers should follow the Google identity response format to use the LivePerson Authentication Service.

### Prerequisites

Before you can use Authenticated Customer Information, you are required to prepare the following:

_For mobile app implementation_:

*	Your mobile app users should be able to log into your backend in a secure manner.

*	Your backend must be able to supply, upon request during the session, an OAuth 2.0 code (for Code Flow) or a JWT token (for Implicit Flow).

_For web implementation_:

*	All authentication requests are sent over https. Your web server should listen on port 443 (https).

*	For embedded chat window: Your webpage must contain a JavaScript method that will be called by the LivePerson SDK to get the OAuth 2.0 code or JWT, and optionally a redirect URI.

*	For popup chat window: Your Authentication Service must expose an OpenID Connect Authorization Endpoint URL.

*	For the embedded window, a client side developer is needed.
