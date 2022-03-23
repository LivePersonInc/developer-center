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

In this chapter, we want to explain the existing networking constraints and the overall process which allows functions to communicate to the outside world. It is essential to highlight that we limit the means of communication available to functions from the start. Functions cannot use any other protocol than HTTP or HTTPS. For example, sending emails from a function would be solely possible if you leverage a web-based service.

Additionally, the communication from the function to external services is bound to be checked. This means you may not use external services that are not defined in your account-specific allowed domain list ([allowlist](liveperson-functions-foundations-features.html#domain-whitelisting)). Those checks are performed by the service that handles the outbound communication for the functions. The communication to external services runs over HTTP tunnelling (via [CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)). This flow is shown in the graphic below.

<img class="fancyimage" alt="Functions: Tunneling" src="img/functions/functions_network_tunneling.png">

As shown, the function will reach out to the proxy using the `CONNECT`-method while specifying a target. If the target domain is not on the allowed domain list, it refuses the connection and aborts the request. If it is included, it will reach the target and establish a TCP connection. Once that is succeeded, it will respond successfully to the function and hand over the TCP connection to the target by tunnelling. The further SSL handshake is then performed between the function and the target directly. Therefore, the proxy cannot listen to the ongoing communication between function and target. This implies that we don't have any insights from the point the TCP handshake happened.

{:.notice}
We have a rate limit for outgoing calls of 20 requests/second per function. Every request beyond that limit will yield a 429.
