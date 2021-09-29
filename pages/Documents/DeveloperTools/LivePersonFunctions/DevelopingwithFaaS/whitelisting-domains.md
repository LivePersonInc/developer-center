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

The communication from function(s) to public websites is controlled by a whitelist. To leverage a domain inside a function it needs to be added to the whitelist. This can be achieved with sufficient permissions via the **Settings** section.
Further during provisioning, a set of Liveperson APIs is added to a default whitelist. You can see them [here](liveperson-functions-development-whitelisting-domains.html#domains-whitelisted-by-default).

<img src="img/faas-whitelisting.png" alt="LivePerson Functions Domain Whitelisting" style="width:100%;"/>

Generally, we will prevent the double whitelisting of a domain. The UI will also indicate that this occurred using a dedicated error message. We also perform validation on the provided domain in order to ensure it is a valid domain name.

Please make sure to whitelist the **fully qualified domain name**. Further also simple wild-cards are allowed e.g. `*.example.com` but not `*.*.example.com`.

<div class="important">
  <ul>
    <li>Example:</li>
    <li>If you visit `https://liveperson.com` the server will redirect to https://www.liveperson.com</li>
    <li>This means you will need to whitelist both www.liveperson.com & liveperson.com or *.liveperson.com</li>
  </ul>
</div>

{:.notice}
**Please be aware** that it might take up to **10 minutes** until the whitelisted domain becomes active on the proxy.

Under the hood, the toolbelt configured the HTTP client to communicate with the proxy, which enforces the domain whitelist. Please see this [page](liveperson-functions-developing-with-faas-function-connectivity.html) for more information on general HTTP communication. 

{:.notice}
Be aware that the proxy will close the socket if the request is to a domain that is not whitelisted, yielding a `Socket is closed`-Error for the function.

### Default Domain Whitelist

The following domains are whitelisted during the provisioning process and will be leveraged inside the toolbelt for some features (e.g. LPClient):

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
