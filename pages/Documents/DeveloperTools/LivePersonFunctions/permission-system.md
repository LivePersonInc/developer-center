---
pagename: Permission System
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
permalink: liveperson-functions-permission-system.html
indicator: both
---

There are 3 user permissions pertaining to Functions:

* FaaS-Admin - allowed to read `lambdas`, manage the whitelist for external domains and manage secrets. This permission is by default set to 'ON' for all admins on the account. It is however possible to limit your admin's access as well. You can create a separate permission group for developers you wish to have part of the admin profile permissions and assign them with the relevant permissions as needed, by creating a custom profile.
* FaaS-Developer - allowed to manage `lambdas`, read whitelisted domains and read encrypted secrets.
* FaaS-Invocation - provides basic read access on all functions and permission to invoke them. The Agent profile has this permission enabled by default.

### Permissions by role

<div class="notice">Only users with an Administrator role automatically have all the relevant Function Permissions as is described below.</div>

Agent Manager roles will have all Function permission disabled by default and Agents only will be able to have FaaS-Invocation permissions.

<table class="thinner" style="width: 100%">
<thead>
  <tr>
    <th>Permission name	</th>
    <th  style="text-align: center; vertical-align: middle;">Agent</th>
    <th  style="text-align: center; vertical-align: middle;">Agent Manager</th>
    <th  style="text-align: center; vertical-align: middle;" >Campaign Manager</th>
    <th  style="text-align: center; vertical-align: middle;">Admin</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>FaaS-Admin</td>
    <td style="text-align: center; vertical-align: middle;" >❌</td>
    <td style="text-align: center; vertical-align: middle;" >🔒	</td>
    <td style="text-align: center; vertical-align: middle;" >❌</td>
    <td style="text-align: center; vertical-align: middle;" >✅</td>
  </tr>
    <tr>
    <td>FaaS-Developer</td>
    <td style="text-align: center; vertical-align: middle;" >❌</td>
    <td style="text-align: center; vertical-align: middle;" >🔒</td>
    <td style="text-align: center; vertical-align: middle;" >❌</td>
    <td style="text-align: center; vertical-align: middle;" >✅</td>
  </tr>
    <tr>
    <td>FaaS-Invocation</td>
    <td style="text-align: center; vertical-align: middle;" >🔒</td>
    <td style="text-align: center; vertical-align: middle;" >🔒</td>
    <td style="text-align: center; vertical-align: middle;" >❌</td>
    <td style="text-align: center; vertical-align: middle;" >✅</td>
  </tr>
  </tbody>
</table>

If users who do not have an Administrator based role require any of the Functions related permissions below, please manage the user profile permission from the User Management tab in your LivePerson account.
#### Table Legend
* ❌ : Permission is Not available for the Role.
* 🔒 : Permission is disabled by default, but can be enabled.
* ✅ : Permission is available and enabled.

### Permissions details

<table class="thinner" style="width: 100%">
<thead>
  <tr>
    <th>Component</th>
    <th>Action</th>
    <th>FaaS-Admin</th>
    <th>FaaS-Developer</th>
    <th>FaaS-Invocation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>lambda</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
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
    <td>read (value is obfuscated)</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>schedule</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>schedule</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>emailReport settings</td>
    <td>create/edit/delete</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>emailReport recipients</td>
    <td>create/delete</td>
    <td>✅</td>
    <td>✅</td>
    <td>-</td>
  </tr>
  <tr>
    <td>emailReport</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
   <tr>
    <td>logs</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>logs</td>
    <td>create</td>
    <td>✅</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>reporting</td>
    <td>read</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</tbody>
</table>

You can configure these permissions in Conversational Cloud. More info on adding permissions can be found [here](https://knowledge.liveperson.com/admin-settings-permissions-profiles.html),the process is simple:

* Click on the users tab at the top of the Conversational Cloud UI and then click profiles.
* Create/Edit a profile and add the relevant FaaS-* permission to it.

![FaaSPermissionSystem](img/faas-permission-system.png)

### Hints

* Please be aware that roles like Agent don't have the option to get FaaS Developer/Admin permission. You will need to use a different role in that case.
* The [CLI](liveperson-functions-foundations-liveperson-functions-cli.html) leverages the same permissions, therefore you need to make sure that the user used has at least the FaaS-Developer permission.
* We suggest obeying the security principle of least privilege and therefore only selecting the minimal set of permissions. E.g. If the user will be only using function (invoking). Then the FaaS-Invocation is only required.
