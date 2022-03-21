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

In this chapter we will highlight some best practices and tips for properly leveraging the LivePerson Functions platform.

### Prefer Async/Await over Promises/Callbacks

Most of our APIs are based around Promises and therefore can be easily consumed in an `Async-Await` fashion. Leveraging [Async-Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) over [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)/Callbacks eases the error handling by allowing `try-catch` blocks. Furthermore, when using Promise-Chains it is easy to  forget the `.catch` statement and only handle the happy path with `.then`. Resulting in unhandled promise rejections, without any logging insights, which usually manifests as a timeout error (as the callback never gets called). Additionally, it keeps the code shallow, avoiding deep nesting. This benefits the overall maintainability of functions.

For this reason we advice strongly to prefer Async/Await over Promises, thats also why most of our templates are especially designed to leverage `Async-Await`. However you will still need to utilize the `callback` passed  into the function to return a response for an invocation. This is demonstrated in the following example coding:

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

> The code above will lazy load two secrets, leveraging caching, to call a MTLS Endpoint. You can see proper error handling of errors returned by `client.get` and `Toolbelt.MTLSClient`. Finally the provided `callback` is called with a response or a failure, based on the occurrence of any error in the process.

### Secret Caching

Our [Secret store](liveperson-functions-foundations-features.html#secret-store) allows functions to fetch, store and modify credentials in a secure way. In productive use we strongly encourage caching the secret, loading it once, and then reusing it throughout the Lifecycle of a Function instance. Please see the code below for an example setup, which leverages local variables to achieve this. Be aware that this is only possible if the secrets are not getting modified and therefore are more or less static. For secrets like tokens, you can adjust the caching to reuse the token while it is still valid and not yet expired.

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

> The code above will check if the value already exists in the `secretCache` and if that's not the case will read it from the secret store. As the comment highlights, it is important that `secretCache` is outside of any function-scope in order to ensure it does not get cleaned up.

### Configuration of Functions using Environment Variables

We strongly recommend the usage of Environment Variables to make functions easier to configure, even for none technically people. Given they don't need to understand the code, but only adjust environment variables if needed. This also allows you to make the code cleaner by moving the configuration part into environment variables. If you want to learn more about the Environment Variables setup head over [here](liveperson-functions-getting-started-configure.html#environment-variables).

{:.notice}
Environment Variables changes need to be deployed in order to take effect. And Environment Variables are always a string, meaning you need to parse any none string type prior to using it

### Design your function to be idempotent

As documented in our [Event Source Page](liveperson-functions-event-sources-overview.html) some of the Event Sources will actively react to errors raised by your function. And reinvoke your function with the same event/payload following at least one approach. Usually, functions will be triggered only once, but they can also be invoked multiple times. Therefore you should design your function in such a way that a retry won't have negative side effects or cause unexpected behavior on your side.

How this is achieved is highly linked to your actual use-case and might involve additional API-calls to verify the state prior to performing an action. You may also leverage the Context Session Store to save information that allows you to determine if a process was already performed or not.

### Avoid (CPU) blocking code

As our functions are based on NodeJS they leverage only one thread for execution, as this is how NodeJs was designed. There is also official [documentation](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/) available from NodeJS that highlight blocking code/libraries.

The issue is if you block the CPU or the Event Loop, this may cause the ongoing Request to be halted resulting in a delay. Which may increase the overall response time and in the worst-case exceed the execution timeout yielding an error. Especially cryptographic operations fall into this area.
