---
pagename: Storing secrets
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-development-storing-secrets.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-storing-secrets.html
---

The LivePerson Functions' Secrets Storage allows you to centrally store, access and distribute secrets across your lambdas. Thereby, lambdas can use available access tokens, certificates and encryption keys to establish a connection to external systems.

**Note:** It is recommended to always use access tokens for authentication to external services. Try to avoid storing **user-credentials** within the Functions' Secrets Storage.

**Note:** Secrets should be created before deploying functions. In case you want to create a secret for a function that is already deployed, please redeploy the function.

Internally, LivePerson Functions uses [HashiCorp Vault](https://www.hashicorp.com/products/vault/) to encrypt your secrets using a 256-bit AES cipher in GCM mode with a randomly generated 96-bit nonce before writing them to its persistent storage.

Secrets can be maintained via the **Settings** tab as a key/value storage. Each value can be of type number, string or JSON.

<img src="img/faas-secret.png" alt="LivePerson Functions Secret Store" style="width:100%;"/>


Based on the [permission concept](function-as-a-service-getting-started.html#set-faas-permissions) for Functions, the following permissions for managing and using secrets can be configured across different users.


<table style="width: 100%;">
<thead>
  <tr>
    <th>User Role</th>
    <th>User Permission</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>FaaS-Admin</td>
    <td>Use this permission sparsely in order to keep the management of the secrets more restrictive and dedicated to a single user. Only the FaaS Admin is able to create, edit, delete & read a secret.</td>
  </tr>
  <tr>
    <td>FaaS-Developer</td>
    <td>This user is only able to use all available secrets within functions via each secret's unique key.</td>
  </tr>
</tbody>
</table>

Within lambdas, the Toolbelt offers a convenient way of reading and updating secrets at runtime. See [this](function-as-a-service-developing-with-faas-toolbelt.html) document for further details.
