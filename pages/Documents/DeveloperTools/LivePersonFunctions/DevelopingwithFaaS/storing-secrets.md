---
pagename: Storing Secrets
keywords:
sitesection: Documents
categoryname: "Developer Tools"
documentname: LivePerson Functions
subfoldername: Developing with FaaS
permalink: liveperson-functions-developing-with-faas-storing-secrets.html
indicator: both
redirect_from:
  - function-as-a-service-developing-with-faas-storing-secrets.html
  - liveperson-functions-development-storing-secrets.html
  - liveperson-functions-development-toolbelt.html#secret-storage-client
---

The LivePerson Functions' Secrets Storage allows you to centrally store, access and distribute secrets across your lambdas. Thereby, lambdas can use available access tokens, certificates and encryption keys to establish a connection to external systems. It is recommended to always use access tokens for authentication to external services.

Internally, LivePerson Functions uses [HashiCorp Vault](https://www.hashicorp.com/products/vault/) to encrypt your secrets using a 256-bit AES cipher in GCM mode with a randomly generated 96-bit nonce before writing them to its persistent storage.

Based on the below roles and permission users can interact with the Secret Storage via the **Settings** tab. The secrets are key-value pairs, where each value can be of type number, string or JSON.

{: .notice}
<br />
Try to avoid storing <b>user-credentials</b> within the Functions' Secrets Storage. <br />
Secrets need to be created <b>before</b> deploying the lambda. <br />
Deleting a used secret will <b>directly</b> impact lambdas using it. <br />
Created secrets can <b>not be viewed</b> in cleartext via the LivePerson Functions UI. 


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
    <td>This user can create new secrets or delete existing secrets.</td>
  </tr>
  <tr>
    <td>FaaS-Developer</td>
    <td>This user can only use all available secrets within functions via each secret's unique key.</td>
  </tr>
</tbody>
</table>

Within lambdas, the Toolbelt offers a convenient way of reading and updating secrets at runtime. See [this](function-as-a-service-developing-with-faas-toolbelt.html) document for further details.
