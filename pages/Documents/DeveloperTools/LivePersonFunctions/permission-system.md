---
pagename: Permission System
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
permalink: liveperson-functions-permission-system.html
indicator: both
---

There are three user permissions concerning Functions:

* FaaS-Admin - allowed to read `lambdas`, manage the allowlist for external domains and manage secrets. By default, this permission is set to 'ON' for all admins on the account. It is, however, possible to limit your admin's access as well. You may create a separate permission group for developers you wish to have part of the admin profile permissions and assign them with the necessary permissions by creating a custom profile.
* FaaS-Developer - allowed to manage `lambdas`, read allowlisted domains and read encrypted secrets.
* FaaS-Invocation - provides read access to all functions and permission to invoke them. The Agent profile has this permission enabled by default.

### Permissions by role
{: .important}
Only the Administrator role has all the Function permissions enabled by default as described below.

Agent Manager roles will have all Function permission disabled by default, and Agents only will be able to have FaaS-Invocation permissions.

<table class="thinner" style="width: 100%">
<thead>
  <tr>
    <th>Permission name </th>
    <th  style="text-align: center; vertical-align: middle;">Agent</th>
    <th  style="text-align: center; vertical-align: middle;">Agent Manager</th>
    <th  style="text-align: center; vertical-align: middle;">Campaign Manager</th>
    <th  style="text-align: center; vertical-align: middle;">Admin</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>FaaS-Admin</td>
    <td style="text-align: center; vertical-align: middle;">❌</td>
    <td style="text-align: center; vertical-align: middle;">🔒</td>
    <td style="text-align: center; vertical-align: middle;">❌</td>
    <td style="text-align: center; vertical-align: middle;">✅</td>
  </tr>
    <tr>
    <td>FaaS-Developer</td>
    <td style="text-align: center; vertical-align: middle;">❌</td>
    <td style="text-align: center; vertical-align: middle;">🔒</td>
    <td style="text-align: center; vertical-align: middle;">❌</td>
    <td style="text-align: center; vertical-align: middle;">✅</td>
  </tr>
    <tr>
    <td>FaaS-Invocation</td>
    <td style="text-align: center; vertical-align: middle;">🔒</td>
    <td style="text-align: center; vertical-align: middle;">🔒</td>
    <td style="text-align: center; vertical-align: middle;">❌</td>
    <td style="text-align: center; vertical-align: middle;">✅</td>
  </tr>
  </tbody>
</table>

If users who do not have an Administrator based role require any Functions-related permissions below, please manage the user profile permission from the User Management tab in your LivePerson account.
#### Table Legend
* ❌: Permission is Not available for the role.
* 🔒: Permission is disabled by default but can be enabled.
* ✅: Permission is available and enabled.

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

You may configure these permissions in Conversational Cloud. More info on adding permissions can be found [here](https://knowledge.liveperson.com/admin-settings-permissions-profiles.html). The process is simple:

* Select Users tab at the top of the Conversational Cloud UI and then click profiles.
* Create/Edit a profile and add the relevant FaaS-* permission to it.

![FaaSPermissionSystem](img/functions/functions_permission_system.png)

### Hints

* Please be aware that roles like Agent do not have the option to get FaaS Developer/Admin permission. You will need to use a different role in that case.
* The [CLI](liveperson-functions-foundations-liveperson-functions-cli.html) leverages the same permissions. Therefore you need to ensure that the user used has at least the FaaS-Developer permission.
* We suggest obeying the security principle of least privilege and, therefore, only selecting the minimal set of permissions, e.g. if the user will only invoke functions solely, the FaaS-Invocation is required.
