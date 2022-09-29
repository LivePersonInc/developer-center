---
pagename: Networking
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-networking.html
indicator: both
redirect_from:
  - function-as-a-service-foundations-networking.html
---

In this chapter, we want to explain the existing networking constraints and the overall process which allows functions to communicate to the outside world. It is essential to highlight that we limit the means of communication available to functions from the start. Functions can only use HTTP or HTTPS to connect to external services. For example, sending emails from a function would be solely possible if you leverage a web-based service.

{: .attn-note}
When using a TLS-encrypted endpoint via HTTPS (highly recommended), LivePerson is unable to provide you with any information of the communication apart from the reachability of your service (if a TCP connection has been established or not). LivePerson cannot monitor status codes or payloads of these connections.

To avoid abuse, you need to add external services to the account-specific allowed domain list ([allowlist](liveperson-functions-foundations-features.html#domain-allowlisting)). The domain checks are performed by the service that handles the outbound communication for the functions. The communication to external services runs via HTTP tunnels (via [CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)), see below.

<img class="fancyimage" alt="Functions: Tunneling" src="img/functions/functions_network_tunneling.png">

The function will reach out to the proxy using the `CONNECT`-method while specifying a target. If the target domain is not on the allowed domain list, it refuses the connection and aborts the request. If it is allowlisted, it will reach the target and establish a TCP connection. Once that is succeeded, it will respond successfully to the function and hand over the TCP connection to the target by tunnelling. The TLS handshake is then performed between the function and the target directly. Therefore, the proxy cannot listen to the ongoing communication between function and target. This implies that LivePerson does not have any insights from the point the TCP handshake happened.

{: .attn-alert}
We have a rate limit for outgoing calls of 20 requests/second per function. Every request beyond that limit will yield a 429.