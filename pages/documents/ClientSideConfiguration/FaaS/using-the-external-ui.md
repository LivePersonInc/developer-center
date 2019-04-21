---
pagename: Using the External UI
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
permalink: function-as-a-service-using-the-external-ui.html
indicator: both
---

### External UI

To grant external developers access to FaaS, we created an External UI with the same possibilities you have currently within the LivePerson internal version of FaaS.

You can access this UI via (CSDS-Domain: faasUI):

* **Alpha**: [https://va-a.faasui.liveperson.net](https://va-a.faasui.liveperson.net)

* **APAC**: [https://sy.faasui.liveperson.net](https://sy.faasui.liveperson.net)

* **EMEA**: [https://lo.faasui.liveperson.net](https://lo.faasui.liveperson.net)

* **US**: [https://va.faasui.liveperson.net](https://va.faasui.liveperson.net)

However, it is recommended to use the [LivePerson Domain API](https://developers.liveperson.com/agent-domain-domain-api.html) to retrieve this information by providing the service name `faasUI` **dynamically**

To get access to this page, you need at least one of these permissions: **LPA**, **FaaS-Admin**, **FaaS-Developer**

FaaS Permissions are described in the section below.

### FaaS Permissions

There are 3 permissions for FaaS

* FaaS-Admin

* FaaS-Developer

* FaaS-Invocation

As **FaaS-Admin** you are allowed to read lambdas, manage the whitelist for external domains and manage secrets.

As **FaaS-Developer** you are allowed to manage lambdas, read whitelisted domains and read encrypted secrets.

As **FaaS-Invoker** you are only allowed to invoke lambdas externally.

<table>
  <tr>
    <td></td>
    <td></td>
    <td>FaaS-Admin</td>
    <td>FaaS-Developer</td>
    <td>FaaS-Invocation</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>create/edit/delete</td>
    <td>-</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>deploy</td>
    <td>-</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>lambda</td>
    <td>invoke</td>
    <td>-</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>whitelist</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>whitelist</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>read plain</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>secret</td>
    <td>read crypted</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
</table>


You can configure these permission in LiveEngage:

* Click on USERS and then Profiles

* Create/Edit a profile and add the permission you want for this profile:
