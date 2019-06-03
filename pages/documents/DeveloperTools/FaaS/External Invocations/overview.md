---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-external-invocations-overview.html
indicator: both
---

To give brands the option to call their FaaS functions from outside of LivePerson's platform, we provide an API for External Invocation. With this API, brands can call their functions externally, secured by OAuth 2.0.

Here is a short OAuth 2.0 introduction video, which covers general terms for the protocol:

<iframe width="560" height="315" src="https://www.youtube.com/embed/CPbvxxslDTU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Grant Types

OAuth2.0 offers several [grant types](https://oauth.net/2/grant-types/) for different use cases. FaaS supports the following two grant types:

1. [Client Credentials](function-as-a-service-external-invocations-client-credentials.html): This is the preferred way to authorize machine-to-machine communication. Choose this option if you want to call FaaS functions from an external system such as a cron job (see here for more information on [Client Credentials](https://oauth.net/2/grant-types/client-credentials/)).

2. [Authorization Code](function-as-a-service-external-invocations-authorization-code.html): This is a redirect based flow. Use this grant type if you want to call FaaS on behalf of a LiveEngeage user such as an Agent or Administrator (see here for more information on [Authorization Code](https://oauth.net/2/grant-types/authorization-code/)).
