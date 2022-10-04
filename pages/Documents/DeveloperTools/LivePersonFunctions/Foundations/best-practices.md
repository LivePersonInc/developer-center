---
pagename: Best Practices
keywords:
sitesection: Documents
categoryname: Developer Tools
documentname: LivePerson Functions
subfoldername: Foundations
permalink: liveperson-functions-foundations-best-practices.html
indicator: both
redirect_from:
  - function-as-a-service-foundations-best-practices.html
---

This chapter will highlight some best practices and tips for adequately leveraging the LivePerson Functions platform.

### Prefer Async/Await over Promises/Callbacks

Most of our APIs are based around Promises and therefore can be easily consumed in an `Async-Await` fashion. Leveraging [Async-Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) over [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)/Callbacks eases the error handling by allowing `try-catch` blocks. Furthermore, when using Promise-Chains, you can easily forget the `.catch` statement and only handle the happy path with `.then` resulting in unhandled promise rejections, without any logging insights, which usually manifests as a timeout error (as the callback never gets called). Additionally, it keeps the code shallow, avoiding deep nesting. This benefits the overall maintainability of functions.

For this reason, we advise strongly you to prefer Async/Await over Promises. That's also why most of our templates are specially designed to leverage `Async-Await`. However, you will still need to utilize the `callback` passed into the function to return a response for an invocation. As demonstrated in the following example code:

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
let cert = key = undefined;

async function lambda(input, callback) {
    try {
        const [clientCert, clientKey] = await lazyLoadClientBundle();
        const client = Toolbelt.MTLSClient({cert: clientCert, key: clientKey});
        const {statusCode, body} = await client.get('https://certauth.idrix.fr/json');
        console.info('Status Code', statusCode);
        console.info('Body', body)
        return callback(null, body);
    } catch(err) {
        console.error('Warn', err.message);
        console.error('Stack', err.stack);
        console.error('Name', err.name);
        return callback(null, `MTLS Failed`);
    }
}

async function lazyLoadClientBundle() {
    if (cert && key) {
        return [cert, key];
    }

    const client = Toolbelt.SecretClient();

    if (cert === undefined) {
        const {value} = await client.readSecret('cert');
        cert = value;
    }

    if (key === undefined) {
        const {value} = await client.readSecret('key');
        key = value;
    }

    return [cert, key];
}

}
```

The code above will change lazy load two secrets, leveraging a cache, to call an MTLS Endpoint. You can see proper error handling of errors returned by `client.get` and `Toolbelt.MTLSClient`. Finally, the provided `callback` is called with a response or a failure, based on the occurrence of any error in the process.

### Secret Caching

Our [Secret store](liveperson-functions-foundations-features.html#secret-store) allows functions to fetch, store and modify credentials securely. We strongly encourage caching the secret, loading it once, and then reusing it throughout the Lifecycle of a Function instance in productive use. Please see the code below for an example setup, which leverages local variables to achieve this. Be aware that this is only possible if the secrets are not modified and therefore are more or less static. You can adjust the caching to reuse the token for secrets like tokens while it is still valid and not yet expired.

Only store credentials in the secret store, other parameters like URLs or other configuration data are best placed as environment variables.

```javascript
const { Toolbelt } = require("lp-faas-toolbelt");
// It's important that this variable is out of any function scope
let secretCache = {};

async function lambda(input, callback) {
  try {
    const secret = await lazyLoadSecret('name');
    // Use secret from here on
  } catch(error) {
    // Error Handling
  }

}

async function lazyLoadSecret(name) {
    if (secretCache[name] !== undefined) {
        return secretCache[name];
    }

    const client = Toolbelt.SecretClient();
    const { value } = await client.readSecret(name);

    secretCache[name] = value;
    return value;
}
}
```

The code above will check if the value already exists in the `secretCache` and will read it from the secret store if that's not the case. `secretCache` must be outside of any function scope to ensure it does not get cleaned up.

### Configuration of Functions using Environment Variables

We strongly recommend the usage of environment variables to make functions easier to configure, even for less tech-savvy people. They do not need to understand the code but only adjust environment variables if necessary. Using environment variables improves the readability of the code by moving the configuration part into them. If you want to learn more about the environment variables setup, head over [here](liveperson-functions-getting-started-configuration.html#environment-variables).

{: .attn-alert}
Environment variables changes need a deployment to take effect. Environment variables are always a string, so you need to parse any non-string type before using it. Be aware of the [POSIX1.-2017-compliant](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap08.html) naming schema, environment variable names must not start with a digit and may consist solely of uppercase letters, digits, and the <underscore> ( '_' ).

### Design your function to be idempotent

As documented in our [Event Source Page](liveperson-functions-event-sources-overview.html), some of the Event Sources will actively react to errors raised by your function and re-invoke your function with the same event/payload following at least one approach. Usually, functions will be triggered only once, but they can also be invoked multiple times. Therefore you should design your function so that a retry will not have harmful side effects or cause unexpected behaviour on your side.

How this is achieved is highly linked to your actual use case and might involve additional API calls to verify the state before acting. You can also leverage the Context Session Store to save information that allows you to determine if a process was already performed or not.

### Avoid (CPU) blocking code

As our functions are based on Node.js, they leverage only one thread for execution, as this is how Node.js was designed. There is also official [documentation](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/) available from Node.js that highlights blocking code/libraries.

If you block the CPU or the [Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/), this can cause the ongoing request to be halted, resulting in a delay. This can increase the overall response time and, worst-case, exceed the execution timeout yielding an error. Especially cryptographic operations fall into this area.