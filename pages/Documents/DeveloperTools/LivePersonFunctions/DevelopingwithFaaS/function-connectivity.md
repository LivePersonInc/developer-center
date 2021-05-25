---
pagename: Function Connectivity
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-function-connectivity.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-function-connectivity.html
---

We do have limitations in place in regards to the connectivity of a function. Only HTTP/HTTPS-based protocols are supported. The outgoing communication routes through a proxy, which enforces the [whitelist](liveperson-functions-development-whitelisting-domains.html) and the [rate limit](liveperson-functions-developing-with-faas-limitations-restrictions.html#connectivity).

Right now we offer a [HTTPClient](liveperson-functions-developing-with-faas-toolbelt.html#http-client) and a [MTLSClient](liveperson-functions-developing-with-faas-toolbelt.html#mtls-client) over our Toolbelt, that are configured to communicate with the proxy. If the request is trying to access a destination that was not whitelisted, the proxy will close the connection yielding a socket closed error.
