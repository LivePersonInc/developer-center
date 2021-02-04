---
pagename: Whitelisting Domains
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-whitelisting-domains.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-whitelisting-domains.html
  - liveperson-functions-development-whitelisting-domains.html
  - liveperson-functions-development-whitelisting-domains.html#domains-whitelisted-by-default
---
In order to leverage external domains inside your function(s), you'll need to whitelist them. This can also be done in the **Settings** section. We have a proxy in place which will check incoming requests from functions and see if the requested URL is whitelisted. To ease the usage of some Liveperson APIs, their domains are [whitelisted by default](liveperson-functions-development-whitelisting-domains.html#domains-whitelisted-by-default).


<img src="img/faas-whitelisting.png" alt="LivePerson Functions Domain Whitelisting" style="width:100%;"/>

Within the `lp-faas-toolbelt`, we provide a method that generates the required headers for communication with the proxy. A detailed explanation on how to use this feature is shown [here](function-as-a-service-deploying-functions.html#toolbelt).

Please make sure to whitelist the **fully qualified domain name**. E.g. If you visit `https://liveperson.com` the server will actually redirect to [https://www.liveperson.com](https://www.liveperson.com), which means the domains you need to whitelist would be **www.liveperson.com** **and** **liveperson.com**.

Generally, we will prevent the double whitelisting of a domain. The UI will also indicate that this occurred using a dedicated error message. We also perform validation on the provided domain in order to ensure it is a valid domain name. For now, we do not support the whitelisting of subdomains such as **.example.com**.

**Please be aware** that it might take up to **5 minutes** until the whitelisted domain becomes active on the proxy.


### Domains Whitelisted by Default

To ease the usage of Liveperson APIs, the domains of the following services are whitelisted by default:
* `accountConfigReadOnly`
* `accountConfigReadWrite`
* `agentVep`
* `asyncMessaging`
* `asyncMessagingEnt`
* `engHistDomain`
* `leDataReporting`
* `msdkgw`
* `msgEwtAPI`
* `msgHist`
* `pusher`
* `rtbf`
* `smt`
* `swift`

If you have to whitelist a service that is not covered by default, get its domain by using the [Domain API](common-resources-domain-api.html).
