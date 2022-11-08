---
pagename: Introduction
sitesection: Documents
categoryname: "Security & Authentication"
documentname: Consumer Delegation
permalink: consumer-delegation-introduction.html
root-link: true
level-order: 6
order: 1
indicator: both
---

With Consumer Delegation brands can delegate consumer access to their APIs. Using this flow, brands can challenge a consumer identity verification during an open conversation and sending an OAuth 2.0 access token to a Bot.

In this flow, the consumer will not be considered as an Authenticated Consumer within LivePerson Conversation Cloud. The flow is only used for delegating access to the Bot to make sequential API calls (API Integrations).
{: .attn-alert}

Delegation flow is based on OAuth 2.0 [Authorization Code Flow](https://tools.ietf.org/html/rfc6749#section-1.3.1). Access Tokens are stored within the context of the current conversation and are not shared with other conversations. Refresh Tokens are ignored and not stored. In case of an expired access token, the consumer will be re-challenged to verify his identity.

High-level flow diagram:
 <img class="fancyimage" style="width:700px" src="img/ConvoBuilder/delegation_flow.png" alt="">

Example of an identity verification challange sent by a Bot:
 <img class="fancyimage" style="width:500px" src="img/ConvoBuilder/creds_consumer_auth_2.png" alt="">

### Why delegating consumer's access to a Bot?

Read [Using Consumer Access Tokens](conversation-builder-integrations-using-consumer-access-tokens.html)

### Terminology

* **OAuth 2.0**: A standard way in which a user (referred to as Resource Owner) of one service (referred to as Resource Server) can delegate access to another service (referred to as Client Application). In this case, the client application is LivePerson service, the resource server is the Authentication Service of the customer, and the user/resource_owner is the customer of the customer (the consumer).

* **OAuth 2.0 code**: In some flows, instead of directly receiving the access_token, the Authentication Server provides a code which can be used only along with other secret information in order to get the access token. This way, the intermediator that passes the OAuth 2.0 code is not able to gain access to the data.

* **Code Flow**: An authentication flow in which LivePerson Service gets the authentication assertion directly from the customer authorization server. In OAuth 2.0, this flow is implemented using the OpenID Connect Code Flow. This flow is also called Server-to-Server flow, or simply Server Flow.

* **Access Token**: Stored in the context of the conversation and used to make sequantial API calls. [OAuth 2.0 Access Token, RFC specification](https://tools.ietf.org/html/rfc6749#section-1.4)

* **Refresh Token**: Ignored and not stored. [OAuth 2.0 Refresh Token, RFC specification](https://tools.ietf.org/html/rfc6749#section-1.5)

### Principles

**Industry Standards**

The solution is based on OAuth 2.0 industry standard, Using the Code Flow. The flow is described in [a section of the OAuth 2.0 RFC specification](https://tools.ietf.org/html/rfc6749#section-1.3.1).

### Prerequisites

The following prerequisites are required to delegate access:

* OAuth 2.0 authorization server that supports Code flow.

* The OAuth 2.0 authorization server must return a valid access token.
