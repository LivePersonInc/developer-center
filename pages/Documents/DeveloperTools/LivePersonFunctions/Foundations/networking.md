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

In this chapter we want to explain the existing networking constraints and the overall process which allows functions to communicate to the outside world. It is important to highlight from the start that we limit the means of communication available to functions. It is not possible for functions to use any other protocol than http or https, that means for example that sending emails from a functions would be only possible if you leverage web-based service.

Additionally, the communication from the function to external services is bound to checks. This means you may not use external services that are not defined in your account specific allowed domain list ([whitelist](liveperson-functions-foundations-features.html#domain-whitelisting)). Those checks are performed by the service that handles the outbound communication for the functions. The communication to external services runs over http tunneling (via [CONNECT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT)). This flow is shown in the graphic below.

<img class="fancyimage" alt="Functions: Tunneling" src="img/functions/functions_network_tunneling.png">

As shown the function will reach out to the proxy using the `CONNECT`-method while specifying a target. If the target domain is not on the allowed domain list it refuses the connection and aborts the request. If it is included it will reach out the target and establish a TCP connection. Once that is succeeded it will return a successful response to the function and hand-over the TCP connection to the target by tunneling. The further SSL handshake is then performed between the function and the target directly. Therefore the proxy is not able to listen to the ongoing communication between function and target, this implies from the point the TCP handshake happened we don't have any insights.

{:.notice}
Please be aware that we have a rate limit for outgoing calls of 20 requests/second per function, every request beyond that limit will be yielding a 429
