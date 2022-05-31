---
pagename: Configuration
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Getting Started
permalink: liveperson-functions-getting-started-configuration.html
indicator: both
---

This page will introduce you to all available methods to configure your functions. Please also look at the [allowlisting domains](liveperson-functions-foundations-features.html#domain-allowlisting) as this is required to access external resources.

### Environment Variables

You can use environment variables to make your function more configurable without adjusting the code. Access to the environment variables is possible at runtime using `process.env.NAME_OF_ENV` property. The LivePerson Functions platform does reserve a few environment variables for internal use. In case of a conflict, you will see the following message: `Variable name is reserved and thereby blocked for use.`

<img class="fancyimage" alt="Functions: Reserved Environment Variable" src="img/functions/functions_env_reserved.png">

#### Creating an Environment Variable

You can create a new environment variable by pressing the "Set variable"-button within the side panel of the editor UI.

<img class="fancyimage" alt="Functions: Environment Variable Sidepannel" src="img/functions/functions_env_sidepannel.png">

Once you click the button, a dialogue window will open and ask you to enter a variable name and its value.

<img class="fancyimage" alt="Functions: Environment Variable Creation" src="img/functions/functions_env_creation.png">

Any environment variable will be checked against the following restrictions:

* Is it a reserved environment variable?
* Is the name exceeding 200 characters?
* Is the value exceeding 200 characters?

#### Updating an Environment Variable

{: .notice}
Changes made to the environment variable at runtime via `process.env` are local to the instance of the function. They are not propagated to the UI or any other running instance.

The modification of existing environment variables is possible via the side panel of the editor UI. Select the environment variable you want to change by clicking its name on the list.

<img class="fancyimage" alt="Functions: Environment Variable update Sidepannel" src="img/functions/functions_env_update_sitepannel.png">

Once you click on "Set", you will have to save the function to store the changes permanently. Environment variables are static.

{: .important}
Changing an environment variable via the UI will not automatically push this modification to any function in a productive state. Instead, you will need to redeploy the function to have the change take effect. 

<img class="fancyimage" alt="Functions: Environment Variable update" src="img/functions/functions_env_update.png">

#### Accessing Environment Variables

Your configured environment variables are accessible via `process.env` from within the code. You have both read and write access to the environment variables you configured. Be aware that environment variables are interpreted as strings within JavaScript by default. Hence if you want to use special types like JSON (e.g. `JSON.parse`) or a Number (e.g. `Number.parseInt`), you will have to parse them first.

```javascript
    // Accessing an environment variable and using it as string
    const myBackendUrl = process.env.MY_BACKEND_URL;

    // Accessing an environment variable and parsing it to ensure proper type
    const myBackendVersion = Number.parseInt(process.env.MY_BACKEND_VERSION, 10);
```

### Secrets

{: .notice}
We discourage storing credentials that cannot be easily revoked, like passwords. If possible, we recommend using credentials for token-based authentication methods instead.

We offer secure storage for storing sensitive data such as credentials and tokens. Functions can read and write to this store at runtime. By default, your store will contain secrets created as part of the [provisioning](liveperson-functions-provisioning.html).

#### Creation of a secret

Secrets can only be created through the web interface and not via CLI. To add a secret, you need to head to the "Settings"-Page with a user meeting the required [permissions](liveperson-functions-permission-system.html). Then select the "Secret Storage"-Tab where you should see a list of existing secrets and a button "Add a secret".

Any secret will be checked against the following restrictions:

* Is it a secret that was created during provisioning?
* Is the name exceeding 100 characters?
* Is the name containing any characters that are not `Alphanumeric`, `_` or `-`?
* Is the value exceeding 10000 characters?

<img class="fancyimage" alt="Functions: Secret Overview Page" src="img/functions/functions_secret_page.png">

After clicking the button, you will be presented with a dialogue that allows you to select a name and provide the content of the secret.

<img class="fancyimage" alt="Functions: Secret Creation" src="img/functions/functions_secret_creation.png">

You can select the data type of the secret from the drop-down menu. This only modifies the validation and does not influence the [access](#accessing-secrets) to the secrets later. For example, if you select `JSON`, it will check the syntax of the JSON and reject faulty JSON strings.

<img class="fancyimage" alt="Functions: Secret Type Dropdown" src="img/functions/functions_secret_type.png">

You might notice that you cannot see the contents of the secret after the creation. This is intended and related to security restrictions. Therefore, updating a secret is only possible by deleting and recreating the secret. Secrets can be updated during the runtime by the function. The next chapter will explain the details of this process.

#### Updating Secrets (only at Runtime)

As mentioned above, we do not allow the modification of secrets from the UI. You may, however, change them at runtime. You can leverage the `SecretClient`, which is available in our [Toolbelt](liveperson-functions-foundations-features.html#toolbelt) for this task. Please notice the `try`-`catch` block in the code below. This highlights the importance of error handling, since accessing a secret can fail.

**Async-Await Style:**

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    // This needs to be initialized only once, than the reference can be reused
    const secretClient = Toolbelt.SecretClient(); 

    try {
      const updatedSecret = { key: 'YOUR_SECRET', value: 'some updated secret' };
      await secretClient.updateSecret(updatedSecret);
    } catch(error) {
      //Handle the error in a way it makes sense for you, you may attempt a retry
      console.error(`received following error message: ${error.message}`);
    }
```

**Promise Style:**

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    // This needs to be initialized only once, than the reference can be reused
    const secretClient = Toolbelt.SecretClient();

    const updatedSecret = { key: 'YOUR_SECRET', value: 'some updated secret' };
    secretClient.updateSecret(updatedSecret)
            .then( () => {
                // Secret was successfully updated
            })
            .catch(error => {
                 //Handle the error in a way it makes sense for you, you may attempt a retry
                console.error(`received following error message: ${error.message}`);
            });
```

#### Accessing Secrets

Access to the secrets of the account is possible at runtime thanks to the `SecretClient` offered by our [Toolbelt](liveperson-functions-foundations-features.html#toolbelt). Please notice the `try`-`catch` block in the code below. This highlights the importance of error handling, since accessing a secret can fail.

**Async-Await Style:**

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    // This needs to be initialized only once, than the reference can be reused
    const secretClient = Toolbelt.SecretClient();

    try {
      // This call will always attempt to get the most recent version of the secret.
      // There is no caching here
      const { key, value } = await secretClient.readSecret('YOUR_SECRET');
    } catch(error) {
      //Handle the error in a way it makes sense for you, you may attempt a retry
      console.error(`received following error message: ${error.message}`);
    }
```

**Promise Style:**

```javascript
    const { Toolbelt } = require('lp-faas-toolbelt');
    // This needs to be initialized only once, than the reference can be reused
    const secretClient = Toolbelt.SecretClient();

    // This call will always attempt to get the most recent version of the secret.
    // There is no caching here
    secretClient.readSecret('YOUR_SECRET')
            .then( ({ key, value }) => {
                // Start using secret here
            })
            .catch(error => {
                //Handle the error in a way it makes sense for you, you may attempt a retry
                console.error(`received following error message: ${error.message}`);
            });
```

{: .important}
If you know that your secret will not be changing as it is static and not getting updated at runtime. You may load it once into memory and then store it. This example code shows a lazy initialization of a secret using a variable.

```javascript
const { Toolbelt } = require('lp-faas-toolbelt');
const secretClient = Toolbelt.SecretClient();
let cachedSecret = undefined;

/**
 * lazyReadSecret will check if the secret is already initialized.
 * Else it will get the latest version from the secret store and
 * cache it for future reference.
 */
async function lazyReadSecret() {
    if (cachedSecret !== undefined) {
        return cachedSecret;
    }

    const { value } = await secretClient.readSecret('YOUR_SECRET');
    cachedSecret = value;
    return value;
}


function lambda(input, callback) {
    ...

    // Here we are reading the secret
    mySecret = await lazyReadSecret();

    ...
}
```

### Dependencies

The functions have access to a set of libraries, which we define in our functions template. You are not able to add your dependencies. Please see the following list of dependencies that are available to you.

<table class="thinner" style="width: 100%">
<thead>
  <tr>
    <th>Dependency Name</th>
    <th  style="text-align: center; vertical-align: middle;" >Documentation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>jsforce</td>
    <td style="text-align: center; vertical-align: middle;" ><a href="https://jsforce.github.io/">https://jsforce.github.io/</a></td>
  </tr>
  <tr>
    <td>oauth-1.0a</td>
    <td style="text-align: center; vertical-align: middle;" ><a href="https://www.npmjs.com/package/oauth-1.0a">https://www.npmjs.com/package/oauth-1.0a</a></td>
  </tr>
  <tr>
    <td>luxon</td>
    <td style="text-align: center; vertical-align: middle;" ><a href="https://moment.github.io/luxon/#/?id=luxon">https://moment.github.io/luxon/#/?id=luxon</a></td>
  </tr>
  <tr>
    <td>lodash</td>
    <td style="text-align: center; vertical-align: middle;" ><a href="https://lodash.com/">https://lodash.com/</a></td>
  </tr>
  <tr>
    <td>lp-faas-toolbelt</td>
    <td style="text-align: center; vertical-align: middle;" ><a href="https://developers.liveperson.com/liveperson-functions-foundations-features.html#toolbelt">https://developers.liveperson.com/liveperson-functions-foundations-features.html#toolbelt</a></td>
  </tr>
  </tbody>
</table>
