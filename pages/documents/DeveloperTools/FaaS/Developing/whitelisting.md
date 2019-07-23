---
pagename: Whitelisting Domains
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-whitelisting-domains.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-whitelisting-domains.html
---
In order to leverage external domains inside your function(s), you'll need to whitelist them. This can also be done in the **Settings** section. We have a proxy in place which will check incoming requests from functions and see if the requested URL is whitelisted.

![](img/faas-whitelisting.png)

Within the `lp-faas-toolbelt`, we provide a method that generates the required headers for communication with the proxy. A detailed explanation on how to use this feature is shown [here](function-as-a-service-deploying-functions.html#toolbelt).

Please make sure to whitelist the **fully qualified domain name**. E.g. If you visit `https://liveperson.com` the server will actually redirect to [https://www.liveperson.com](https://www.liveperson.com), which means the domains you need to whitelist would be **www.liveperson.com** **and** **liveperson.com**.

Generally, we will prevent the double whitelisting of a domain. The UI will also indicate that this occurred using a dedicated error message. We also perform validation on the provided domain in order to ensure it is a valid domain name. For now, we do not support the whitelisting of subdomains such as **.example.com**.

**Please be aware** that it might take up to **5 minutes** until the whitelisted domain becomes active on the proxy.
