---
pagename: Overview
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: External Invocations
permalink: liveperson-functions-external-invocations-overview.html
indicator: both
redirect_from:
  - liveperson-functions-external-invocations.html
  - function-as-a-service-external-invocations-overview.html
---

To give brands the option to call their functions from outside of LivePerson's platform, we provide an API for External Invocation. With this API they can call their functions externally, secured by OAuth 2.0.

<div class="important">Since the triggering source of the External Invocation is not a LivePerson system, the event connected to the function will not have any effect. In contrast to a function's response that is connected to an event, the response is just returned to the external system without triggering any behaviour at LivePerson systems.</div>

Here is a short OAuth 2.0 introduction video: [link](https://www.youtube.com/watch?v=CPbvxxslDTU)

### Grant Types
OAuth 2.0 offers several [grant types](https://oauth.net/2/grant-types/) for different use cases. LivePerson Functions supports the following two grant types:

1. [Client Credentials](function-as-a-service-external-invocations-client-credentials.html): This is the preferred way to authorize for machine-to-machine communication. Choose this option if you want to call functions from an external system such as a cron job (see [here](https://oauth.net/2/grant-types/client-credentials/) for more infomation on Client Credentials).
2. [Authorization Code](function-as-a-service-external-invocations-authorization-code.html): This is a redirect based flow. Use this grant type if you want to call Functions on behalf of a Conversational Cloud user such as an Agent or Administrator(see [here](https://oauth.net/2/grant-types/authorization-code/) for more infomation on Authorization Code).
